import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailExerciceComponent } from './detail-exercice.component';

describe('DetailExerciceComponent', () => {
  let component: DetailExerciceComponent;
  let fixture: ComponentFixture<DetailExerciceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailExerciceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailExerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
