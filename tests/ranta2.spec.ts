import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import { exec } from 'child_process';
import utils from 'util';

//test.describe.configure({ mode: 'serial' });

test.describe.serial('Fasträntekonto 3 mån', () => {
let blueranta: any;
// let resursranta: any;
let medranta: any;
let sbabranta: any;
let Skandiaranta: any;
let shbranta: any;
let nordiskaranta: any;
let epranta: any;
let learanta: any;
let moankranta: any;
let sebranta: any;
let nordearanta: any;
let swedbankranta: any;
let lansfranta: any;
let collectorranta: any;
let marginalranta: any;
let qlirokranta: any;
let coelikranta: any;
let svearanta: any;
let qredranta: any;
let nstartranta: any;
let sparsydranta: any;
let borgoranta: any;
let broccranta: any;
let jakranta: any;
let arosranta: any;
let serafimranta: any;
let frodaranta: any;
let northranta: any;
let multiranta:any;
//let klarnaranta:any;

// Skapar upp dagens datum.
let date = new Date()
let year = date.getFullYear();
let month = String(date.getMonth()+1).padStart(2, "0");
let day = String(date.getDate()).padStart(2, "0");
let hour = String(date.getHours()).padStart(2, "0");
let min = String(date.getMinutes()).padStart(2, "0");
let sec = String(date.getSeconds()).padStart(2, "0");
let fullDate = `${year}-${month}-${day}_${hour}-${min}-${sec}`;

test('Lea Bank', async ({ page }) => {
  let learesponse = await page.goto('https://leabank.se/spara/sparkonto-plus');
  //await page.getByRole('button', { name: 'Godta alla' }).click();
  await expect(page.locator('h1')).toContainText('Sparkonto Plus');
  if (learesponse) {
    let status = learesponse.status();
    let leabody = await learesponse.text();
    //console.log('Content:', resursbody);
    if (leabody.includes('Sparkonto Plus')) {
      let leaord = leabody.indexOf('närvarande är')
      let leakakollen = leabody.substring(leaord, leaord+20)
      learanta = leabody.substring(leaord+14, leaord+18)
      //console.log('Content:', leabody);
      //console.log('Index..:', leaord);
      //console.log('Content:', leakakollen);
      console.log('Lea Bank');
      console.log('Fast 1 månaders ränta:', learanta, '%');
    }
  }
});

test('Moank', async ({ page }) => {
  let moankresponse = await page.goto('https://www.moank.se/spara-pengar');
  await page.getByRole('button', { name: 'Tillåt alla' }).click();
  await expect(page.locator('body')).toContainText('Spara med fast ränta');
  if (moankresponse) {
    let status = moankresponse.status();
    let moankbody = await moankresponse.text();
    //console.log('Content:', resursbody);
    if (moankbody.includes('Spara med fast ränta')) {
      let moankord = moankbody.indexOf('Fast 90 dagar')
      let lmoankkollen = moankbody.substring(moankord, moankord+20)
      moankranta = moankbody.substring(moankord+74, moankord+78)
      //console.log('Content:', moankbody);
      //console.log('Index..:', moankord);
      //console.log('Content:', lmoankkollen);
      console.log('Moank');
      console.log('Fast 3 månaders ränta:', moankranta, '%');
    }
  }
});

test('Bluestep Bank', async ({ page }) => {
  let blueresponse = await page.goto('https://www.bluestep.se/spara/fast-ranta/');
  await page.getByRole('button', { name: 'Godkänn alla cookies' }).click();
  await page.getByRole('cell', { name: 'Sparkonto' }).getByRole('strong').click();
  if (blueresponse) {
    let status = blueresponse.status();
    let bluebody = await blueresponse.text();
    if (bluebody.includes('Fast 3 m&aring;nader')) {
      let blueord = bluebody.indexOf('Fast 3 m&aring;nader')
      let bluekollen = bluebody.substring(blueord, blueord+20)
      blueranta = bluebody.substring(blueord+66, blueord+70)
      //console.log('Content:', bluebody);
      //console.log('Index..:', blueord);
      //console.log('Content:', bluekollen);
      console.log('Bluestep Bank');
      console.log('Fast 3 månaders ränta:', blueranta, '%');
    }
  }
});

test('EP Bank (Erik Penser)', async ({ page }) => {
  let epresponse = await page.goto('https://www.epbank.se/spar/oversikt/');
  await expect(page.locator('#main')).toContainText('Spar');
  await page.getByText('3 månaders löptid').click();
  if (epresponse) {
    let status = epresponse.status();
    let epbody = await epresponse.text();
    //console.log('Content:', resursbody);
    if (epbody.includes('fasträntekonto')) {
      let epord = epbody.indexOf('3 månaders löptid')
      let epkollen = epbody.substring(epord, epord+20)
      epranta = epbody.substring(epord-198, epord-194)
      //console.log('Content:', epbody);
      //console.log('Index..:', epord);
      //console.log('Content:', epkollen);
      console.log('EP Bank (Erik Penser)');
      console.log('Fast 3 månaders ränta:', epranta, '%');
    }
  }
});

/* Resurs bank har inte längre fastränta 3 mån. */

// test('Resurs Bank', async ({ page }) => {
//   let resursresponse = await page.goto('https://www.resursbank.se/sparkonto/fastrantekonto');
//   await page.getByRole('button', { name: 'Acceptera cookies' }).click();
//   expect(page.getByRole('main')).toContainText('Fasträntekontot omfattas av insättningsgarantin');
//   //await page.locator('strong').filter({ hasText: '%' }).click();
//   if (resursresponse) {
//     let status = resursresponse.status();
//     let resursbody = await resursresponse.text();
//     //console.log('Content:', resursbody);
//     if (resursbody.includes('Fasträntekontot')) {
//       let resursord = resursbody.indexOf('\nDu får')
//       let resurskollen = resursbody.substring(resursord, resursord+20)
//       resursranta = resursbody.substring(resursord+8, resursord+12)
//       //console.log('Content:', resursbody);
//       //console.log('Index..:', resursord);
//       //console.log('Content:', resurskollen);
//       console.log('Resurs Bank');
//       console.log('Fast 3 månaders ränta:', resursranta, '%');
//     }
//   }
// });

test('Nordiska Kreditmarknadsbolaget', async ({ page }) => {
  let nordiskaresponse = await page.goto('https://www.nordiska.se/spara/');
  await page.getByRole('button', { name: 'Acceptera' }).click();
  await expect(page.locator('[id="_30-11"]')).toContainText('Nordiska FIX');
  //await expect(page.locator('[id="_30-40"]')).toContainText('Spara');
  //await expect(page.locator('[id="_desktop-header"]')).toContainText('Logotype');
  if (nordiskaresponse) {
    let status = nordiskaresponse.status();
    let nordiskabody = await nordiskaresponse.text();
    //console.log('Content:', resursbody);
    if (nordiskabody.includes('sparformer')) {
      let nordriskaord = nordiskabody.indexOf('<div>90 dagar</div>')
      let nordiskakollen = nordiskabody.substring(nordriskaord, nordriskaord+20)
      nordiskaranta = nordiskabody.substring(nordriskaord+37, nordriskaord+41)
      //console.log('Content:', nordiskabody);
      //console.log('Index..:', nordriskaord);
      //console.log('Content:', nordiskakollen);
      console.log('Nordiska Kreditmarknadsbolaget');
      console.log('Fast 3 månaders ränta:', nordiskaranta, '%');
    }
  }
});

test('MedMera Bank', async ({ page }) => {
  let medresponse = await page.goto('https://medmerabank.se/spara/fastrantekonto');
  await page.getByRole('button', { name: 'Tillåt alla' }).click();
  await expect(page.locator('h1')).toContainText('Fasträntekonto');
  if (medresponse) {
    let status = medresponse.status();
    let medbody = await medresponse.text();
    //console.log(medbody)
    if (medbody.includes('Räntor för fasträntekonto')) {
      let medord = medbody.indexOf('just nu upp till')
      let medkollen = medbody.substring(medord, medord+20)
      medranta = medbody.substring(medord+17, medord+21)
      //console.log('Content:', medbody);
      //console.log('Index..:', medord);
      //console.log('Content:', medkollen);
      console.log('MedMera Bank');
      console.log('Fast 3 månaders ränta:', medranta, '%');
    }
  }
});

test('SBAB', async ({ page }) => {
  await page.goto('https://www.sbab.se/1/privat/spara/sparkonto/fastrantekonto.html?content=second');
  await page.getByRole('button', { name: 'Acceptera rekommenderade' }).click();
  await expect(page.locator('#n-side-nav')).toContainText('Fasträntekonto');
  //await expect(page.locator('#fixedThreeMonthInterest-interestRateSpan')).toMatchAriaSnapshot(`- text: /\\d+,\\d+/`);
  //await expect(page.getByText('2,80', { exact: true })).toBeVisible();
  //await expect(page.locator('#fixedThreeMonthInterest-interestRateSpan')).toContainText('2,80');
  sbabranta = await (page.locator('#fixedThreeMonthInterest-interestRateSpan')).textContent();
  console.log('SBAB');
  console.log('Fast 3 månaders ränta:', sbabranta, '%');
});

test('Skandia Bank', async ({ page }) => {
  let skandiaresponse = await page.goto('https://www.skandia.se/vardagstjanster/konton-kort/fastrantekonto/');
  //await page.getByRole('button', { name: 'Jag godkänner alla' }).click();
  //await expect(page.locator('tbody')).toContainText('2,75 %');
  if (skandiaresponse) {
    let status = skandiaresponse.status();
    let skandiabody = await skandiaresponse.text();
    //console.log(medbody)
    if (skandiabody.includes('Fasträntekonto')) {
      let skandiabord = skandiabody.indexOf('3 m&aring;nader')
      let shbkollen = skandiabody.substring(skandiabord, skandiabord+20)
      Skandiaranta = skandiabody.substring(skandiabord+64, skandiabord+68)
      //console.log('Content:', skandiabody);
      //console.log('Index..:', skandiabord);
      //console.log('Content:', shbkollen);
      console.log('Skandia Bank');
      console.log('Fast 3 månaders ränta:', Skandiaranta, '%');
    }
  }
});

test('Swedbank', async ({ page }) => {
  let swedbankresponse = await page.goto('https://www.swedbank.se/privat/spara-och-placera/sparkonton/fastrantekonto.html');
  await page.getByText('Godkänn alla cookies').click();
  await expect(page.locator('#page-content')).toContainText('Fasträntekonto');
  if (swedbankresponse) {
    let status = swedbankresponse.status();
    let swedbankbody = await swedbankresponse.text();
    //console.log('Content:', resursbody);
    if (swedbankbody.includes('fasträntekonto')) {
      let swedbaknord = swedbankbody.indexOf('>3 mån<')
      let swedbankkollen = swedbankbody.substring(swedbaknord, swedbaknord+20)
      swedbankranta = swedbankbody.substring(swedbaknord+16, swedbaknord+20)
      //console.log('Content:', swedbankbody);
      //console.log('Index..:', swedbaknord);
      //console.log('Content:', swedbankkollen);
      console.log('Swedbank');
      console.log('Fast 3 månaders ränta:', swedbankranta, '%');
    }
  }
});

test('Handelsbanken', async ({ page }) => {
  let shbresponse = await page.goto('https://www.handelsbanken.se/sv/privat/vardagstjanster/konton-och-betalningar/placeringskonto-privat');
  await page.getByTestId('CookieConsent__acceptButton').click();
  await expect(page.locator('[data-test-id="shb-hero-headline"]')).toContainText('Placeringskonto');
  if (shbresponse) {
    let status = shbresponse.status();
    let shbbody = await shbresponse.text();
    //console.log(medbody)
    if (shbbody.includes('Placeringskonto')) {
      let shbord = shbbody.indexOf('3 månader med automatisk förlängning')
      let shbkollen = shbbody.substring(shbord, shbord+20)
      shbranta = shbbody.substring(shbord+248, shbord+252)
      //console.log('Content:', shbbody);
      //console.log('Index..:', shbord);
      //console.log('Content:', shbkollen);
      console.log('Handelsbanken');
      console.log('Fast 3 månaders ränta:', shbranta, '%');
    }
  }
});

test('Nordea', async ({ page }) => {
  let nordearesponse = await page.goto('https://www.nordea.se/privat/produkter/spara-investera/sparkonton/fastrantekonto.html');
  await page.getByRole('button', { name: 'Godkänn alla' }).click();
  await expect(page.locator('#content-start')).toContainText('Om Fasträntekonto');
  if (nordearesponse) {
    let status = nordearesponse.status();
    let nordeabody = await nordearesponse.text();
    //console.log('Content:', resursbody);
    if (nordeabody.includes('fasträntekonto')) {
      let nordeaord = nordeabody.indexOf('left">3 månader')
      let nordeakollen = nordeabody.substring(nordeaord, nordeaord+20)
      nordearanta = nordeabody.substring(nordeaord+58, nordeaord+62)
      //console.log('Content:', nordeabody);
      //console.log('Index..:', nordeaord);
      //console.log('Content:', nordeakollen);
      console.log('Nordea');
      console.log('Fast 3 månaders ränta:', nordearanta, '%');
    }
  } 
});

test('SEB', async ({ page }) => {
  let sebrespones = await page.goto('https://seb.se/privat/spara-och-investera/sparkonto-och-depa/placeringskonto?icmp=sebsep_enklaspar_rb_x_placeringskonto#sparkonto');
  await page.getByRole('button', { name: 'Acceptera alla kakor' }).click();
  await expect(page.locator('#placeringskonto---ett-sparkonto-med-fast-ranta')).toContainText('Placeringskonto – ett sparkonto med fast ränta');
  if (sebrespones) {
    let status = sebrespones.status();
    let sebbody = await sebrespones.text();
    //console.log('Content:', resursbody);
    if (sebbody.includes('fasträntekonto')) {
      let sebord = sebbody.indexOf('>3 månader<')
      let sebkollen = sebbody.substring(sebord, sebord+20)
      sebranta = sebbody.substring(sebord+90, sebord+94)
      //console.log('Content:', sebbody);
      //console.log('Index..:', sebord);
      //console.log('Content:', sebkollen);
      console.log('SEB');
      console.log('Fast 3 månaders ränta:', sebranta, '%');
    }
  }  
});

test('Länsförsäkringar Bank', async ({ page }) => {
  let lansfresponse = await page.goto('https://www.lansforsakringar.se/stockholm/privat/bank/spara/alla-konton-for-sparande/fastrantekonto/');
  await page.getByRole('button', { name: 'Tillåt alla' }).click();
  await expect(page.locator('h1')).toContainText('Fasträntekonto');
  if (lansfresponse) {
    let status = lansfresponse.status();
    let lansfbody = await lansfresponse.text();
    //console.log('Content:', lansfbody);
    if (lansfbody.includes('Fasträntekonto')) {
      let lansford = lansfbody.indexOf('>3 m&aring;nader<')
      let lansfkollen = lansfbody.substring(lansford, lansford+20)
      lansfranta = lansfbody.substring(lansford+65, lansford+69)
      //console.log('Content:', lansfbody);
      //console.log('Index..:', lansford);
      //console.log('Content:', lansfkollen);
      console.log('Länsförsäkringar Bank');
      console.log('Fast 3 månaders ränta:', lansfranta, '%');
    }
  }
});

test('Collector', async ({ page }) => {
  let collectorresponse = await page.goto('https://www.collector.se/spara-pengar/aktuella-sparrantor/');
  await page.getByRole('button', { name: 'Acceptera alla' }).click();
  await expect(page.locator('h1')).toContainText('Aktuella sparräntor');
  //await page.locator('label').filter({ hasText: '-6 mån' }).click();
  if (collectorresponse) {
    let status = collectorresponse.status();
    let collectorbody = await collectorresponse.text();
    //console.log('Content:', collectorbody);
    if (collectorbody.includes('sparr&auml;ntor')) {
      let collectorord = collectorbody.indexOf('3-m&aring;naders sparkonto')
      let collectorkollen = collectorbody.substring(collectorord, collectorord+20)
      collectorranta = collectorbody.substring(collectorord+118, collectorord+122)
      //console.log('Content:', collectorbody);
      //console.log('Index..:', collectorord);
      //console.log('Content:', sebkollen);
      console.log('Collector');
      console.log('Fast 3 månaders ränta:', collectorranta, '%');
    }
  }  
});

test('Marginalen Bank', async ({ page }) => {
  let marginalresponse = await page.goto('https://www.marginalen.se/privat/banktjanster/spara/fastrantekonto/');
  await page.getByRole('button', { name: 'Tillåt alla' }).click();
  //await expect(page.locator('#fatsrantekontot-innehall-ingress2-16820')).toContainText('Det här är Fasträntekontot');
  let marginalspecial = await (page.locator('#fastrantekontot-tabell-3552')).textContent();
  if (marginalresponse) {
    let status = marginalresponse.status();
    let marginalbody = await marginalresponse.text();
    //let marginalspecial = await (page.locator('#fastrantekontot-tabell-3552')).textContent();
    //console.log('Content:', marginalbody);
    if (marginalbody.includes('Fastr&#xE4;ntekontot')) {
      let marginalord = marginalspecial.indexOf('VillkorFasträntekontoBindningstid')
      let marginalkollen = marginalspecial.substring(marginalord, marginalord+20)
      marginalranta = marginalspecial.substring(marginalord+39, marginalord+43)
      //console.log('Content:', marginalbody);
      //console.log('Index..:', marginalord);
      //console.log('Content:', marginalkollen);
      //let marginalranta = await (page.locator('#fastrantekontot-tabell-3552')).textContent();
      console.log('Marginalen Bank');
      console.log('Fast 3 månaders ränta:', marginalranta, '%');
    }
  }
});

test('Qliro', async ({ page }) => {
  let qliroresponse = await page.goto('https://www.qliro.com/sv-se/spara');
  await page.getByRole('button', { name: 'Acceptera alla cookies' }).click();
  await expect(page.getByRole('main')).toContainText('Fast');
  let qlirospecial = await (page.locator('div').filter({ hasText: '%2,40RörligtsparkontoVårt' }).nth(1)).textContent();
  if (qliroresponse) {
    let status = qliroresponse.status();
    let qlirobody = await qliroresponse.text();
    //console.log('Content:', resursbody);
    if (qlirobody.includes('sparkonto')) {
      let qlirokord = qlirospecial.indexOf('Fastsparkonto3månaderVårt')
      let qlirokollen = qlirospecial.substring(qlirokord, qlirokord+20)
      qlirokranta = qlirospecial.substring(qlirokord, qlirokord-4)
      //console.log('Content:', qlirobody);
      //console.log('Index..:', qlirokord);
      //console.log('Content:', qlirokollen);
      console.log('Qliro');
      console.log('Fast 3 månaders ränta:', qlirokranta, '%');
    }
  }
});

test('Coeli', async ({ page }) => {
  let coeliresponse = await page.goto('https://coeli.se/spara/');
  //await page.getByRole('button', { name: 'Acceptera alla' }).click();
  await expect(page.locator('#di-2-col-media')).toContainText('Öppna sparkonto');
  //await page.locator('div').filter({ hasText: 'Våra räntorSpara med hög rä' }).nth(2).click();
  //await page.getByText('Sparkonto rörlig ränta 3,50 %').click();
  //let coelispecial = await (page.locator('div').filter({ hasText: 'Våra räntorSpara med hög rä' }).nth(2)).textContent();
  if (coeliresponse) {
    let status = coeliresponse.status();
    let coelibody = await coeliresponse.text();
    //console.log('Content:', resursbody);
    if (coelibody.includes('sparkonto')) {
      let coelikord = coelibody.indexOf('Sparkonto 3 månader: från')
      let coelikollen = coelibody.substring(coelikord, coelikord+20)
      coelikranta = coelibody.substring(coelikord+26, coelikord+30)
      //console.log('Content:', coelibody);
      //console.log('Index..:', qlirokord);
      //console.log('Content:', qlirokollen);
      console.log('Coeli');
      console.log('Fast 3 månaders ränta:', coelikranta, '%');
    }
  }
});

test('Svea Bank', async ({ page }) => {
  let svearesponse = await page.goto('https://www.svea.com/sv-se/privat/spara/fastr%C3%A4ntekonto');
  //await page.getByRole('button', { name: 'Tillåt alla cookies' }).click();
  await expect(page.locator('#hero-heading')).toContainText('Fasträntekonto');
  //await page.locator('#main-content > div > div:nth-child(4)').click();
  //await page.locator('div:nth-child(4) > .mx-4').click();
  //await page.getByText('2,85').click();
  if (svearesponse) {
    let status = svearesponse.status();
    let sveabody = await svearesponse.text();
    //console.log('Content:', resursbody);
    if (sveabody.includes('Fasträntekonto')) {
      let sveaord = sveabody.indexOf('3 månader')
      let sveakollen = sveabody.substring(sveaord, sveaord+20)
      svearanta = sveabody.substring(sveaord+246, sveaord+250)
      //console.log('Content:', sveabody);
      //console.log('Index..:', sveakord);
      //console.log('Content:', sveakollen);
      console.log('Svea Bank');
      console.log('Fast 3 månaders ränta:', svearanta, '%');
    }
  }
});

test('Qred Bank', async ({ page }) => {
  let qredresponse = await page.goto('https://www.qred.se/sparkonto');
  await page.getByRole('button', { name: 'Acceptera alla cookies' }).click();
  await expect(page.locator('body')).toContainText('Sparkonto Fast');
  //await page.locator('#w-node-_793c7bf6-93cc-6681-7f99-ebfd74effe9c-4f2d5aef > .text-align-center').click();
  //await page.getByText('3 mån').click();
  //await page.getByText('3,40 %', { exact: true }).click();
  if (qredresponse) {
    let status = qredresponse.status();
    let qredbody = await qredresponse.text();
    //console.log('Content:', resursbody);
    if (qredbody.includes('Sparkonto Fast')) {
      let qredord = qredbody.indexOf('>3 mån</div>')
      let qredkollen = qredbody.substring(qredord, qredord+20)
      qredranta = qredbody.substring(qredord+43, qredord+47)
      //console.log('Content:', qredbody);
      //console.log('Index..:', qredord);
      //console.log('Content:', qredkollen);
      console.log('Qred Bank');
      console.log('Fast 3 månaders ränta:', qredranta, '%');
    }
  }
});

test('Nstart', async ({ page }) => {
  let nstartresponse = await page.goto('https://se.nstart.com/spara');
  await page.getByLabel('Godkänn alla', { exact: true }).click();
  await expect(page.locator('body')).toContainText('Nstarts sparkonton');
  //await page.locator('#w-node-_88662bc4-e716-96be-a179-aa2aa6484a59-47314e88').click();
  if (nstartresponse) {
    let status = nstartresponse.status();
    let nstartbody = await nstartresponse.text();
    //console.log('Content:', resursbody);
    if (nstartbody.includes('sparkonton')) {
      let nstartord = nstartbody.indexOf('Sparkonto Fast 3 månader')
      let nstartkollen = nstartbody.substring(nstartord, nstartord+20)
      nstartranta = nstartbody.substring(nstartord+32, nstartord+36)
      //console.log('Content:', nstartbody);
      //console.log('Index..:', nstartord);
      //console.log('Content:', sveakollen);
      console.log('Nstart');
      console.log('Fast 3 månaders ränta:', nstartranta, '%');
    }
  }
});

test('Sparbanken Syd', async ({ page }) => {
  let sparsydresponse = await page.goto('https://www.sparbankensyd.se/privat/spara/sparkonto');
  //await page.getByRole('button', { name: 'Godkänn alla' }).click();
  await expect(page.locator('#c13297')).toContainText('Fasträntekonto');
  //await page.locator('#c13301 div').filter({ hasText: 'Fasträntekonto ränta 2024-12-' }).nth(1).click();
  let sparsydspecial = await page.locator('#c13301 div').filter({ hasText: 'Fasträntekonto ränta' }).nth(1).textContent();
  if (sparsydresponse) {
    let status = sparsydresponse.status();
    let sparsydbody = await sparsydresponse.text();
    //console.log('Content:', resursbody);
    if (sparsydbody.includes('Fasträntekonto')) {
      let sparsydord = sparsydspecial.indexOf('3 mån')
      //let sparsydord2 = sparsydspecial.indexOf('2,70')
      let sparsydkollen = sparsydspecial.substring(sparsydord, sparsydord+20)
      sparsydranta = sparsydspecial.substring(sparsydord+35, sparsydord+39)
      //console.log('Content:', sparsydbody);
      //console.log('Index..:', sparsydord);
      //console.log('Index2.:', sparsydord2);
      //console.log('Content:', sparsydkollen);
      console.log('Sparbanken Syd');
      console.log('Fast 3 månaders ränta:', sparsydranta, '%');
    }
  }
});

test('Borgo', async ({ page }) => {
  let borgoresponse = await page.goto('https://www.borgohypotek.se/sparkonto#privatpersoner');
  await expect(page.locator('#privatpersoner')).toContainText('Borgos sparräntor');
  if (borgoresponse) {
    let status = borgoresponse.status();
    let borgobody = await borgoresponse.text();
    //console.log('Content:', resursbody);
    if (borgobody.includes('Borgos sparräntor')) {
      let borgoord = borgobody.indexOf('fixed_3_months')
      let borgokollen = borgobody.substring(borgoord, borgoord+20)
      borgoranta = borgobody.substring(borgoord+27, borgoord+31)
      //console.log('Content:', borgobody);
      //console.log('Index..:', borgoord);
      //console.log('Content:', borgokollen);
      console.log('Borgo');
      console.log('Fast 3 månaders ränta:', borgoranta, '%');
    }
  }
});

test('Brocc', async ({ page }) => {
  let broccresponse = await page.goto('https://brocc.se/spara');
  await page.getByRole('button', { name: 'Acceptera alla cookies' }).click();
  await expect(page.getByRole('main')).toContainText('Öppna sparkonto');
  if (broccresponse) {
    let status = broccresponse.status();
    let broccbody = await broccresponse.text();
    //console.log('Content:', resursbody);
    if (broccbody.includes('Brocc Tillväxt')) {
      let broccord = broccbody.indexOf('>Brocc Tillväxt')
      let brocckollen = broccbody.substring(broccord, broccord+20)
      broccranta = broccbody.substring(broccord+23, broccord+27)
      //console.log('Content:', broccbody);
      //console.log('Index..:', broccord);
      //console.log('Content:', brocckollen);
      console.log('Brocc');
      console.log('Fast 3 månaders ränta:', broccranta, '%');
    }
  }
});

test('JAK Medlemsbank', async ({ page }) => {
  let jakresponse = await page.goto('https://www.jak.se/vardagstjanster/spara-placera/');
  await page.getByRole('button', { name: 'Acceptera alla' }).click();
  await expect(page.locator('h1')).toContainText('Spara');
  if (jakresponse) {
    let status = jakresponse.status();
    let jakbody = await jakresponse.text();
    //console.log('Content:', resursbody);
    if (jakbody.includes('Spara')) {
      let jakord = jakbody.indexOf('Fasträntekonto för privatpersoner')
      //let jakord2 = jakbody.indexOf('3 %*')
      let jakkollen = jakbody.substring(jakord, jakord+20)
      jakranta = jakbody.substring(jakord+1019, jakord+1023)
      //console.log('Content:', jakbody);
      //console.log('Index..:', jakord);
      //console.log('Index2.:', jakord2);
      //console.log('Content:', jakkollen);
      console.log('JAK Medlemsbank');
      console.log('Fast 3 månaders ränta:', jakranta, '%');
    }
  }
});

/* Aros Kapital verkar nedstängt?!?! 2025-02-11 */

test('Aros Kapital', async ({ page }) => {
  let arosresponse = await page.goto('https://www.aroskapital.se/tjanster/spara/');
  //await page.getByRole('button', { name: 'Acceptera alla cookies' }).click();
  await expect(page.locator('#sectionContainer')).toContainText('Spara');
  if (arosresponse) {
    let status = arosresponse.status();
    let arosbody = await arosresponse.text();
    //console.log('Content:', resursbody);
    if (arosbody.includes('Spara')) {
      let arosord = arosbody.indexOf('>– 3 månader fn ')
      let aroskollen = arosbody.substring(arosord, arosord+20)
      arosranta = arosbody.substring(arosord+16, arosord+20)
      //console.log('Content:', arosbody);
      //console.log('Index..:', arosord);
      //console.log('Content:', aroskollen);
      console.log('Aros Kapital');
      console.log('Fast 3 månaders ränta:', arosranta, '%');
    }
  }
});

test('Serafim Finans', async ({ page }) => {
  let serafimresponse = await page.goto('https://serafimfinans.se/spara');
  await page.getByRole('button', { name: 'Tillåt alla cookies' }).click();
  await expect(page.locator('#hs_cos_wrapper_widget_1715868504032')).toContainText('Öppna sparkonto');
  if (serafimresponse) {
    let status = serafimresponse.status();
    let serafimbody = await serafimresponse.text();
    //console.log('Content:', resursbody);
    if (serafimbody.includes('sparkonto')) {
      let serafimord = serafimbody.indexOf('>SeraFast Privat 3 mån - ')
      let serafimkollen = serafimbody.substring(serafimord, serafimord+20)
      serafimranta = serafimbody.substring(serafimord+25, serafimord+29)
      //console.log('Content:', serafimbody);
      //console.log('Index..:', serafimord);
      //console.log('Content:', serafimkollen);
      console.log('Serafim Finans');
      console.log('Fast 3 månaders ränta:', serafimranta, '%');
    }
  }
});

test('Froda', async ({ page }) => {
  let frodaresponse = await page.goto('https://www.froda.se/sparkonto');
  await page.getByRole('button', { name: 'Acceptera alla' }).click();
  await expect(page.locator('h1')).toContainText('Sparkonto');
  //await page.locator('div').filter({ hasText: '3.3%Ränta - 3 mån3.3%Ränta -' }).nth(1).click();
  if (frodaresponse) {
    let status = frodaresponse.status();
    let frodabody = await frodaresponse.text();
    //console.log('Content:', resursbody);
    if (frodabody.includes('Sparkonto')) {
      let frodaord = frodabody.indexOf('>Ränta -  3 mån')
      let frodakollen = frodabody.substring(frodaord, frodaord+20)
      frodaranta = frodabody.substring(frodaord+286, frodaord+290)
      //console.log('Content:', frodabody);
      //console.log('Index..:', frodaord);
      //console.log('Content:', frodakollen);
      console.log('Froda');
      console.log('Fast 3 månaders ränta:', frodaranta, '%');
    }
  }
});

test('Northmill Bank', async ({ page }) => {
  let northresonse = await page.goto('https://www.northmill.com/se/sparkonto/');
  await page.getByRole('button', { name: 'Tillåt alla' }).click();
  await expect(page.getByRole('main')).toContainText('fasträntekonton');
  if (northresonse) {
    let status = northresonse.status();
    let northbody = await northresonse.text();
    //console.log('Content:', resursbody);
    if (northbody.includes('Sparkonto')) {
      let northord = northbody.indexOf('3 månader - ')
      let northkollen = northbody.substring(northord, northord+20)
      northranta = northbody.substring(northord+12, northord+16)
      //console.log('Content:', northbody);
      //console.log('Index..:', northord);
      //console.log('Content:', northkollen);
      console.log('Northmill Bank');
      console.log('Fast 3 månaders ränta:', northranta, '%');
    }
  }
});

test('Multitude Bank', async ({ page }) => {
  let multirespons = await page.goto('https://www.multitudebank.se/priser?sc_lang=sv-se');
  await page.getByRole('button', { name: 'Accept all' }).click();
  //await page.getByRole('cell', { name: '3,00%' }).first().click();
  //await page.getByRole('cell', { name: 'Fast 3 månader' }).click();
  await expect(page.locator('h2')).toContainText('Aktuella räntor och bindningstider');
  if (multirespons) {
    let status = multirespons.status();
    let multihbody = await multirespons.text();
    //console.log('Content:', resursbody);
    if (multihbody.includes('Sparkonto')) {
      let multihord = multihbody.indexOf('<td>Fast 3 m&aring;nader</td>')
      let multikollen = multihbody.substring(multihord, multihord+20)
      multiranta = multihbody.substring(multihord+46, multihord+50)
      //console.log('Content:', multihbody);
      //console.log('Index..:', multihord);
      //console.log('Content:', multikollen);
      console.log('Multitude Bank');
      console.log('Fast 3 månaders ränta:', multiranta, '%');
    }
  }
});

// test('Klarna', async ({ page }) => {
//   let klarnaresponse = await page.goto('https://www.klarna.com/se/fastkonto/');
//   await page.getByRole('button', { name: 'Tillåt alla' }).click();
//   await expect(page.locator('#content-below-header')).toContainText('Fastkonto');
//   //await page.getByText('3 månader').click();
//   //await page.getByText('2,15%').click();
//   if (klarnaresponse) {
//     let status = klarnaresponse.status();
//     let klarnabody = await klarnaresponse.text();
//     //console.log('Content:', klarnabody);
//     if (klarnabody.includes('Fastkonto')) {
//       let klarnaord = klarnabody.indexOf('">3</span>')
//       let klarnakollen = klarnabody.substring(klarnaord, klarnaord+20)
//       klarnaranta = klarnabody.substring(klarnaord+352, klarnaord+356)
//       //console.log('Content:', klarnabody);
//       //console.log('Index..:', klarnaord);
//       //console.log('Content:', klarnakollen);
//       console.log('Klarna');
//       console.log('Fast 3 månaders ränta:', klarnaranta, '%');
//     }
//   }
// });

test('Sammanställning', async () => {
  //console.log('Sammanställning');
  //console.log('');
  console.log('Lea Bank');
  console.log('Fast 1 månaders ränta:', learanta, '%');
  console.log('');
  console.log('Moank');
  console.log('Fast 3 månaders ränta:', moankranta, '%');
  console.log('');
  console.log('Bluestep Bank');
  console.log('Fast 3 månaders ränta:', blueranta, '%');
  console.log('');
  console.log('EP Bank (Erik Penser)');
  console.log('Fast 3 månaders ränta:', epranta, '%');
  console.log('');
  // console.log('Resurs Bank');
  // console.log('Fast 3 månaders ränta:', resursranta, '%');
  // console.log('');
  console.log('Nordiska Kreditmarknadsbolaget');
  console.log('Fast 3 månaders ränta:', nordiskaranta, '%');
  console.log('');
  console.log('MedMera Bank');
  console.log('Fast 3 månaders ränta:', medranta, '%');
  console.log('');
  console.log('SBAB');
  console.log('Fast 3 månaders ränta:', sbabranta, '%');
  console.log('');
  console.log('Skandia Bank');
  console.log('Fast 3 månaders ränta:', Skandiaranta, '%');
  console.log('');
  console.log('Swedbank');
  console.log('Fast 3 månaders ränta:', swedbankranta, '%');
  console.log('');
  console.log('Handelsbanken');
  console.log('Fast 3 månaders ränta:', shbranta, '%');
  console.log('');
  console.log('Nordea');
  console.log('Fast 3 månaders ränta:', nordearanta, '%');
  console.log('');
  console.log('SEB');
  console.log('Fast 3 månaders ränta:', sebranta, '%');
  console.log('');
  console.log('Länsförsäkringar Bank');
  console.log('Fast 3 månaders ränta:', lansfranta, '%');
  console.log('');
  console.log('Collector');
  console.log('Fast 3 månaders ränta:', collectorranta, '%');
  console.log('');
  console.log('Marginalen Bank');
  console.log('Fast 3 månaders ränta:', marginalranta, '%');
  console.log('');
  console.log('Qliro');
  console.log('Fast 3 månaders ränta:', qlirokranta, '%');
  console.log('');
  console.log('Coeli');
  console.log('Fast 3 månaders ränta:', coelikranta, '%');
  console.log('');
  console.log('Svea Bank');
  console.log('Fast 3 månaders ränta:', svearanta, '%');
  console.log('');
  console.log('Qred Bank');
  console.log('Fast 3 månaders ränta:', qredranta, '%');
  console.log('');
  console.log('Nstart');
  console.log('Fast 3 månaders ränta:', nstartranta, '%');
  console.log('');
  console.log('Sparbanken Syd');
  console.log('Fast 3 månaders ränta:', sparsydranta, '%');
  console.log('');
  console.log('Borgo');
  console.log('Fast 3 månaders ränta:', borgoranta, '%');
  console.log('');
  console.log('Brocc');
  console.log('Fast 3 månaders ränta:', broccranta, '%');
  console.log('');
  console.log('JAK');
  console.log('Fast 3 månaders ränta:', jakranta, '%');
  console.log('');
  console.log('Aros Kapital');
  console.log('Fast 3 månaders ränta:', arosranta, '%');
  console.log('');
  console.log('Serafim Finans');
  console.log('Fast 3 månaders ränta:', serafimranta, '%');
  console.log('');
  console.log('Froda');
  console.log('Fast 3 månaders ränta:', frodaranta, '%');
  console.log('');
  console.log('Northmill Bank');
  console.log('Fast 3 månaders ränta:', northranta, '%');
  console.log('');
  console.log('Multitude Bank');
  console.log('Fast 3 månaders ränta:', multiranta, '%');
  console.log('');
  // console.log('Klarna');
  // console.log('Fast 3 månaders ränta:', klarnaranta, '%');
  // console.log('');
  // ...
});

test('Sorterat', async () => {

  learanta = learanta.replace(',', '.');
  moankranta = moankranta.replace(',', '.');
  blueranta = blueranta.replace(',', '.');
  epranta = epranta.replace(',', '.');
  //resursranta = resursranta.replace(',', '.');
  nordiskaranta = nordiskaranta.replace(',', '.');
  medranta = medranta.replace(',', '.');
  sbabranta = sbabranta.replace(',', '.');
  Skandiaranta = Skandiaranta.replace(',', '.');
  swedbankranta = swedbankranta.replace(',', '.');
  shbranta = shbranta.replace(',', '.');
  nordearanta = nordearanta.replace(',', '.');
  sebranta = sebranta.replace(',', '.');
  lansfranta = lansfranta.replace(',', '.');
  collectorranta = collectorranta.replace(',', '.');
  marginalranta = marginalranta.replace(',', '.');
  qlirokranta = qlirokranta.replace(',', '.');
  coelikranta = coelikranta.replace(',', '.');
  svearanta = svearanta.replace(',', '.');
  qredranta = qredranta.replace(',', '.');
  nstartranta = nstartranta.replace(',', '.');
  sparsydranta = sparsydranta.replace(',', '.');
  borgoranta = borgoranta.replace(',', '.');
  broccranta = broccranta.replace(',', '.');
  jakranta = jakranta.replace(',', '.');
  arosranta = arosranta.replace(',', '.');
  serafimranta = serafimranta.replace(',', '.');
  frodaranta = frodaranta.replace(',', '.');
  northranta = northranta.replace(',', '.');
  multiranta = multiranta.replace(',', '.');
  // klarnaranta = klarnaranta.replace(',', '.');
  
  interface Banks{
    banknamn: string;
    bank: string;
    ranta: number;
  }

  const bankarr: Banks[] = [
    { banknamn: 'Lea Bank', bank: '<a href="https://leabank.se/spara/sparkonto-plus" target="_blank">Lea Bank *(1 mån)</a>', ranta: learanta },
    { banknamn: 'Moank', bank: '<a href="https://www.moank.se/spara-pengar" target="_blank">Moank</a>', ranta: moankranta },
    { banknamn: 'Bluestep Bank', bank: '<a href="https://www.bluestep.se/spara/fast-ranta/" target="_blank">Bluestep Bank</a>', ranta: blueranta},
    { banknamn: 'EP Bank', bank: '<a href="https://www.epbank.se/spar/oversikt/" target="_blank">EP Bank (Erik Penser)</a>', ranta: epranta },
    // { banknamn: 'Resurs Bank', bank: 'Resurs Bank', ranta: resursranta},
    { banknamn: 'Nordiska Kreditmarknadsbolaget', bank: '<a href="https://www.nordiska.se/spara/" target="_blank">Nordiska Kreditmarknadsbolaget</a>', ranta: nordiskaranta},
    { banknamn: 'MedMera Bank', bank: '<a href="https://medmerabank.se/spara/fastrantekonto" target="_blank">MedMera Bank (coop)</a>', ranta: medranta},
    { banknamn: 'SBAB', bank: '<a href="https://www.sbab.se/1/privat/spara/sparkonto/fastrantekonto.html?content=second" target="_blank">SBAB</a>', ranta: sbabranta},
    { banknamn: 'Skandia Bank', bank: '<a href="https://www.skandia.se/vardagstjanster/konton-kort/fastrantekonto/" target="_blank">Skandia Bank</a>', ranta: Skandiaranta},
    { banknamn: 'Swedban', bank: '<a href="https://www.swedbank.se/privat/spara-och-placera/sparkonton/fastrantekonto.html" target="_blank">Swedbank</a>', ranta: swedbankranta},
    { banknamn: 'Handelsbanken', bank: '<a href="https://www.handelsbanken.se/sv/privat/vardagstjanster/konton-och-betalningar/placeringskonto-privat" target="_blank">Handelsbanken</a>', ranta: shbranta},
    { banknamn: 'Nordea', bank: '<a href="https://www.nordea.se/privat/produkter/spara-investera/sparkonton/fastrantekonto.html" target="_blank">Nordea</a>', ranta: nordearanta},
    { banknamn: 'SEB', bank: '<a href="https://seb.se/privat/spara-och-investera/sparkonto-och-depa/placeringskonto?icmp=sebsep_enklaspar_rb_x_placeringskonto#sparkonto" target="_blank">SEB</a>', ranta: sebranta},
    { banknamn: 'Länsförsäkringar Bank', bank: '<a href="https://www.lansforsakringar.se/stockholm/privat/bank/spara/alla-konton-for-sparande/fastrantekonto/" target="_blank">Länsförsäkringar Bank</a>', ranta: lansfranta},
    { banknamn: 'Collector', bank: '<a href="https://www.collector.se/spara-pengar/aktuella-sparrantor/" target="_blank">Collector</a>', ranta: collectorranta},
    { banknamn: 'Marginalen Bank', bank: '<a href="https://www.marginalen.se/privat/banktjanster/spara/fastrantekonto/" target="_blank">Marginalen Bank</a>', ranta: marginalranta},
    { banknamn: 'Qliro', bank: '<a href="https://www.qliro.com/sv-se/spara" target="_blank">Qliro</a>', ranta: qlirokranta},
    { banknamn: 'Coeli', bank: '<a href="https://coeli.se/spara/" target="_blank">Coeli</a>', ranta: coelikranta},
    { banknamn: 'Svea Bank', bank: '<a href="https://www.svea.com/sv-se/privat/spara/fastr%C3%A4ntekonto" target="_blank">Svea Bank</a>', ranta: svearanta},
    { banknamn: 'Qred Bank', bank: '<a href="https://www.qred.se/sparkonto" target="_blank">Qred Bank</a>', ranta: qredranta},
    { banknamn: 'Nstart', bank: '<a href="https://se.nstart.com/spara" target="_blank">Nstart</a>', ranta: nstartranta},
    { banknamn: 'Sparbanken Syd', bank: '<a href="https://www.sparbankensyd.se/privat/spara/sparkonto" target="_blank">Sparbanken Syd</a>', ranta: sparsydranta},
    { banknamn: 'Borgo', bank: '<a href="https://www.borgohypotek.se/sparkonto#privatpersoner" target="_blank">Borgo</a>', ranta: borgoranta},
    { banknamn: 'Brocc', bank: '<a href="https://brocc.se/spara" target="_blank">Brocc</a>', ranta: broccranta},
    { banknamn: 'JAK Medlemsbank', bank: '<a href="https://www.jak.se/vardagstjanster/spara-placera/" target="_blank">JAK Medlemsbank</a>', ranta: jakranta},
    { banknamn: 'Aros Kapital', bank: '<a href="https://www.aroskapital.se/tjanster/spara/" target="_blank">Aros Kapital</a>', ranta: arosranta},
    { banknamn: 'Serafim Finans', bank: '<a href="https://serafimfinans.se/spara" target="_blank">Serafim Finans</a>', ranta: serafimranta},
    { banknamn: 'Froda', bank: '<a href="https://www.froda.se/sparkonto" target="_blank">Froda</a>', ranta: frodaranta},
    { banknamn: 'Northmill Bank', bank: '<a href="https://www.northmill.com/se/sparkonto/" target="_blank">Northmill Bank</a>', ranta: northranta},
    { banknamn: 'Multitude Bank', bank: '<a href="https://www.multitudebank.se/priser?sc_lang=sv-se" target="_blank">Multitude Bank</a>', ranta: multiranta},
    // { banknamn: 'Klarna', bank: '<a href="https://www.klarna.com/se/fastkonto/" target="_blank">Klarna</a>', ranta: klarnaranta},
  ];
  
  bankarr.sort((a,b) => {
    if (b.ranta < a.ranta) return -1;
    if (b.ranta > a.ranta) return 1;
    if (a.banknamn < b.banknamn) return -1;
    if (a.banknamn > b.banknamn) return 1;
    return 0;
  });

  let antalBanker: any;
  antalBanker = (bankarr.length);
  console.log('Antal:', bankarr.length);
  console.log('Bank:', bankarr[0].bank, 'Ränta %:', bankarr[0].ranta);
  console.log(bankarr[1].ranta);
  console.log(bankarr[2]);

  console.log(bankarr);

  let exempelBelopp = 100000;
  let outputFile = 'https://github.com/MattClayton3/Sparguiden/index2.html';
  fs.writeFileSync(outputFile, '<!DOCTYPE html>\n');
  fs.appendFileSync(outputFile, '<html>\n');
  fs.appendFileSync(outputFile, '<head>\n');
  fs.appendFileSync(outputFile, '<meta name="viewport" content="width=device-width, initial-scale=1">\n');
  fs.appendFileSync(outputFile, '<style>\n');
  fs.appendFileSync(outputFile, 'body {font-family: Arial;}\n');
  fs.appendFileSync(outputFile, 'table {\n');
  fs.appendFileSync(outputFile, '  border-collapse: collapse;\n');
  fs.appendFileSync(outputFile, '  border-spacing: 0;\n');
  fs.appendFileSync(outputFile, '  width: 100%;\n');
  fs.appendFileSync(outputFile, '  border: 1px solid #ddd;\n');
  fs.appendFileSync(outputFile, '}\n');
  fs.appendFileSync(outputFile, 'th, td {\n');
  fs.appendFileSync(outputFile, '  text-align: left;\n');
  fs.appendFileSync(outputFile, '  padding: 4px;');
  fs.appendFileSync(outputFile, '}\n');
  fs.appendFileSync(outputFile, 'tr:nth-child(even){background-color: #f2f2f2}\n');
  fs.appendFileSync(outputFile, '</style>\n');
  fs.appendFileSync(outputFile, '</head>\n');
  fs.appendFileSync(outputFile, '<body>\n');
  fs.appendFileSync(outputFile, `<h2><span style='font-size:30px;'>&#128200;</span> Sparguiden ${fullDate}</h2>\n`);
  // fs.appendFileSync(outputFile, '<p>Fasträntekonto 1* - 3 mån.</p>\n');
  fs.appendFileSync(outputFile, '<div style="overflow-x:auto;">\n');
  fs.appendFileSync(outputFile, '  <table>\n');
  fs.appendFileSync(outputFile, '    <tr>\n');
  fs.appendFileSync(outputFile, '      <th>Bank<br>Fasträntekonto *1 - 3 mån.</th>\n');
  fs.appendFileSync(outputFile, '      <th>Ränta %</th>\n');
  fs.appendFileSync(outputFile, `      <th>Kvartal<br>Ex. ${exempelBelopp} kr</th>\n`);
  fs.appendFileSync(outputFile, `      <th>Netto kvartal<br>Ex. ${exempelBelopp} kr</th>\n`);
  fs.appendFileSync(outputFile, `      <th>Netto per dag<br>Ex. ${exempelBelopp} kr</th>\n`);
  fs.appendFileSync(outputFile, '    </tr>\n');

  let i = 0;
  let position: string = '';
  do {
    if (i == 0){
      position = '&#129351;';
    }
    if (i == 1){
      position = '&#129352;';
    }
    if (i == 2){
      position = '&#129353;';
    }
    let color = 'green';
    const banken: string = bankarr[i].bank;
    const rantan: number = bankarr[i].ranta;
    if (rantan < 3.00){
      color = 'black';
    }
    if (rantan < 2.50){
      color = 'red';
      position = '&#129317;';
    }
    let bankStr = `    <td style="color:${color}"> <sup>${i+1})</sup> ${banken} ${position} </td>\n`;
    let rantaStr = `    <td style="color:${color}"> ${rantan} </td>\n`;
    let kvartal = (rantan * 0.01) * exempelBelopp / 4;
    let kvartal1 = (Math.round(kvartal * 100) / 100).toFixed(2);
    let kvartalStr = `    <td style="color:${color}"> ${kvartal1} </td>\n`;
    let nettoKvartal = kvartal * 0.7;
    let nettoKvartal1 = (Math.round(nettoKvartal * 100) / 100).toFixed(2);
    let nettoKvartalStr = `    <td style="color:${color}"> ${nettoKvartal1} </td>\n`;
    let nettoDag = nettoKvartal / 90;
    let nettoDag1 = (Math.round(nettoDag * 100) / 100).toFixed(2);
    let nettoDagStr = `    <td style="color:${color}"> ${nettoDag1} </td>\n`;

    fs.appendFileSync(outputFile, '  <tr>\n');
    fs.appendFileSync(outputFile, bankStr);
    fs.appendFileSync(outputFile, rantaStr);
    fs.appendFileSync(outputFile, kvartalStr);
    fs.appendFileSync(outputFile, nettoKvartalStr);
    fs.appendFileSync(outputFile, nettoDagStr);
    fs.appendFileSync(outputFile, '  </tr>\n');
    i++
    position = '';
  } while (i < antalBanker);

  fs.appendFileSync(outputFile, '  </table>\n');
  fs.appendFileSync(outputFile, '</div>\n');
  fs.appendFileSync(outputFile, '<br>Powered by MATS - <b>M</b>assive <b>A</b>ut&#128521;mation <b>T</b>esting <b>S</b>ervice &#127917;\n');
  fs.appendFileSync(outputFile, '</body>\n');
  fs.appendFileSync(outputFile, '</html>\n');

  // const execute = utils.promisify(exec);
  // console.log(await execute(outputFile));
});

});
