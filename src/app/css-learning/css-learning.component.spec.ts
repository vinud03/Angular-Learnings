import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssLearningComponent } from './css-learning.component';

describe('CssLearningComponent', () => {
  let component: CssLearningComponent;
  let fixture: ComponentFixture<CssLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssLearningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
