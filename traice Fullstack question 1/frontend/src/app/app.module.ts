import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthService } from './auth.service';
import { FeedbackService } from './feedback.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptopService } from './token-interceptop.service';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, FeedbackService, AuthGuard , {provide:HTTP_INTERCEPTORS,
  useClass : TokenInterceptopService,
multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
