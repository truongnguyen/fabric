import { FabricPage } from './app.po';

describe('fabric App', function() {
  let page: FabricPage;

  beforeEach(() => {
    page = new FabricPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
