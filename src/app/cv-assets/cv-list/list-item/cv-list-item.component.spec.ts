import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvListItemComponent } from './cv-list-item.component';

describe('CvListItemComponent', () => {
  let component: CvListItemComponent;
  let fixture: ComponentFixture<CvListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
