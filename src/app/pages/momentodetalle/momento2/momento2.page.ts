import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonRouterLink, IonItem, IonButton } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-momento2',
  templateUrl: './momento2.page.html',
  styleUrls: ['./momento2.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule ,IonCard, IonicModule , RouterLink, IonRouterLink, IonItem, IonButton]
})
export class Momento2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
