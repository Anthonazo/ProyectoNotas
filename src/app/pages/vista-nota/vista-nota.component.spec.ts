import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaNotaComponent } from './vista-nota.component';

describe('VistaNotaComponent', () => {
  let component: VistaNotaComponent;
  let fixture: ComponentFixture<VistaNotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaNotaComponent]
    });
    fixture = TestBed.createComponent(VistaNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
