import { ImeeposRunnerComponentsPage } from './app.po';

describe('imeepos-runner-components App', () => {
  let page: ImeeposRunnerComponentsPage;

  beforeEach(() => {
    page = new ImeeposRunnerComponentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
