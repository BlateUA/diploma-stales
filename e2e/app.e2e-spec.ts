import { StalesAppPage } from './app.po';

describe('stales-app App', () => {
  let page: StalesAppPage;

  beforeEach(() => {
    page = new StalesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
