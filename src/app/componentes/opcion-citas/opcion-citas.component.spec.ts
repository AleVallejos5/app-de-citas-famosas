import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OpcionCitasComponent } from './opcion-citas.component';

describe('OpcionCitasComponent', () => {
  let component: OpcionCitasComponent;
  let fixture: ComponentFixture<OpcionCitasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [OpcionCitasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OpcionCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
