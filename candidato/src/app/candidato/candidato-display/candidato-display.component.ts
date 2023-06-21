import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';

import { Candidatoo } from '../models/Candidato';
import { CandidatosService } from '../services/candidatos.service';

@Component({
  selector: 'app-candidato-display',
  templateUrl: './candidato-display.component.html',
  styleUrls: ['./candidato-display.component.scss']
})
export class CandidatoDisplayComponent implements OnInit {


  candidatos$: Observable<Candidatoo>;
  id: number;

  constructor(
              private candidatoService: CandidatosService,
              private route: ActivatedRoute,
              public dialog: MatDialog,
              private router : Router,
              private snackBar: MatSnackBar
            )
  {
    this.id = this.route.snapshot.params['id']

    //this.candidatos$ = this.route.snapshot.params['id']

    //console.log(this.candidatos$)

    this.candidatos$ = this.candidatoService.display(this.id)
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar candidato');
        return of()
      })
    );


  }

    onError(errorMsg: string) {
      this.dialog.open(ConfirmDialogComponent, {
      data: errorMsg
      });
    }

    home(){
      this.router.navigate([''], {relativeTo: this.route })
    }

    excluir(id: number) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: 'Deseja realmente excluir o candidato?'
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.candidatoService.delete(id).subscribe(
            () => {
              console.log(`Candidato deletado: ${id}`);
              this.dialog.closeAll();
              this.snackBar.open('Candidato excluído com sucesso!', 'Fechar', { duration: 5000 });
              // Redirecionar para a tela principal
              this.router.navigate([''], {relativeTo: this.route })
            },
            (error) => {
              console.error('Ocorreu um erro ao excluir o candidato:', error);
              this.dialog.closeAll();
              this.snackBar.open('Erro ao excluir candidato. Tente novamente mais tarde.', 'Fechar');
            }
          );
        }
      });
    }

navigateToEdit() {
      const id = this.id; // Substitua pelo ID desejado
      const url = `/Candidato/edit/${id}`;
      this.router.navigateByUrl(url);

}

  ngOnInit(): void {


  }


}
