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
    this.title = '';
    this.link =  "#";
    this.image = null;
    this.description = '';
    this.buttonDescription = '';
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        font-family: Veranda;
        background-color: pink;
        margin: 24px;
        max-width: 390px;
        border-radius: 16px;
        border: solid black 4px;
      }
      :host([fancy]) {
        display: inline-block;
        background-color: lightgreen;
        border: outset seagreen;
      }
      div {
        width: 280px;
        margin: 16px;
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
        width: 100%;
        max-width: 150px;
        border-radius: 8px;
        border: 2px solid pink;
        border-style: solid;
        border-color: pink;
        border-width: 2px;
      }

      details summary {
        text-align: left;
        font-size: 18px;
        padding: 8px 0;
      }
      details[open] summary{
        font-weight: bold;
      }
      details div {
        border: 2px solid black;
        margin: auto;
        text-align: left;
        padding: 8px;
        height: auto;
        width: 245px;
        overflow: auto;
      }
      button{
        font-family: copperplate, fantasy;
        font-size: 14pt;
        color: pink;
        padding: 6px 12px;
        margin: 10px 0;
        border-style: ridge;
        border-color: black;
        background-color: white;
        border-radius: 20px;
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
          <summary>Description</summary>
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
      description: { type: String },
      link: { type: String },
      buttonDescription: { type: String },
      fancy: { type: Boolean, reflect: true}
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
