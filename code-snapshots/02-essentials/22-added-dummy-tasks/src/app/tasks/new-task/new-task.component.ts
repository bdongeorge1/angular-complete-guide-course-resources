import {
  Component,
  EventEmitter,
  inject,
  Inject,
  Input,
  input,
  output,
  Output,
} from '@angular/core';
import { NewTask, Task } from '../task/task.model';
import { TasksComponent } from '../tasks.component';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  private taskService = inject(TasksService);

  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';

  onCloseSelect() {
    this.close.emit();
  }

  onSubmitForm() {
    this.taskService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
