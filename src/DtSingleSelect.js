import { html, css, LitElement } from 'lit';

export class DtSingleSelect extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--dt-single-select-text-color, #000);
      }
      h2 {
        color: var(--primary-color);
      }
      select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: #fefefe;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='32' height='24' viewBox='0 0 32 24'><polygon points='0,0 32,0 16,24' style='fill: rgb%28138, 138, 138%29'></polygon></svg>");
        background-origin: content-box;
        background-position: right -1.0666666667rem center;
        background-repeat: no-repeat;
        background-size: 9px 6px;
        border: 1px solid #cacaca;
        border-radius: 0;
        color: #0a0a0a;
        font-family: Helvetica,Arial,sans-serif;
        font-size: 1rem;
        font-weight: 300;
        height: 2.5rem;
        line-height: 1.5;
        margin: 0 0 1.0666666667rem;
        padding: 0.5333333333rem 1.6rem 0.5333333333rem 0.5333333333rem;
        -webkit-transition: border-color .25s ease-in-out,-webkit-box-shadow .5s;
        transition: border-color .25s ease-in-out,-webkit-box-shadow .5s;
        transition: box-shadow .5s,border-color .25s ease-in-out;
        transition: box-shadow .5s,border-color .25s ease-in-out,-webkit-box-shadow .5s;
        
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 100%;
        text-transform: none;
      }
    `;
  }

  static get properties() {
    return {
      name: { type: String },
      placeholderLabel: { type: String },
      options: { type: Array },
      value: {
        type: String,
        reflect: true,
      },
      color: {
        type: String,
        state: true,
      },
      textColor: {
        type: String,
        state: true,
      }
    };
  }

  constructor() {
    super();
  }

  updateColor() {
    console.log(this.value, this.options);
    if (this.value && this.options) {
      const options = this.options.filter(opt => opt.id === this.value);
      if (options && options.length) {
        this.color = options[0].color;
      }
    }

    if (this.color) {
      if (this.isColorLight(this.color)) {
        this.textColor = '#000000';
      } else {
        this.textColor = '#FFFFFF';
      }
    }
  }

  /**
   * Test if a color is considered light or dark
   * https://stackoverflow.com/questions/12043187/how-to-check-if-hex-color-is-too-black
   * @param color
   */
  isColorLight(color) {
    const c = color.substring(1);      // strip #
    const rgb = parseInt(c, 16);   // convert rrggbb to decimal
    /* eslint-disable no-bitwise */
    const r = (rgb >> 16) & 0xff;  // extract red
    const g = (rgb >> 8) & 0xff;  // extract green
    const b = (rgb >> 0) & 0xff;  // extract blue
    /* eslint-enable no-bitwise */

    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

    return luma > 40;
  }

  willUpdate(changedProperties) {
    this.updateColor();
    // only need to check changed properties for an expensive computation.
    /*if (changedProperties.has('firstName') || changedProperties.has('lastName')) {
      this.sha = computeSHA(`${this.firstName} ${this.lastName}`);
    }*/
  }
  _change (e) {
    this.value = e.target.value;
  }

  render() {
    /* return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `; */
    return html`
      <select name="${this.name}" @change="${this._change}" style="background-color: ${this.color}; color: ${this.textColor};">
        <option>${this.placeholderLabel}</option>
        
        ${this.options && this.options.map(i => html`
          <option 
            value="${i.id}"
            ?selected="${i.id===this.value}"
          >${i.label}</option>
        `)}
      </select>
`;
  }
}
