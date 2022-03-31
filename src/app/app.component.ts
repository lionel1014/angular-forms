import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public userForm: FormGroup;

  constructor(private form : FormBuilder){
    this.userForm = this.form.group({
      nombre:['', Validators.required],
      edad:['', [Validators.required, Validators.max(180)]],
      empresa:['', Validators.required],
      email:['', [Validators.required , Validators.email]],
    })
  }

  sendForm = () =>{
    console.log("Tu formulario 🐱‍👤",this.userForm)
  }

}
