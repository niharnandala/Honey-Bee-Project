import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifyComponent } from './verify/verify.component';
import { IntrestComponent } from './intrest/intrest.component';
import { ProfileComponent } from './profile/profile.component';
import { MediaComponent } from './media/media.component';
import { CoursesComponent } from './courses/courses.component';
import { ProjectsComponent } from './projects/projects.component';
import { QuizComponent } from './quiz/quiz.component';
import { ChatComponent } from './chat/chat.component';
import { RegistertraditionalComponent } from './register/registertraditional/registertraditional.component';
import { RegisterfaceComponent } from './register/registerface/registerface.component';
import { LoginfaceComponent } from './login/loginface/loginface.component';
import { LogintraditionalComponent } from './login/logintraditional/logintraditional.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
   { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'verify',component:VerifyComponent},
  {path:'intrest',component:IntrestComponent},
  {path:'profile',component:ProfileComponent},
  {path:'media',component:MediaComponent},
  {path:'courses',component:CoursesComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'quiz',component:QuizComponent},
  {path:'chat',component:ChatComponent},
  {path:"registertraditional", component:RegistertraditionalComponent},
  {path:"registerface", component:RegisterfaceComponent},
  {path:"loginface",component:LoginfaceComponent},
  {path:"logintraditional", component:LogintraditionalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
