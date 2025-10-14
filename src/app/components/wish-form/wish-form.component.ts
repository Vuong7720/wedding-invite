import { Component } from '@angular/core';

@Component({
  selector: 'app-wish-form',
  templateUrl: './wish-form.component.html',
})
export class WishFormComponent {
  wish = {
    name: '',
    message: '',
  };
  wishes: any
  submitted = false;

  onSubmit() {
    this.submitted = true;

    // Lưu lời chúc tạm vào localStorage
    this.wishes = JSON.parse(localStorage.getItem('wishes') || '[]');
    this.wishes.push({ ...this.wish, date: new Date() });
    localStorage.setItem('wishes', JSON.stringify(this.wishes));

    // Reset form
    this.wish = { name: '', message: '' };
    console.log(this.wishes)
  }
}
