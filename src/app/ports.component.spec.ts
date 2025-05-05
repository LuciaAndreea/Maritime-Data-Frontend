import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortsComponent } from './ports.component';
import { provideMockStore } from '@ngrx/store/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('PortsComponent', () => {
  let component: PortsComponent;
  let fixture: ComponentFixture<PortsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortsComponent],
      providers: [provideMockStore(), provideHttpClientTesting()]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});