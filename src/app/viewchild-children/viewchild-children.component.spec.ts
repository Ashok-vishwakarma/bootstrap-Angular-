import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildChildrenComponent } from './viewchild-children.component';

describe('ViewchildChildrenComponent', () => {
  let component: ViewchildChildrenComponent;
  let fixture: ComponentFixture<ViewchildChildrenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewchildChildrenComponent]
    });
    fixture = TestBed.createComponent(ViewchildChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
