const Actions = require('./common/actions');

class WeatherPage {
    weatherPageTitle = "BBC Weather";

    get summary() {return $('.gs-u-pb')}

    validatePageTitle() {
        const title = Actions.getTitle();
        console.log("----- title of Weather page  : " + title)
        assert.equal(title, this.weatherPageTitle);
    }

    checkSummary() {
        return this.summary.getText();
    }
}
export default new WeatherPage()
