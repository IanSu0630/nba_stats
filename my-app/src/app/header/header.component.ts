import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
})
export class HeaderComponent {
  @Output() toggleSidenav = new EventEmitter<boolean>();
  isShowSideNav = false;

  toggleSideNav(): void {
    this.isShowSideNav = !this.isShowSideNav;
    this.toggleSidenav.emit(this.isShowSideNav);
  }
}
