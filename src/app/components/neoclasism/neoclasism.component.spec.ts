import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoclasismComponent } from './neoclasism.component';

describe('NeoclasismComponent', () => {
  let component: NeoclasismComponent;
  let fixture: ComponentFixture<NeoclasismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeoclasismComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeoclasismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
