import { Component, OnInit } from '@angular/core';
import { IBedroom } from 'src/app/interfaces/IBedroom';
import { BedroomService } from 'src/app/services/bedroom.service';
import { PriceService } from 'src/app/services/price.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent  implements OnInit{


  constructor(private bedroomService: BedroomService, private priceService: PriceService) { }
  bedrooms: IBedroom[] = []



ngOnInit(): void {
}


}
