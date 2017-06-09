import { SearchingAlgorithmsPage } from './app.po';

describe('searching-algorithms App', () => {
  let page: SearchingAlgorithmsPage;

  beforeEach(() => {
    page = new SearchingAlgorithmsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
