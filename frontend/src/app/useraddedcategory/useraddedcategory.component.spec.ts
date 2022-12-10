import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraddedcategoryComponent } from './useraddedcategory.component';

describe('UseraddedcategoryComponent', () => {
  let component: UseraddedcategoryComponent;
  let fixture: ComponentFixture<UseraddedcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseraddedcategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseraddedcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
