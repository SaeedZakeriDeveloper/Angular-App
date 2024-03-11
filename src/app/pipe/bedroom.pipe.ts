import { Pipe, PipeTransform } from '@angular/core';
import { IBedroom } from '../interfaces/IBedroom';

@Pipe({
  name: 'bedroom'
})
export class BedroomPipe implements PipeTransform {

  transform(value: IBedroom[], bedroomFilter: string): IBedroom[] {
    bedroomFilter  =  bedroomFilter ? bedroomFilter.toLocaleUpperCase() : ""
    return  bedroomFilter ? value.filter((c: IBedroom) => c.title.toLocaleUpperCase().includes(bedroomFilter)) : value; 
    // return bedroomFilter ? value.filter((c: IBedroom) => c.title.toLocaleLowerCase().indexOf(bedroomFilter) !== -1) : value;
  }



}

