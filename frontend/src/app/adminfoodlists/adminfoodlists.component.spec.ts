import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfoodlistsComponent } from './adminfoodlists.component';

describe('AdminfoodlistsComponent', () => {
  let component: AdminfoodlistsComponent;
  let fixture: ComponentFixture<AdminfoodlistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminfoodlistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminfoodlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
