import { test, expect } from '@playwright/test';

/* 20250319: Klarna krånglar, plockar bort denna. Sämsta räntan i vilket fall. */
/* 20250326: Klarna krånglar IGEN, plockar bort denna. Sämsta räntan i vilket fall. */
test('Klarna', async ({ page }) => {
  let klarnaresponse = await page.goto('https://www.klarna.com/se/fastkonto/');
  await page.getByRole('button', { name: 'Tillåt alla' }).click();
  await expect(page.locator('#content-below-header')).toContainText('Fastkonto');
  //await page.getByText('3 månader').click();
  //await page.getByText('2,15%').click();
  if (klarnaresponse) {
    let status = klarnaresponse.status();
    let klarnabody = await klarnaresponse.text();
    //console.log('Content:', klarnabody);
    if (klarnabody.includes('Fastkonto')) {
      let klarnaord = klarnabody.indexOf('">3</span>')
      let klarnakollen = klarnabody.substring(klarnaord, klarnaord+20)
      let klarnaranta = klarnabody.substring(klarnaord+352, klarnaord+353)
      //console.log('Content:', klarnabody);
      //console.log('Index..:', klarnaord);
      //console.log('Content:', klarnakollen);
      console.log('Klarna');
      console.log('Fast 3 månaders ränta:', klarnaranta, '%');
    }
  }
});