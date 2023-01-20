import { Injectable } from '@angular/core';
import { Person } from '../Model/Person';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class RecruitService {
  private hiredCandidates: Person[] = [];

  constructor(private toastr: ToastrService) {}

  add(person: Person) {
    if (this.hiredCandidates.indexOf(person) < 0) {
      this.hiredCandidates.push(person);
      this.toastr.success(
        `${person.firstName} ${person.lastName} was added to the list of hired candidates.`
      );
    } else
      this.toastr.error(
        `${person.firstName} ${person.lastName} already exists among the candidates.`
      );
  }

  getHiredCandidates() {
    return this.hiredCandidates;
  }
}
