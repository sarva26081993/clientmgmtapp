import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-displayclient',
  standalone: false,

  templateUrl: './displayclient.component.html',
  styleUrl: './displayclient.component.css',
})
export class DisplayclientComponent {
  name: string = '';
  address: string = '';
  useremail: string = '';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.name = params['name'];
      this.address = params['address'];
      this.useremail = params['useremail'];
    });
  }
}
