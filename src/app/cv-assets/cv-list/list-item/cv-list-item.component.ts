import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../../Model/Person';
import { CvService } from '../../../Service/cv.service';

@Component({
  selector: 'app-cv-list-item',
  templateUrl: './cv-list-item.component.html',
  styleUrls: [],
})
export class CvListItemComponent implements OnInit {
  @Input() person: Person | null = null;

  constructor(private cvService: CvService) {}

  ngOnInit(): void {}

  selectProfile() {
    if (this.person) this.cvService.sendData(this.person);
  }
}
