import { ApplicationConfig, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './app.routes';

import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { providePrimeNG } from 'primeng/config';
import { definePreset } from '@primeuix/themes';
import preset from '@tcn-preset';
import Aura from '@primeuix/themes/aura';

import { load, interceptor } from '@helpers/initializer.helper';
import { environment } from '@environments';

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideHttpClient(withInterceptors([interceptor])),
        provideAppInitializer(load),
        provideRouter(routes, withHashLocation()),
        providePrimeNG({
            theme: {
                // preset: Aura,
                preset: definePreset(Aura, preset),
                options: {
                    darkModeSelector: '.dark'
                }
            },
            license: `${environment.primeNgLicenseKey}`
        }),
        DialogService,
        ConfirmationService,
        MessageService,
    ]
};
