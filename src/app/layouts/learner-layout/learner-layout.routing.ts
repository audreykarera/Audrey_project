import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { LearnerDashboardComponent } from './LearnerDashboard/LearnerDashboard.component';
// import { IconsComponent } from './icons/icons.component';
// import { LearnersComponent } from './learners/learners.component';
// import { MapsComponent } from './maps/maps.component';
// import { NotificationsComponent } from './notifications/notifications.component';
// import { TableListComponent } from './table-list/table-list.component';
// import { TypographyComponent } from './typography/typography.component';
// import { UserProfileComponent } from './user-profile/user-profile.component';


export const LearnerLayoutRoutes: Routes = [
    {
      path: '',
      children: [ {
        path: 'dashboard',
        component: LearnerDashboardComponent
    }]},

    // {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // },
    // {
    //     path: '',
    //     children: [ {
    //         path: 'learners',
    //         component: LearnersComponent
    //     }]
    // },


];
