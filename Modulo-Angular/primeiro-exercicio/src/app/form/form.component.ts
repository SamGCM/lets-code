import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  city: string = ""
  hasHobbies: boolean = false
  name: string = ""
  father: any = ""
  hobbies: any = [""]

  ngOnInit() {
    this.father = this.fb.group({
      name: ["", Validators.required],
      city: ["", Validators.required],
      hasHobbies: [false],
      hobbies: [""]
    })
  }
  
  show() {
    console.log(this.father)
  }

}
