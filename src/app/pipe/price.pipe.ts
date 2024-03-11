import { Pipe, PipeTransform } from '@angular/core';
import { IPrice } from '../interfaces/IPrice';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: IPrice[], priceFilter : string): IPrice [] {
    priceFilter =  priceFilter ? priceFilter.toLocaleUpperCase() : ""
    return  priceFilter ? value.filter( (c : IPrice) => c.title.toLocaleUpperCase().includes(priceFilter)):value ;
  }

}




