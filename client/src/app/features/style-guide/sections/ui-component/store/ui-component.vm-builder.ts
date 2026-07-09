import { IUiComponentScheme, IUiComponentSet } from '@interfaces';

export function vmodel(state: string, name: string, components: IUiComponentSet[], schemes: IUiComponentScheme[]) {
    const { data, css } = components.find(node => node.name === name) ?? {};
    const scheme = schemes.find(node => node.name === name)?.data ?? [];
	return {
        name, css, form: data, scheme
    };
}
