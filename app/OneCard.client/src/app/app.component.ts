import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ToolbarComponent,
    LoginComponent,
    LogoutComponent
  ],
})
export class AppComponent {
  title = 'OneCard.client';
}
