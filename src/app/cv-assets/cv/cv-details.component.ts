import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../Model/Person';
import { RecruitService } from '../../Service/recruit.service';
import { Router } from '@angular/router';
import { CvService } from '../../Service/cv.service';

@Component({
  selector: 'app-cv-details',
  templateUrl: './cv-details.component.html',
  styleUrls: [],
})
export class CvDetailsComponent implements OnInit {
  person: Person | null = null;
  recruitService: RecruitService | null = null;

  constructor(
    recruitService: RecruitService,
    private cvService: CvService,
    private router: Router
  ) {
    this.recruitService = recruitService;
  }

  ngOnInit(): void {
    this.cvService.selectedCv.subscribe((data) => {
      this.person = data;
    });
  }

  hireCandidate(person: Person): void {
    this.recruitService?.add(person);
  }
}
