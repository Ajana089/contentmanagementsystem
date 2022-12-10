import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpicComponent } from './adminpic.component';

describe('AdminpicComponent', () => {
  let component: AdminpicComponent;
  let fixture: ComponentFixture<AdminpicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminpicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminpicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
