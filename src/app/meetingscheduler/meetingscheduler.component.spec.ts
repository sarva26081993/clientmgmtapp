import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingschedulerComponent } from './meetingscheduler.component';

describe('MeetingschedulerComponent', () => {
  let component: MeetingschedulerComponent;
  let fixture: ComponentFixture<MeetingschedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeetingschedulerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingschedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
