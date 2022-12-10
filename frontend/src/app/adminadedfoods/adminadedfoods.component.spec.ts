import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminadedfoodsComponent } from './adminadedfoods.component';

describe('AdminadedfoodsComponent', () => {
  let component: AdminadedfoodsComponent;
  let fixture: ComponentFixture<AdminadedfoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminadedfoodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminadedfoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
