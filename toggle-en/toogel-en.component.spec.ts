import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToogelEnComponent } from './toogel-en.component';

describe('ToogelEnComponent', () => {
  let component: ToogelEnComponent;
  let fixture: ComponentFixture<ToogelEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToogelEnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToogelEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
