import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutResponsableActiviteComponent } from './ajout-responsable-activite.component';

describe('AjoutResponsableActiviteComponent', () => {
  let component: AjoutResponsableActiviteComponent;
  let fixture: ComponentFixture<AjoutResponsableActiviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutResponsableActiviteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutResponsableActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
