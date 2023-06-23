import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  
  // signup
  signup(uname:any,email:any,pswd:any){

    const body={
      uname,
      email,
      pswd
    }
    // server call to signup an account and return response to signup component
    return this.http.post('http://localhost:3000/signup',body)
  }

  // login
  login(email:any,pswd:any){
    const body={
      email,
      pswd
    }
    // // server call to signup an account and return response to login component
    return this.http.post('http://localhost:3000/login',body)
  }

// discuss
discussion(uname:any,que:any){
  const body ={
    uname,
    que
  }
  return this.http.post('http://localhost:3000/discussion',body)

}
}


