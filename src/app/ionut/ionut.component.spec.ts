import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonutComponent } from './ionut.component';

describe('IonutComponent', () => {
  let component: IonutComponent;
  let fixture: ComponentFixture<IonutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IonutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
