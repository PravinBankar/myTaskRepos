import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Component({
  selector: 'page-register',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

 
  public database:SQLiteObject;
		info={
			name:'',
			address:'',
			dob:'',
			mobileNo1:'',
			mobileNo2:''
		   };

		infoList:string	[]=[];  
		mbileNoCnt:number=0; 
		

 constructor(public navCtrl: NavController, private platform: Platform,private sqlite: SQLite ) {
 			this.database=new SQLiteObject();

 			this.sqlite.create({
				  name: 'data.db',
				  location: 'default'
				}).then((db: SQLiteObject) => {

				  	
				  	this.database=db;
				  	console.log(db);
				  	console.log(JSON.stringify(this.database));
				    this.database.executeSql('create table registration(name VARCHAR(32),address VARCHAR(32),dateofbirth VARCHAR (30),mobileNo(30))', {})
				      .then((data) => console.log('Executed SQL'+data))
				      .catch(e => console.log(e));


				  })
				  .catch(e => console.log(e));
 					console.log(this.database);
}
registerForm(infoUser){
				let mobileNo=infoUser.mobileNo1+','+infoUser.mobileNo2;

			  		this.infoList.push({fullName: infoUser.name, Address: infoUser.address,dateofbirth:infoUser.dob,mobileNo:mobileNo});
			  		
					
				 this.database.executeSql("INSERT INTO registration (name, address,dateofbirth,mobileNo) VALUES ('"+infoUser.name+"', '"+infoUser.address+"','"+infoUser.dob+"','"+mobileNo+"')", []).then((data) => {
				            console.log("INSERTED: " + JSON.stringify(data));
				            alert(JSON.stringify(data));

				        }, (error) => {
				            console.log("ERROR: " + JSON.stringify(error.err));
				        });

						/* this.database.executeSql("INSERT INTO registration (name, address,dateofbirth,mobileNo) VALUES ('Pravin', 'Pune','11/05/1991','9767624864')", []).then((data) => {
				            console.log("INSERTED: " + JSON.stringify(data));
				            alert(JSON.stringify(data));

				        }, (error) => {
				            console.log("ERROR: " + JSON.stringify(error.err));
				        });*/
				  this.database.executeSql("SELECT * FROM registration", []).then((data) => {
			           
			           if(data.rows.length > 0) {
			               for(var i = 0; i < data.rows.length; i++) {
			                   this.infoList.push({fullName: data.rows.item(i).name, Address: data.rows.item(i).address,dateofbirth:data.rows.item(i).dateofbirth,mobileNo:data.rows.item(i).mobileNo});
			                 }
			           }
			       }, (error) => {
			           console.log("ERROR: " + JSON.stringify(error));
			       });

}
addMobileNo(){
  	this.mbileNoCnt++;
  }

}
