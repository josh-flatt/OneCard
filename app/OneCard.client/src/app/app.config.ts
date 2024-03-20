import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(
      AuthModule.forRoot({
        domain: 'dev-b2u0yo3kfh8arlw6.us.auth0.com',
        clientId: 'JT606XVyiIGt0E2XEsS1C5xp479ITc2z',
        authorizationParams: {
          redirect_uri: window.location.origin
          // redirect_uri: 'https://localhost:4020'
        },
      }),
    ),

  ]
};
