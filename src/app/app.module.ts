import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserAsyncComponent } from './user-async/user-async.component';
import { ReversePipe } from './reversePipe/reverse-value.pipe';
import { AuthInterceptor } from './shared/authInterceptor.service';
import { LoggingInterceptor } from './shared/loggingInterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserAsyncComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
