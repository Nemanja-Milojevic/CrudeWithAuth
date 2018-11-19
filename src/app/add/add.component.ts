import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
  }

  addStudent(id, name, surname, index){
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

      this.api.add(stud).subscribe();
      this.router.navigate(['/index']);

  }

}
