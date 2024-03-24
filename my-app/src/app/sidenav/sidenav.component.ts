import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  standalone: true,
  imports: [CommonModule, MatSidenavModule],
})
export class SidenavComponent {
  @ViewChild('drawer') drawer!: MatSidenav;

  _isShowSideNav = false;
  get isShowSideNav(): boolean {
    return this._isShowSideNav;
  }
  @Input() set isShowSideNav(isShown: boolean) {
    isShown ? this.drawer?.open() : this.drawer?.close();
    this._isShowSideNav = isShown;
  }
}
