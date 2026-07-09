import {  } from '@interfaces';

export interface ISettingsSlice {
    readonly colorIdenifier: {
        readonly skeleton: string;
        readonly implant: string;
        readonly measurement: string;
        readonly treated: string;
        readonly contralateral: string;
    };
    readonly textFramingSpaces: {
        readonly xspace: number;
        readonly yspace: number;
    };
    readonly tokenUri: string;
    readonly darkMode: boolean;
};

export const initialSettingsSlice: ISettingsSlice = {
    colorIdenifier: {
        skeleton: '#1d1d1b',
        implant: '#4dc7ff',
        measurement: '#cd4a9b',
        treated: '#00ff6d',
        contralateral: '#148282'
    },
    textFramingSpaces: {
        xspace: 5,
        yspace: -2
    },
    tokenUri: 'http://localhost:5011/auth',
    darkMode: false
};
