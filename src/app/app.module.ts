import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserAsyncComponent } from './user-async/user-async.component';
import { ReversePipe } from './reversePipe/reverse-value.pipe';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
