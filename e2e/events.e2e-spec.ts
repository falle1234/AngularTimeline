import { EventsPage } from './events.po';

describe('eventviewer Event page', () => {
  let page: EventsPage;

  beforeEach(() => {
    page = new EventsPage();
  });

  it('should display events page', () => {
    page.navigateTo();
    expect(page.getPage().isElementPresent).toBeTruthy();
  });

  it('should display list of events inside event page', () => {
    page.navigateTo();
    expect(page.getList().isElementPresent).toBeTruthy();
  });
});
