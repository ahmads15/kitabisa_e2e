import { Given, When, Then } from 'cucumber';
import * as donation from '../pages/donation';

Given(/^a web browser is kitabisa.com page$/, async () => {
    await donation.goToWebsite();
});

When(/^User choose donasi$/, async () => {
    await donation.chooseDonasi();
});

When(/^User choose donation saling jaga$/, async () => {
    await donation.chooseDonationSalingJaga();
});

When(/^User click button donasi sekarang$/, async () => {
    await donation.clickBtnDonasiSekarang();
});

When(/^User click amount as 10k$/, async () => {
    await donation.click10k();
});

When(/^User choose transfer BCA as payment method$/, async () => {
    await donation.chooseTransferBCA();
});

Then(/^User successfully payment and redirect to penggalangan dana$/, async () => {
    await donation.successPayment();
});