import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Store as AppStore } from '@app-store';
// import { Store as SettingsStore } from '@settings-store';
import { Store as StyleGuidStore } from '@style-guide-store';
import { Observable } from 'rxjs';
import { environment } from '@environments';
import { COMPONENT_ITEMS } from '@seed';
import { IConfigurations } from '@interfaces';

declare global {
    var runElectronCommand: <T>(command: string, args: object) => Promise<T>;
    var electronAPI: {
        runCommand: (payload: any) => Promise<unknown>;
    };
    interface Window {
        electronAPI: {
            runCommand: (payload: any) => Promise<unknown>;
        };
    }
}

function initialize() {
    globalThis.runElectronCommand = <T>(command: string, args: object) => {
        return (globalThis.electronAPI.runCommand({ command, args }) as unknown as Promise<{ data: T }>).then(({ data }) => data);
    }
}

export async function load() {
    const appStore = inject(AppStore);
    const styleGuidStore = inject(StyleGuidStore);
    // const settingsStore = inject(SettingsStore);
    // const config = await (globalThis as any).electronAPI.getConfig();
    // if (config.tokenUri) {
    //     settingsStore.putTokenUri(config.tokenUri);
    // }
    // if (config.serverUrl) {
    //     environment.production = false;
    //     settingsStore.putServerUrl(config.serverUrl);
    // }
    // if (config.owner) {
    //     settingsStore.putOwner(config.owner);
    // }
    // const jwt = config.jwt ? config.jwt : await fetch(settingsStore.tokenUri()).then(res => res.text()).then(token => `Bearer ${token}`);
    // appStore.putAuthorization(jwt);
    // console.log('*')
    initialize();
    const configurations = await globalThis.runElectronCommand<IConfigurations>('read-data', {target: 'configurations'});
    // console.log(configurations)
    styleGuidStore.initStore();
    return true;
}

export function interceptor(request: HttpRequest<unknown>,next: HttpHandlerFn,): Observable<HttpEvent<unknown>> {
    // const appStore = inject(AppStore);
    // return next(request.clone({ url: `${appStore.baseUrl()}/${request.url}`, setHeaders: appStore.getHttpHeaders()}));
    return next(request.clone({}));
}

export const navigationResolver: ResolveFn<void> = ({ data, params }: ActivatedRouteSnapshot) => {
    let { state, header } = data;
    let name = `${state}`;
    if (state === 'component-settings') {
        name = params['name'];
        const { title } = COMPONENT_ITEMS.find(({ name }) => name === state) ?? { title: 'Unknown'};
        header = `${title} Component`;
    }
    const store = inject(AppStore);
    store.onNavigation(state, header, name);
};
