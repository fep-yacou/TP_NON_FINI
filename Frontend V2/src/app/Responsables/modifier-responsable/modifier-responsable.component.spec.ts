import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierResponsableComponent } from './modifier-responsable.component';

describe('ModifierResponsableComponent', () => {
  let component: ModifierResponsableComponent;
  let fixture: ComponentFixture<ModifierResponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierResponsableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
