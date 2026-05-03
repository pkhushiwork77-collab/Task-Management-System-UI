import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../../services/task';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-form',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  taskForm: FormGroup;

  constructor(
    private taskService: Task,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.taskForm = this.fb.group({
      'title' : ['', [Validators.required, Validators.minLength(3)]],
      'description' : ['']
    });
  }

  onSubmit() {
    const body = {
      title: this.taskForm.value.title,
      description: this.taskForm.value.description,
      status: 'pending'
    }
    this.taskService.createTask(body).subscribe(() => {
        this.taskForm.reset();
        this.router.navigate(['tasks']);
    })
  }
}
