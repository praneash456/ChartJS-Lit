import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import '../../../dist/my-lit-lib/my-lit-lib.js'

@Component({
  imports: [NxWelcome, RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class App {
  protected title = 'my-angular-app';
}
