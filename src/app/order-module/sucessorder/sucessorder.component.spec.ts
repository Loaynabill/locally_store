import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessorderComponent } from './sucessorder.component';

describe('SucessorderComponent', () => {
  let component: SucessorderComponent;
  let fixture: ComponentFixture<SucessorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SucessorderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SucessorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
