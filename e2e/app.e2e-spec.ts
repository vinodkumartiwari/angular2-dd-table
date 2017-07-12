import { Angular2DdTablePage } from './app.po';

describe('angular2-dd-table App', () => {
  let page: Angular2DdTablePage;

  beforeEach(() => {
    page = new Angular2DdTablePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
