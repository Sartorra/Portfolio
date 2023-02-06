import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntroductionComponent } from './introduction/introduction.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
<<<<<<< HEAD
=======
import { ContactComponent } from './contact/contact.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent }
];
>>>>>>> 817ee72a9d9a9c5cdbb484749dcb9f112f652dc1

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    AboutComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule,
    BrowserAnimationsModule
=======
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule
>>>>>>> 817ee72a9d9a9c5cdbb484749dcb9f112f652dc1
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
