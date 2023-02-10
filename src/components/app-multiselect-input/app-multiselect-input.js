
import { html, LitElement } from 'lit-element';
import styles from './app-multiselect-input.styles.js';

export class AppMultiselectInput extends LitElement {

  static styles = [ styles ];
  static properties = {
    label: { type: String },
    placeholder: { type: String },
    optionLabel: { type: String },  // Identifica al label cuando la option es un objeto
    optionValue: { type: String },  // Identifica al value cuando la option es un objeto
    options: { type: Array },       // Array<Object> | Array<Number, String, etc>
    value: { type: Array },
  }

  constructor() {
    super()
    this.label = '';
    this.placeholder = '';
    this.optionLabel = 'label';
    this.optionValue = 'value';
    this.options = [];
    this.value = [];
  }

  render() {
    return html`
      <div class='label'>${this.label}</div>
      <div class='options-wrapper'>
        ${this.options.map(o => this.getOptionHTML(o))}
      </div>
      <!--   ONLY FOR DEBUG   -->
       <pre>value: ${JSON.stringify(this.value)}</pre>
    `
  }

  // TODO: Separate in other component
  getOptionHTML(option) {
    const label = this.getOptionLabel(option)

    return html`
      <div class='option-wrapper'>
        <input
          type='checkbox'
          class='option-check'
          ?checked='${this.isOptionChecked(option)}'
          @change='${() => this.handleChangeCheck(option)}'
        />
        <div class='option-label'> ${label} </div>
      </div>
    `
  }

  getOptionValue(option) {
    return option instanceof Object ? option[this.optionValue] : option
  }

  getOptionLabel(option) {
    return option instanceof Object ? option[this.optionLabel] : option
  }

  isOptionChecked(option) {
    const v = this.getOptionValue(option)
    return this.value.includes(v)
  }

  handleChangeCheck(option) {
    const isChecked = this.isOptionChecked(option);
    const v = this.getOptionValue(option);
    if (isChecked) {
      this.value = [ ...this.value.filter(i => i !== v) ];
    } else {
      this.value = [ ...this.value, v ];
    }
    this.dispatchEvent(new CustomEvent('change', { detail: this.value }));
  }
}

customElements.define('app-multiselect-input', AppMultiselectInput);
