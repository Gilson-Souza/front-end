import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';



import { SharedModule } from '../shared/shared.module';
import { CandidatoFormComponent } from './candidato-form/candidato-form.component';
import { CandidatoRoutingModule } from './candidato-routing.module';
import { CandidatoListComponent } from './candidato-list/candidato-list.component';
import { CandidatoDisplayComponent } from './candidato-display/candidato-display.component';
import { CandidatoResolver } from './guards/candidato.resolver';
import { CandidatoEditComponent } from './candidato-edit/candidato-edit.component';


@NgModule({
  declarations: [
    CandidatoFormComponent,
    CandidatoListComponent,
    CandidatoDisplayComponent,
    CandidatoEditComponent,

  ],
  imports: [
    CommonModule,
    CandidatoRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule

  ],
  providers:[
    CandidatoResolver
  ]

})
export class CandidatoModule { }
