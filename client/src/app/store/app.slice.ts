import { INotification } from '@interfaces';
export interface IAppSlice {
    readonly aciveState: string;
    readonly aciveHeader: string;
    readonly activeName: string;
    readonly notifications: INotification[];
};

export const initialAppSlice: IAppSlice = {
    aciveState: '',
    aciveHeader: '',
    activeName: '',
    notifications: []
};
