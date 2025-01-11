import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,

  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  name: string = '';
  useremail: string = '';
  address: string = '';
  userpassword: string = '';
  message: string = '';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  registerClient() {
    const client = {
      name: this.name,
      useremail: this.useremail,
      address: this.address,
      userpassword: this.userpassword,
    };

    this.http.post('http://localhost:3000/registerClient', client).subscribe(
      (response: any) => {
        this.message = response.message;
        this.router.navigate(['/displayClient'], { queryParams: client });
      },
      (error) => {
        console.error('Error in registering client', error);
      }
    );
  }
}
