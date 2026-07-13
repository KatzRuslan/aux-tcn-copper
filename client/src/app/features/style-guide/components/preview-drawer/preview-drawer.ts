import { Component, Type, computed, effect, inject, resource, signal, viewChild, ViewContainerRef } from '@angular/core';
// import { NgComponentOutlet } from '@angular/common';
import { SharedModule } from '@shared-module';
import { RUNTIME_TEMPLATE_IMPORTS } from '@shared/runtime-template-imports';
import { Store } from '@style-guide-store';

/** Контекст рантайм-шаблона из .drawer.json: данные + обработчики. */
interface IDrawerContext {
    vmodel: Record<string, any>;
    methods: Record<string, (...d: any[]) => void>;
}

/** Кэш скомпилированных рантайм-шаблонов (ключ — styleClass|template).
 *  Живёт на уровне модуля: PreviewDrawer пересоздаётся при смене секции,
 *  а повторная компиляция того же шаблона — это секунды блокировки + NG0912. */
const COMPILED_TEMPLATES = new Map<string, Type<IDrawerContext>>();

@Component({
    selector: 'preview-drawer',
    imports: [SharedModule],//, NgComponentOutlet
    templateUrl: './preview-drawer.html',
    styleUrl: './preview-drawer.scss',
})
export class PreviewDrawer {
    readonly store = inject(Store);
    readonly drawerhost = viewChild('drawerhost', { read: ViewContainerRef });
    readonly header = signal('');
    readonly active = computed(() => this.store.vmDrawer().active);
    readonly isAvailable = computed(() => this.store.vmDrawer().isAvailable);
    readonly isBookmarked = computed(() => this.store.vmDrawer().isBookmarked);
    readonly defaultStyleClass = 'flex flex-column gap-3 px-2';
    // /** Карта демо грузится отдельным чанком, чтобы не тянуть все примеры в стартовый бандл. */
    // private readonly _demos = resource({
    //     loader: () => import('./demos/drawer-demos').then(({ DRAWER_DEMOS }) => DRAWER_DEMOS),
    // });
    // readonly drawer = computed(() => {
    //     const demos = this._demos.value();
    //     return demos ? demos[this.active()] ?? demos['empty'] : null;
    // });
    // D:\projects\aux-tcn-copper\public\drawers/inputnumber.drawer
    readonly drawer = resource({
        params: () => this.active() || undefined, // undefined → загрузка пропускается (разделы без drawer'а)
        loader: async ({ params }) => {
            await import('@angular/compiler'); // JIT-компилятор — ленивым чанком, не в стартовом бандле
            return globalThis.runElectronCommand<any>('read-data', { target: `drawers/${params}.drawer` });
        }
    })
    constructor() {
        effect(() => {
            const vcr = this.drawerhost();
            vcr?.clear();
            // пока loader не завершился, JIT-компилятор ещё не подгружен — компилировать нечем
            if (!vcr || this.drawer.isLoading()) { return; }
            // нет активного компонента (уходим на другой раздел) — drawer не нужен, не компилируем зря
            if (!this.active()) { return; }
            // ВАЖНО: фолбэк — статическая строка (динамика через vmodel), иначе каждый вариант
            // компилируется заново со scope'ом всего SharedModule — это секунды блокировки
            const { template, header, styleClass, data } = this.drawer.value() ?? {
                header: 'Not Found',
                data: { name: this.active() },
                styleClass: 'flex flex-column w-full h-full justify-content-center align-items-center',
                template: `
                <div class="flex flex-column justify-content-center align-items-center gap-3">
                    <svg class="m-auto" width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path></svg>
                    <div class="flex flex-column align-items-center pb-8">
                        <div class="">
                            <span class="uppercase">{{ vmodel['name'] }}</span>
                            <span class=""> drawer</span>
                        </div>
                        <div class="" (click)="methods['test2']()">
                            <span class="">not found :(</span>
                        </div>
                    </div>
                </div>
                `
            };
            this.header.set(header);
            const cacheKey = `${styleClass ?? ''}|${template}`;
            let cmp = COMPILED_TEMPLATES.get(cacheKey);
            if (!cmp) {
                // ВАЖНО: только standalone-импорты — NgModule-скоупы вырезаны из AOT-бандла (см. runtime-template-imports)
                cmp = Component({ template, imports: RUNTIME_TEMPLATE_IMPORTS, host: { class: styleClass ?? '' } })(
                    class {
                        vmodel: Record<string, any> = {};
                        methods: Record<string, (...d: any) => void> = {};
                    }
                );
                COMPILED_TEMPLATES.set(cacheKey, cmp);
            }
            const ref = vcr.createComponent(cmp);
            ref.instance.vmodel = structuredClone(data ?? {});
            // обычные функции (не стрелки!) + bind: this внутри — инстанс рантайм-компонента
            const methods: Record<string, (this: IDrawerContext, ...d: any[]) => void> = {
                test(d: any) {
                    console.log(d);
                    console.log(this.vmodel); // данные текущего drawer'а
                },
                test2() {
                    console.log('*1***********');
                    console.log(this); // ref.instance
                },
            };
            Object.keys(methods).forEach(key => methods[key] = methods[key].bind(ref.instance));
            ref.instance.methods = methods;
        });
    }
}
