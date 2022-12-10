import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercategoryupdateComponent } from './usercategoryupdate.component';

describe('UsercategoryupdateComponent', () => {
  let component: UsercategoryupdateComponent;
  let fixture: ComponentFixture<UsercategoryupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercategoryupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercategoryupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
