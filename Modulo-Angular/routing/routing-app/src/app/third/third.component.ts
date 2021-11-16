import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  url: any = ""
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.url = this.route.snapshot.routeConfig?.path
  }

}
