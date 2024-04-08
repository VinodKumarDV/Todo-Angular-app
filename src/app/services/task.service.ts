// task.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Task {
  id: number | null;
  title: string;
  description: string;
  completed: boolean;
}

export class TaskService {
  private tasks: Task[] = [];
  private taskSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(this.tasks);

  constructor() { }

  getTasks(): Observable<Task[]> {
    return this.taskSubject.asObservable();
  }

  addTask(task: Task): void {
    this.tasks.push(task);
    this.taskSubject.next(this.tasks);
  }

  editTask(id: number, updatedTask: Task): void {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
      this.taskSubject.next(this.tasks);
    }
  }

  deleteTask(id: number | null): any {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.taskSubject.next(this.tasks);
  }

  getTaskById(id: number): Task | undefined {
    return this.tasks.find(task => task.id == id);
  }
}
