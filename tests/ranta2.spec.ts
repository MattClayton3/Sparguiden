import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import { exec } from 'child_process';
import utils from 'util';

// Testing......
//test.describe.configure({ mode: 'serial' });

test.describe.serial('Fasträntekonto 3 mån', () => {
let blueranta: any;
let resursranta: any;
let medranta: any;
let sbabranta: any;
let Skandiaranta: any;
let shbranta = "1.60";
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
let multiranta: any;
let klarnaranta = "1.61";
let hoistranta:any;
let danskranta:any;
let fedeltaranta:any;

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
  //await expect(page.locator('h1')).toContainText('Sparkonto');
  if (learesponse) {
    let status = learesponse.status();
    let leabody = await learesponse.text();
    //console.log('Content:', leabody);
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
  //await page.getByRole('button', { name: 'Tillåt alla' }).click();
  //await expect(page.locator('body')).toContainText('Spara');
  if (moankresponse) {
    let status = moankresponse.status();
    let moankbody = await moankresponse.text();
    //console.log('Content:', moankbody);
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
  //await page.getByRole('button', { name: 'Godkänn alla cookies' }).click();
  //await page.getByRole('cell', { name: 'Sparkonto' }).getByRole('strong').click();
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
  //let epresponse = await page.goto('https://www.epbank.se/spar/oversikt/');
  let epresponse = await page.goto('https://www.epbank.se/oversikt-spar-copy-2/');
  //await expect(page.locator('#main')).toContainText('Spar');
  //await page.getByText('3 månaders löptid').click();
  if (epresponse) {
    let status = epresponse.status();
    let epbody = await epresponse.text();
    //console.log('Content:', epbody);
    if (epbody.includes('sparkonton')) {
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

test('Resurs', async ({ page }) => {
  let resursresponse = await page.goto('https://www.resursbank.se/sparkonto/sparkonto-flex');
  //await page.getByRole('button', { name: 'Acceptera cookies' }).click();
  //await page.locator('span').filter({ hasText: '%' }).click();
  //await expect(page.locator('#main-content')).toContainText('Våra sparkonton');
  if (resursresponse) {
    let status = resursresponse.status();
    let resursbody = await resursresponse.text();
    //console.log('Content:', resursbody);
    if (resursbody.includes('sparkonto')) {
      let resursord = resursbody.indexOf('Sparkonto Flex ger dig')
      let resurskollen = resursbody.substring(resursord, resursord+20)
      resursranta = resursbody.substring(resursord+23, resursord+27)
      //console.log('Content:', resursbody);
      //console.log('Index..:', resursord);
      //console.log('Content:', resurskollen);
      console.log('Resurs Bank');
      console.log('Sparkonto Flex ränta:', resursranta, '%');
    }
  }
});

test('Nordiska Kreditmarknadsbolaget', async ({ page }) => {
  let nordiskaresponse = await page.goto('https://www.nordiska.se/spara/');
  //await page.getByRole('button', { name: 'Acceptera' }).click();
  //await expect(page.locator('[id="_30-11"]')).toContainText('Nordiska FIX');
  //await expect(page.locator('[id="_30-40"]')).toContainText('Spara');
  //await expect(page.locator('[id="_desktop-header"]')).toContainText('Logotype');
  if (nordiskaresponse) {
    let status = nordiskaresponse.status();
    let nordiskabody = await nordiskaresponse.text();
    //console.log('Content:', nordiskabody);
    if (nordiskabody.includes('sparformer')) {
      let nordriskaord = nordiskabody.indexOf('<div>3 månader</div>')
      let nordiskakollen = nordiskabody.substring(nordriskaord, nordriskaord+20)
      nordiskaranta = nordiskabody.substring(nordriskaord+38, nordriskaord+42)
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
  //await page.getByRole('button', { name: 'Tillåt alla' }).click();
  //await expect(page.locator('h1')).toContainText('Fasträntekonto');
  if (medresponse) {
    let status = medresponse.status();
    let medbody = await medresponse.text();
    //console.log(medbody)
    if (medbody.includes('Fasträntekonto')) {
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
  //await page.getByRole('button', { name: 'Acceptera rekommenderade' }).click();
  //await expect(page.locator('#n-side-nav')).toContainText('Fasträntekonto');
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
    //console.log(skandiabody)
    if (skandiabody.includes('Fasträntekonto')) {
      let skandiabord = skandiabody.indexOf('"cellHeader": "Fast ränta",')
      let skandiakollen = skandiabody.substring(skandiabord, skandiabord+20)
      Skandiaranta = skandiabody.substring(skandiabord+80, skandiabord+84)
      //console.log('Content:', skandiabody);
      //console.log('Index..:', skandiabord);
      //console.log('Content:', skandiakollen);
      console.log('Skandia Bank');
      console.log('Fast 3 månaders ränta:', Skandiaranta, '%');
    }
  }
});

test('Swedbank', async ({ page }) => {
  let swedbankresponse = await page.goto('https://www.swedbank.se/privat/spara-och-placera/sparkonton/fastrantekonto.html');
  //await page.getByText('Godkänn alla cookies').click();
  //await expect(page.locator('#page-content')).toContainText('Fasträntekonto');
  if (swedbankresponse) {
    let status = swedbankresponse.status();
    let swedbankbody = await swedbankresponse.text();
    //console.log('Content:', swedbankbody);
    if (swedbankbody.includes('fasträntekonto')) {
      let swedbaknord = swedbankbody.indexOf('>3 mån<')
      let swedbankkollen = swedbankbody.substring(swedbaknord, swedbaknord+20)
      swedbankranta = swedbankbody.substring(swedbaknord+15, swedbaknord+20)
      //console.log('Content:', swedbankbody);
      //console.log('Index..:', swedbaknord);
      //console.log('Content:', swedbankkollen);
      console.log('Swedbank');
      console.log('Fast 3 månaders ränta:', swedbankranta, '%');
    }
  }
});

/* 2025-06-14 Plockar bort SHB en stund. Allt har blivit en SVG bild?!?!? Sätter räntan fast så länge. */
/* 2025-06-26 SHB fakead men ändå med ett klick på rätt ränta. För att ha lite koll. */
/* 2025-08-28 Nu är vi tillbaka till hederliga kollen. */
/* 2026-01-17 Plockar bort SHB en stund. Allt har blivit en SVG bild?!?!? IGEN!!! Sätter räntan fast så länge. */

test('Handelsbanken', async ({ page }) => {
  // let shbresponse = await page.goto('https://www.handelsbanken.se/sv/privat/spara/sparkonton-och-rantor');
  // //await page.getByTestId('CookieConsent__acceptButton').click();

  // //await page.getByRole('cell', { name: '1,85 %' }).locator('div').click();

  // if (shbresponse) {
  //   let status = shbresponse.status();
  //   let shbbody = await shbresponse.text();
  //   console.log(shbbody)
  //   //if (shbbody.includes('Placeringskonto')) {
  //     let shbord = shbbody.indexOf('3 månader med automatisk förlängning')
  //     let shbkollen = shbbody.substring(shbord, shbord+200)
  //     shbranta = shbbody.substring(shbord+252, shbord+256)
  //     //console.log('Content:', shbbody);
  //     console.log('Index..:', shbord);
  //     console.log('Content:', shbkollen);
  //     console.log('Handelsbanken');
  //     console.log('Fast 3 månaders ränta:', shbranta, '%');
  //   //}
  // }
      console.log('Handelsbanken');
      console.log('Fast 3 månaders ränta:', shbranta, '%');

});

test('Nordea', async ({ page }) => {
  let nordearesponse = await page.goto('https://www.nordea.se/privat/produkter/spara-investera/sparkonton/fastrantekonto.html');
  //await page.getByRole('button', { name: 'Godkänn alla' }).click();
  //await expect(page.locator('#content-start')).toContainText('Fasträntekonto');
  if (nordearesponse) {
    let status = nordearesponse.status();
    let nordeabody = await nordearesponse.text();
    //console.log('Content:', nordeabody);
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
  //await page.getByRole('button', { name: 'Acceptera alla kakor' }).click();
  //await expect(page.locator('#placeringskonto---ett-sparkonto-med-fast-ranta')).toContainText('Placeringskonto');
  if (sebrespones) {
    let status = sebrespones.status();
    let sebbody = await sebrespones.text();
    //console.log('Content:', sebbody);
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

/* 2025-06-15 Går inte att komma åt ifrån GitHub??? Plockar bort Länsförsäkringar så länge... Sätter fastränta. */

test('Lansforsakringar', async ({ page }) => {
  let lansfresponse = await page.goto('https://www.lansforsakringar.se/stockholm/privat/bank/spara/alla-konton-for-sparande/fastrantekonto/');
  //await page.getByRole('button', { name: 'Tillåt alla' }).click();
  //await page.getByRole('button', { name: 'Tillåt alla' }).click();
  //await expect(page.locator('h1')).toContainText('Fasträntekonto');
  if (lansfresponse) {
    let status = lansfresponse.status();
    let lansfbody = await lansfresponse.text();
    //console.log('Content:', lansfbody);
    if (lansfbody.includes('konto')) {
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

test('Marginalen Bank', async ({ page }) => {
  let marginalresponse = await page.goto('https://www.marginalen.se/privat/banktjanster/spara/fastrantekonto/');
  //await page.getByRole('button', { name: 'Tillåt alla' }).click();
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

test('Collector', async ({ page }) => {
  let collectorresponse = await page.goto('https://www.collector.se/spara-pengar/aktuella-sparrantor/');
  //await page.getByRole('button', { name: 'Acceptera alla' }).click();
  //await expect(page.locator('h1')).toContainText('Aktuella sparräntor');
  //await page.locator('label').filter({ hasText: '3-6 mån' }).click();
  if (collectorresponse) {
    let status = collectorresponse.status();
    let collectorbody = await collectorresponse.text();
    //console.log('Content:', collectorbody);
    if (collectorbody.includes('spar')) {
      let collectorord = collectorbody.indexOf('3-m&aring;naders sparkonto')
      let collectorkollen = collectorbody.substring(collectorord, collectorord+20)
      collectorranta = collectorbody.substring(collectorord+118, collectorord+122)
      //console.log('Content:', collectorbody);
      //console.log('Index..:', collectorord);
      //console.log('Content:', collectorkollen);
      collectorranta = collectorranta.replace(',', '.');
      console.log('Collector');
      console.log('Fast 3 månaders ränta:', collectorranta, '%');
      collectorranta = collectorranta.replace(',', '.');
    }
  }  
});

test('Qliro', async ({ page }) => {
  let qliroresponse = await page.goto('https://www.qliro.com/sv-se/spara');
  //await page.getByRole('button', { name: 'Acceptera alla cookies' }).click();
  //await expect(page.getByRole('main')).toContainText('Fast');
  //let qlirospecial = await (page.locator('div').filter({ hasText: '%2,60RörligtsparkontoVå' }).nth(1)).textContent();
  if (qliroresponse) {
    let status = qliroresponse.status();
    let qlirobody = await qliroresponse.text();
    //console.log('Content:', qlirobody);
    if (qlirobody.includes('sparkonto')) {
      //let qlirokord = qlirobody.indexOf('med</span><span class="StyledTitle_part__9uu2C StyledTitle_highlight__Yag_6 StyledTitle_last-in-segment__M8d15 StyledTitle_green___0HF9">')
      let qlirokord = qlirobody.indexOf('>3 månader: ')
      let qlirokollen = qlirobody.substring(qlirokord, qlirokord+20)
      qlirokranta = qlirobody.substring(qlirokord+12, qlirokord+16)
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
  //await expect(page.locator('#di-2-col-media')).toContainText('Öppna sparkonto');
  //await page.locator('div').filter({ hasText: 'Våra räntorSpara med hög rä' }).nth(2).click();
  //await page.getByText('Sparkonto rörlig ränta 3,50 %').click();
  //let coelispecial = await (page.locator('div').filter({ hasText: 'Våra räntorSpara med hög rä' }).nth(2)).textContent();
  if (coeliresponse) {
    let status = coeliresponse.status();
    let coelibody = await coeliresponse.text();
    //console.log('Content:', coelibody);
    if (coelibody.includes('sparkonto')) {
      let coelikord = coelibody.indexOf('Sparkonto 3 månader:')
      let coelikollen = coelibody.substring(coelikord, coelikord+20)
      coelikranta = coelibody.substring(coelikord+21, coelikord+25)
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
  //await expect(page.locator('#hero-heading')).toContainText('Fasträntekonto');
  //await page.locator('#main-content > div > div:nth-child(4)').click();
  //await page.locator('div:nth-child(4) > .mx-4').click();
  //await page.getByText('2,85').click();
  if (svearesponse) {
    let status = svearesponse.status();
    let sveabody = await svearesponse.text();
    //console.log('Content:', sveabody);
    if (sveabody.includes('Fasträntekonto')) {
      let sveaord = sveabody.indexOf('3 månader')
      let sveakollen = sveabody.substring(sveaord, sveaord+20)
      svearanta = sveabody.substring(sveaord+253, sveaord+257)
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
  //await page.getByRole('button', { name: 'Acceptera alla cookies' }).click();
  //await expect(page.locator('body')).toContainText('Sparkonto Fast');
  //await page.locator('#w-node-_793c7bf6-93cc-6681-7f99-ebfd74effe9c-4f2d5aef > .text-align-center').click();
  //await page.getByText('3 mån').click();
  //await page.getByText('3,40 %', { exact: true }).click();
  if (qredresponse) {
    let status = qredresponse.status();
    let qredbody = await qredresponse.text();
    //console.log('Content:', qredbody);
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

test('NstartPlus1', async ({ page }) => {
  let nstartresponse = await page.goto('https://www.plus1.com/');
  //await page.getByRole('button', { name: 'Godkänn alla' }).click();
  //await expect(page.locator('#splide01-slide01')).toContainText('Sparkonto Fast 3 mån');
  if (nstartresponse) {
    let status = nstartresponse.status();
    let nstartbody = await nstartresponse.text();
    //console.log('Content:', nstartbody);
    if (nstartbody.includes('sparkonton')) {
      let nstartord = nstartbody.indexOf('Fast 3 mån')
      let nstartkollen = nstartbody.substring(nstartord, nstartord+20)
      nstartranta = nstartbody.substring(nstartord+94, nstartord+98)
      //console.log('Content:', nstartbody);
      //console.log('Index..:', nstartord);
      //console.log('Content:', sveakollen);
      console.log('Plus1 (Nstart)');
      console.log('Fast 3 månaders ränta:', nstartranta, '%');
    }
  }
});

/* 20250319: Denna sida har havererat, den visar bara låneräntor ggr 5 :) plockar bort den så länge. */
/* 20250325: Uppdaterad till nya utseendet. */
test('Sparbanken Syd', async ({ page }) => {
  let sparsydresponse = await page.goto('https://www.sparbankensyd.se/sv/privat/vara-tjanster/spara/sparkonto');
  //await page.getByRole('button', { name: 'Godkänn alla' }).click();
  //await expect(page.locator('#main-content')).toContainText('Fasträntekonto');
  //await expect(page.getByRole('rowgroup')).toContainText('2,45');
  //await expect(page.getByRole('rowgroup')).toMatchAriaSnapshot(`- cell "3 mån"`);
  if (sparsydresponse) {
    let status = sparsydresponse.status();
    let sparsydbody = await sparsydresponse.text();
    //console.log('Content:', sparsydbody);
    if (sparsydbody.includes('Fasträntekonto')) {
      let sparsydord = sparsydbody.indexOf('&nbsp;3 m&aring;n')
      //let sparsydord2 = sparsydspecial.indexOf('2,70')
      let sparsydkollen = sparsydbody.substring(sparsydord, sparsydord+20)
      sparsydranta = sparsydbody.substring(sparsydord+80, sparsydord+84)
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
  //await expect(page.locator('#privatpersoner')).toContainText('sparräntor');
  if (borgoresponse) {
    let status = borgoresponse.status();
    let borgobody = await borgoresponse.text();
    //console.log('Content:', borgobody);
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
  //await page.getByRole('button', { name: 'Acceptera alla cookies' }).click();
  //await expect(page.getByRole('main')).toContainText('sparkonto');
  if (broccresponse) {
    let status = broccresponse.status();
    let broccbody = await broccresponse.text();
    //console.log('Content:', broccbody);
    if (broccbody.includes('Brocc Tillväxt')) {
      let broccord = broccbody.indexOf('>Brocc Tillväxt')
      let brocckollen = broccbody.substring(broccord, broccord+20)
      broccranta = broccbody.substring(broccord+16, broccord+20)
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
  //await page.getByRole('button', { name: 'Acceptera alla' }).click();
  //await expect(page.locator('h1')).toContainText('Spara');
  if (jakresponse) {
    let status = jakresponse.status();
    let jakbody = await jakresponse.text();
    //console.log('Content:', jakbody);
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
  test.slow();
  let arosresponse = await page.goto('https://www.aroskapital.se/tjanster/spara/');
  //await page.getByRole('button', { name: 'Acceptera alla cookies' }).click();
  //await expect(page.locator('#sectionContainer')).toContainText('Spara');
  if (arosresponse) {
    let status = arosresponse.status();
    let arosbody = await arosresponse.text();
    //console.log('Content:', arosbody);
    if (arosbody.includes('Spara')) {
      let arosord = arosbody.indexOf('>3 månader')
      let aroskollen = arosbody.substring(arosord, arosord+20)
      arosranta = arosbody.substring(arosord+510, arosord+514)
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
  //await page.getByRole('button', { name: 'Tillåt alla cookies' }).click();
  //await expect(page.locator('#hs_cos_wrapper_widget_1715868504032')).toContainText('sparkonto');
  if (serafimresponse) {
    let status = serafimresponse.status();
    let serafimbody = await serafimresponse.text();
    //console.log('Content:', serafimbody);
    if (serafimbody.includes('sparkonto')) {
      let serafimord = serafimbody.indexOf('<h3 class="h5 font-weight--bold" data-accordion-trigger>SeraFast privat 3 mån')
      let serafimkollen = serafimbody.substring(serafimord, serafimord+120)
      serafimranta = serafimbody.substring(serafimord+80, serafimord+84)
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
  //await page.getByRole('button', { name: 'Acceptera alla' }).click();
  //await expect(page.locator('h1')).toContainText('Sparkonto');
  //await page.locator('div').filter({ hasText: '3.3%Ränta - 3 mån3.3%Ränta -' }).nth(1).click();
  if (frodaresponse) {
    let status = frodaresponse.status();
    let frodabody = await frodaresponse.text();
    //console.log('Content:', frodabody);
    if (frodabody.includes('Sparkonto')) {
      let frodaord = frodabody.indexOf('>Ränta -  3 mån')
      let frodakollen = frodabody.substring(frodaord, frodaord+20)
      frodaranta = frodabody.substring(frodaord-128, frodaord-124)
      //console.log('Content:', frodabody);
      //console.log('Index..:', frodaord);
      //console.log('Content:', frodakollen);
      console.log('Froda');
      console.log('Fast 3 månaders ränta:', frodaranta, '%');
    }
  }
});

/* 2015-03-25: Uppdaterad till nya utseenset. */
test('Northmill Bank', async ({ page }) => {
  let northresonse = await page.goto('https://www.northmill.com/se/spara/fastrantekonto/');
  //await page.getByRole('button', { name: 'Tillåt alla' }).click();
  //await expect(page.locator('h1')).toContainText('Fasträntekonto');
  //await page.getByText('%').nth(1).click();
  //await page.getByText('3 månader med fast årsränta').click();
  if (northresonse) {
    let status = northresonse.status();
    let northbody = await northresonse.text();
    //console.log('Content:', northbody);
    if (northbody.includes('Fasträntekonto')) {
      let northord = northbody.indexOf('3 månader med fast årsränta')
      let northkollen = northbody.substring(northord, northord+20)
      northranta = northbody.substring(northord+138, northord+142)
      //console.log('Content:', northbody);
      //console.log('Index..:', northord);
      //console.log('Content:', northkollen);
      console.log('Northmill Bank');
      console.log('Fast 3 månaders ränta:', northranta, '%');
    }
  }
});

/* 2025-07-03 Pausar så länge, playwright tycker inte att siten är säker... Räntan hårdkodad. */
/* 2025-07-12 Siten är tydligen säker igen enligt Playwright. Aktiverar testen igen. */

test('Multitude Bank', async ({ page }) => {
  //let multirespons = await page.goto('https://www.multitudebank.se/priser?sc_lang=sv-se');
  let multirespons = await page.goto('https://www.multitudebank.se/priser');
  //await page.getByRole('button', { name: 'Accept all' }).click();
  //await page.getByRole('cell', { name: '3,00%' }).first().click();
  //await page.getByRole('cell', { name: 'Fast 3 månader' }).click();
  //await expect(page.locator('h2')).toContainText('Aktuella räntor och bindningstider');
  if (multirespons) {
    let status = multirespons.status();
    let multihbody = await multirespons.text();
    //console.log('Content:', multihbody);
    if (multihbody.includes('Sparkonto')) {
      let multihord = multihbody.indexOf('Fast 3 månader</td><td')
      let multikollen = multihbody.substring(multihord, multihord+20)
      multiranta = multihbody.substring(multihord+102, multihord+106)
      //console.log('Content:', multihbody);
      //console.log('Index..:', multihord);
      //console.log('Content:', multikollen);
      console.log('Multitude Bank');
      console.log('Fast 3 månaders ränta:', multiranta, '%');
    }
  }
});

/* 20250319: Klarna krånglar, plockar bort denna. Sämsta räntan i vilket fall. */
/* 20250326: Klarna krånglar IGEN, plockar bort denna. Sämsta räntan i vilket fall. */
/* 20250429: Provar att lägga tillbaka Klarna. */
/* 20250430: Klarna krånglar IGEN, plockar bort denna. Fastränte sidan nere. Kör manuellt med 2.00 % */
/* 20250626: Fakead ränta, men med ett klick på räntan. För att ha lita koll... */
/* 29250722: Time'ar ut. plockar bort denna för ett tag. */

test('Klarna', async ({ page }) => {
  // let klarnaresponse = await page.goto('https://www.klarna.com/se/fastkonto/');
  // await page.getByRole('button', { name: 'Acceptera' }).click();
  // //await page.getByRole('button', { name: 'Tillåt alla' }).click();
  // //await expect(page.locator('#content-below-header')).toContainText('Fastkonto');
  // await page.getByRole('cell', { name: '2% på årsbasis' }).first().click();

  //await page.getByText('3 månader').click();
  //await page.getByText('2,15%').click();
  // if (klarnaresponse) {
  //   let status = klarnaresponse.status();
  //   let klarnabody = await klarnaresponse.text();
  //   //console.log('Content:', klarnabody);
  //   if (klarnabody.includes('Fastkonto')) {
  //     let klarnaord = klarnabody.indexOf('">3</span>')
  //     let klarnakollen = klarnabody.substring(klarnaord, klarnaord+20)
  //     klarnaranta = klarnabody.substring(klarnaord+352, klarnaord+353)
  //     //console.log('Content:', klarnabody);
  //     //console.log('Index..:', klarnaord);
  //     //console.log('Content:', klarnakollen);
  //     console.log('Klarna');
  //     console.log('Fast 3 månaders ränta:', klarnaranta, '%');
  //   }
  // }
       console.log('Klarna');
       console.log('Fast 3 månaders ränta:', klarnaranta, '%');
});

test('HoistSpar', async ({ page }) => {
  let hoistresponse = await page.goto('https://www.hoistspar.se/borja-spara-hos-oss/jamfor-sparformer/');
  //await page.getByRole('button', { name: 'Accept & Close' }).click();
  //await expect(page.getByRole('rowgroup')).toContainText('Sparkonto Fast');
  if (hoistresponse) {
    let status = hoistresponse.status();
    let hoistbody = await hoistresponse.text();
    //console.log('Content:', hoistbody);
    if (hoistbody.includes('Sparkonto Fast')) {
      let hoisthord = hoistbody.indexOf('Sparkonto Fast 3')
      let hoistkollen = hoistbody.substring(hoisthord, hoisthord+20)
      hoistranta = hoistbody.substring(hoisthord-85, hoisthord-81)
      //console.log('Content:', hoistbody);
      //console.log('Index..:', hoisthord);
      //console.log('Content:', hoistkollen);
      console.log('HoistSpar');
      console.log('Fast 3 månaders ränta:', hoistranta, '%');
    }
  }
});

test('Danske Bank', async ({ page }) => {
  let danskresponse = await page.goto('https://danskebank.se/privat/produkter/spara-och-placera/sparkonton/fastranteplacering');
  //await page.getByRole('button', { name: 'OK till alla' }).click();
  //await expect(page.locator('#main-content')).toContainText('Fastränteplacering');
  if (danskresponse) {
    let status = danskresponse.status();
    let danskbody = await danskresponse.text();
    //console.log('Content:', danskbody);
    if (danskbody.includes('>3 månader<')) {
      let danskord = danskbody.indexOf('>3 månader<')
      let danskkollen = danskbody.substring(danskord, danskord+20)
      danskranta = danskbody.substring(danskord+88, danskord+92)
      //console.log('Content:', danskbody);
      //console.log('Index..:', danskord);
      //console.log('Content:', danskkollen);
      console.log('Danske Bank');
      console.log('Fast 3 månaders ränta:', danskranta, '%');
    }
  }
});

test('Fedelta', async ({ page }) => {
  let fedeltaresponse = await page.goto('https://fedelta.se/sparkonto');
  //await page.getByRole('button', { name: 'OK till alla' }).click();
  //await expect(page.locator('#main-content')).toContainText('Fastränteplacering');
  if (fedeltaresponse) {
    let status = fedeltaresponse.status();
    let fedeltabody = await fedeltaresponse.text();
    //console.log('Content:', fedeltabody);
    if (fedeltabody.includes('3 mån')) {
      let fedeltakord = fedeltabody.indexOf('3 mån","')
      let fedeltakollen = fedeltabody.substring(fedeltakord, fedeltakord+20)
      fedeltaranta = fedeltabody.substring(fedeltakord+8, fedeltakord+12)
      //console.log('Content:', fedeltabody);
      //console.log('Index..:', fedeltakord);
      //console.log('Content:', fedeltakollen);
      console.log('Fedelta');
      console.log('Fast 3 månaders ränta:', fedeltaranta, '%');
    }
  }
});

test('Sammanställning', async () => {
  console.log('Sammanställning...');
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
  console.log('Resurs Bank');
  console.log('Sparkont Max ränta:', resursranta, '%');
  console.log('');
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
  console.log('Klarna');
  console.log('Fast 3 månaders ränta:', klarnaranta, '%');
  console.log('');
  console.log('HoistSpar');
  console.log('Fast 3 månaders ränta:', hoistranta, '%');
  console.log('');
  console.log('Danske Bank');
  console.log('Fast 3 månaders ränta:', danskranta, '%');
  console.log('');
  console.log('Fedelta');
  console.log('Fast 3 månaders ränta:', fedeltaranta, '%');
  console.log('');
  // ...
});

test('Sorterat', async () => {
  console.log('Sortering... index.html')

  learanta = learanta.replace(',', '.');
  moankranta = moankranta.replace(',', '.');
  blueranta = blueranta.replace(',', '.');
  epranta = epranta.replace(',', '.');
  resursranta = resursranta.replace(',', '.');
  nordiskaranta = nordiskaranta.replace(',', '.');
  medranta = medranta.replace(',', '.');
  sbabranta = sbabranta.replace(',', '.');
  Skandiaranta = Skandiaranta.replace(',', '.');
  swedbankranta = swedbankranta.replace(',', '.');
  shbranta = shbranta.replace(',', '.');
  nordearanta = nordearanta.replace(',', '.');
  sebranta = sebranta.replace(',', '.');
  lansfranta = lansfranta.replace(',', '.');
  //collectorranta = collectorranta.replace(',', '.');
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
  klarnaranta = klarnaranta.replace(',', '.');
  hoistranta = hoistranta.replace(',', '.');
  danskranta = danskranta.replace(',', '.');
  fedeltaranta = fedeltaranta.replace(',', '.');
  
  interface Banks{
    banknamn: string;
    bank: string;
    ranta: number;
  }

  const bankarr: Banks[] = [
    { banknamn: 'Lea Bank', bank: '<a href="https://leabank.se/spara/sparkonto-plus" target="_blank">Lea Bank</a> &#128198; &#128182;', ranta: learanta },
    { banknamn: 'Moank', bank: '<a href="https://www.moank.se/spara-pengar" target="_blank">Moank</a>', ranta: moankranta },
    { banknamn: 'Bluestep Bank', bank: '<a href="https://www.bluestep.se/spara/fast-ranta/" target="_blank">Bluestep Bank</a>', ranta: blueranta},
    { banknamn: 'EP Bank', bank: '<a href="https://www.epbank.se/spar/oversikt/" target="_blank">EP Bank</a>', ranta: epranta },
    { banknamn: 'Resurs Bank', bank: '<a href="https://www.resursbank.se/sparkonto/sparkonto-flex" target="_blank">Resurs</a> &#128176;', ranta: resursranta},
    { banknamn: 'Nordiska', bank: '<a href="https://www.nordiska.se/spara/" target="_blank">Nordiska</a>', ranta: nordiskaranta},
    { banknamn: 'MedMera Bank', bank: '<a href="https://medmerabank.se/spara/fastrantekonto" target="_blank">MedMera Bank</a>', ranta: medranta},
    { banknamn: 'SBAB', bank: '<a href="https://www.sbab.se/1/privat/spara/sparkonto/fastrantekonto.html?content=second" target="_blank">SBAB</a>', ranta: sbabranta},
    { banknamn: 'Skandia Bank', bank: '<a href="https://www.skandia.se/vardagstjanster/konton-kort/fastrantekonto/" target="_blank">Skandia Bank</a>', ranta: Skandiaranta},
    { banknamn: 'Swedban', bank: '<a href="https://www.swedbank.se/privat/spara-och-placera/sparkonton/fastrantekonto.html" target="_blank">Swedbank</a>', ranta: swedbankranta},
    { banknamn: 'Handelsbanken', bank: '<a href="https://www.handelsbanken.se/sv/privat/spara/sparkonton-och-rantor" target="_blank">Handelsbanken</a> &#128204;', ranta: shbranta},
    { banknamn: 'Nordea', bank: '<a href="https://www.nordea.se/privat/produkter/spara-investera/sparkonton/fastrantekonto.html" target="_blank">Nordea</a>', ranta: nordearanta},
    { banknamn: 'SEB', bank: '<a href="https://seb.se/privat/spara-och-investera/sparkonto-och-depa/placeringskonto?icmp=sebsep_enklaspar_rb_x_placeringskonto#sparkonto" target="_blank">SEB</a>', ranta: sebranta},
    { banknamn: 'Länsförsäkringar Bank', bank: '<a href="https://www.lansforsakringar.se/stockholm/privat/bank/bli-bankkund/aktuella-rantor-och-priser/" target="_blank">Länsförsäkringar Bank</a>', ranta: lansfranta},
    { banknamn: 'Collector', bank: '<a href="https://www.collector.se/spara-pengar/aktuella-sparrantor/" target="_blank">Collector</a>', ranta: collectorranta},
    { banknamn: 'Marginalen Bank', bank: '<a href="https://www.marginalen.se/privat/banktjanster/spara/fastrantekonto/" target="_blank">Marginalen Bank</a>', ranta: marginalranta},
    { banknamn: 'Qliro', bank: '<a href="https://www.qliro.com/sv-se/spara" target="_blank">Qliro</a>', ranta: qlirokranta},
    { banknamn: 'Coeli', bank: '<a href="https://coeli.se/spara/" target="_blank">Coeli</a>', ranta: coelikranta},
    { banknamn: 'Svea Bank', bank: '<a href="https://www.svea.com/sv-se/privat/spara/fastr%C3%A4ntekonto" target="_blank">Svea Bank</a>', ranta: svearanta},
    { banknamn: 'Qred Bank', bank: '<a href="https://www.qred.se/sparkonto" target="_blank">Qred Bank</a>', ranta: qredranta},
    { banknamn: 'Plus1 (Nstart)', bank: '<a href="https://www.plus1.com/" target="_blank">Plus1</a>', ranta: nstartranta},
    { banknamn: 'Sparbanken Syd', bank: '<a href="https://www.sparbankensyd.se/sv/privat/vara-tjanster/spara/sparkonto" target="_blank">Sparbanken Syd</a>', ranta: sparsydranta},
    { banknamn: 'Borgo', bank: '<a href="https://www.borgohypotek.se/sparkonto#privatpersoner" target="_blank">Borgo</a>', ranta: borgoranta},
    { banknamn: 'Brocc', bank: '<a href="https://brocc.se/spara" target="_blank">Brocc</a> &#128198;', ranta: broccranta},
    { banknamn: 'JAK Medlemsbank', bank: '<a href="https://www.jak.se/vardagstjanster/spara-placera/" target="_blank">JAK Medlemsbank</a>', ranta: jakranta},
    { banknamn: 'Aros Kapital', bank: '<a href="https://www.aroskapital.se/tjanster/spara/" target="_blank">Aros Kapital</a>', ranta: arosranta},
    { banknamn: 'Serafim Finans', bank: '<a href="https://serafimfinans.se/spara" target="_blank">Serafim Finans</a>', ranta: serafimranta},
    { banknamn: 'Froda', bank: '<a href="https://www.froda.se/sparkonto" target="_blank">Froda</a>', ranta: frodaranta},
    { banknamn: 'Northmill Bank', bank: '<a href="https://www.northmill.com/se/spara/fastrantekonto/" target="_blank">Northmill Bank</a>', ranta: northranta},
    { banknamn: 'Multitude Bank', bank: '<a href="https://www.multitudebank.se/priser?sc_lang=sv-se" target="_blank">Multitude Bank</a>', ranta: multiranta},
    { banknamn: 'Klarna', bank: '<a href="https://www.klarna.com/se/fastkonto/" target="_blank">Klarna</a> &#128204;', ranta: klarnaranta},
    { banknamn: 'HoistSpar', bank: '<a href="https://www.hoistspar.se/borja-spara-hos-oss/jamfor-sparformer/" target="_blank">HoistSpar</a>', ranta: hoistranta},
    { banknamn: 'Danske Bank', bank: '<a href="https://danskebank.se/privat/produkter/spara-och-placera/sparkonton/fastranteplacering" target="_blank">Danske Bank</a>', ranta: danskranta},
    { banknamn: 'Fedelta', bank: '<a href="https://fedelta.se/sparkonto" target="_blank">Fedelta</a>', ranta: fedeltaranta},
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
  let outputFile = 'index.html';
  fs.writeFileSync(outputFile, '<!DOCTYPE html>\n');
  fs.appendFileSync(outputFile, '<html>\n');
  fs.appendFileSync(outputFile, '<head>\n');
  fs.appendFileSync(outputFile, '<meta name="description" content="Sparguiden Fasträntekonto 3 månader">\n');
  fs.appendFileSync(outputFile, '<meta name="keywords" content="HTML, Playwright, TypeScript">\n');
  fs.appendFileSync(outputFile, '<meta name="author" content="Matt Clayton">\n');
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
  fs.appendFileSync(outputFile, '<p>Bästa fasträntekontot just nu. Listan tas fram 2 gånger per dag, morgon och kväll, måndag - fredag.</p>\n');
  // fs.appendFileSync(outputFile, '<p>Fasträntekonto 1* - 3 mån.</p>\n');
  fs.appendFileSync(outputFile, '<div style="overflow-x:auto;">\n');
  fs.appendFileSync(outputFile, '  <table>\n');
  fs.appendFileSync(outputFile, '    <tr>\n');
  fs.appendFileSync(outputFile, '      <th>Bank &#127974;<br>Fasträntekonto 3 månader.</th>\n');
  fs.appendFileSync(outputFile, '      <th>Ränta %</th>\n');
  fs.appendFileSync(outputFile, `      <th>Kvartal<br>Ex. ${exempelBelopp} kr</th>\n`);
  fs.appendFileSync(outputFile, `      <th>Netto kvartal<br>Ex. ${exempelBelopp} kr</th>\n`);
  fs.appendFileSync(outputFile, `      <th>Netto per dag<br>Ex. ${exempelBelopp} kr</th>\n`);
  fs.appendFileSync(outputFile, '    </tr>\n');

  let counter = 0;
  let i = 0;
  let position: string = '';
  do {
    let color = 'black';
    if (counter == 3)
      {
        if(bankarr[i].ranta == bankarr[i-1].ranta)
          {
            position = '&#129353;';
            color = 'green';
          }
          else
          {
            counter = 4;
            position = '';
          }
      }
      if (counter == 2)
        {
          if(bankarr[i].ranta == bankarr[i-1].ranta)
            {
              position = '&#129352;';
              color = 'green';
            }
            else
            {
              counter = 3;
              position = '&#129353;';
              color = 'green';
            }
        }
      if (counter == 1)
        {
          if(bankarr[i].ranta == bankarr[i-1].ranta)
            {
              position = '&#129351;';
              color = 'green';
            }
            else
            {
              counter = 2;
              position = '&#129352;';
              color = 'green';
            }
        }
        if (i == 0){
          counter = 1;
          position = '&#129351;';
          color = 'green';
        }
    //let color = 'green';
    const banken: string = bankarr[i].bank;
    const rantan: number = bankarr[i].ranta;
    // if (rantan < 3.00){
    //   color = 'black';
    // }
    if (rantan < 2.00){
      color = 'red';
      position = '&#129300;';
    }
        if (rantan < 1.65){
      color = 'red';
      position = '&#128542;';
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
  fs.appendFileSync(outputFile, '<br>Powered by MATS - <b>M</b>assive <b>A</b>ut&#128521;mation <b>T</b>esting <b>S</b>ervice &#127917; <a href="https://mattclayton3.github.io/Sparguiden/" target="_blank">GitHub</a> &#127917; <a href="https://mgc2.webnode.se/sparguiden/" target="_blank">Webnode</a>\n');
  fs.appendFileSync(outputFile, '<br>&#128198; = Räntan betalas ut varje månad.\n');
  fs.appendFileSync(outputFile, '<br>&#128182; = Utbetalning 31 dagar från begäran.\n');
  fs.appendFileSync(outputFile, '<br>&#128176; = Vanligt sparkonto.\n');
  fs.appendFileSync(outputFile, '<br>&#128204; = OBS! Hårdkodad ränta.\n');

  fs.appendFileSync(outputFile, '</body>\n');
  fs.appendFileSync(outputFile, '</html>\n');

  // const execute = utils.promisify(exec);
  // console.log(await execute(outputFile));
});

});
