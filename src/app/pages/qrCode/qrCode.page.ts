import { Component, OnInit } from '@angular/core';
import {MenuController, ModalController} from '@ionic/angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { AuthService } from 'src/app/services/auth.service';
import { Utilisateur } from 'src/app/models/utilisateur';
import {ProfilPage} from '../profil/profil.page';

@Component({
  selector: 'app-menu',
  templateUrl: './qrCode.page.html',
  styleUrls: ['./qrCode.page.scss'],
})

export class QrCodePage implements OnInit {

  utilisateur: Utilisateur;
  public showCamera = false;
  public textScanned = '';

  constructor(
    private menu: MenuController,
    private authService: AuthService,
    private modalController: ModalController,
    private qrScanner: QRScanner
  ) {
    this.menu.enable(false);
  }

  ngOnInit() {
  }

  async profil() {
    const profilModal = await this.modalController.create({
      component: ProfilPage,
    });
    return await profilModal.present();
  }

  scanCode() {
    this.showCamera = true;
    // Optionally request the permission early
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // start scanning
          console.log('Scan en cours...' + JSON.stringify(status));
          const scanSub = this.qrScanner.scan().subscribe((text: any) => {
            console.log('Scanned something', text.result);
            this.textScanned = text.result;
            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
            this.showCamera = false;
          });
        } else if (status.denied) {
          // camera permission was permanently denied
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }

  closeCamera() {
    this.showCamera = false;
    this.qrScanner.hide(); // hide camera preview
    this.qrScanner.destroy();
  }
}
