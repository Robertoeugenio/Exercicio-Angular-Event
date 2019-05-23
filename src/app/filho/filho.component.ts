import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {

  @Input() recebeFamilia;


  constructor() { }

  ngOnInit() {
   console.log(this.recebeFamilia)
   console.log("Objeto familia recebido do componente pai via imput: ", this.recebeFamilia)
  }

  feedback(){
    console.log("Resposta para o componente pai", 
    this.recebeFamilia.emit({"nome": "Raimundo", "sobrenome": "nonato"}));
  }
}
