import { Routes } from '@angular/router';
import { TaskList } from './components/task-list/task-list';
import { TaskForm } from './components/task-form/task-form';
import { TaskDetails } from './components/task-details/task-details';

export const routes: Routes = [
    {path: '', redirectTo: 'tasks', pathMatch: 'full'},
    {path: 'tasks/create', component: TaskForm},
    {path: 'tasks/:id', component: TaskDetails},
    {path: 'tasks', component: TaskList},
];
