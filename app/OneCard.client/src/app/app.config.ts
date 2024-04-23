import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
// import { provideClientHydration } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // provideClientHydration(),
    provideHttpClient(),
    FormsModule,
    importProvidersFrom(
      AuthModule.forRoot({
        domain: 'dev-b2u0yo3kfh8arlw6.us.auth0.com',
        clientId: 'JT606XVyiIGt0E2XEsS1C5xp479ITc2z',
        authorizationParams: {
          redirect_uri: window.location.origin
        },
      }),
    ),

  ]
};
