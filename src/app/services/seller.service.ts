import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { signUp } from '../datatype';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient) { }
  // User Signup Function call here
  userSignUp(data:signUp){
    // Seller API call here
  return this.http.post('http://localhost:3000/seller', data)
}
}
