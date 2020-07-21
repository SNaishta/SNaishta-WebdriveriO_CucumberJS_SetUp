export default class BasePage {
   open () {
    browser.setWindowSize(1800, 1200);
    browser.url('./');
    browser.pause(2000);
  }
}
