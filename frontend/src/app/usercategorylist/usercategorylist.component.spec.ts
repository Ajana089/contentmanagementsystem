import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercategorylistComponent } from './usercategorylist.component';

describe('UsercategorylistComponent', () => {
  let component: UsercategorylistComponent;
  let fixture: ComponentFixture<UsercategorylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercategorylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercategorylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
