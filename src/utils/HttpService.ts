import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';


@Injectable()
export class HttpService {
  myInfoLocal: any;
  local: Storage;
  constructor(
    private http: Http) {
    //this.local = new Storage(LocalStorage);
  }

  public httpGetWithAuth(url: string) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, options).toPromise()
      .then(res => res.json())
      .catch(err => {
        this.handleError(err);
      });
  }
  public httpGetNoAuth(url: string) {

    var headers = new Headers();
    headers.append("Access-Control-Allow-Origin","*");
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, options).toPromise()
      .then(res => res.json())
      .catch(err => {
        this.handleError(err);
      });
  }
  public httpPostNoAuth(url: string, body: any) {
    var headers = new Headers();
    headers.append("Access-Control-Allow-Origin","*");
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, body, options).toPromise()
      .then(res => res.json())
      .catch(err => {
        this.handleError(err);
      });
  }
  // public httpPostWithAuth(body: any, url: string) {

  //     return this.myInfoLocal = this.local.getJson('UserInfo')
  //         .then((result) => {
  //             var headers = new Headers();
  //             headers.append('Content-Type', 'application/json');
  //             headers.append('Authorization', result.ID + '-' + result.UserToken);
  //             let options = new RequestOptions({ headers: headers });
  //             return this.http.post(url, body, options).toPromise();
  //         });
  // }


  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json());
  }
}
