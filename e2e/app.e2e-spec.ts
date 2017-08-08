import { NewsPostPage } from './app.po';

describe('news-post App', () => {
  let page: NewsPostPage;

  beforeEach(() => {
    page = new NewsPostPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
