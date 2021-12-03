import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailParticipantComponent } from './detail-participant.component';

describe('DetailParticipantComponent', () => {
  let component: DetailParticipantComponent;
  let fixture: ComponentFixture<DetailParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailParticipantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
