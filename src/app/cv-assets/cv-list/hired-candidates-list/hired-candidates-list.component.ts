import { Component, OnInit } from '@angular/core';
import { RecruitService } from '../../../Service/recruit.service';
import { Person } from '../../../Model/Person';

@Component({
  selector: 'app-hired-candidates-list',
  templateUrl: './hired-candidates-list.component.html',
  styleUrls: [],
})
export class HiredCandidatesListComponent implements OnInit {
  recruitService: RecruitService | null = null;
  hiredCandidates: Person[] = [];

  constructor(recruitService: RecruitService) {
    this.recruitService = recruitService;
  }

  ngOnInit(): void {
    this.hiredCandidates = this.recruitService?.getHiredCandidates() as Person[];
  }
}
