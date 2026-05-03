import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Task {
    private http = inject(HttpClient);

    private readonly apiUrl = 'https://task-management-system-p2sg.onrender.com/api/tasks';

    getTask(params: any ={}) {
      return this.http.get(this.apiUrl, { params });
    }

    createTask(data: any) {
      return this.http.post(this.apiUrl, data);
    }

    updateTask(id:number, data: any) {
      return this.http.put(`${this.apiUrl}/${id}`, data);
    }

    deleteTask(id: number) {
      return this.http.delete(`${this.apiUrl}/${id}`);
    }

    toggleStatus(id: number) {
      return this.http.patch(`${this.apiUrl}/${id}/toggle`, {});
    }

    getTaskById(id: number) {
      return this.http.get(`${this.apiUrl}/${id}`);
    }
  }
