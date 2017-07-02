import { Person } from './../../../person/person';
import { Component } from '@angular/core';
import { ViewController, IonicPage } from "ionic-angular";
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the AddPerson component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */

@IonicPage()
@Component({
	selector: 'add-person',
	templateUrl: 'add-person.html'
})
export class AddPerson {

	newPerson: Person;

	constructor(public viewCtrl: ViewController, private camera: Camera) {
		this.newPerson = new Person();
	}

	dismiss() {
		const res = this.newPerson.name && this.newPerson.role && this.newPerson.surname ? this.newPerson : null;
		this.viewCtrl.dismiss(res);
	}

	getPic() {
		const options: CameraOptions = {
			quality: 100,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE
		}

		this.camera.getPicture(options).then((imageData) => {
			// imageData is either a base64 encoded string or a file URI
			// If it's base64:
			let base64Image = 'data:image/jpeg;base64,' + imageData;
		}, (err) => {
			// Handle error
		});
	}

}
