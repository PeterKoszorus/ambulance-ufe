import { newE2EPage } from '@stencil/core/testing';

describe('pko-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pko-ambulance-wl-list></pko-ambulance-wl-list>');

    const element = await page.find('pko-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
