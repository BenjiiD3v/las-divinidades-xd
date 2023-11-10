import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExponentsComponent } from './exponents.component';

describe('ExponentsComponent', () => {
  let component: ExponentsComponent;
  let fixture: ComponentFixture<ExponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
