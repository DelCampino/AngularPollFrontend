import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent implements OnInit {
  model : Student = new Student(1,'Rudy','Derboven','3ITF APP A');
  submitted : boolean = false;
  _apiservice: any;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    //Call API (this service doesn't exist, just an example!)
    this._apiservice.addStudent(this.model).subscribe();
  }
}
