import { newSpecPage } from '@stencil/core/testing';
import { PkoAmbulanceWlEditor } from '../pko-ambulance-wl-editor';

describe('pko-ambulance-wl-editor', () => {
  it('buttons shall be of different type', async () => {
    const page = await newSpecPage({
      components: [PkoAmbulanceWlEditor],
      html: `<pko-ambulance-wl-editor entry-id="@new"></pko-ambulance-wl-editor>`,
    });
    let items: any = await page.root.shadowRoot.querySelectorAll("md-filled-button");
    expect(items.length).toEqual(1);
    items = await page.root.shadowRoot.querySelectorAll("md-outlined-button");
    expect(items.length).toEqual(1);

    items = await page.root.shadowRoot.querySelectorAll("md-filled-tonal-button");
    expect(items.length).toEqual(1);
  });
});
