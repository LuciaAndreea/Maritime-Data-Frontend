import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipDurationChartComponent } from './ship-duration-chart.component';

describe('ShipDurationChartComponent', () => {
  let component: ShipDurationChartComponent;
  let fixture: ComponentFixture<ShipDurationChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipDurationChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipDurationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
