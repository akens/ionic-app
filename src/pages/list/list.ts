import { Component } from '@angular/core';
import {LoadingController, NavController, ToastController} from 'ionic-angular';
import {Http, Response, Headers, RequestOptions, ConnectionBackend} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {HttpService} from "../../utils/HttpService";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers:[HttpService]
})
export class ListPage {
  constructor(
    public navCtrl: NavController,
    public loadingCtrl:LoadingController,
    public toastCtrl:ToastController,
    private httpService:HttpService) {

  }

  loginClick(){
    let loading = this.loadingCtrl.create({
      content: '登录中...'
    });
    loading.present();
    let body = {user_phone:'13588048587',user_pwd:'a88811523'};
    let url = "http://192.168.0.199/isz_base/LoginController/platformLogin.action";

    this.httpService.httpPostNoAuth(url,body).then(response=>{
      loading.dismiss();
      console.log("结果:");
      console.log(response);
      if(response.code == 0){
        this.toastCtrl.create({
          message: "登陆成功",
          duration: 3000
        }).present();
      }else{
        this.toastCtrl.create({
          message: "登陆失败",
          duration: 3000
        }).present();
      }
    }).catch(err=>{
      loading.dismiss();
      console.log("出错了:"+err);
      this.toastCtrl.create({
        message: err,
        duration: 3000
      }).present();
    });
  }
}
