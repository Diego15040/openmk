import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariationsEditComponent } from './variations-edit.component';

describe('VariationsEditComponent', () => {
  let component: VariationsEditComponent;
  let fixture: ComponentFixture<VariationsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariationsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariationsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
