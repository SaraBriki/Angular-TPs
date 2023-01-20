import { Component, OnInit } from '@angular/core';
import { CvService } from '../../Service/cv.service';
import { Router } from '@angular/router';
import { Person } from '../../Model/Person';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css'],
})
export class AddCvComponent implements OnInit {
  constructor(private cvService: CvService, private router: Router) {}

  ngOnInit(): void {}

  addProfile(form: any) {
    const id: number = Math.floor(Math.random() * 100);
    const person: Person = new Person({ ...form.value, id });
    this.cvService.addProfile(person);
    const link = ['resumes'];
    this.router.navigate(link);
  }
}
