import { Component, OnInit } from '@angular/core';
import {Todo }from './../../models/Todo'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todos:Todo[]
inputTodo:string="";;
  constructor() { }

  ngOnInit(): void {
    this.todos=[]
  }
toggleDone(id:number){
this.todos.map((v ,i)=>{
if(i==id) v.completed =!v.completed;
return v;
})
}
deleteTodo(id:number){
  if (confirm("Êtes-vous sûr de vouloir supprimer ce to-do list ?")){
    this.todos=this.todos.filter((v,i)=>i !==id);

  }
}
addTodo(){
  if(this.inputTodo.length)
  this.todos.push({
    content:this.inputTodo,
    completed:false
  })
  this.inputTodo="";
}

}
