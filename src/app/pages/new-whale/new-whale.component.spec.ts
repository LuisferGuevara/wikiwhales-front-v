import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWhaleComponent } from './new-whale.component';

describe('NewWhaleComponent', () => {
  let component: NewWhaleComponent;
  let fixture: ComponentFixture<NewWhaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWhaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewWhaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
