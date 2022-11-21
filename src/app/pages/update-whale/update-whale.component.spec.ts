import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWhaleComponent } from './update-whale.component';

describe('UpdateWhaleComponent', () => {
  let component: UpdateWhaleComponent;
  let fixture: ComponentFixture<UpdateWhaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateWhaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateWhaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
