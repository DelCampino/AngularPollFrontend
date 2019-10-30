import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { MatSidenavModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HelpComponent } from './help/help.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MembersModule } from './members/members.module';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { BgridComponent } from './bgrid/bgrid.component';
import { TdFormsModule } from './td-forms/td-forms.module';
import { TdFormComponent } from './td-forms/td-form/td-form.component';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { RxFormsModule } from './rx-forms/rx-forms.module';
import { RxFormComponent } from './rx-forms/rx-form/rx-form.component';
import { SecurityComponent } from './security/security/security.component';
import { SecurityModule } from './security/security.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from './security/security/interceptor.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'help', component: HelpComponent },
  { path: 'flex', component: FlexboxComponent },
  { path: 'bgrid', component: BgridComponent },
  { path: 'tdforms', component: TdFormComponent },
  { path: 'rxforms', component: RxFormComponent },
  { path: 'security', component: SecurityComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    HelpComponent,
    FlexboxComponent,
    BgridComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MembersModule,
    TdFormsModule,
    RxFormsModule,
    SecurityModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SecurityInterceptor,
    multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
