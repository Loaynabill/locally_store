import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotopbuttonComponent } from './totopbutton.component';

describe('TotopbuttonComponent', () => {
  let component: TotopbuttonComponent;
  let fixture: ComponentFixture<TotopbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotopbuttonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotopbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
