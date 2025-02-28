import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonRouterLink, IonItem, IonButton} from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-psj2',
  templateUrl: './psj2.page.html',
  styleUrls: ['./psj2.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule , IonicModule, RouterLink, IonCard, IonRouterLink, IonItem , IonButton]
})
export class Psj2Page  {

 

}
