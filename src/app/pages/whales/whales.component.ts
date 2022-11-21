import { IWhale } from './../../models/model';
import { WhalesService } from './../../services/whales.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whales',
  templateUrl: './whales.component.html',
  styleUrls: ['./whales.component.scss']
})
export class WhalesComponent implements OnInit {
  
  myWhales?: any[];
  constructor( private whaleService: WhalesService) { 
    this.whaleService.getAllWhales().subscribe((data:any) => {
      console.log(data)
      // this.myWhales = [...data] // no map, pero tambien todos los datos
      const whaleData: any[] = data.map((whale: IWhale) =>({
        id: whale._id,
        name:whale.name,
        image: whale.image,
        scientificName: whale.scientificName,
        length: whale.length,
        weight: whale.weight,
        description: whale.description
      }))

      this.myWhales = [...whaleData]
    });



    
  }

  ngOnInit(): void {
  }

}
