import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraddedComponent } from './useradded.component';

describe('UseraddedComponent', () => {
  let component: UseraddedComponent;
  let fixture: ComponentFixture<UseraddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseraddedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseraddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
