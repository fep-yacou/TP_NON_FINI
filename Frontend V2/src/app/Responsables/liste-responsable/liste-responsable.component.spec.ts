import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeResponsableComponent } from './liste-responsable.component';

describe('ListeResponsableComponent', () => {
  let component: ListeResponsableComponent;
  let fixture: ComponentFixture<ListeResponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeResponsableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
