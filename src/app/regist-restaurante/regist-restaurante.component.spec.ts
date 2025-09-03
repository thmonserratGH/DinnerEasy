import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistRestauranteComponent } from './regist-restaurante.component';

describe('RegistRestauranteComponent', () => {
  let component: RegistRestauranteComponent;
  let fixture: ComponentFixture<RegistRestauranteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistRestauranteComponent]
    });
    fixture = TestBed.createComponent(RegistRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
