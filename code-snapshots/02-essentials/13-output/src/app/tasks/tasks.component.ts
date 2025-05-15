import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId?: string;
  @Input({required: true}) name?: string;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learning the basics and advanced features of angular',
      dueDate: '2025-05-10'
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'Build Portfolio Project',
      summary: 'Create a complete Angular application to showcase skills',
      dueDate: '2025-06-15'
    },
    {
      id: 't3',
      userId: 'u1',
      title: 'Learn RxJS',
      summary: 'Master reactive programming with RxJS and Observables',
      dueDate: '2025-07-01'
    },
    {
      id: 't4',
      userId: 'u1',
      title: 'Study Angular Testing',
      summary: 'Practice unit and integration testing with Jasmine and Karma',
      dueDate: '2025-07-20'
    }
  ]   
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId)
  }
}
