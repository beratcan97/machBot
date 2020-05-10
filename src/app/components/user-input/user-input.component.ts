import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      input: '',
    })
  }

  resetForm(): void{
    this.form.patchValue({
      input: ''
    });
  }

  send(): void {
    sessionStorage.setItem('activeInput', this.form.value.input);
    this.resetForm();
  }
}
