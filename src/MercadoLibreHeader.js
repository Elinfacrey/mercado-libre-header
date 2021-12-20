import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './MercadoLibreHeader-styles.js';
import "@bbva-web-components/bbva-web-header-multistep/bbva-web-header-multistep.js";
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<mercado-libre-header></mercado-libre-header>
```

##styling-doc

@customElement mercado-libre-header
*/
export class MercadoLibreHeader extends LitElement {
  static get is() {
    return 'mercado-libre-header';
  }

  // Declare properties
  static get properties() {
    return {
      name: { type: String, },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.name = 'Cells';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('mercado-libre-header-shared-styles')
    ];
  }


  async firstUpdate() {
    await this.updateComplete;
    let header = this.ShadowRoot.querySelector('headerOf');
    console.log("asd",header);
    
   
 
    
  //  hmst.shadowRoot.querySelector('.header').setAtributte('style','height:10rem;');

  

}
  // Define a template
  render() {
    return html`
    <div class="header">
      <div class="zone">
      <bbva-web-header-multistep block-title="Block title" class="headerOf" process-title="Mercado Libre BBVA"></bbva-web-header-multistep>
      </div>
    </div>
    `;
  }
}
