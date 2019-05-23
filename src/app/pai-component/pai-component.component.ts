import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai-component',
  templateUrl: './pai-component.component.html',
  styleUrls: ['./pai-component.component.css']
})
export class PaiComponentComponent implements OnInit {
  familia: Object[];

  constructor() { 
    this.familia = [
      {
        nome: "Vitor", 
        sobrenome: 'Borges'
      },
      {
        nome: 'Carlos',
        sobrenome: 'Dantas'
      }
    ]
  }

  ngOnInit() {
    console.log(this.familia);
  }
  receberFeedback(respostaFilho){
    console.log('Foi emitido o evento chegou o pai >>> ', respostaFilho);
  }

}
