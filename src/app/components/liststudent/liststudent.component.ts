import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../../students.service';

@Component({
  selector: 'app-liststudent',
  templateUrl: './liststudent.component.html',
  styleUrls: ['./liststudent.component.css']
})
export class ListstudentComponent implements OnInit {

  constructor(private student:StudentsService) { }

  studentdata :any=[];

  
  ngOnInit(): void {
    this.student.getallstudents().subscribe((alldata)=>{
      this.studentdata = alldata;
    });
  
  }



  deletestd(id: any)
  {
    console.log(id);
    this.student.deleteStudentData(id).subscribe( (result)=>{    // Deleting the Data
         console.log(result); 
         this.ngOnInit();                                                // refresh the Page once date is deleted
    });
  } 
 
 


}
