import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent {

//   

errorMsg:string=''
successMsg:boolean=false



// login group
discussForm = this.fb.group({
  // array
  uname:['',[Validators.required,Validators.pattern('[0-9a-zA-Z-@]*')]],
  que:['',[Validators.required,Validators.pattern('[0-9a-zA-Z-@]*')]]
})
  constructor(private fb:FormBuilder,private api:ApiService , private router:Router){
    
  }

discussion(){
  console.log(  this.discussForm.get('uname')?.errors
  );
  
  if(this.discussForm.valid){
    
   let uname = this.discussForm.value.uname
   let que = this.discussForm.value.que
  //  login api call
  this.api.discussion(uname,que)
  .subscribe(
    // success
    (result:any)=>{
      this.successMsg=true
    // alert(result.message)
    setTimeout(()=>{
          // // navigate 
          this.router.navigateByUrl('discussion')
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
