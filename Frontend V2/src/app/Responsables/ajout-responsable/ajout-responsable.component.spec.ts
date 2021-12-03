import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutResponsableComponent } from './ajout-responsable.component';

describe('AjoutResponsableComponent', () => {
  let component: AjoutResponsableComponent;
  let fixture: ComponentFixture<AjoutResponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutResponsableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
