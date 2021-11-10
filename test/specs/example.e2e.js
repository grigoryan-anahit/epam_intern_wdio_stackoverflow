const LocatorPage = require('../pageobjects/locator.page');

describe('Open stackoverfow website', () => {
    it('should check title', async () => {
        browser.maximizeWindow();
        await LocatorPage.open();
         expect(browser.getTitle).toHaveText('Stack Overflow - Where Developers Learn, Share, & Build Careers')

    });
    it('should go to products, jobs,jobs must have orange background', async () => {
        await LocatorPage.products.click();
        await LocatorPage.jobs.click();
        const bgColor=(await LocatorPage.jobsSection.getCSSProperty('backgroundColor')).value;
        expect(bgColor).toEqual("rgba(244,130,37,1)")
    });
    it('should click on backgrounds and set filters', async () => {
       await LocatorPage.backgroundBtn.click();
        await browser.pause(2000);
        await LocatorPage.minexpirience.click()
        await browser.pause(2000);
       await LocatorPage.minExperienceSelectBox.selectByAttribute('value',"Junior");

       await LocatorPage.role.click();
        await browser.pause(2000);
        await LocatorPage.roleSelectBox.$$('li')[0].click();
        await browser.pause(1000);

        await LocatorPage.jobType.click();
        await LocatorPage.applyFiltersBtn.click();
        await expect(LocatorPage.filterCheckingJobExperience).toHaveTextContaining('Junior');
        await expect(LocatorPage.filterCheckingJobRole).toHaveTextContaining('Backend Developer');
        await expect(LocatorPage.filterCheckingJobType).toHaveTextContaining('Full-time');

    });



});


