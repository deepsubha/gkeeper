import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgadgetComponent } from './addgadget.component';

describe('AddgadgetComponent', () => {
  let component: AddgadgetComponent;
  let fixture: ComponentFixture<AddgadgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgadgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgadgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
