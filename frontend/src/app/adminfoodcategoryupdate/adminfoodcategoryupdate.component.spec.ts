import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfoodcategoryupdateComponent } from './adminfoodcategoryupdate.component';

describe('AdminfoodcategoryupdateComponent', () => {
  let component: AdminfoodcategoryupdateComponent;
  let fixture: ComponentFixture<AdminfoodcategoryupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminfoodcategoryupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminfoodcategoryupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
