import {HomeService} from '../../services/HomeService';
import {StateProvider} from '@uirouter/angularjs/lib/stateProvider';

/**
 * ui-router homepage state
 * @param $stateProvider
 */

export function config($stateProvider: StateProvider): void {

    'ngInject'; // needed when directly exporting a class or function

    (<any>$stateProvider).state({
        name: 'homepage',
        url: '/',
        component: 'homepage',
        resolve: {
            helloWorld: (HomeService: HomeService) => {
                return HomeService.getData();
            }
        }
    });
}
