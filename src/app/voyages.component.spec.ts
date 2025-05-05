import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VoyagesComponent } from './voyages.component';
import { provideMockStore } from '@ngrx/store/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('VoyagesComponent', () => {
  let component: VoyagesComponent;
  let fixture: ComponentFixture<VoyagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoyagesComponent],
      providers: [provideMockStore()]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoyagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});