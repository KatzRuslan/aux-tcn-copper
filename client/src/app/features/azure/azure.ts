import { Component, Injector, ElementRef, signal, inject, computed, afterNextRender, viewChild } from '@angular/core';
import { form, FormField, required, submit } from '@angular/forms/signals';
import { Store } from './store/azure.store';
import { SharedModule } from '@shared-module';
import { copyToClipboard as CopyToClipboard } from '@app-helper';
import { WorkItemType } from '@enums';

interface IAzureForm {
    requirement: string | any; // nosonar (it will need to be repaired)
    task: string | any; // nosonar (it will need to be repaired)
    bug: string | any; // nosonar (it will need to be repaired)
}

@Component({
    selector: 'azure',
    imports: [SharedModule, FormField],
    templateUrl: './azure.html',
    styleUrl: './azure.scss',
    host: {
        '(window:resize)': '_calculateAcPt()',
        class: 'flex flex-column p-4 w-full h-full overflow-x-hidden overflow-y-auto'
    },
})
export default class Azure {
    readonly store = inject(Store);
    readonly modeType = WorkItemType;
    readonly formModel = signal<IAzureForm>({ requirement: null, task: null, bug: null });
    readonly formGroup = form<IAzureForm>(this.formModel);
    readonly requirementValue = computed(() => this.formGroup().value().requirement);
    readonly taskValue = computed(() => this.formGroup().value().task);
    readonly bugValue = computed(() => this.formGroup().value().bug);
    readonly requirementSuggestions = computed(() => {
        const requirement = this.requirementValue();
        if (requirement?.length) {
            return this.store.vmWorkItems().requirements.filter(value => this._filterFunction(requirement, value));
        }
        return this.store.vmWorkItems().requirements;
    });
    readonly taskSuggestions = computed(() => {
        const task = this.taskValue();
        if (task?.length) {
            return this.store.vmWorkItems().tasks.filter(value => this._filterFunction(task, value));
        }
        return this.store.vmWorkItems().tasks;
    });
    readonly bugSuggestions = computed(() => {
        const bug = this.bugValue();
        if (bug?.length) {
            return this.store.vmWorkItems().bugs.filter(value => this._filterFunction(bug, value));
        }
        return this.store.vmWorkItems().bugs;
    });
    readonly ac = viewChild('ac', { read: ElementRef });
    readonly acPassThrough = signal({ overlay: { style: { maxWidth: '100%', minWidth: '100%' } } });
    private readonly _initAcPt = afterNextRender(() => this._calculateAcPt());
    _partition(target: string) {
        const [, digits, text] = new RegExp(/^(.*?)-\s*(.*)$/).exec((target ?? '').toLowerCase()) ?? ['', '', ''];
        return { digits: digits.trim(), text: text.trim() }
    }
    _filterFunction(source: string, target: string) {
        const { digits, text } = this._partition(target.toLowerCase());
        return digits.startsWith(source) || text.includes(source);
    }
    _calculateAcPt() {
        const { width } = this.ac()!.nativeElement.getBoundingClientRect();
        this.acPassThrough.update(current => ({
            ...current,
            overlay: {
                ...current.overlay,
                style: {
                    ...current.overlay.style,
                    maxWidth: `${width}px`,
                    minWidth: `${width}px`,
                }
            }
        }));
    }
    readonly branchName = computed(() => {
        const branchName: string[] = [];
        let { requirement, task, bug } = this.formGroup().value();
        if (requirement?.length) {
            let { digits, text } = this._partition(requirement);
            text = (text?.length ? text : requirement) ?? '';
            requirement = [digits, text.replaceAll(' - ', ' ').replaceAll(' ', '-')].filter(value => value).join('-');
            branchName.push('requirement', requirement);
            if (this.store.mode() === WorkItemType.TASK && task?.length) {
                let { digits, text } = this._partition(task);
                text = (text?.length ? text : task) ?? '';
                task = [digits, text.replaceAll(' - ', ' ').replaceAll(' ', '-')].filter(value => value).join('-');
                branchName.push('task', task);
            } else if (this.store.mode() === WorkItemType.BUG && bug?.length) {
                let { digits, text } = this._partition(bug);
                text = (text?.length ? text : bug) ?? '';
                bug = [digits, text.replaceAll(' - ', ' ').replaceAll(' ', '-')].filter(value => value).join('-');
                branchName.push('bug', bug);
            } else {
                branchName.length = 0;
            }
        }
        return branchName.length ? branchName.join('/') : '';
    });
    copyToClipboard(branchname: string) {
        CopyToClipboard(branchname, 'branchname');
    }
}
