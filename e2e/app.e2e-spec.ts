import { FabricNewPage } from './app.po';

describe('fabric-new App', () => {
  let page: FabricNewPage;

  beforeEach(() => {
    page = new FabricNewPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
