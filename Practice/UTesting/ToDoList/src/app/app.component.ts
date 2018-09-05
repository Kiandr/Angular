import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  template: `
   <input [(ngModel)]="name" >
  <button (click)="add()">Click me!</button>
  <p> {{getRemainingCount()}} remaining out of {{getTotal()}} tasks</p>
  <ng-template ngFor let-item [ngForOf]="items">
  <li [ngClass]="{'is-done': item.isDone}" (click)="handleClick($event, item)" >{{item.name}}</li>


  
`,
styles: [`
.is-done {
text-decoration: line-through;
}
`]
})
export class AppComponent {
  title = 'toDoList';

  public taskCounter: number = 0;
  public name: string = '';
  public items: Array<TodoItem> = [];
  
  
public getTotal(){
    return this.items.length;
}
  public getRemainingCount() {
    return this.items.filter(item => !item.isDone).length;
  }
  
  public handleClick(event:any, myitem:any){
      let member = this;
      console.log(member);
      myitem.isDone = !myitem.isDone;
      console.log(myitem.isDone);
      console.log(myitem.name);
      
  }
  
  public getRemainingItems(){
  
    let remainingToDo = 0;  
    for (let item of this.items)
    if (item.isDone == true)
    remainingToDo++;
    this.taskCounter = remainingToDo;
      return remainingToDo;
  }
  
  public add() {
  if (this.name.length>0){
    let newItem:TodoItem = new TodoItem();
    newItem.isDone = false;
    newItem.name = this.name;
    this.items.push(newItem);
    console.log(newItem);
    this.name = '';
    this.taskCounter++;
    }
  }

  public toggleItem(item: TodoItem) {
    item.isDone = !item.isDone;
  }
}
class TodoItem {
  isDone: boolean;
  name: string;
}
