import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnerLayoutComponent } from './learner-layout.component';
import { AdminLayoutRoutes } from '../admin-layout/admin-layout.routing';
import { LearnerLayoutRoutes } from './learner-layout.routing';
import { RouterModule } from '@angular/router';
import { LearnerDashboardComponent } from './LearnerDashboard/LearnerDashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(LearnerLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    LearnerDashboardComponent]
})
export class LearnerLayoutModule { }