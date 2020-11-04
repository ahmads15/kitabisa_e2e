import * as base from '../base-function/base-functions';
import { client } from 'nightwatch-api';


const elements = {
  borderPenggalanganDana:'#template_horizontal-wide-card-slider',
  chooseDonasi: "//div[@class='style__Container-bkurlc-0 gjquVt']/div[@class='style__TileWrapper-bkurlc-1 jNIJRT']/div[.='Donasi']",
  filter: '.style__FilterWrapper-sc-1740cy6-1.cOsrYx',
  chooseDonationSalingJaga: "//img[@alt='Tolong Menolong Kesehatan Antar Donatur']",
  campaignTitleSalingJaga: '.campaign__Title-sc-13tu1q5-0.jEPNBh',
  btnDonasiSekarang: '#campaign-detail_button_donasi-sekarang',
  popUpCobaSekarang: '.afb-button-container',
  closePopUp: "div[data-af-close-button]",
  donation10k: "div[data-testid='div-donation-amount-option-10000'] > .topWrapper",
  paymentDana: "//span[.='DANA']",
  paymentTransferBCA: "//div[.='Transfer BCA']",
  btnLanjutkanPembayaran: "//span[.='LANJUTKAN PEMBAYARAN']",
  fullname: "input[name='fullname']",
  email: "input[name='username']",
  instruksiPayment: '.style__Title-sc-100dqyk-1',
  btnKembaliPenggalanganDana: "//button[@class='style__ButtonWrapper-nurl6-0 gnKlkT']"
};

export const goToWebsite = async () => {
    client.url('https://kitabisa.com/');
};

export const chooseDonasi = async () => {
   await base.waitElementVisible(elements.borderPenggalanganDana);
   await base.clickElementViaXpath(elements.chooseDonasi);
};

export const chooseDonationSalingJaga = async () => {
  await base.clickElementViaXpath(elements.chooseDonationSalingJaga);
  await base.expectElementEqualText(elements.campaignTitleSalingJaga,'Saling Jaga');
};

export const clickBtnDonasiSekarang = async () => {
  await base.clickElement(elements.btnDonasiSekarang);
  if(await base.elementIsVisible(elements.popUpCobaSekarang) === true){
      await base.clickElement(elements.closePopUp);
  }
};

export const click10k = async () => {
  await base.clickElement(elements.donation10k);
};


export const chooseTransferBCA = async () => {
  await base.expectElementEqualTextXpath(elements.paymentTransferBCA, 'Transfer BCA');
  await base.clickElementViaXpath(elements.paymentTransferBCA);
  await base.asserUrlEquals('https://salingjaga.kitabisa.com/contribute?');
  await base.setValueElement(elements.fullname,'ahmad');
  await base.setValueElement(elements.email,'ahmadsutarji11@gmail.com');
  client.pause(3000);
  await base.clickElementViaXpath(elements.btnLanjutkanPembayaran);
};

export const successPayment = async () => {
  await base.expectElementEqualText(elements.instruksiPayment, 'Instruksi Pembayaran');
  await base.clickElementViaXpath(elements.btnKembaliPenggalanganDana);
  await base.expectElementEqualText(elements.campaignTitleSalingJaga,'Saling Jaga');
};
