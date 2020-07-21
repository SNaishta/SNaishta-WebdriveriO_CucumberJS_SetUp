import { When} from 'cucumber';
import homepage from "../pages/homePage";

var {Then} = require('cucumber');

When(/^I click on weather tab on the homepage$/, function () {
    homepage.clickOnWeather()
});
