import { newSpecPage } from '@stencil/core/testing';
import { PkoAmbulanceWlList } from '../pko-ambulance-wl-list';

describe('pko-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PkoAmbulanceWlList],
      html: `<pko-ambulance-wl-list></pko-ambulance-wl-list>`,
    });
    
    const wlList = page.rootInstance as PkoAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
