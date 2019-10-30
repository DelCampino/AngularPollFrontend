import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-rx-form',
  templateUrl: './rx-form.component.html',
  styleUrls: ['./rx-form.component.scss']
})
export class RxFormComponent implements OnInit {
  studentForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', [Validators.required, Validators.minLength(2)]]
  });
  submitted: boolean;
  _apiservice: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.studentForm.valueChanges.subscribe(val => {
      console.log(val);
    })
    this.studentForm.get('firstname').valueChanges.subscribe(val => {
      console.log(val);
    })
  }

  onSubmit() {
    this.submitted = true;
    //Call API (this service doesn't exist, just an example!)
    this._apiservice.addStudent(this.studentForm.value).subscribe();
  }

  setForm() {
    this.studentForm.setValue({
      firstname: 'Ruddy',
      lastname: 'Ruddies'
    });
  }

  updateForm() {
    this.studentForm.patchValue({
      firstname: 'Leo'
    });
  }

}
