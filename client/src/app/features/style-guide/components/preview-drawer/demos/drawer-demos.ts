import { Component, Type, computed, inject } from '@angular/core';
import { Store as AppStore } from '@app-store';
import { SharedModule } from '@shared-module';

@Component({
    selector: 'empty-drawer',
    imports: [SharedModule],
    template: `
    <svg class="m-auto" width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path></svg>
    <div class="flex flex-column align-items-center py-3">
        <div class="">
            <span class="uppercase">{{ selector() }}</span>
            <span class=""> drawer</span>
        </div>
        <div class="">
            <span class="">not found :(</span>
        </div>
    </div>
    `,
    host: { class: 'flex flex-column' }
})
export class EmptyDrawer {
    private readonly _appStore = inject(AppStore);
    readonly selector = computed(() => this._appStore.activeName());
}

@Component({
    selector: 'accordion-drawer',
    imports: [SharedModule],
    template: `
    <p-accordion value="0" class="w-full max-w-md">
        <p-accordion-panel value="0">
            <p-accordion-header>What is this service about?</p-accordion-header>
            <p-accordion-content>
                <p class="m-0 text-sm">This service helps you manage your projects more efficiently by offering real-time collaboration, task tracking, and powerful analytics.</p>
            </p-accordion-content>
        </p-accordion-panel>
        <p-accordion-panel value="1">
            <p-accordion-header>Is my data secure?</p-accordion-header>
            <p-accordion-content>
                <p class="m-0 text-sm">Yes. We use end-to-end encryption and follow industry best practices to ensure your data is protected. Your information is stored on secure servers and regularly backed up.</p>
            </p-accordion-content>
        </p-accordion-panel>
        <p-accordion-panel value="2">
            <p-accordion-header>Can I upgrade or downgrade my plan later?</p-accordion-header>
            <p-accordion-content>
                <p class="m-0 text-sm">Absolutely. You can change your subscription plan at any time from your account settings. Changes take effect immediately, and any billing adjustments are handled automatically.</p>
            </p-accordion-content>
        </p-accordion-panel>
    </p-accordion>
    `,
})
export class AccordionDrawer {
}

interface Command {
    label: string;
    shortcut: string;
}
interface Technology {
    label: string;
    value: string;
}
interface TechCategory {
    label: string;
    code: string;
    items: Technology[];
}
@Component({
    selector: 'autocomplete-drawer',
    imports: [SharedModule],
    template: `
    <div class="w-full">
        <div class="px-2"><span class="">Basic</span></div>
        <p-autocomplete [(ngModel)]="selectedCommand" [suggestions]="filteredCommands" (completeMethod)="searchBasic($event)" optionLabel="label" placeholder="Type a command..." class="w-full" inputStyleClass="w-full" scrollHeight="14rem" />
    </div>
    <div class="w-full">
        <div class="px-2"><span class="">Dropdown</span></div>
        <p-autocomplete [(ngModel)]="value" [dropdown]="true" [suggestions]="items" (completeMethod)="searchDropdown($event)" class="w-full" inputStyleClass="w-full" scrollHeight="14rem" />
    </div>
    <div class="w-full">
        <div class="px-2"><span class="">Group</span></div>
            <p-autocomplete
                [(ngModel)]="selectedTech"
                [group]="true"
                [suggestions]="filteredGroups"
                (completeMethod)="searchGroup($event)"
                optionLabel="label"
                optionGroupLabel="label"
                optionGroupChildren="items"
                placeholder="Search technologies..."
                class="w-full"
                inputStyleClass="w-full"
                scrollHeight="14rem"
            />
    </div>
    `,
    host: { class: 'flex flex-column gap-3 w-full' }
})
export class AutoCompleteDrawer {
    selectedCommand: Command | undefined;
    filteredCommands: Command[] = [];
    commands: Command[] = [
        { label: 'New File', shortcut: '⌘N' },
        { label: 'Open File', shortcut: '⌘O' },
        { label: 'Save', shortcut: '⌘S' },
        { label: 'Save As', shortcut: '⇧⌘S' },
        { label: 'Find', shortcut: '⌘F' },
        { label: 'Replace', shortcut: '⌘H' },
        { label: 'Go to Line', shortcut: '⌘G' },
        { label: 'Toggle Sidebar', shortcut: '⌘B' },
        { label: 'Split Editor', shortcut: '⌘\\' },
        { label: 'Close Tab', shortcut: '⌘W' }
    ];
    searchBasic(event: any) {
        const query = event.query.toLowerCase();
        this.filteredCommands = query ? this.commands.filter((cmd) => cmd.label.toLowerCase().includes(query)) : [...this.commands];
    }
    //
    items: string[] = [];
    value: any;
    searchDropdown(event: any) {
        this.items = event.query ? [...new Array(10).keys()].map((item) => event.query + '-' + item) : [...Array(10).keys()].map(String);
    }
    //
    selectedTech: any;
    filteredGroups: TechCategory[] = [];
    techStack: TechCategory[] = [
        {
            label: 'Frontend',
            code: 'FE',
            items: [
                { label: 'React', value: 'react' },
                { label: 'Vue', value: 'vue' },
                { label: 'Angular', value: 'angular' },
                { label: 'Svelte', value: 'svelte' }
            ]
        },
        {
            label: 'Backend',
            code: 'BE',
            items: [
                { label: 'Node.js', value: 'nodejs' },
                { label: 'Python', value: 'python' },
                { label: 'Java', value: 'java' },
                { label: 'Go', value: 'go' }
            ]
        },
        {
            label: 'Database',
            code: 'DB',
            items: [
                { label: 'PostgreSQL', value: 'postgresql' },
                { label: 'MongoDB', value: 'mongodb' },
                { label: 'Redis', value: 'redis' },
                { label: 'MySQL', value: 'mysql' }
            ]
        }
    ];
    searchGroup(event: any) {
        const query = event.query.toLowerCase();
        const filtered: TechCategory[] = [];
        for (const category of this.techStack) {
            const filteredItems = query ? category.items.filter((item) => item.label.toLowerCase().includes(query)) : category.items;

            if (filteredItems.length) {
                filtered.push({ ...category, items: filteredItems });
            }
        }
        this.filteredGroups = filtered;
    }
}

@Component({
    selector: 'avatar-drawer',
    imports: [SharedModule],
    template: `
    <div class="w-full">
        <div class="px-2"><span class="">Basic</span></div>
        <div class="flex items-center justify-center gap-4">
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" size="large" shape="circle" />
        </div>
    </div>
    <div class="w-full">
        <div class="px-2"><span class="">Image</span></div>
        <div class="flex items-center justify-center gap-4">
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" size="large" shape="circle" />
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png" size="large" shape="circle" />
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" size="large" shape="circle" />
        </div>
    </div>
    <div class="w-full">
        <div class="px-2"><span class="">Badge</span></div>
        <div class="flex items-center justify-center gap-8">
            <p-overlay-badge value="2" badgeSize="small" severity="success">
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" size="large" shape="circle" />
            </p-overlay-badge>
            <p-overlay-badge severity="danger">
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/walter.jpg" size="large" />
            </p-overlay-badge>
        </div>
    </div>
    <div class="w-full">
        <div class="px-2"><span class="">Shape</span></div>
        <div class="flex items-center justify-center gap-4">
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/walter.jpg" shape="circle" size="large" />
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/walter.jpg" shape="square" size="large" />
        </div>
    </div>
    <div class="w-full">
        <div class="px-2"><span class="">Sizes</span></div>
        <div class="flex flex-column align-items-center gap-4">
            <div class="flex align-items-center justify-items-center gap-4">
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" size="large" />
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" size="xlarge" />
            </div>
            <div class="flex align-items-center justify-items-center gap-4">
                <p-avatar label="AB" shape="circle" />
                <p-avatar label="AB" shape="circle" size="large" />
                <p-avatar label="AB" shape="circle" size="xlarge" />
            </div>
        </div>
    </div>
    <div class="w-full">
        <div class="px-2"><span class="">AvatarGroup</span></div>
        <div class="flex justify-center">
            <p-avatar-group>
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png" shape="circle" />
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" shape="circle" />
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png" shape="circle" />
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png" shape="circle" />
                <p-avatar label="+2" shape="circle" />
            </p-avatar-group>
        </div>
    </div>
    `,
    host: { class: 'flex flex-column gap-5' },
})
export class AvatarDrawer {
}

@Component({
    selector: 'test-drawer',
    imports: [SharedModule],
    template: `
    <div class="w-full">
        <div class="px-2"><span class=""></span></div>
        <!--  -->
    </div>
    `,
    host: { class: 'flex flex-column gap-3' },
})
export class TestDrawer {
}

@Component({
    selector: 'input-text-drawer',
    imports: [SharedModule],
    template: `
        @let value1 = 'Value1';
        <input pInputText [value]="value1" />
    `,
})
export class InputTextDrawer {
}

/** Демо-контент drawer'а по имени компонента (COMPONENT_ITEMS.name). */
interface IDrawerDemo {
    readonly header: string;
    readonly component: Type<unknown>;
    readonly styleClass?: string;
}
// export const DRAWER_DEMOS: Record<string, Type<unknown>> = {
export const DRAWER_DEMOS: Record<string, IDrawerDemo> = {
    empty: { component: EmptyDrawer, header: 'Empty Drawer', styleClass: 'flex justify-content-center align-items-center' },
    accordion: { component: AccordionDrawer, header: 'Accordion', },
    autocomplete: { component: AutoCompleteDrawer, header: 'Autocomplete', },
    avatar: { component: AvatarDrawer, header: 'Avatar', },
    //
    inputtext: { component: InputTextDrawer, header: 'Input Text', },
};
