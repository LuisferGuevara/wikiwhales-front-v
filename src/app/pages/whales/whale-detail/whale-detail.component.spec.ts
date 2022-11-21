import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhaleDetailComponent } from './whale-detail.component';

describe('WhaleDetailComponent', () => {
  let component: WhaleDetailComponent;
  let fixture: ComponentFixture<WhaleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhaleDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhaleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
