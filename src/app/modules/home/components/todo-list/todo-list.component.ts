import { TaskList } from './../../model/task-list';
import { Component, OnInit } from '@angular/core';
import { first, last } from 'rxjs';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = [ ];

  constructor() { }

  ngOnInit(): void {
  }
  ngDoCheck() {
    this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));

  }
  public setEmitTaskList(event: string){
    //Inserindo task no array
    this.taskList.push({task: event, checked: false});
  }
  //Método para deletar um item da lista
  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1);
  }

  //Método para deletar todos itens da lista.
  public deleteAllTaskList() {
    const confirm = window.confirm("Você deseja realmente deletar todas Tasks?");

    if (confirm){
    this.taskList = [];
    }
  }
  public validationInput(event: string, index: number){

    if(!event.length){
      const confirm = window.confirm('Task está vazia, deseja deletar?');
      if (confirm){
        this.deleteItemTaskList(index);
      }
    }
    
  }

}
