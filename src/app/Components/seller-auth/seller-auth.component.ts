import { Component } from '@angular/core';
// SellerService import for Seller SignUp Service Call 
import { SellerService } from 'src/app/services/seller.service';
// Router import for navigate the page when user Signup
import { Router } from '@angular/router';
import { signUp } from 'src/app/datatype';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  constructor( private seller:SellerService, private router: Router){}
  ngOnInit(): void{
  }
    // SignUp function start here
signUp(data:signUp):void{
  console.warn(data)
  // Seller Service call here
  this.seller.userSignUp(data).subscribe((result)=>{
    // console.warn(result)
    if(result){
      this.router.navigate(['seller-home'])
    }
  });
}}