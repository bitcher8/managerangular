import {Component, OnInit} from '@angular/core';
import {JsonplaceholderService} from '../../services/jsonplaceholder.service';
import {ActivatedRoute} from '@angular/router';
import {from} from 'rxjs';
import {task} from '../../models/task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tasks: task[];
  addform = false;
  login = null;

  constructor(private  ja: JsonplaceholderService,
              private  acRout: ActivatedRoute) {
  }

  ngOnInit() {
    this.acRout.queryParams.subscribe((p) => {
      this.login = p.data;
    });
    this.updatetasks(this.login);
  }

  addtask() {
    this.addform = !this.addform;
  }

  updatetasks(data) {
    this.ja.getTask(data).subscribe((req) => {
      this.tasks = req;
    });
    console.log('ggg');
  }

  add(formtask) {
    let data = {
      login: this.login,
      info: formtask.value.info,
      level: formtask.value.level
    };
    this.addform = false;
    this.ja.postTask(data).subscribe((req) => {
    });
    this.updatetasks(this.login);

  }

  share(tid, user) {
    console.log(user.value.login);
    let data = {
      login: user.value.login,
      id: tid
    };
    this.ja.postshare(data).subscribe((req) => {
    });
  }

  edit(id, info, level) {
    let data = {
      id: id,
      info: info,
      level: level

    };
    this.ja.postedit(data).subscribe((req) => {
    });
  }

  delete(id) {
    let data = {
      login: this.login,
      id: id,

    };
    this.ja.delTask(data).subscribe((req) => {
    });
    this.updatetasks(this.login);


  }
}
