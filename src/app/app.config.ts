import { environment } from '../environments/environment';

export class AppOptions {
    apiOrigin: string;
}

let config = new AppOptions();

if (!environment.production) {
    config.apiOrigin = 'http://172.19.3.132:8082/';
}

if (environment.production) {
    config.apiOrigin = 'http://172.19.3.132:8082/';
}

export function AppConfig() {
    return config;
}