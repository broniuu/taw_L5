import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BlogItemComponent} from './components/blog-item/blog-item.component';
import {BlogComponent} from './components/blog/blog.component';
import {HomeComponent} from './components/home/home.component';
import {ContactComponent} from './components/contact/contact.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {DataService} from "./services/data.service";
import {BlogItemImageComponent} from './components/blog-item-image/blog-item-image.component';
import {BlogItemTextComponent} from './components/blog-item-text/blog-item-text.component';
import {SummaryPipe} from './pipes/summary.pipe';
import {FormsModule} from "@angular/forms";
import {SearchBarComponent} from './shared/search-bar/search-bar.component';
import {BlogHomeComponent} from './components/blog-home/blog-home.component';
import {FilterPipe} from './pipes/filter.pipe';
import {TextFormatDirective} from './directives/text-format.directive';
import {BlogDetailsComponent} from "./components/blog-details/blog-details.component";
import {SelectizeComponent} from './components/selectize/selectize.component';
import {AuthService} from "./services/auth.service";
import {AuthInterceptor} from "./services/auth.interceptor";
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddPostComponent } from './components/add-post/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogItemComponent,
    BlogDetailsComponent,
    BlogComponent,
    HomeComponent,
    ContactComponent,
    NavbarComponent,
    BlogItemImageComponent,
    BlogItemTextComponent,
    SummaryPipe,
    SearchBarComponent,
    BlogHomeComponent,
    FilterPipe,
    TextFormatDirective,
    SelectizeComponent,
    LoginComponent,
    SignupComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DataService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
