import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShipDurationChartComponent } from './ship-duration-chart.component';
import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('ShipDurationChartComponent', () => {
  let component: ShipDurationChartComponent;
  let fixture: ComponentFixture<ShipDurationChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipDurationChartComponent, HttpClientTestingModule],
      providers: [provideMockStore()]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipDurationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});