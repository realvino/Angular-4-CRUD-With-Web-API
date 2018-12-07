import { AngularCURDPage } from './app.po';

describe('angular-curd App', () => {
  let page: AngularCURDPage;

  beforeEach(() => {
    page = new AngularCURDPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
