// thank-you.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent {
  groomName: string = 'Ngọc Thái'; // Thay thế bằng tên của bạn
  brideName: string = 'Kim Ngân'; // Thay thế bằng tên của bạn
  thankYouMessage: string = 'Thank You!';
  signatureMessage: string = 'Forever And Always Our Love';
}