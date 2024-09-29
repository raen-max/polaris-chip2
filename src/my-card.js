import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = ' ';
    this.link =  '#';
    this.image = null;
    this.description = ' ';
    this.buttonDescription = ' ';
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        font-family: cooperplate, fantasy;
      }
      :host([fancy]) {
        display: inline-block;
        background-color: pink;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
      }
      dev {
        width: 250px;
        margin: 8px;
        background-color: paleturquoise;
        border-style: solid;
        border-width: 4px;
        border-radius: 16px;
        border-color: black;
        padding: 16px;
        text-align: center;
        color: black;
      }
      img {
        width: 245px;
        border-radius: 8px;
        border-style: solid;
        border-color: black;
        border-width: 2px;
      }
      details summary {
        text-align: left;
        font-size: 20px;
        padding: 8px 0;
      }
      details[open] summary{
        font-weight: bold;
      }
      details div {
        border: 2px solid black;
        margin: auto;
        text-align: left;
        padding: 4px;
        height: auto;
        width: 245px;
        overflow: auto;
      }
      button{
        font-family: copperplate, fantasy;
        font-size: 12pt;
        color: black;
        padding: 4px;
        margin: 8px;
        border-style: ridge;
        border-color: black;
        background-color: black;
        border-radius: 8px;
        text-decoration: none;
        cursor: pointer;
      }
      button:hover{
        background: paleturquoise;
      }
    `;
  }

  render() {
    return html`
      <div>
        <img src="${this.image}">
        <h1>${this.title}</h1>
        <p>${this.description}</p>
        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
          <summary> Description </summary>
          <div>
            <slot>${this.description}</slot>
          </div>
        </details>
        <button>
          <a href="${this.link}" target="_blank">${this.buttonDescription}"</a>
        </button>
      </div>`;
  }
  openChanged(e){
    console.log(e.newState);
    if (e.newState == "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  static get properties() {
    return {
      title: { type: String },
      image: {type: String },
      description: {type: String },
      link: {type: String },
      buttonDescription: {type: String },
      fancy: {type: Boolean, reflect: true}
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
