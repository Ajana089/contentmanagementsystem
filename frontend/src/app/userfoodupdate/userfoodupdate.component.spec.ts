import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfoodupdateComponent } from './userfoodupdate.component';

describe('UserfoodupdateComponent', () => {
  let component: UserfoodupdateComponent;
  let fixture: ComponentFixture<UserfoodupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserfoodupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserfoodupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
