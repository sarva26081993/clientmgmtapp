import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: false,

  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {
  name: any;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.name = params['name'];
    });
  }
}
