import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,FormGroup } from '@angular/forms';
import {StudentsService} from '../../students.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
   
  constructor(private stds:StudentsService) { }

  Myform = new FormGroup (
    {
     name : new FormControl(''),
     email : new FormControl(''),
    }
  );
  message:boolean=false;
  ngOnInit(): void {
  }
  
  add(){
    this.stds.receive(this.Myform.value).subscribe();
    this.message=true;
    this.Myform.reset({});
  }

  removemsg(){
    this.message=false;
  }

}
