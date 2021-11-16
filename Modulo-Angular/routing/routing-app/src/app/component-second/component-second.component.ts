import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component-second',
  templateUrl: './component-second.component.html',
  styleUrls: ['./component-second.component.css']
})
export class ComponentSecondComponent implements OnInit {
  url:any = ''

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.url = this.route.snapshot.routeConfig?.path
  }

}
