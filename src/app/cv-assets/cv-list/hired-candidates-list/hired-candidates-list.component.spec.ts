import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiredCandidatesListComponent } from './hired-candidates-list.component';

describe('HiredCandidatesListComponent', () => {
  let component: HiredCandidatesListComponent;
  let fixture: ComponentFixture<HiredCandidatesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiredCandidatesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiredCandidatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
