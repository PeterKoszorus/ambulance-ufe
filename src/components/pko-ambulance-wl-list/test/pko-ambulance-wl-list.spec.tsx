import { newSpecPage } from '@stencil/core/testing';
import { PkoAmbulanceWlList } from '../pko-ambulance-wl-list';

describe('pko-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PkoAmbulanceWlList],
      html: `<pko-ambulance-wl-list></pko-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <pko-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pko-ambulance-wl-list>
    `);
  });
});
