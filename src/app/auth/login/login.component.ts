import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LazyLoadScriptService } from 'app/services/lazy-load-script.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(    private lazyLoadService: LazyLoadScriptService, private router: Router) { }

  ngOnInit() {
    this.lazyLoadService.loadScript('/assets/jquery.min.js').subscribe((_) => {
      console.log('Jquery is loaded!');
      this.loadJS();
    });
  }

  loadJS() {
    $(".login-form").hide();
    $(".login").css("background", "none");

    $(".login").click(function(){
      $(".signup-form").hide();
      $(".login-form").show();
      $(".signup").css("background", "none");
      $(".login").css("background", "#fff");
    });

    $(".signup").click(function(){
      $(".signup-form").show();
      $(".login-form").hide();
      $(".login").css("background", "none");
      $(".signup").css("background", "#fff");
    });

    $(".btn").click(function(){
      $(".input").val("");
    });
  }


  login() {
      this.router.navigate(['dashboard']);
  }
  register() {
    this.router.navigate(['register']);
}

}
