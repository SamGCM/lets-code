import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  @Output() novoValor = new EventEmitter()


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      inputHobby: [null]
    })
  }

  createHobby(form: NgForm, e: string) {
    e.length > 0 ? this.hobbies.push(e) : null
    this.novoValor.emit(this.hobbies)
    form.resetForm()
  }
}
