import { Injectable } from '@angular/core';
import { Person } from '../Model/Person';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  profiles: Person[] = [];
  private resumeSubject = new Subject<Person>();
  selectedCv: Observable<Person> = this.resumeSubject.asObservable();

  constructor() {
    this.profiles = [
      new Person({
        id: 0,
        firstName: 'Sara',
        lastName: 'Briki',
        job: 'SDE',
        age: 22,
        imagePath: 'assets/images/sara.jpg',
      }),
      new Person({
        id: 1,
        firstName: 'Bechir',
        lastName: 'Brahem',
        job: 'SDE',
        age: 22,
        imagePath: 'assets/images/bechir.jpg',
      }),
    ];
  }

  getProfiles(): Person[] {
    return this.profiles;
  }

  getProfileById(id: number): Person {
    const person = this.profiles.filter((person: Person) => person.id == id)[0];
    return person ? person : new Person();
  }

  addProfile(person: Person) {
    this.profiles.push(person);
  }

  deleteProfile(id: number) {
    this.profiles = this.profiles.filter((person: Person) => person.id != id);
  }

  sendData(p: Person) {
    this.resumeSubject.next(p);
  }
}
