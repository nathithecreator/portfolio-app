import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './sections/home/home/home.component';
import { SkillsComponent } from './sections/skills/skills/skills.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { AboutComponent } from './sections/about/about.component';
import { EducationComponent } from './sections/education/education.component';
import { FooterComponent } from './sections/footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    ProjectsComponent,
    AboutComponent,
    EducationComponent,
    FooterComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
