import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-log-in-out',
  templateUrl: './log-in-out.component.html',
  styleUrl: './log-in-out.component.css',
})
export class LogInOutComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Login',
        icon: 'pi pi-fw pi-sign-in'}, {
        label: 'Logout',
        icon: 'pi pi-fw pi-sign-out'}]

  }
}
