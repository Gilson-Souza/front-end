import { Candidatoo } from './../models/Candidato';
import { CandidatosService } from './../services/candidatos.service';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-candidato-form',
  templateUrl: './candidato-form.component.html',
  styleUrls: ['./candidato-form.component.scss']
})
export class CandidatoFormComponent {

meuFormulario: FormGroup;

    constructor(
      private formBuilder: FormBuilder,
      public dialog: MatDialog,
      private router : Router,
      private route: ActivatedRoute,
      private candidatoService: CandidatosService,
      private bar: MatSnackBar

      )

    {

      this.meuFormulario = this.formBuilder.group({

        Nome: [''],

          Filiacao: this.formBuilder.group({
            NomePai: [''],
            NomeMae: ['']
          }),

          Endereco: this.formBuilder.group({
            Logradouro: [''],
            Cep: [''],
            Numero: [''],
            Cidade: this.formBuilder.group({
              Nome: [''],
              Estado: this.formBuilder.group({
                Nome: [''],
                Sigla: ['']
              })

            })

          }),

          Telefones: this.formBuilder.array([]),

          Cursos: this.formBuilder.array([])

      })

    }



    get telefones() {
      return this.meuFormulario.controls["Telefones"] as FormArray;
    }

    get cursos(){
      return this.meuFormulario.controls["Cursos"] as FormArray;
    }


    addPhone() {
      const phoneForm = this.formBuilder.group({
        Numero: [''],
        Tipo: ['']
      });
      this.telefones.push(phoneForm);
    }

    deletePhone(phoneIndex: number) {
      this.telefones.removeAt(phoneIndex);
    }

    addCourse(){
    const courseForm =  this.formBuilder.group({
      Nome: ['']
      });
      this.cursos.push(courseForm);
    }

    deleteCourse(courseIndex: number) {
      this.cursos.removeAt(courseIndex)
    }

    onError() {
      this.bar.open('Erro ao salvar candidato', '' , {duration: 5000})
    };

    onSucess(){
      this.bar.open('Sucesso ao salvar candidato', '' , {duration: 5000})
    }

    home(){
      this.router.navigate([''], {relativeTo: this.route })
    }




    enviarFormulario(): void {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: 'Deseja realmente inserir um candidato?'
      });
      dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const candidatoData: Candidatoo = this.meuFormulario.value;
        console.log(candidatoData);
        this.candidatoService.save(this.meuFormulario.value).subscribe(
        () => {
            this.dialog.closeAll();
            this.bar.open('Candidato inserido com sucesso!', 'Fechar', { duration: 5000 });
            this.router.navigate([''], {relativeTo: this.route })
        },
          (error) => {
            this.onError();
            if (error && error.errors && error.errors.CandidatoModel) {
              const candidatoModelError = error.errors.CandidatoModel;
              this.bar.open('Erro ao inserir candidato. Tente novamente mais tarde.', 'Fechar');
              }
            }
          );
        }
      });
    }


}



