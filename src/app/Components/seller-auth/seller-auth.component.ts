import { Component } from '@angular/core';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  constructor(){}
  ngOnInit(): void{
  }
    // SignUp function start here
signUp(data:Object):void{
  console.warn(data)
  
}
  }