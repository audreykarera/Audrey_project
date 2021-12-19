import { Routes } from '@angular/router';

import { LearnerDashboardComponent } from './LearnerDashboard/LearnerDashboard.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { UserProfileComponent } from './user-profile/user-profile.component';



export const LearnerLayoutRoutes: Routes = [
    {
      path: '',
      children: [ {
        path: 'dashboard',
        component: LearnerDashboardComponent
    }]},

    {
    path: '',
    children: [ {
      path: 'userprofile',
      component: UserProfileComponent
    }]
    }, {
        path: '',
        children: [ {
            path: 'typography',
            component: TypographyComponent
        }]
    },
    { path: 'table-list',     component: TableListComponent },
];
