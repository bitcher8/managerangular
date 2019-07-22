import {Component, OnInit} from '@angular/core';
import {JsonplaceholderService} from '../services/jsonplaceholder.service';
import {from} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private  ja: JsonplaceholderService, private router: Router) {
  }

  incorect = false;
  loginshow = true;
  showreg = false;
  answer = null;
  info = false;

  ngOnInit() {
  }

  Login(formlog) {

    this.ja.postLogin(formlog.value).subscribe((res) => {
      if (res === true) {
        this.loginshow = false;
        this.router.navigate(['/home'], {queryParams: {data: formlog.value.login}});
      } else {
        this.incorect = true;
      }


    });
  }

  regshow() {
    this.showreg = !this.showreg;
  }

  singup(formreg) {
    this.ja.postReg(formreg.value).subscribe((res) => {
      console.log(res);
      this.info = true;
      if (res === true) {
        this.showreg = false;
        this.answer = 'user created';
      } else {
        this.answer = 'user exe';
      }


    });
  }
}
