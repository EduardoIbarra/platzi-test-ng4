import { PlatziTestNg4Page } from './app.po';

describe('platzi-test-ng4 App', () => {
  let page: PlatziTestNg4Page;

  beforeEach(() => {
    page = new PlatziTestNg4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
