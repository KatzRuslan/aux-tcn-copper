import { PartialStateUpdater } from '@ngrx/signals';
import { IUiComponentSlice } from './ui-component.slice';
import { ICssOverrideItem, IUiComponentScheme, IUiComponentSet } from '@interfaces';

export function initUiComponentStore(schemes: IUiComponentScheme[], components: IUiComponentSet[]): PartialStateUpdater<IUiComponentSlice> {
	return _ => ({ schemes, components });
};
export function putUiComponent(name: string, data: Record<string, string>, css: ICssOverrideItem[]): PartialStateUpdater<IUiComponentSlice> {
	return store => ({
        components: store.components.map(component => component.name === name ? { name, data, css } : component)
    });
};
