import { Component } from '@angular/core';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  constructor( private seller:SellerService ){}
  ngOnInit(): void{
  }
    // SignUp function start here
signUp(data:Object):void{
  console.warn(data)
  // Seller Service call here
  this.seller.userSignUp(data).subscribe((result)=>{
    console.warn(result)
  });
}}