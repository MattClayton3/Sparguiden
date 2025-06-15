import { test, expect } from '@playwright/test';

test('Resurs', async ({ page }) => {
  let resursresponse = await page.goto('https://www.resursbank.se/sparkonto');
  await page.getByRole('button', { name: 'Acceptera cookies' }).click();
  //await page.locator('span').filter({ hasText: '%' }).click();
  //await expect(page.locator('#main-content')).toContainText('Våra sparkonton');

  if (resursresponse) {
    let status = resursresponse.status();
    let resursbody = await resursresponse.text();
    console.log('Content:', resursbody);
    if (resursbody.includes('sparkonto')) {
      let resursord = resursbody.indexOf('Ränta <span class="resurs')
      let resurskollen = resursbody.substring(resursord, resursord+20)
      let resursranta = resursbody.substring(resursord+45, resursord+49)
      //console.log('Content:', resursbody);
      //console.log('Index..:', resursord);
      //console.log('Content:', resurskollen);
      console.log('Resurs Bank');
      console.log('Sparkonto Max ränta:', resursranta, '%');
    }
  }

});