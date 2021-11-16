import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component-first',
  templateUrl: './component-first.component.html',
  styleUrls: ['./component-first.component.css']
})
export class ComponentFirstComponent implements OnInit {
  url:any = ''

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.url = this.route.snapshot.routeConfig?.path
  }

  sendMeTo(url: string) {
  }

}
