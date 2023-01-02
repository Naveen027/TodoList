import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import {StudentsService} from '../../students.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {

  constructor(private stds:StudentsService,private route:ActivatedRoute ) { }
  Editform = new FormGroup (
    {
     name : new FormControl(''),
     email : new FormControl(''),
    }
  );

  message:boolean=false;
  ngOnInit(): void {
    this.stds.getStudentById(this.route.snapshot.params['id']).subscribe(
    (result: any)=>{
      console.log(result);
      this.Editform = new FormGroup({
        name : new FormControl( result['name'] ),
        email : new FormControl( result['email'] )
      });
    }
    )}
  
  
  edit(){
    // this.stds.receive(this.Editform.value).subscribe();
    // this.message=true;
    // this.Editform.reset({});

    console.log(this.Editform.value);
    this.stds.updateStudentData( this.route.snapshot.params['id'], this.Editform.value ).subscribe((result)=>{
      console.log(result);
      this.message=true;
    })
  }

  removemsg(){
    this.message=false;
  }

}
