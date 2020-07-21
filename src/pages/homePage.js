import BasePage from "./basePage";
const Actions = require('./common/actions');

class HomePage extends BasePage {
    homePageTitle = "BBC - Home";

    get weatherTab() { return $('=Weather');}

    open() {
        super.open();
    }

    validatePageTitle() {
        const title = Actions.getTitle();
        console.log("----- title of Home page is  : " + title)
        assert.equal(title, this.homePageTitle);
    }

    clickOnWeather() {
        this.weatherTab.click();
    }
}

export default new HomePage()
