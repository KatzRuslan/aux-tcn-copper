import { Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments';
import { IWorkItem } from '@interfaces';
// import {  } from '@interfaces';

/**
 * ⚠️ Singleton helper context.
 *
 * Initialized once from AzureStore `onInit`.
 * Assumes a single AzureStore instance and
 * that initialization happens before any usage.
 *
 * Not intended for SSR or multiple store instances.
 */

interface IContext {
    readonly httpClient: HttpClient;
}
let ctx!: IContext;
export function initAzureHelperContext(context: IContext) {
    ctx = context;
}
//
export async function getWorkItems (url: string): Promise<IWorkItem[]> {
    return fetch(url)
        .then(result => result.json())
        .then(({ fps }) => fps.dataProviders.data['ms.vss-work-web.new-work-items-hub-default-data-provider'].fieldValues)
        .then(list => list.map(({ data }: { data: (string | number)[]}) => {
            const [id, type, title] = data;
            return {
                id, type: `${type}`.toLowerCase(), title,
            }
        }))
        .catch(_ => {
            throw { header: 'Failed to fetch', message: 'Failed to fetch Azure data' };
        });
}
