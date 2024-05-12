import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from '../_class/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private basicUrl:String="http://localhost:9091/Student"
  constructor( private httpclient:HttpClient,private router:Router) { }

  public addNewUser(student:Student):Observable<HttpResponse<any>>{
    return this.httpclient.post<any>(`${this.basicUrl}/addstudent`,student,{observe:'response',responseType:'text' as 'json'})
  }
  public getAllUser():Observable<Student[]>{
    return this.httpclient.get<Student[]>(`${this.basicUrl}/getAllStudent`)
  }
  
  public getSingleUser(id:number):Observable<Student>{
    return this.httpclient.get<Student>(`${this.basicUrl}/getstudentById?id=${id}`)
  }

  public deleteUser(id:number):Observable<HttpResponse<any>>{
    return this.httpclient.delete<any>(`${this.basicUrl}/deleteStudent?id=${id}`,{observe:'response',responseType:'text' as 'json'})
  }

  public updateUser(id:number,student:Student):Observable<HttpResponse<any>>{
    return this.httpclient.put<any>(`${this.basicUrl}/updateStudent?id=${id}`,student,{observe:'response',responseType:'text' as 'json'})
  }

}
