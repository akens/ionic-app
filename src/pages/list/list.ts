import { Component } from '@angular/core';
import {LoadingController, NavController, ToastController} from 'ionic-angular';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {HttpService} from "../../utils/HttpService";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers:[HttpService]
})
export class ListPage {
   loading;
  constructor(
    public navCtrl: NavController,
    public loadingCtrl:LoadingController,
    public toastCtrl:ToastController,
    public httpService:HttpService) {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  }

  loginClick(){
    this.loading.present();
    let body = {user_phone:'13588048587',user_pwd:'a88811523'};
    let url = "http://isz.ishangzu.com/isz_base/LoginController/platformLogin.action";
    // this.httpService.httpPostNoAuth(url,body).then(response=>{
    //   console.log(response);
    //   this.loading.dismiss();
    // }).catch(err=>{
    //   console.error(err);
    //   this.loading.dismiss();
    // });
  }
}
