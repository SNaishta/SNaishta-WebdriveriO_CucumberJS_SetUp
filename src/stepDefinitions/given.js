import { Given} from 'cucumber';
import HomePage from '../pages/homePage';

Given(/^I am on the homepage/, function () {
    HomePage.open();
    HomePage.validatePageTitle();
});

