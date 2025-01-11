import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user: any;
  name: String = '';
  userpassword: String = '';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  confirmuser() {
    this.http
      .get(
        'http://localhost:3000/checkClient/' +
          this.name +
          '/' +
          this.userpassword
      )
      .subscribe(
        (response: any) => {
          this.router.navigate(['/welcome', this.name]);
        },
        (error) => {
          console.error('Error in confirming the user', error);
        }
      );
  }
}
