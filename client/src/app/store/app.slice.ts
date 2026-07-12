import {  } from '@interfaces';
export interface IAppSlice {
    readonly aciveState: string;
    readonly aciveHeader: string;
    readonly activeName: string;
    readonly notifications: string[];
};

export const initialAppSlice: IAppSlice = {
    aciveState: '',
    aciveHeader: '',
    activeName: '',
    notifications: []
};
