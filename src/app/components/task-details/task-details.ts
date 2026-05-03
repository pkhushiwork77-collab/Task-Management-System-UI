import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../services/task';

@Component({
  selector: 'app-task-details',
  imports: [],
  templateUrl: './task-details.html',
  styleUrl: './task-details.css',
})
export class TaskDetails implements OnInit {
  task: any;
  
  constructor(
    private router: Router,
    private taskService: Task,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const taskId = params['id'];
      this.getTaskDetails(taskId);
    });
  }

  getTaskDetails(taskId: number) {
    this.taskService.getTaskById(taskId).subscribe((data: any) => {
      this.task = data.data;
      this.cdr.detectChanges();
    });
  }

  goBackToList() {
    this.router.navigate(['tasks']);
  }
}
