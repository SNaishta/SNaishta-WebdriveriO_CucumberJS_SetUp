import { Then } from 'cucumber';
import WeatherPage from '../pages/weatherPage';

Then(/^I should be able to view summary for the day$/, function () {
    WeatherPage.validatePageTitle();
    WeatherPage.checkSummary().should.equal('UK Summary');
});