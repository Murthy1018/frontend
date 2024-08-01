import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserJobdetailsComponent } from './user-jobdetails.component';

describe('UserJobdetailsComponent', () => {
  let component: UserJobdetailsComponent;
  let fixture: ComponentFixture<UserJobdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserJobdetailsComponent]
    });
    fixture = TestBed.createComponent(UserJobdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
