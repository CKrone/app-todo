import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public addItemTaskList: string = "";

  public submitItemTaskList(){
    //console.log(this.addItemTaskList);
    
    //Método para remover os espaços e não deixar salvar com ou só espaços.
    this.addItemTaskList = this.addItemTaskList.trim();
    //Validando string diferente de vazio
    if (this.addItemTaskList){
    this.emitItemTaskList.emit(this.addItemTaskList);
    this.addItemTaskList = "";
    }
  }











}
