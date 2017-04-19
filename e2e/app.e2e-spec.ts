import { MdPage } from './app.po';

describe('md App', () => {
  let page: MdPage;

  beforeEach(() => {
    page = new MdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
