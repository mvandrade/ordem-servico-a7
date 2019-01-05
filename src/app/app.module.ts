import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';

import { ROUTES } from './app.routing';
import { AuthGuard } from './_guards';
import { AlertService, AuthenticationService, UsuarioService } from './_services';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    LoginModule,
    SharedModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UsuarioService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
