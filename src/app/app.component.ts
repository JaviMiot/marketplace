import { Component } from '@angular/core';
import { IProduct } from './product.model';

type Person = {
  name: string;
  age: number;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'marketplace';
  btnSendEnable = true;

  person: Person = {
    name: 'Javier',
    age: 29,
  };

  products: IProduct[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://source.unsplash.com/random',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://source.unsplash.com/random',
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://source.unsplash.com/random',
    },
    {
      name: 'Mis libros',
      price: 23,
      image: 'https://source.unsplash.com/random',
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: 'https://source.unsplash.com/random',
    },
    {
      name: 'Gafas',
      price: 3434,
      image: 'https://source.unsplash.com/random',
    },
  ];

  register = {
    name: '',
    email: '',
    password: '',
  };

  onRegister() {
    console.log(this.register);
  }

  box = {
    width: 10,
    height: 10,
    background: 'red',
  };
  names: string[] = ['jorge', 'manuel', 'carlos', 'Anita'];
  newName = '';

  addName() {
    if (this.newName) {
      this.names.push(this.newName);
      this.newName = '';
    }
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }

  onSave() {
    this.btnSendEnable = !this.btnSendEnable;
  }

  addAge() {
    this.person.age++;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  onChangeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.title = element.value;
  }
}
