import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [NgIf, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  descriere: string = ' Scurta descriere pentru Home'
  myimg:string = 'https://cdnlogo.com/logos/a/35/angular.svg'
  showImage:boolean = true;

  salut(){

    this.descriere = 'S-a schimbat descrierea';
  }
  showImg(){
    this.showImage = !this.showImage;

  }
}
