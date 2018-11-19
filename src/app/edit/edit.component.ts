import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Student } from '../student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  private students;
  message: Student;
  inpId: number = null;
  inpName: string = null;
  inpSurname: string = null;
  inpIndex: string = null;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getStudents()
    this.setInput()
  }

  getStudents(){
    this.api.get().subscribe(res => this.students = res)
  }

  editStudent(id, name, surname, index){
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

      this.api.edit(stud, id).subscribe();
      this.router.navigate(['/index']);
  }

  setInput(){
    this.api.currentMessage.subscribe(message => this.message = message)
    this.inpId = this.message.id;
    this.inpName = this.message.name;
    this.inpSurname = this.message.surname;
    this.inpIndex = this.message.index;
  }

}
