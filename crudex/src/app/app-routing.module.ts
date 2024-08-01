import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewjobComponent } from './newjob/newjob.component';
import { ResumesComponent } from './resumes/resumes.component';
import { JoblistComponent } from './joblist/joblist.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ProfileComponent } from './profile/profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserJobsComponent } from './user-jobs/user-jobs.component';
import { UserContactComponent } from './user-contact/user-contact.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { UserJobdetailsComponent } from './user-jobdetails/user-jobdetails.component';

const routes: Routes = [
  { path: '', component: HomeComponent },    // Default route
  { path: 'jobs', component: JobsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'newjob', component: NewjobComponent },
  { path: 'viewresume', component: ResumesComponent },
  { path: 'joblist', component: JoblistComponent },
  { path: 'contactlist', component: ContactlistComponent },
  { path: 'jobDetails/:id', component: JobDetailsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user-profile', component: UserProfileComponent },


  {path:'user-list',component: UserListComponent},
  {path:'user-home',component: HomeComponent},
  {path:'user-jobs',component: JobsComponent},
  {path:'user-contact',component: ContactComponent},
  {path:'user-navbar',component: UserNavbarComponent},
  { path: 'user-jobDetails/:jobID', component: JobDetailsComponent }

  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
