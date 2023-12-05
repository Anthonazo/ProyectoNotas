import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarNotaComponent } from './editar-nota.component';

describe('EditarNotaComponent', () => {
  let component: EditarNotaComponent;
  let fixture: ComponentFixture<EditarNotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarNotaComponent]
    });
    fixture = TestBed.createComponent(EditarNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
