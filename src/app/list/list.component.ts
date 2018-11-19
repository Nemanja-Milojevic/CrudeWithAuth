import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Student } from '../student';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  
})
export class ListComponent implements OnInit {

  private students;
  message: Student;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getStudents();
    }

  messageClear(){
    let stud = <Student>{
      id: 0,
      name: '',
      surname: '',
      index: ''
    }

      stud.id = null;
      stud.name = null;
      stud.surname = null;
      stud.index = null;

    this.api.changeMessage(stud);
  }

  getStudents(){
    this.api.get().subscribe(res => this.students = res)
  }

  deleteStudent(id){
    this.api.delete(id).subscribe();
    this.getStudents();
  }

  dblEdit(id, name, surname, index){
    let stud = <Student>{
      id: 0,
      name: '',
      surname: '',
      index: ''
    }

    stud.id = +id;
    stud.name = name;
    stud.surname = surname;
    stud.index = index;

    this.api.changeMessage(stud);

    setTimeout(() => {      
    this.router.navigate(['/edit']);
    }, 500);
  }

}
