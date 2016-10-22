import { FplAppPage } from './app.po';

describe('fpl-app App', function() {
  let page: FplAppPage;

  beforeEach(() => {
    page = new FplAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
