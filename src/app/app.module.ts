import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { VerifyComponent } from './verify/verify.component';
import { IntrestComponent } from './intrest/intrest.component';
import { ProfileComponent } from './profile/profile.component';
import { MediaComponent } from './media/media.component';
import { CoursesComponent } from './courses/courses.component';
import { ProjectsComponent } from './projects/projects.component';
import { QuizComponent } from './quiz/quiz.component';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { InterestService } from './interest.service';
import { RegisterfaceComponent } from './register/registerface/registerface.component';
import { RegistertraditionalComponent } from './register/registertraditional/registertraditional.component';
import { LoginfaceComponent } from './login/loginface/loginface.component';
import { LogintraditionalComponent } from './login/logintraditional/logintraditional.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    VerifyComponent,
    IntrestComponent,
    ProfileComponent,
    MediaComponent,
    CoursesComponent,
    ProjectsComponent,
    QuizComponent,
    ChatComponent,
    RegisterfaceComponent,
    RegistertraditionalComponent,
    LoginfaceComponent,
    LogintraditionalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    
  ],
  providers: [
    UserService,
    InterestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
