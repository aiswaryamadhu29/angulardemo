import { Component } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

interface Services {
  [key: string]: string[];
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class NavbarComponent {
  services: Services = {
    "Enterprise Services": [
      "Digital Transformation",
      "Enterprise Software Development",
      "Legacy Application Modernization",
      "System Integrations"
    ],
    "Software Product Development": [
      "Web Application Development",
      "MVP Development",
      "Mobile App Development"
    ]
  };

  isDropdownOpen = false; // Track dropdown state

  getCategories(): string[] {
    return Object.keys(this.services);
  }

  getItems(category: string): string[] {
    return this.services[category] || [];
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen; // Toggle dropdown open/close
  }
}
