import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierActiviteComponent } from './modifier-activite.component';

describe('ModifierActiviteComponent', () => {
  let component: ModifierActiviteComponent;
  let fixture: ComponentFixture<ModifierActiviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierActiviteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
