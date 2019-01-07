import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, UsuarioService, AuthenticationService } from '@/_services';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {

  
  passwordPattern = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/
  registroForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private usuarioService: UsuarioService,
    private alertService: AlertService) { }

  ngOnInit() {

    this.registroForm = this.formBuilder.group({
      nome: this.formBuilder.control('',[Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('',[Validators.required, Validators.email]),
      password: this.formBuilder.control('',[Validators.required, Validators.pattern(this.passwordPattern)]),
      confirmePassword: this.formBuilder.control('',[Validators.required])
  },{ validator: RegistroComponent.equalsTo});
  }

  onSubmit() {

    this.usuarioService.register(this.registroForm.value)
      .pipe(first())
      .subscribe(
          data => {
              this.alertService.success('Registro Realizado com sucesso', true);
              this.router.navigate(['/login']);
          },
          error => {
              this.alertService.error(error);
          });
  }

  static equalsTo( group: AbstractControl): {[key: string]: boolean} {

    const password = group.get('password')
    const confirmePassword = group.get('confirmePassword')

    if(!password || !confirmePassword){
      return undefined
    }

    if(password.value !== confirmePassword.value){
      return {'passwordsNotMatch': true}
    }

      return undefined
  }

}
