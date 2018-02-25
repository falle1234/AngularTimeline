import { browser, by, element } from 'protractor';

export class EventsPage {
  navigateTo() {
    return browser.get('/events/');
  }

  getPage() {
    return element(by.css('event-page'));
  }

  getList() {
    return element(by.css('event-page events-list'));
  }
}
