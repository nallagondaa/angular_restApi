import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import  {Observable} from  'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import { Team } from '../models/employee.model';

@Injectable()

export class TeamService {

  constructor(private _http: Http) { 

  }
  getData():Observable< Array<Team>> {  
    {
    return  this._http.get('https://h93rvy36y7.execute-api.us-east-1.amazonaws.com/teams')
      .map((res: Response) => res.json())
      .do(res => console.log("service",res));
    }
  }
}

