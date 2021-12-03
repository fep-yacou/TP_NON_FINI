import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutActiviteSuiteComponent } from './ajout-activite-suite.component';

describe('AjoutActiviteSuiteComponent', () => {
  let component: AjoutActiviteSuiteComponent;
  let fixture: ComponentFixture<AjoutActiviteSuiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutActiviteSuiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutActiviteSuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
