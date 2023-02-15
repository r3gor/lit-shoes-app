/**
 * Script para generar la base para un component de Lit
 *
 * Usage:
 * node litgen.js <path> <tagname>
 *
 * Examples:
 * - node litgen.js ./src/components my-awsesome-button
 * - node litgen.js ./src/layout softtek-header
 *
 * Note: The prefix 'app-' is automatically added to the declared tagname.
 * for the examples the tagname generated is 'app-my-awesome-button' and 'app-softtek-header'.
 * For change the prefix modify the constant COMPONENT_PREFIX in this file.
 */

const COMPONENT_PREFIX = 'app'

import fs from 'fs';

let args = process.argv.slice(2);
let tagname = COMPONENT_PREFIX + '-' + args[1]
let directory = args[0].replaceAll('\\', '/').split('/').filter(t => t.length != 0).join('/') + '/' + tagname
let className = tagname.split('-').map(s => s[0].toUpperCase() + s.slice(1)).join('')

console.info("Generating component")
console.info("- Name: " + tagname)
console.info("- Location: " + directory)

// creating folder
fs.mkdirSync(directory, { recursive: true });
fs.writeFileSync(`${directory}/${tagname}.js`, getBaseComponent(className, tagname));
fs.writeFileSync(`${directory}/${tagname}.styles.js`, getBaseStyleComponent());

function getBaseStyleComponent() {
  return `
import { css } from 'lit-element';

export default css\`\`
`
}
function getBaseComponent(className, tagName) {
  return `
import { html, LitElement } from 'lit-element';
import { CompBase } from '/src/core/component-base.decorator.js';

import styles from './${tagName}.styles.js';

export class ${className} extends CompBase(LitElement) {

  static styles = [ styles ];
  static properties = { }

  constructor() {
    super()
  }

  render() {
    return html\`<p>component ${tagName} works!</p>\`
  }

  // onAppStateChange(newState) {
  // Listen state changes here, delete if not use app state
  // }
}

customElements.define('${tagName}', ${className});
`
}
