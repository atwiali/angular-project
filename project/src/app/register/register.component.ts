import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!:FormGroup
  submitted=false
  constructor(private formBuilder:FormBuilder){
 
  }
  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      firstName:['',[Validators.required,Validators.minLength(4)]],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }
  onSubmit(){
    this.submitted = true
    
    if(this.registerForm.invalid){
      return
    }
    alert("Success")
  }

}
