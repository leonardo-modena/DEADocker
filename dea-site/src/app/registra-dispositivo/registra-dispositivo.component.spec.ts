import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraDispositivoComponent } from './registra-dispositivo.component';

describe('RegistraDispositivoComponent', () => {
  let component: RegistraDispositivoComponent;
  let fixture: ComponentFixture<RegistraDispositivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistraDispositivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistraDispositivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
