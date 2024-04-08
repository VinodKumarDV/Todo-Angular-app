// task-list.component.ts
import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.loadTasks()
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe(tasks => {
      // Check if the tasks array is empty
      if (tasks.length === 0) {
        // Add default tasks only if the tasks array is empty
        const defaultTasks: Task[] = [
          { id: 1, title: 'Default Task 1', description: 'This is the first default task', completed: false },
          { id: 2, title: 'Default Task 2', description: 'This is the second default task', completed: false },
          { id: 3, title: 'Default Task 3', description: 'This is the third default task', completed: false }
        ];
        defaultTasks.forEach(task => this.taskService.addTask(task));
      }
      // Set the tasks array
      this.tasks = tasks;
    });
  }

  editTask(id: number | null) {
    this.router.navigate(['edit', id]);
  }

  deleteTask(id: number | null) {
    this.taskService.deleteTask(id);
    // After deleting the task, reload the tasks
    this.loadTasks();
  }
}
