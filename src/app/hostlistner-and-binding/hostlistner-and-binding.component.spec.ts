import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostlistnerAndBindingComponent } from './hostlistner-and-binding.component';

describe('HostlistnerAndBindingComponent', () => {
  let component: HostlistnerAndBindingComponent;
  let fixture: ComponentFixture<HostlistnerAndBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HostlistnerAndBindingComponent]
    });
    fixture = TestBed.createComponent(HostlistnerAndBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
