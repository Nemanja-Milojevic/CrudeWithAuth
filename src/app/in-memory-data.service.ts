import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {
    const students = [
      {id: 1, name: "Nemanja", surname: "Milojevic", index: "226/2014"},
      {id: 2, name: "Jelena", surname: "Andric", index: "174/2017"},
      {id: 3, name: "Nikola", surname: "Stojanovic", index: "14/2014"},
      {id: 4, name: "Predrag", surname: "Kolovic", index: "300/2014"},
      {id: 5, name: "Marko", surname: "Vukovic", index: "5/2014"}
    ];
    return {students};
  }
}
