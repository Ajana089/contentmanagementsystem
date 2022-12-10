import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfoodupdateComponent } from './adminfoodupdate.component';

describe('AdminfoodupdateComponent', () => {
  let component: AdminfoodupdateComponent;
  let fixture: ComponentFixture<AdminfoodupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminfoodupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminfoodupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
