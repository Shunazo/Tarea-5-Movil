
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'inicio', url: '/inicio', icon: 'mail' },
    { title: 'personajes', url: '/personajes', icon: 'paper-plane' },
    { title: 'vida', url: '/vida', icon: 'heart' },
    { title: 'informacion', url: '/informacion', icon: 'archive' },
    { title: 'momentos', url: '/momentos', icon: 'trash' },
    { title: 'contratame', url: '/contratame', icon: 'warning' },
    { title: 'psj1', url: '/psj1', icon: 'bookmark' },
    { title: 'psj2', url: '/psj2', icon: 'bookmark' },
    { title: 'psj3', url: '/psj3', icon: 'bookmark' }
  ];
  constructor() {
    addIcons({ mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }
}
