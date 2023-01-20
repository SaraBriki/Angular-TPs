import { Component, OnInit } from '@angular/core';
import { CvService } from '../../Service/cv.service';
import { Person } from '../../Model/Person';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: [],
})
export class CvComponent implements OnInit {
  profiles: Person[];
  selectedProfile: Person | null = null;
  cvService: CvService | null = null;

  constructor(cvService: CvService) {
    this.profiles = [];
    this.cvService = cvService;
  }

  ngOnInit(): void {
    this.profiles = this.cvService?.getProfiles() as Person[];
  }

  selectProfile(selectedProfile: any) {
    this.selectedProfile = selectedProfile;
  }
}
