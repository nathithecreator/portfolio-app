import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const elements = document.querySelectorAll('.heading, .subheading');
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        el.classList.add('show-animate');
      } else {
        el.classList.remove('show-animate');
      }
    });
  }
}
