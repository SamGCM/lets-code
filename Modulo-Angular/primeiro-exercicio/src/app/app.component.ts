import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private fb: FormBuilder) {

  }

  email: any = ""
  father: any = ""

  ngOnInit() {
    // this.father = new FormGroup({
    //   name: new FormControl(""),
    //   lastName: new FormControl(""),
    // })
    this.father = this.fb.group({
      email: ["", Validators.required],
      lastName: ["", Validators.required]
    })
  }
  
  show() {

    console.log(this.father)
  }
}
