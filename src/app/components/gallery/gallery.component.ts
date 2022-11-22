import { IWhale } from './../../models/model';
import { WhalesService } from './../../services/whales.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  myWhales?: any[];
  constructor(private whaleService: WhalesService) {
    this.whaleService.getAllWhales().subscribe((data: any) => {
      console.log('mi data', data);
      // this.myWhales = [...data] // no map, pero tambien todos los datos
      
      const whaleData: any[] = data.map((whale: IWhale) => ({
        id: whale._id,
        name: whale.name,
        image: whale.image,
        scientificName: whale.scientificName,
        length: whale.length,
        weight: whale.weight,
        description: whale.description,
      }));

      this.myWhales = [...whaleData];
      console.log('mis ballenas', this.myWhales);
    });
  }

  ngOnInit(): void {}
}
