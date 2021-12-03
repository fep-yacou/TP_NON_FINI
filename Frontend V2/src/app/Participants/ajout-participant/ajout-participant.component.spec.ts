import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutParticipantComponent } from './ajout-participant.component';

describe('AjoutParticipantComponent', () => {
  let component: AjoutParticipantComponent;
  let fixture: ComponentFixture<AjoutParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutParticipantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
