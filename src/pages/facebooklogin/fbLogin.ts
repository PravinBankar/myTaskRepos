import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
@Component({
  selector: 'page-fbLogin',
  templateUrl: 'fbLogin.html'
})
export class FBLoginPage {

  public faceBook:Facebook;
  constructor(public navCtrl: NavController,private fb: Facebook) {
  		this.faceBook=fb;
  		
  }

fbLogin(){
		this.faceBook.login(['public_profile', 'user_friends', 'email'])
				  .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
				  .catch(e => console.log('Error logging into Facebook', e));
	}
}
