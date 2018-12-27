import {Component, OnInit} from "@angular/core"

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Bem vindo ao software de Ordem de Serviços!'

  constructor() { }

  ngOnInit() {
  }

}
