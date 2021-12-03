import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutParticipantFichierComponent } from './ajout-participant-fichier.component';

describe('AjoutParticipantFichierComponent', () => {
  let component: AjoutParticipantFichierComponent;
  let fixture: ComponentFixture<AjoutParticipantFichierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutParticipantFichierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutParticipantFichierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
