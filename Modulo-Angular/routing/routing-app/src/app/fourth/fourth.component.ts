import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {
  url: any = ""
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.url = this.route.snapshot.routeConfig?.path
  }

}
