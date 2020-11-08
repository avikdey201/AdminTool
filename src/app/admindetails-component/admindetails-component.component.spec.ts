import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindetailsComponentComponent } from './admindetails-component.component';

describe('AdmindetailsComponentComponent', () => {
  let component: AdmindetailsComponentComponent;
  let fixture: ComponentFixture<AdmindetailsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmindetailsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
