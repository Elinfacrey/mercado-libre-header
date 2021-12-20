import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing'; // eslint-disable-line import/no-extraneous-dependencies
import '../mercado-libre-header.js';

suite('MercadoLibreHeader', () => {
  let el;

  teardown(() => fixtureCleanup());

  setup(async () => {
    el = await fixture(html`<mercado-libre-header></mercado-libre-header>`);
    await el.updateComplete;
  });

  test('instantiating the element with default properties works', () => {
    const element = el.shadowRoot.querySelector('p');
    assert.equal(element.innerText, 'Welcome to Cells');
  });

});
