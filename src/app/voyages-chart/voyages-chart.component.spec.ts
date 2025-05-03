import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyagesChartComponent } from './voyages-chart.component';

describe('VoyagesChartComponent', () => {
  let component: VoyagesChartComponent;
  let fixture: ComponentFixture<VoyagesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoyagesChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoyagesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
