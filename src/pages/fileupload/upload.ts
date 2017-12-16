import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import { Camera, CameraOptions } from '@ionic-native/camera';



@Component({
  selector: 'page-upload',
  templateUrl: 'fileupload.html'
})
export class UploadPage {

public fileChoose:FileChooser;
public cam:Camera;
base64Img:string;

constructor(private fileChooser: FileChooser,private camera: Camera) { 

this.fileChoose=fileChooser;
this.cam=camera;
}


 openFile(){
  		this.fileChoose.open()
			  .then(uri => console.log(uri))
			  .catch(e => console.log(e));
  }
  openCamera(){
  const options: CameraOptions = {
			  quality: 100,
			  destinationType: this.camera.DestinationType.DATA_URL,
			  encodingType: this.camera.EncodingType.JPEG,
			  mediaType: this.camera.MediaType.PICTURE
			}

 this.cam.getPicture(options).then((imageData) => {
			 // imageData is either a base64 encoded string or a file URI
			 // If it's base64:
			 let base64Image = 'data:image/jpeg;base64,' + imageData;
			 this.base64Img=base64Image;
			 //console.log(base64Image);
			}, (err) => {
			 // Handle error
			});
  }
}
