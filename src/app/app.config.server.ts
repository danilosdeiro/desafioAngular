import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

// Não há mais necessidade de importar provideRouter ou serverRoutes aqui

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
    // Remova provideRouter(serverRoutes) daqui
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);