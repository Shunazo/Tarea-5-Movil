
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { accessibilityOutline, accessibilitySharp, apertureOutline, apertureSharp, basketballOutline, basketballSharp, colorPaletteOutline, colorPaletteSharp, giftOutline, giftSharp, heartHalfOutline, heartHalfSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Portada', url: '/inicio', icon: 'accessibility' },
    { title: 'Acerca de', url: '/informacion', icon: 'aperture' },
    { title: 'Personajes', url: '/personajes', icon: 'basketball' },
    { title: 'En mi vida', url: '/vida', icon: 'heart-half' },
    { title: 'Momentos', url: '/momentos', icon: 'color-palette' },
    { title: 'Contacto', url: '/contratame', icon: 'mail' }
  ];
  constructor() {
    addIcons({  accessibilityOutline, accessibilitySharp, apertureOutline, apertureSharp, basketballOutline, basketballSharp, colorPaletteOutline, colorPaletteSharp, giftOutline, giftSharp, heartHalfOutline, heartHalfSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }
}
