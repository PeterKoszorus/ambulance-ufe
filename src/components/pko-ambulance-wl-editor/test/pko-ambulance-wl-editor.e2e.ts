import { newE2EPage } from '@stencil/core/testing';

describe('pko-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pko-ambulance-wl-editor></pko-ambulance-wl-editor>');

    const element = await page.find('pko-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
