import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const elements = document.querySelectorAll('.heading, .subheading, .contactBtn, .socials');
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

  openLink() {
    window.open('https://www.linkedin.com/in/nkosinathi-sikhosana-8b3912169/', '_blank');
  }
}
