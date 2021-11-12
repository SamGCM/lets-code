import { Component, OnInit } from '@angular/core';
import {FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss']
})
export class HobbyComponent implements OnInit {

  hobbies: string[] = []
  inputHobby: string = ''
  form: any = ""


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      inputHobby: [null]
    })
  }

  createHobby(form: NgForm, e: string) {
    this.hobbies.push(e)
    console.log(this.form)
    form.resetForm()
  }
}
