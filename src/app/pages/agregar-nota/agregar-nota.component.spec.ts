import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarNotaComponent } from './agregar-nota.component';

describe('AgregarNotaComponent', () => {
  let component: AgregarNotaComponent;
  let fixture: ComponentFixture<AgregarNotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarNotaComponent]
    });
    fixture = TestBed.createComponent(AgregarNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
