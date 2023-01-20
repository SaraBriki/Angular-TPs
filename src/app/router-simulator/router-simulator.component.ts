import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-simulator',
  templateUrl: './router-simulator.component.html',
  styleUrls: [],
})
export class RouterSimulatorComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToLink(route: string) {
    const link = [route];
    this.router.navigate(link);
  }
}
