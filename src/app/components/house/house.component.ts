import { Component, OnInit } from '@angular/core';
import { IBedroom } from 'src/app/interfaces/IBedroom';
import { IHouse } from 'src/app/interfaces/IHouse';
import { IPrice } from 'src/app/interfaces/IPrice';
import { BedroomService } from 'src/app/services/bedroom.service';
import { HouseService } from 'src/app/services/house.service';
import { PriceService } from 'src/app/services/price.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  bedroomFilter: number = 0
  priceFilter: IPrice = { id: 0, title: "", from: 0, to: 0 }
  allHouses: IHouse[] = []
  filteredHouse: IHouse[] = []
  bedrooms: IBedroom[] = []
  serachPanelAllHouse: string = ""
 


  constructor(private houseService: HouseService) { }

  ngOnInit(): void {
    this.houseService.getAllList().subscribe((res) => {
      this.allHouses = res
      this.filteredHouse = res
    })
  }
  houseFilterChanged() {
    setTimeout(() => {
      if (this.bedroomFilter != 0 && this.priceFilter.id == 0) {
        this.filteredHouse = this.allHouses.filter((c: IHouse) => c.bedrooms == this.bedroomFilter)
      }
      else if (this.bedroomFilter == 0 && this.priceFilter.id !== 0) {
        this.filteredHouse = this.allHouses.filter((c: IHouse) => c.price >= this.priceFilter.from && c.price <= this.priceFilter.to)
      }
      else if (this.bedroomFilter != 0 && this.priceFilter.id != 0) {
        this.filteredHouse = this.allHouses.filter((c: IHouse) => (c.bedrooms == this.bedroomFilter) && c.price >= this.priceFilter.from && c.price <= this.priceFilter.to)
      }
      else {
        this.filteredHouse = this.allHouses
      }

      if (this.serachPanelAllHouse) {
        this.filteredHouse = this.filteredHouse.filter(x =>
          x.code.toString().includes(this.serachPanelAllHouse) ||
          x.description.toString().includes(this.serachPanelAllHouse) ||
          x.size.toString().includes(this.serachPanelAllHouse) ||
          x.bedrooms.toString().includes(this.serachPanelAllHouse) ||
          x.bathrooms.toString().includes(this.serachPanelAllHouse) ||
          x.price.toString().includes(this.serachPanelAllHouse));
      }

    }, 900);





  }

  onBedroomClick(id: number) {
    this.bedroomFilter = id
    this.houseFilterChanged()
  }


  onPriceClick(price: IPrice) {
    this.priceFilter = price
    this.houseFilterChanged()
  }
  
  searchPanelFilterChange(value : string){
    this.serachPanelAllHouse =  value
    this.houseFilterChanged()
  }

}