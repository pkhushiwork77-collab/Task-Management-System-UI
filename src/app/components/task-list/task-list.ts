import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Task } from '../../services/task';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList implements OnInit {

  tasks: any[] = [];
  searchTerm: string = '';
  selectedStatus: string = 'all';

  constructor(
    private taskService: Task,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTask().subscribe((data: any) => {
      this.tasks = data.data;
      this.cdr.markForCheck();
    });
  }

  toggleTaskStatus(id: number) {
    this.taskService.toggleStatus(id).subscribe(() => {
      this.getTasks();
      this.cdr.markForCheck();
    })
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.getTasks();
      this.cdr.markForCheck();
    })
  }

  onAddTask() {
    this.router.navigate(['tasks/create']);
  }

  viewTaskDetails(id: number) {
    this.router.navigate(['tasks/', id]);
  }

  onSearch() {
    this.taskService.getTask({ search: this.searchTerm, status: this.selectedStatus }).subscribe((data:any) => {
      this.tasks = data.data;
      this.cdr.markForCheck();
    })
  }
}
