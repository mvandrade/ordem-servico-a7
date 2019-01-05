import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {

  
  passwordPattern = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/
  registroForm: FormGroup

  constructor(
    private formBuilder: FormBuilder) {

    }

  ngOnInit() {

    this.registroForm = this.formBuilder.group({
      nome: this.formBuilder.control('',[Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('',[Validators.required, Validators.email]),
      password: this.formBuilder.control('',[Validators.required, Validators.pattern(this.passwordPattern)]),
      confirmePassword: this.formBuilder.control('',[Validators.required])
  },{ validator: RegistroComponent.equalsTo});
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
