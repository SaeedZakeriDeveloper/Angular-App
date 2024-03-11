import { Component, OnInit } from '@angular/core';
import { IBedroom } from 'src/app/interfaces/IBedroom';
import { BedroomService } from 'src/app/services/bedroom.service';

@Component({
  selector: 'app-bedroom',
  templateUrl: './bedroom.component.html',
  styleUrls: ['./bedroom.component.css']
})
export class BedroomComponent implements OnInit{
  bedrooms :  IBedroom [] =[] 
  bedroomFilter = "" 
  curretBedroom : IBedroom = { id : 0  , title :""}
  constructor(private bedroomService :  BedroomService){}



ngOnInit(): void {
    this.bedroomService.getAllList().subscribe((res)=> { 
      this.bedrooms = res
    })
}

setCurrentBedroom(bedroom : IBedroom) { 
  this.curretBedroom = bedroom
}

getCurrentBedroomClass(bedroom: IBedroom) {
  
  if (bedroom.id == this.curretBedroom?.id) {
    return "list-group-item cursorPointer active";
  } else {
    return "list-group-item cursorPointer";
  }
}

}
