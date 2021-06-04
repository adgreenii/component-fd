import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGridDisplayComponent } from './my-grid-display.component';

describe('MyGridDisplayComponent', () => {
  let component: MyGridDisplayComponent;
  let fixture: ComponentFixture<MyGridDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGridDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGridDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
