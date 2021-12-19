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
    { path: '/admin/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' ,role: 1},
    { path: '/admin/userprofile', title: 'User Profile',  icon:'person', class: '' ,role: 1},
    { path: '/admin/table-list', title: 'Table List',  icon:'content_paste', class: '' ,role: 1},
    { path: '/admin/typography', title: 'Typography',  icon:'library_books', class: '' ,role: 1},
    { path: '/admin/icons', title: 'Icons',  icon:'bubble_chart', class: '' ,role: 1},
    { path: '/admin/maps', title: 'Maps',  icon:'location_on', class: '' ,role: 1},
    { path: '/admin/notifications', title: 'Notifications',  icon:'notifications', class: '' ,role: 1},
    { path: '/admin/learners', title: 'Learners',  icon:'notifications', class: '' ,role: 1},



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
    // this.menuItems = ROUTES.filter(menuItem => menuItem.role == this.authService.getUserRole);

    this.menuItems = ROUTES.filter(menuItem => menuItem.role ==1);

  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
