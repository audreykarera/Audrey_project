import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth/auth.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    role: number;

}
export const ROUTES: RouteInfo[] = [
    { path: '/learner/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' ,role: 0},
    { path: '/learner/register', title: 'Register Course',  icon:'library_books', class: '' ,role: 2},
    { path: '/learner/my-courses', title: 'My Courses',  icon:'content_paste', class: '' ,role: 2},
    { path: '/learner/userprofile', title: 'User Profile',  icon:'person', class: '' ,role: 2},

    { path: '/admin/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' ,role: 0},
    { path: '/admin/learners', title: 'Learners',  icon:'people', class: '' ,role: 1},
    { path: '/admin/courses', title: 'Courses',  icon:'class', class: '' ,role: 1},
    { path: '/admin/subjects', title: 'Subjects',  icon:'subject', class: '' ,role: 1},
    { path: '/admin/centres', title: 'Centres',  icon:'place', class: '' ,role: 1},
    { path: '/admin/registered-learners', title: 'Registered Learners',  icon:'people_outline', class: '' ,role: 1},

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem.role == this.authService.getUserRole);

   // this.menuItems = ROUTES.filter(menuItem => menuItem.role ==1);

  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
