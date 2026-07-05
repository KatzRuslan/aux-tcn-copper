import { Component, signal } from '@angular/core';
import { SharedModule } from '@shared-module';
import { SEMANTIC_SCHEMA, FieldMeta, FieldType } from './semantic.schema';
import { CustomPreset, extractModel, applyFieldChange, refCandidates, resolvePreview, RefGroup } from './semantic.helper';

@Component({
    selector: 'semantic',
    imports: [SharedModule],
    templateUrl: './semantic.html',
    styleUrl: './semantic.scss',
    host: { class: 'flex flex-column w-full h-full overflow-auto p-3 gap-4' },
})
export default class Semantic {
    readonly groups = SEMANTIC_SCHEMA;

    /** накопленные оверрайды кастом-пресета (то, что «вставляем» и применяем) */
    readonly custom = signal<CustomPreset>({ semantic: {} });

    /** плоская signal-модель формы: { "primary.color": "{primary.500}", ... } */
    readonly model = signal<Record<string, string>>(extractModel(SEMANTIC_SCHEMA, this.custom()));

    /** кэш кандидатов-ссылок по типу */
    private readonly refsCache = new Map<FieldType, RefGroup[]>();

    candidatesFor(type: FieldType): RefGroup[] {
        if (!this.refsCache.has(type)) { this.refsCache.set(type, refCandidates(type)); }
        return this.refsCache.get(type)!;
    }

    /** превью-цвет разрешённого значения токена */
    preview(field: FieldMeta): string {
        return resolvePreview(this.model()[field.path] ?? '');
    }

    /** изменение поля → обновляем модель, пишем в кастом-пресет, применяем тему живьём */
    onChange(field: FieldMeta, value: string) {
        this.model.update(m => ({ ...m, [field.path]: value }));
        this.custom.update(c => applyFieldChange(c, field.path, value));
    }
    constructor() {
        setTimeout(() => {
            console.log('************')
            console.log(SEMANTIC_SCHEMA)
            console.log(this.groups)
            console.log(this.custom())
            console.log(this.model())
            console.log(this.refsCache)
        }, 840);
    }
}
