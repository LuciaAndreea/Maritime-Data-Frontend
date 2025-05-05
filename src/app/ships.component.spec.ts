import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShipsComponent } from './ships.component';
import { CommonModule } from '@angular/common';
import { provideMockStore } from '@ngrx/store/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing'; 
import { loadShips } from './state/ships/ships/ships.actions';

describe('ShipsComponent', () => {
  let component: ShipsComponent;
  let fixture: ComponentFixture<ShipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule, 
        ShipsComponent, 
      ],
      providers: [
        provideMockStore(), 
        provideHttpClientTesting(), 
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should dispatch loadShips in ngOnInit', () => {
    spyOn(component['store'], 'dispatch'); 

    component.ngOnInit();

    expect(component['store'].dispatch).toHaveBeenCalledWith(loadShips());
  });
});