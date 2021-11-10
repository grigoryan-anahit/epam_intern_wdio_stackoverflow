const Page = require('./page');

class LocatorPage extends Page {

    get products () { return $('[class="-marketing-link js-gps-track js-products-menu"]') }
    get jobs () { return $('[href="/jobs?so_source=ProductsMenu&so_medium=StackOverflow"]') }
    get jobsSection () { return $('#TabJobs') }

    get backgroundBtn () { return $('#filter-button-background') }
    get minexpirience () { return $('.//div[@id="popover-background"]//div[@class="s-select"][1]') }
    get minExperienceSelectBox () {return $('#ms')}

    get role () {return $('#dr_chosen')}
    get roleSelectBox () {return $('.//div[@id="popover-background"]//ul[@class="chosen-results"]')}
    get roleSelectBoxLis () {return $$('class="active-result')[0]}
    get jobType () {return $('#jPermanent')}
    get applyFiltersBtn () {return $('.//div[@id="popover-background"]//button[@class="s-btn s-btn__primary js-submit js-trigger"]')}
    get filterCheckingJobExperience () {return $('[class="js-added-filter flex--item s-tag"]:first-of-type')}
    get filterCheckingJobRole () {return $('[class="js-added-filter flex--item s-tag"]:last-of-type')}
    get filterCheckingJobType () {return $('[data-key="jPermanent"]')}





    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

}

module.exports = new LocatorPage();
