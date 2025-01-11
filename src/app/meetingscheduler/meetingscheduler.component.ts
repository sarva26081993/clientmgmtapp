import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-meetingscheduler',
  standalone: false,

  templateUrl: './meetingscheduler.component.html',
  styleUrl: './meetingscheduler.component.css',
})
export class MeetingschedulerComponent {
  meetings: any[] = [];
  topic: string = '';
  attendeescount: string = '';
  stime: string = '';
  etime: string = '';
  message: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  scheduleMeeting() {
    const schedule = {
      topic: this.topic,
      attendeescount: this.attendeescount,
      stime: this.stime,
      etime: this.etime,
    };

    console.log(schedule);

    this.http.post('http://localhost:3000/scheduleMeeting', schedule).subscribe(
      (response: any) => {
        this.message = response.message;
      },
      (error) => {
        console.error('Error in scheduling meeting', error);
      }
    );
  }

  displayAllMeetings() {
    this.http.get('http://localhost:3000/getAllMeetings').subscribe(
      (response: any) => {
        this.meetings = response;
      },
      (error) => {
        console.error('Error in displaying all meetings', error);
      }
    );
  }
}
