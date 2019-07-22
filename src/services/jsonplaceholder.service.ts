import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {user} from '../models/user';
import {Observable} from 'rxjs';
import {task} from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  loginhUrl = 'http://localhost:3000/login';
  userUrl = 'http://localhost:3000/getuser';
  reghUrl = 'http://localhost:3000/registration';
  gettaskshUrl = 'http://localhost:3000/gettasks';
  addUrl = 'http://localhost:3000/addtask';
  delUrl = 'http://localhost:3000/deletetask';
  shareUrl = 'http://localhost:3000/share';
  editUrl = 'http://localhost:3000/edit';

  constructor(
    private  http: HttpClient
  ) {
  }

  postLogin(data) {
    return this.http.post(this.loginhUrl, {data});
  }

  postshare(data) {
    return this.http.post(this.shareUrl, {data});
  }

  postReg(data) {
    return this.http.post(this.reghUrl, {data});
  }

  getuser(data): Observable<user> {
    return this.http.post<user>(this.userUrl, {data});
  }

  postedit(data) {
    return this.http.post(this.editUrl, {data});
  }

  postTask(data) {
    return this.http.post(this.addUrl, {data});
  }

  delTask(data) {
    return this.http.post(this.delUrl, {data});
  }

  getTask(data): Observable<task[]> {
    return this.http.post<task[]>(this.gettaskshUrl, {data});
  }

}
