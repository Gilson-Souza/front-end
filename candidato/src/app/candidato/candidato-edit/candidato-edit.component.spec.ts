import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatoEditComponent } from './candidato-edit.component';

describe('CandidatoEditComponent', () => {
  let component: CandidatoEditComponent;
  let fixture: ComponentFixture<CandidatoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatoEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
