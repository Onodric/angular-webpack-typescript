import { IHttpService, ILogService } from 'angular';

export class HomeService {
    private http: ng.IHttpService;
    private log: ng.ILogService;

    constructor($http: IHttpService, $log: ILogService) {
        'ngInject';
        this.http = $http;
        this.log = $log;
    }

    public getData() : any {
        return {
            message: 'Hello World !'
        };
    }
}
