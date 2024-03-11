import { Component, OnInit } from '@angular/core';
import { IPrice } from 'src/app/interfaces/IPrice';
import { PriceService } from 'src/app/services/price.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit{

  priceFilter : string = ""
  prices: IPrice[] = [] 
  currentPrice  : IPrice = {id : 0 , title : "All prices" ,  from : 0 , to  : 100 }

  constructor(private priceService :  PriceService){}

ngOnInit(): void {
this.priceService.getAllList().subscribe((res)=>{
  this.prices = res})
}

setCurrentPrice(price  :  IPrice){
   this.currentPrice = price
}

setCurrentPriceClass(price :  IPrice) { 
  if (this.currentPrice.id == price.id) {
    return "list-group-item cursorPointer active"
  } else {
    return "list-group-item cursorPointer"
  }
}



}
