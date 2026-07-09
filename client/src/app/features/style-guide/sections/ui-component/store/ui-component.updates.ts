import { PartialStateUpdater } from '@ngrx/signals';
import { IUiComponentSlice } from './ui-component.slice';
import { IUiComponentScheme, IUiComponentSet } from '@interfaces';

export function initUiComponentStore(schemes: IUiComponentScheme[], components: IUiComponentSet[]): PartialStateUpdater<IUiComponentSlice> {
	return _ => ({ schemes, components });
};
