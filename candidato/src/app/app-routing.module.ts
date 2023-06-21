import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 { path: '', pathMatch:'full', redirectTo: 'Candidato'},
 {
  path: 'Candidato',
  loadChildren: () => import('./candidato/candidato.module').then(m => m.CandidatoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
