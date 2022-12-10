import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseradminhomeComponent } from './useradminhome.component';

describe('UseradminhomeComponent', () => {
  let component: UseradminhomeComponent;
  let fixture: ComponentFixture<UseradminhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseradminhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseradminhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
