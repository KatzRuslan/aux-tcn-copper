import { Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';
import { environment } from '@environments';
import { IConfirmDialog, IToastMessage } from '@interfaces';
import { Observable } from 'rxjs';
// import {  } from '@interfaces';

/**
 * ⚠️ Singleton helper context.
 *
 * Initialized once from AppStore `onInit`.
 * Assumes a single AppStore instance and
 * that initialization happens before any usage.
 *
 * Not intended for SSR or multiple store instances.
 */

interface IContext {
    readonly httpClient: HttpClient;
    readonly confirmationService: ConfirmationService;
    readonly messageService: MessageService;
}
let ctx!: IContext;
export function initAppHelperContext(context: IContext) {
    ctx = context;
}
//
export function showConfirmDialog({ header, message, accept, reject, acceptButtonProps, rejectButtonProps }: IConfirmDialog) {
    ctx.confirmationService.confirm({
        header, message,
        accept: () => { accept?.(); },
        acceptButtonProps: {
            label: 'OK',
            ...acceptButtonProps
        },
        reject: () => { reject?.(); },
        rejectButtonProps: {
            label: 'Close', severity: 'secondary', outlined: true,
            ...rejectButtonProps
        },
        acceptVisible: !!acceptButtonProps,
        rejectVisible: !!rejectButtonProps,
        closable: true,
        closeOnEscape: true,
    });
}
export function showToastMessages(messages: IToastMessage[]) {
    for (const { detail, severity, life, styleClass } of messages) {
        ctx.messageService.add({
            detail: detail ?? '',
            life: life ?? 6 * 1000,
            severity: severity ?? 'info',
            styleClass: styleClass ?? ''
        });
    }
}
export function copyToClipboard(copy: string, detail: string) {
    navigator
        .clipboard.writeText(copy)
        .then(() => showToastMessages([{
            detail: `"${detail}" was copied to clipboard`, severity: 'success'
        }]));
}
export function runElectronCommand(command: string, params?: any): Observable<any> {
    return new Observable(subscriber => {
        if (globalThis.electronAPI) {
            const payload = { command, args: params };
            globalThis.electronAPI.runCommand(payload)
                .then(({ success, data, error }: any) => {
                    if (success) {
                        subscriber.next(data);
                    } else {
                        subscriber.error({ message: error?.message ?? 'Unknown error'});
                    }
                    subscriber.complete();
                })
                .catch(err => {
                    subscriber.error(err);
                    subscriber.complete();
                });
        } else {
            subscriber.error({ message: 'Electron API not available' });
            subscriber.complete();
        }
    });
}
