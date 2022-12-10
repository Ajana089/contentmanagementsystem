import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraddedfoodsComponent } from './useraddedfoods.component';

describe('UseraddedfoodsComponent', () => {
  let component: UseraddedfoodsComponent;
  let fixture: ComponentFixture<UseraddedfoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseraddedfoodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseraddedfoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
