export interface ICommonSettings {
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
    readonly searcherBookmarks: [];
}
