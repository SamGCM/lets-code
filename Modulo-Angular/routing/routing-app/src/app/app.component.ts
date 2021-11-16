import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-app';
  userId:string = ''

  constructor(private route: Router){}
  
  sendMeTo(url: string) {
    this.route.navigate([url])
  }
}
