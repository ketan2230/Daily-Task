import {OnInit } from '@angular/core';
import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-cryptojs',
  templateUrl: './cryptojs.component.html',
  styleUrls: ['./cryptojs.component.css']
})
export class CryptojsComponent{

  tokenFromUI: string = "0123456789654321";
  encrypted: any = "";
  decrypted: string;

  request: string;
  responce: string;
  constructor() {
    this.encryptUsingAES256();
  }
  encryptUsingAES256() {
    let _key = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
    let _iv = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
    let encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(this.request), _key, {
        keySize: 16,
        iv: _iv,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      });
    this.encrypted = encrypted.toString();
  }
  decryptUsingAES256() {
    let _key = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
    let _iv = CryptoJS.enc.Utf8.parse(this.tokenFromUI);

    this.decrypted = CryptoJS.AES.decrypt(
      this.encrypted, _key, {
        keySize: 16,
        iv: _iv,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      }).toString(CryptoJS.enc.Utf8);
  }

  copyInputMessage(inputElement){
    inputElement.select();
    console.log(inputElement.value);
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

}
