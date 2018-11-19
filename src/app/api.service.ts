import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './student';
import { Observable, BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {  

  private stud = <Student>{
    id: 0,
    name: '',
    surname: '',
    index: ''
  }

  private url = "api/students";

  private messageSource = new BehaviorSubject<Student>(this.stud);
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }

  changeMessage(message: Student) {
    this.messageSource.next(message)
  }

  get():Observable<Student[]>{
    return this.http.get<Student[]>(this.url);
  }

  add(data):Observable<Student>{
    return this.http.post<Student>(this.url, data, httpOptions);
  }

  delete(id):Observable<Student>{
    let url = `${this.url}/${id}`;
    return this.http.delete<Student>(url, httpOptions);
  }

  edit(data, id):Observable<any>{
    let url = `${this.url}/${id}`;
    return this.http.put(url, data, httpOptions);
  }
}
