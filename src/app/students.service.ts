import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {
  url='http://localhost:3000/students/';
  constructor(private http:HttpClient) { }

   getallstudents(){
      return this.http.get(this.url)
  }

  // taking data from addstudent.component.ts using receivce method,using this method v get data from the form
  receive(data:any){
     return this.http.post(this.url,data);
  }

  deleteStudentData(id: any)                    // call the API and DELETE the Data based on 'id'  
  {
      console.log(id);
      return this.http.delete( this.url+id );
  }

  getStudentById(id: number)              
  {
      return this.http.get( this.url+id );
  }
   
  updateStudentData(id: number, data: any)            //update the API
  {
    return this.http.put( this.url+id,data );
  }
    
}
