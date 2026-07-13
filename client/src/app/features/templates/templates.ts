import { Component, computed } from '@angular/core';
import { SharedModule } from '@shared-module';
import templateSource from './templates.html';
import { copyToClipboard } from '@app-helper';

/** Вырезает блок между маркерами source-start/source-end из сырого текста шаблона и убирает общий отступ. */
function extractSource(raw: string): string {
    const START = '<!-- source-start -->';
    const END = '<!-- source-end -->';
    const from = raw.indexOf(START);
    const to = raw.indexOf(END, from + START.length);
    if (from < 0 || to < 0) { return ''; }
    const lines = raw.slice(from + START.length, to).split('\n').map(line => line.trimEnd());
    while (lines.length && !lines[0]) { lines.shift(); }
    while (lines.length && !lines.at(-1)) { lines.pop(); }
    if (!lines.length) { return ''; }
    const indent = Math.min(...lines.filter(Boolean).map(line => /^[ \t]*/.exec(line)![0].length));
    return lines.map(line => line.slice(indent)).join('\n');
}

@Component({
    selector: 'templates',
    imports: [SharedModule],
    templateUrl: './templates.html',
    styleUrl: './templates.scss',
    host: { class: 'flex gap-3 w-full h-full overflow-hidden' },
})
export default class Templates {
    readonly vmodel: Record<string, any> = {
        severities: [
            { value: 'primary', label: 'Primary' },
            { value: 'secondary', label: 'Secondary' },
            { value: 'success', label: 'Success' },
            { value: 'info', label: 'Info' },
            { value: 'warn', label: 'Warn' },
            { value: 'help', label: 'Help' },
            { value: 'danger', label: 'Danger' },
            { value: 'contrast', label: 'Contrast' },
        ],
        selectedSeverity: { value: 'primary', label: 'Primary' },
        raised: false,
        rounded: false,
        link: false,
        variant: null,
        disabled: false,
    };
    readonly methods: Record<string, (...d: any) => void> = {};
    /** Исходник блока #source — буквально те же строки файла, что компилирует Angular. */
    readonly sourceHtml = computed(() => extractSource(templateSource));
    copyClipboard({ ctrlKey }: MouseEvent) {
        console.log(ctrlKey)
        copyToClipboard(JSON.stringify(ctrlKey ? this.vmodel : this.sourceHtml().replaceAll('\n', '').replaceAll('  ', '')), 'aa')
    }
}

