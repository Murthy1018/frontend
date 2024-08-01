import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobEditComponent } from './job-edit/job-edit.component';
import { JoblistComponent } from './joblist/joblist.component';
import { JobsComponent } from './jobs/jobs.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NewjobComponent } from './newjob/newjob.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ResumesComponent } from './resumes/resumes.component';
import { UserContactComponent } from './user-contact/user-contact.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserJobdetailsComponent } from './user-jobdetails/user-jobdetails.component';
import { UserJobsComponent } from './user-jobs/user-jobs.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    AdminComponent,
    ContactComponent,
    ContactlistComponent,
    JobDetailsComponent,
    JobEditComponent,
    JoblistComponent,
    JobsComponent,
    LoginComponent,
    NavBarComponent,
    NewjobComponent,
    ProfileComponent,
    RegisterComponent,
    ResumesComponent,
    UserContactComponent,
    UserHomeComponent,
    UserJobdetailsComponent,
    UserJobsComponent,
    UserListComponent,
    UserNavbarComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
