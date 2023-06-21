import { NgModule } from '@angular/core';
import { RouterModule, Routes, Resolve } from '@angular/router';
import { CandidatoFormComponent } from './candidato-form/candidato-form.component';
import { CandidatoListComponent } from './candidato-list/candidato-list.component';
import { CandidatoDisplayComponent } from './candidato-display/candidato-display.component';
import { CandidatoEditComponent } from './candidato-edit/candidato-edit.component';


const routes: Routes = [
  { path: '', component: CandidatoListComponent},
  { path: 'new', component: CandidatoFormComponent},
  { path: 'display/:id', component: CandidatoDisplayComponent},
  { path: 'edit/:id', component: CandidatoEditComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatoRoutingModule { }
