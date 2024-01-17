import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-todoapp';
  list: any[] = [];

  ngOnInit(): void {
    this.retrieveTodos();
  }

  addTodo(item: string) {
    this.list.push({ id: this.list.length, todo: item, status: false });
    this.storeTodos();
  }

  update(ids: number) {
    this.list[ids].status = !this.list[ids].status;
    this.storeTodos();
  }

  deleteTodo(id: number) {
    this.list = this.list.filter(item => item.id !== id);
    this.storeTodos();
  }

  storeTodos() {
    localStorage.setItem('todos', JSON.stringify(this.list));
  }

  retrieveTodos() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.list = JSON.parse(storedTodos);
    }
  }
}
