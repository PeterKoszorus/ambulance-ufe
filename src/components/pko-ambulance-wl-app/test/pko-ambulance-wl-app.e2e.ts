import { newE2EPage } from '@stencil/core/testing';

describe('pko-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pko-ambulance-wl-app></pko-ambulance-wl-app>');

    const element = await page.find('pko-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
