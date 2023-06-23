import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

errorMsg:string=''
successMsg:boolean=false



// login group
loginForm = this.fb.group({
  // array
  email:['',[Validators.required,Validators.pattern('[0-9a-zA-Z-@]*')]],
  pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z-@]*')]]
})
  constructor(private fb:FormBuilder,private api:ApiService , private router:Router){
    
  }

login(){
  console.log(  this.loginForm.get('email')?.errors
  );
  
  if(this.loginForm.valid){
    
   let email = this.loginForm.value.email
   let pswd = this.loginForm.value.pswd
  //  login api call
  this.api.login(email,pswd)
  .subscribe(
    // success
    (result:any)=>{
      this.successMsg=true
    // alert(result.message)
    setTimeout(()=>{
          // // navigate login
          this.router.navigateByUrl('dashboard')
    },2000)
   },
    // client
    (result:any)=>{
      this.errorMsg = result.error.message
    }
   )

  }
  else{
    alert('Invalid Form')
  }
  

  
}

}
