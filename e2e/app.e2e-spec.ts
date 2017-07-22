import { MarvelxperiencePage } from './app.po';

describe('marvelxperience App', () => {
  let page: MarvelxperiencePage;

  beforeEach(() => {
    page = new MarvelxperiencePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
