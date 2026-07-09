import { IUiComponentScheme, IUiComponentSet } from '@interfaces';

export interface IUiComponentSlice {
    readonly schemes: IUiComponentScheme[];
    readonly components: IUiComponentSet[];
};

export const initialUiComponentSlice: IUiComponentSlice = {
    schemes: [],
    components: [],
};
