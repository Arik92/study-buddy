import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerRecorderComponent } from './answer-recorder.component';

describe('AnswerRecorderComponent', () => {
  let component: AnswerRecorderComponent;
  let fixture: ComponentFixture<AnswerRecorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerRecorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerRecorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
