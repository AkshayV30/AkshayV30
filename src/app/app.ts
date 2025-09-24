import { Component, signal } from '@angular/core';
import { TypingEffect } from './components/typing-effect/typing-effect';

@Component({
  selector: 'app-root',
  imports: [TypingEffect],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('AkshayV30');
}
