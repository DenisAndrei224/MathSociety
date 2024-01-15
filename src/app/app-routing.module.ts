import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  
  { path: 'feed', component: FeedComponent },
  { path: 'profile', component: ProfileComponent },
  
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
