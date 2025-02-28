import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonRouterLink, IonItem, } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-momentos',
  templateUrl: './momentos.page.html',
  styleUrls: ['./momentos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule , IonicModule, RouterLink, IonCard, IonRouterLink, IonItem]
})
export class MomentosPage  {

  

}
