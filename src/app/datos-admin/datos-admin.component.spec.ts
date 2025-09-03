import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosAdminComponent } from './datos-admin.component';

describe('DatosAdminComponent', () => {
  let component: DatosAdminComponent;
  let fixture: ComponentFixture<DatosAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosAdminComponent]
    });
    fixture = TestBed.createComponent(DatosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
