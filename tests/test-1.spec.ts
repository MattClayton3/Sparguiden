import { test, expect } from '@playwright/test';

test('Danske Bank', async ({ page }) => {
  let danskresponse = await page.goto('https://danskebank.se/privat/produkter/spara-och-placera/sparkonton/fastranteplacering');
  await page.getByRole('button', { name: 'OK till alla' }).click();
  await expect(page.locator('#main-content')).toContainText('Fastränteplacering');
  if (danskresponse) {
    let status = danskresponse.status();
    let danskbody = await danskresponse.text();
    console.log('Content:', danskbody);
    if (danskbody.includes('>3 månader<')) {
      let danskord = danskbody.indexOf('>3 månader<')
      let danskkollen = danskbody.substring(danskord, danskord+20)
      let danskranta = danskbody.substring(danskord+88, danskord+92)
      //console.log('Content:', danskbody);
      //console.log('Index..:', danskord);
      //console.log('Content:', danskkollen);
      console.log('Danske Bank');
      console.log('Fast 3 månaders ränta:', danskranta, '%');
    }
  }
});