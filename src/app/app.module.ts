import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './landing-page/footer/footer.component';
import { HeaderComponent } from './landing-page/header/header.component';
import { CarouselComponent } from './landing-page/carousel/carousel.component';
import { HeadingComponent } from './landing-page/heading/heading.component';
import { CardBoardComponent } from './landing-page/card-board/card-board.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormularioComponent } from './formulario/formulario.component';
import { CustomFormsModule } from 'ng2-validation';
import { FormguardGuard } from './servicios/formguard.guard';
import { AuthInterceptorService } from './servicios/auth-interceptor.service';
import { VisorComponent } from './formulario/visor/visor.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FooterComponent,
    HeaderComponent,
    CarouselComponent,
    HeadingComponent,
    CardBoardComponent,
    LoginComponent,
    FormularioComponent,
    VisorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomFormsModule
  ],
  providers: [
    LoginService,
    FormguardGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
