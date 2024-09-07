import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const elements = document.querySelectorAll('.heading, .subheading, .image-container, .BasicInfo, .paragraph');
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        if (el.classList.contains('paragraph')) {
          el.classList.add('show-animate-p'); // Specific class for paragraphs
        } else {
          el.classList.add('show-animate'); // General animation class
        }
      } else {
        el.classList.remove('show-animate', 'show-animate-p');
      }
    });
  }
}
