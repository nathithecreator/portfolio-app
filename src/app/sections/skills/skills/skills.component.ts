import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  currentDate = new Date();

  skills = [
    { name: 'Java', level: 80 },
    { name: 'React', level: 70 },
    { name: 'Angular', level: 90 },
    { name: 'JavaScript', level: 75 },
    { name: 'C#', level: 90 },
    { name: 'Python', level: 50 }
  ];

  n = 5; // Number of rows, starts from 5 rows
  values = ["Java", "C#", "ASP.NET", "Springboot", "Angular", "React", "MySql", "PostgreSQL", "Azure", "AWS", "TypeScript", "JavaScript", "Python", "MongoDB","Docker"];

  ngOnInit() {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000); // Update every second
  }

  getRows(): number[] {
    return Array.from({ length: this.n }, (_, i) => this.n - i);
  }

  getRowValues(rowIndex: number): string[] {
    const startIndex = (this.n * (this.n + 1)) / 2 - (this.getRows()[rowIndex] * (this.getRows()[rowIndex] + 1)) / 2;
    const endIndex = startIndex + this.getRows()[rowIndex];
    return this.values.slice(startIndex, endIndex);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const elements = document.querySelectorAll('.heading, .subheading, .techsection, .ratingsSection');
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (isVisible) {
        el.classList.add('show-animate');
      } else {
        el.classList.remove('show-animate');
      }
    });
  }
}
