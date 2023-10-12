import { Component } from '@angular/core';

/**
 * The root component of the application.
 * It sets the title of the application to "GitHub Copilot for developers training."
 */
@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitHub Copilot for developers training.';
}
