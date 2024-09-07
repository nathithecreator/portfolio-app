import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './sections/home/home/home.component';
import { SkillsComponent } from './sections/skills/skills/skills.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { AboutComponent } from './sections/about/about.component';
import { EducationComponent } from './sections/education/education.component';
import { FooterComponent } from './sections/footer/footer.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'skills',
    component: SkillsComponent
  },
  {
    path:'projects',
    component: ProjectsComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'education',
    component: EducationComponent
  },
  {
    path:'footer',
    component: FooterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
