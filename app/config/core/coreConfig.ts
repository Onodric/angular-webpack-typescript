import { ILocationProvider } from 'angular';
import { UrlRouter } from '@uirouter/core/lib/url/urlRouter';
// import {} from '@uirouter/angularjs';

export function config($urlRouterProvider: UrlRouter, $locationProvider: ILocationProvider) {
    'ngInject'; // needed when directly exporting a class or function
    if (ON_PROD) {
        $locationProvider.html5Mode(true);
    }
    $urlRouterProvider.otherwise('/');
}
