// task-form.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService, Task } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task: Task = { id: null, title: '', description: '', completed: false };
  routeName: any = ""

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.routeName = this.router.url
    const id = this.route.snapshot.params['id'];
    if (id) {
      const task = this.taskService.getTaskById(id);
      if (task) {
        this.task = { ...task };
      }
    }
  }


  saveTask(): void {
    if (this.isTaskValid(this.task)) {
      if (this.task.id) {
        this.taskService.editTask(this.task.id, this.task);
      } else {
        this.task.id = new Date().getTime();
        this.taskService.addTask(this.task);
      }
      this.task = { id: null, title: '', description: '', completed: false };
      this.router.navigate(['']);
    } else {
      alert('Invalid task: Please fill the Task details and submit');
      // Handle invalid task (e.g., show error message to user)
    }
  }

  private isTaskValid(task: Task): boolean {
    if (!task || !task.title || !task.description) {
      return false; // Title and description are required
    }
    if (task.title.length < 4 || task.description.length < 4) {
      return false; // Title and description must be at least 4 characters long
    }
    // Add any other validation rules here if needed
    return true; // Task is valid
  }
}

