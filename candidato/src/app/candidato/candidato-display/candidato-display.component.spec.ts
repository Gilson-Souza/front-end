import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatoDisplayComponent } from './candidato-display.component';

describe('CandidatoDisplayComponent', () => {
  let component: CandidatoDisplayComponent;
  let fixture: ComponentFixture<CandidatoDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatoDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
