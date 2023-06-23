import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
// signup group
signupForm = this.fb.group({
  // array
  uname:['',[Validators.required,Validators.pattern('[0-9a-zA-Z-@]*')]],
  email:['',[Validators.required,Validators.pattern('[0-9a-zA-Z-@]*')]],
  pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z-@]*')]]
  })

constructor(private fb:FormBuilder,private api:ApiService, private router:Router){
  
}
signup(){
  console.log(  this.signupForm.get('email')?.errors
  );
  
  if(this.signupForm.valid){
   let email = this.signupForm.value.email
   let pswd = this.signupForm.value.pswd
   let uname = this.signupForm.value.uname
   this.api.signup(uname,email,pswd)
   .subscribe(
    // success
    (result:any)=>{
    alert(result.message)
    // navigate login
    this.router.navigateByUrl('')
    },
    // client
    (result:any)=>{
      alert(result.error.message)
    }
   )

  }
  else{
    alert('Invalid Form')
  }
}
}