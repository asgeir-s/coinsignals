import { CoinsignalsPage } from './app.po';

describe('coinsignals App', () => {
  let page: CoinsignalsPage;

  beforeEach(() => {
    page = new CoinsignalsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
