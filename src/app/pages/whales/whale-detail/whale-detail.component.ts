import { Router } from '@angular/router';
import { IWhale } from './../../../models/model';
import { WhalesService } from './../../../services/whales.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-whale-detail',
  templateUrl: './whale-detail.component.html',
  styleUrls: ['./whale-detail.component.scss'],
})
export class WhaleDetailComponent implements OnInit {
  id: any;
  myWhale: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private whalesService: WhalesService,
    private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');

      this.whalesService.getOneWhale(this.id).subscribe((data: any) => {
        console.log(data);
        this.myWhale = { ...data };
      });
    });
  }

  ngOnInit(): void {}

  deleteWhale() {
    this.whalesService.deleteWhale(this.id).subscribe();
    this.router.navigate(['/whales']);
  }
}
