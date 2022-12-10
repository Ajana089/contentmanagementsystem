import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraddedfoodlistComponent } from './useraddedfoodlist.component';

describe('UseraddedfoodlistComponent', () => {
  let component: UseraddedfoodlistComponent;
  let fixture: ComponentFixture<UseraddedfoodlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseraddedfoodlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseraddedfoodlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
