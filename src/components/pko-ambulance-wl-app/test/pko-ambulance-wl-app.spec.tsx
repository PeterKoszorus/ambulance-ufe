import { newSpecPage } from '@stencil/core/testing';
import { PkoAmbulanceWlApp } from '../pko-ambulance-wl-app';

describe( 'pko-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components:  [PkoAmbulanceWlApp],
      html: `<pko-ambulance-wl-app base-path="/"></pko-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ( "pko-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components:  [PkoAmbulanceWlApp],
      html: `<pko-ambulance-wl-app base-path="/ambulance-wl/"></pko-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual( "pko-ambulance-wl-list");
  });
});
