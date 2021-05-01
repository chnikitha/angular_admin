import { IcinPage } from './app.po';

describe('icin App', function() {
  let page: IcinPage;

  beforeEach(() => {
    page = new IcinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
