import * as React from 'react';

export const Reference: React.StatelessComponent<{}> = () => {
  return (
    <div id="reference">

      <div className="reference-jump">
        <div className="inner-flex">

          <h1 className="reference-jump-header">Scryfall Search Reference</h1>
          <p>
            Scryfall includes a large set of keywords and expressions
            you can use to filter Magic cards. Jump to a section below:
          </p>

          <div className="reference-jump-links">
            <ul>
              <li>
                <a className="button-primary button-icon-left" href="#colors">
                  <svg aria-hidden="true" focusable="false" className="" width="95" height="88" viewBox="0 0 95 88" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fillRule="evenodd"><path d="M47 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zm0-7c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM80 53c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zm0-7c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM65 88c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zm0-7c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM28 88c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zm0-7c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM15 54c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zm0-7c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" /></g></svg>
                  Colors and Color Identity
                </a>
              </li>
              <li>
                <a className="button-primary button-icon-left" href="#types">
                  <svg aria-hidden="true" focusable="false" className="" width="32" height="31" viewBox="0 0 32 31" xmlns="http://www.w3.org/2000/svg"><g fillRule="evenodd"><path d="M15.39 14.52c-.23-.5-.83-.71-1.33-.48-.5.24-.72.83-.48 1.33.68 1.46 1.86 4.11 2.99 6.93 1.13 2.83 2.23 5.85 2.75 7.99.14.54.68.87 1.22.73.53-.13.86-.67.73-1.21-.58-2.32-1.7-5.38-2.85-8.25-1.15-2.87-2.33-5.54-3.03-7.04" /><path d="M28.72 25.19c-2.24-6.88-6.07-15.03-6.12-15.15-1.55-3.28-4.86-5.39-8.47-5.39-1.39 0-2.75.31-4.01.91a9.366 9.366 0 0 0-4.8 5.35 9.36 9.36 0 0 0-.55 3.17c0 1.38.3 2.75.91 4.03 1.02 2.17 2.47 5.51 3.7 8.68a1.001 1.001 0 0 0 1.846.039 1 1 0 0 0 .014-.769c-1.25-3.22-2.71-6.58-3.75-8.8a7.385 7.385 0 0 1-.72-3.18c0-.84.14-1.68.43-2.5.67-1.87 2-3.36 3.78-4.21 1.01-.48 2.05-.72 3.15-.72 2.82 0 5.45 1.67 6.66 4.24.04.08 3.85 8.22 6.03 14.92a1 1 0 0 0 1.9-.62" /><path d="M30.86 20.78a.99.99 0 0 0 .58-1.29c-2.34-6.05-4.98-11.57-5.02-11.67v.01C24.14 3.06 19.25 0 13.93 0c-2.05 0-4.05.45-5.91 1.33-1.1.51-2.12 1.17-3.03 1.93a1 1 0 1 0 1.29 1.53A11.861 11.861 0 0 1 13.93 2c4.54 0 8.75 2.64 10.69 6.69v.01c.02.04 2.65 5.55 4.95 11.51.2.52.78.77 1.29.57m-29.4-1.2c.46.97 1 2.13 1.55 3.4.23.5.82.73 1.32.51.51-.22.74-.81.51-1.32-.56-1.28-1.1-2.46-1.57-3.45-.77-1.6-1.15-3.3-1.15-5.01a11.67 11.67 0 0 1 .91-4.5.997.997 0 0 0-.54-1.3.98.98 0 0 0-1.3.53c-.09.22-.18.44-.26.66-.54 1.5-.81 3.06-.81 4.61 0 2.01.45 4.01 1.34 5.87" /><path d="M19.14 12.38c-.83-1.85-2.63-3.08-4.63-3.08-.76 0-1.51.18-2.2.53-.8.4-1.47 1-1.96 1.74a.999.999 0 0 0 .27 1.39c.46.31 1.08.18 1.39-.28.31-.46.72-.82 1.2-1.07.43-.21.85-.31 1.3-.31 1.16-.01 2.28.72 2.8 1.9v-.01c.02.04.55 1.23 1.3 3.04.21.51.79.75 1.3.54.51-.21.76-.8.54-1.31-.76-1.82-1.29-3.03-1.31-3.08m5.33 17.88a.99.99 0 0 0 .74-1.2c-.56-2.4-1.53-5.28-2.54-7.98-.19-.52-.77-.78-1.29-.59-.51.2-.78.77-.58 1.29.99 2.66 1.94 5.49 2.47 7.74.12.53.66.87 1.2.74m-9.76-.8c.16.53.72.83 1.25.66.53-.16.82-.72.66-1.25-1.15-3.74-3.08-8.55-4.33-11.48-.22-.5-.81-.74-1.32-.52-.5.22-.74.8-.52 1.31 1.23 2.88 3.15 7.67 4.26 11.28" /></g></svg>
                  Card Types
                </a>
              </li>
              <li>
                <a className="button-primary button-icon-left" href="#oracle">
                  <svg aria-hidden="true" focusable="false" className="" width="29" height="32" viewBox="0 0 29 32" xmlns="http://www.w3.org/2000/svg"><g fillRule="evenodd"><path d="M23.12 29c1.1 0 2-.9 2-2V7h1v23h-22v-1h19zm-21-22h21v20h-21V7zm0-4c0-.55.45-1 1-1h22c.55 0 1 .45 1 1v3h-1V2l-2 4h-21V3zm2 29h22c1.1 0 2-.9 2-2V3c0-1.66-1.34-3-3-3h-22c-1.66 0-3 1.34-3 3v24c0 1.1.9 2 2 2v1c0 1.1.9 2 2 2z" /><path d="M4.121 11h17v-1h-17v1zm0 3h17v-1h-17v1zm0 3h17v-1h-17v1zm0 3h17v-1h-17v1z" /></g></svg>
                  Oracle Text
                </a>
              </li>
              <li>
                <a className="button-primary button-icon-left" href="#mana">
                  <svg aria-hidden="true" focusable="false" className="" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M22 11c-2.393 0-4.534.66-6 1.7v-6.7c0-2.762-3.582-5-8-5s-8 2.238-8 5v16c0 2.762 3.582 5 8 5 2.512 0 4.751-.725 6.218-1.857.828 2.21 3.994 3.857 7.782 3.857 4.418 0 8-2.238 8-5v-8c0-2.762-3.582-5-8-5zm-14-8c3.434 0 6 1.584 6 3s-2.566 3-6 3-6-1.584-6-3 2.566-3 6-3zm-6 6.3c1.466 1.04 3.607 1.7 6 1.7s4.534-.66 6-1.7v.7c0 1.416-2.566 3-6 3s-6-1.584-6-3v-.7zm0 4c1.466 1.04 3.607 1.7 6 1.7s4.534-.66 6-1.7v.7c0 1.416-2.566 3-6 3s-6-1.584-6-3v-.7zm0 4c1.466 1.04 3.607 1.7 6 1.7s4.534-.66 6-1.7v.7c0 1.416-2.566 3-6 3s-6-1.584-6-3v-.7zm6 7.7c-3.434 0-6-1.584-6-3v-.7c1.466 1.04 3.607 1.7 6 1.7s4.534-.66 6-1.7v.7c0 1.416-2.566 3-6 3zm20-1c0 1.416-2.566 3-6 3s-6-1.584-6-3v-.7c1.466 1.04 3.607 1.7 6 1.7s4.534-.66 6-1.7v.7zm0-4c0 1.416-2.566 3-6 3s-6-1.584-6-3v-.7c1.466 1.04 3.607 1.7 6 1.7s4.534-.66 6-1.7v.7zm-6-1c-3.434 0-6-1.584-6-3s2.566-3 6-3 6 1.584 6 3-2.566 3-6 3z" /></svg>
                  Mana Costs
                </a>
              </li>
              <li>
                <a className="button-primary button-icon-left" href="#stats">
                  <svg aria-hidden="true" focusable="false" className="" width="33" height="32" viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg"><path d="M3.12 21h15v5c0 .551-.45 1-1 1h-14c-.55 0-1-.449-1-1v-5h1zm0-19.001h14c.55 0 1 .45 1 1.001v16.342h-16V3c0-.551.45-1.001 1-1.001zM26.12 14h3c.55 0 1 .448 1 1v14c0 .552-.45 1-1 1h-23c-.55 0-1-.448-1-1h12c1.66 0 3-1.343 3-3V14h6zm-20 18h23c1.66 0 3-1.343 3-3V15a2.995 2.995 0 0 0-3-2.999h-9V3c0-1.656-1.34-3-3-3h-14c-1.66 0-3 1.344-3 3v23c0 1.657 1.34 3 3 3 0 1.657 1.34 3 3 3zM23.83 5.293l-1.42 1.414L24.706 9l2.415 2.414L29.537 9l2.294-2.293-1.42-1.414-2.29 2.292V5c0-2.761-2.24-5-5-5h-2v2h2c1.65 0 3 1.346 3 3v2.585l-2.29-2.292h-.001z" /></svg>
                  Power/Toughness/Loyalty
                </a>
              </li>
              <li>
                <a className="button-primary button-icon-left" href="#faces">
                  <svg aria-hidden="true" focusable="false" className="" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M2.12 22.764V9.237l14-7.001 13.765 6.882L16.12 16v13.764l-14-7zm28 0l-13 6.5V16.618l13-6.5v12.646zm2 1.236V8l-16-8-16 8v16l16 8 16-8z" fillRule="evenodd" /></svg>
                  Multi-faced Cards
                </a>
              </li>
              <li>
                <a className="button-primary button-icon-left" href="#spells">
                  <svg aria-hidden="true" focusable="false" className="" width="33" height="33" viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg"><path d="M12.121 25h1v-4h-1v4zM3.43 20.99l.7.7 2.83-2.83-.7-.7-2.83 2.83zM.121 13h4v-1h-4v1zM4.13 3.31l-.7.7 2.83 2.83.7-.7-2.83-2.83zm7.991.69h1V0h-1v4zm8.989-.69l-2.83 2.83.7.7 2.83-2.83-.7-.7zm.011 9.69h4v-1h-4v1zm-9.671-1l.67-.67 2.986 2.985-.67.67L11.451 12h-.001zm17.67 17.67L15.136 15.685l.67-.67L29.79 29l-.67.67zm2.79-1.38L12.83 9.21a.992.992 0 0 0-1.42 0l-2.08 2.08c-.39.39-.39 1.03 0 1.42l19.08 19.08a.992.992 0 0 0 1.42 0l2.08-2.08c.39-.39.39-1.03 0-1.42z" fillRule="evenodd" /></svg>
                  Spells/Permanents/ETB
                </a>
              </li>
              <li>
                <a className="button-primary button-icon-left" href="#extras">
                  <svg aria-hidden="true" focusable="false" className="" width="31" height="32" viewBox="0 0 31 32" xmlns="http://www.w3.org/2000/svg"><path d="M.172 25.29A6.653 6.653 0 0 0 2.122 30a6.635 6.635 0 0 0 4.707 1.95c1.7 0 3.409-.65 4.707-1.95l14.292-14.29-1.414-1.42-14.293 14.3a4.632 4.632 0 0 1-3.292 1.36 4.635 4.635 0 0 1-3.293-1.36 4.66 4.66 0 0 1 0-6.59L22.538 3a3.198 3.198 0 0 1 2.29-.95c.833 0 1.656.31 2.292.95h.003c.635.64.948 1.46.949 2.29.002.86-.34 1.684-.95 2.29L12.121 22.59a1.843 1.843 0 0 1-2.586 0 1.837 1.837 0 0 1-.536-1.3c0-.47.177-.93.536-1.29L19.828 9.71l-1.414-1.42-10.293 10.3a3.807 3.807 0 0 0-1.122 2.7c-.001.98.376 1.96 1.12 2.71a3.809 3.809 0 0 0 2.709 1.12c.976 0 1.962-.37 2.707-1.12L28.537 9a5.232 5.232 0 0 0 1.535-3.71 5.209 5.209 0 0 0-1.535-3.7l-.003-.01A5.235 5.235 0 0 0 24.829.05c-1.338 0-2.685.51-3.706 1.53L2.122 20.59a6.613 6.613 0 0 0-1.95 4.7" fillRule="evenodd" /></svg>
                  Extra and Funny Cards
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a className="button-primary button-icon-left" href="#rarity">
                  <svg aria-hidden="true" focusable="false" className="" width="32" height="31" viewBox="0 0 32 31" xmlns="http://www.w3.org/2000/svg"><path d="M22 17.24l-1.21.87.49 1.41 2.65 7.78-6.79-4.91-1.14-.82-1.14.82-6.79 4.91 2.65-7.78.49-1.41-1.21-.87-5.93-4.29H13l.46-1.34L16 4.05l2.58 7.56.42 1.34h8.89L22 17.24zm9-6.29H20.44L16.92.67a1 1 0 0 0-1.85 0l-3.51 10.28H1a1 1 0 0 0-.57 1.82l8.45 6.1L5.2 29.6a1 1 0 0 0 1.5 1.14l9.3-6.72 9.29 6.72a1 1 0 0 0 1.5-1.14l-3.65-10.73 8.45-6.1a1 1 0 0 0-.59-1.82z" fillRule="evenodd" /></svg>
                  Rarity
                </a>
              </li>
              <li>
                <a className="button-primary button-icon-left" href="#sets">
                  <svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30"><path d="M15 2C11.704 7.789 9.287 15.983 0 8l4 12v8h22v-8l4-12c-9.287 7.983-11.704-.211-15-6zM6 26v-4h18v4H6zm18-6.324V20H6v-.324l-2.32-6.962c5.055 1.849 8.383-.683 11.32-6.475 2.938 5.792 6.266 8.323 11.32 6.475L24 19.676z" /></svg>
                  Sets/Blocks/Reprints
                </a>
              </li>
              <li>
                <a className="button-primary button-icon-left" href="#cubes">
                  <svg aria-hidden="true" focusable="false" className="" width="51" height="56" viewBox="0 0 51 56" xmlns="http://www.w3.org/2000/svg"><path d="M25.045.685L.76 10.4c-.45.18-.765.653-.76 1.137V44.32c.002.48.316.94.76 1.12l24.285 9.714c.288.117.622.117.91 0L50.24 45.44c.444-.18.758-.64.76-1.12V11.538c.005-.484-.31-.956-.76-1.138L25.956.684c-.394-.127-.708-.06-.91 0zm.455 2.448l21.003 8.385L25.5 19.923 4.497 11.518 25.5 3.133zM2.43 13.32l21.856 8.747v30.146L2.43 43.486V13.32zm46.14 0v30.166l-21.856 8.727V22.067L48.57 13.32z" fillRule="nonzero" fill="#000" /></svg>
                  Cubes
                </a>
              </li>
              <li>
                <a className="button-primary button-icon-left" href="#legality">
                  <svg aria-hidden="true" focusable="false" className="" width="33" height="25" viewBox="0 0 33 25" xmlns="http://www.w3.org/2000/svg"><path d="M25.788 18H8.561l-1.996-6-.665-2-1-3h1.555l1 3 .666 2 1 3h17.222l.998 3h-1.553zm-.447 5.001H6.561L2.89 12h1.564l2.666 8h17.223l.998 3.001zM27.788 13H10.561l-.333-1-.668-2-1.001-3-.667-2-1.001-3h18.79l3.67 11h-1.563zM4.121 0l1.667 5H2.121l1.667 5H.121l5 15h23l-1.666-5h3.666l-1.666-5h3.666l-5-15h-23z" fillRule="evenodd" /></svg>
                  Format Legality
                </a>
              </li>
              <li>
                <a className="button-primary button-icon-left" href="#prices">
                  <svg aria-hidden="true" focusable="false" className="" width="33" height="30" viewBox="0 0 33 30" xmlns="http://www.w3.org/2000/svg"><path d="M27.27 19.44c.54.55.85 1.29.85 2.06s-.31 1.51-.85 2.06l-.854.855a3.513 3.513 0 0 0-.71-.71l.855-.855c.36-.36.56-.84.56-1.35 0-.51-.2-.99-.56-1.35l-1.34-1.35-.004-.005L23.411 17H3.891l-1.5-12h23.46l-.08.64.907-.907.837-.836.006-.007.63-.63.019-.018c-.02-.08-.05-.156-.05-.242 0-.55.45-1 1-1 .097 0 .184.03.272.055l.019-.015.21-.04c.13 0 .26.05.35.15.15.15.19.37.11.56l-.015.019c.026.088.055.175.055.27 0 .55-.45 1-1 1-.085 0-.162-.028-.241-.048l-.02.019-1.01 1-.005.006-.463.463-1.411 1.41a.47.47 0 0 1-.35.15h-.02l-.247 1.973-.66 5.28-.29 2.32.007.008 1.57 1.57.01.01 1.28 1.28h-.001zM10.07 27c.024-.165.05-.33.05-.5 0-.171-.026-.335-.05-.5h10.102c-.024.165-.051.329-.051.5 0 .17.027.335.05.5H10.07zm-4.95-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm17 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm7.6-20.56A2.997 2.997 0 0 0 32.12 3c0-1.66-1.34-3-3-3a2.996 2.996 0 0 0-2.94 2.4l-.6.6H2.39C1.18 3 .25 4.05.4 5.25l1.5 12c.13 1 .98 1.75 1.99 1.75h18.69l2.5 2.5-1.503 1.504a3.49 3.49 0 0 0-2.398.996H9.063c-.651-.64-1.528-1-2.442-1-1.757 0-3.202 1.306-3.45 2.996-.023.166-.05.33-.05.504 0 .173.027.338.05.504C3.419 28.694 4.864 30 6.621 30c.95 0 1.81-.383 2.442-1h12.116c.632.617 1.492 1 2.442 1a3.502 3.502 0 0 0 3.496-3.462l1.564-1.558c.92-.93 1.44-2.18 1.44-3.48 0-1.3-.52-2.55-1.44-3.48l-2.165-2.165.958-7.668 2.247-2.247h-.001z" fillRule="evenodd" /></svg>
                  USD/EUR/TIX Prices
                </a>
              </li>
              <li>
                <a className="button-primary button-icon-left" href="#flavor">
                  <svg aria-hidden="true" focusable="false" className="" width="33" height="28" viewBox="0 0 33 28" xmlns="http://www.w3.org/2000/svg"><path d="M5.794 25.16l.847-.85-.347-1.15A4.001 4.001 0 0 1 10.121 18c2.206 0 4 1.79 4 4s-1.794 4-4 4H4.949l.845-.84zm9.626-13.08l1.18-.897 4.34 4.34-.895 1.177c-.5.66-1.712 1.21-2.648 1.21-.094 0-.183 0-.263-.01l-1.06-.16c-.75-.1-1.59-.94-1.697-1.69l-.152-1.06c-.13-.91.462-2.36 1.195-2.91zm11.924-9.07c.779-.59 1.712-.94 2.128-.97.206.11.498.4.614.61-.032.34-.31 1.25-.973 2.13l-7.565 9.943-4.15-4.148 9.946-7.565zM10.12 28a6.002 6.002 0 0 0 5.537-8.312c.044.008.088.026.133.032l1.06.16c.177.02.359.03.546.03 1.539 0 3.349-.83 4.24-2l9.068-11.92c.999-1.32 1.59-3.06 1.316-3.89-.275-.83-1.175-1.72-2-2a1.413 1.413 0 0 0-.481-.07c-.913 0-2.312.55-3.407 1.39l-11.924 9.06c-1.313 1-2.197 3.16-1.964 4.79l.152 1.06c.006.045.023.088.032.132a6.002 6.002 0 0 0-8.049 7.278L.119 28H10.12z" fillRule="evenodd" /></svg>
                  Artist/Flavor/Watermark
                </a>
              </li>
              <li>
                <a className="button-primary button-icon-left" href="#frame">
                  <svg aria-hidden="true" focusable="false" className="" width="33" height="32" viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg"><g fillRule="evenodd"><path d="M2.121 30h28V2h-28v28zm28-30.001h-28c-1.1 0-2 .897-2 2.001v28c0 1.105.9 2 2 2h28c1.1 0 2-.895 2-2V2c0-1.104-.9-2.001-2-2.001z" /><path d="M5.121 11h22V5h-22v6zm-1 1h24V4h-24v8zm1 15h6V14h-6v13zm-1 1h8V13h-8v15zm10-1h13V14h-13v13zm-1 1h15V13h-15v15z" /></g></svg>
                  Border/Frame/Resolution
                </a>
              </li>
              <li>
                <a className="button-primary button-icon-left" href="#promos">
                  <svg aria-hidden="true" focusable="false" className="" width="33" height="32" viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg"><path d="M6.66 4.77l-.85.66.34 1.01.15.42-.26-.2-.92-.7-.92.7-.26.2.15-.42.34-1.01-.85-.66-.29-.22h1.44l.35-1.02.04-.12.04.12.35 1.02h1.44l-.29.22zm2.86-1.72H6.58L5.68.42A.587.587 0 0 0 5.12 0c-.23 0-.47.14-.56.42l-.9 2.63H.72c-.58 0-.82.77-.35 1.13l2.3 1.78-1.09 3.2c-.16.44.18.84.56.84.12 0 .24-.04.36-.12l2.62-2.03 2.63 2.03c.11.08.23.12.35.12.38 0 .72-.4.56-.84l-1.09-3.2 2.3-1.78c.47-.36.23-1.13-.35-1.13zm-5.86 12.5h1.07l.35-1.02.04-.12.04.12.35 1.02h1.44l-.29.22-.85.66.34 1.01.15.42-.26-.2-.92-.7-.92.7-.26.2.15-.42.34-1.01-.85-.66-.29-.22h.37zm-3.29-.37l2.3 1.78-1.09 3.2c-.16.44.18.84.56.84.12 0 .24-.04.36-.12l2.62-2.03 2.63 2.03c.11.08.23.12.35.12.38 0 .72-.4.56-.84l-1.09-3.2 2.3-1.78c.47-.36.23-1.13-.35-1.13H6.58l-.89-2.63a.598.598 0 0 0-.57-.42c-.23 0-.47.14-.56.42l-.9 2.63H.72c-.58 0-.82.77-.35 1.13zm3.29 11.37h1.07l.35-1.02.04-.12.04.12.35 1.02h1.44l-.29.22-.85.66.34 1.01.15.42-.26-.2-.92-.7-.92.7-.26.2.15-.42.34-1.01-.85-.66-.29-.22h.37zm-3.29-.37l2.3 1.78-1.09 3.2c-.16.44.18.84.56.84.12 0 .24-.04.36-.12l2.62-2.03 2.63 2.03c.11.08.23.12.35.12.38 0 .72-.4.56-.84l-1.09-3.2 2.3-1.78c.47-.36.23-1.13-.35-1.13H6.58l-.9-2.63a.587.587 0 0 0-.56-.42c-.23 0-.47.14-.56.42l-.9 2.63H.72c-.58 0-.82.77-.35 1.13zM12.121 7h20V5h-20v2zm0 11h20v-2h-20v2zm0 11h20v-2h-20v2z" fillRule="evenodd" /></svg>
                  Games, Promos, &amp; Spotlights
                </a>
              </li>
              <li>
                <a className="button-primary button-icon-left" href="#year">
                  <svg aria-hidden="true" focusable="false" className="" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M25 4c0-1.656-1.343-3-3-3s-3 1.344-3 3h-8c0-1.656-1.343-3-3-3s-3 1.344-3 3h-4v25h28v-25h-4zm-4 0c0-.551.448-1 1-1s1 .449 1 1v2c0 .551-.448 1-1 1s-1-.449-1-1v-2zm-14 0c0-.551.448-1 1-1s1 .449 1 1v2c0 .551-.448 1-1 1s-1-.449-1-1v-2zm20 23h-24v-14h24v14zm0-16h-24v-5h2c0 1.656 1.343 3 3 3s3-1.344 3-3h8c0 1.656 1.343 3 3 3s3-1.344 3-3h2v5zm-3 4h-14v4h-4v6h18v-10zm-14 8h-2v-2h2v2zm4 0h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2z" /></svg>
                  Year
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a className="button-primary button-icon-left" href="#shortcuts">
                  <svg aria-hidden="true" focusable="false" className="" width="26" height="32" viewBox="0 0 26 32" xmlns="http://www.w3.org/2000/svg"><g fillRule="evenodd"><path d="M9.12 2h6v2.65l-1.2.48-.004.002c-.01-.018-.02-.034-.028-.052a2.134 2.134 0 0 0-.25-.371c-.016-.018-.03-.038-.047-.056a2.023 2.023 0 0 0-.39-.332c-.012-.008-.027-.014-.04-.022a1.985 1.985 0 0 0-.53-.225 1.952 1.952 0 0 0-.51-.074 1.99 1.99 0 0 0-.63.11 1.988 1.988 0 0 0-.418.191c-.012.007-.025.012-.036.019a1.976 1.976 0 0 0-.387.331c-.02.02-.035.042-.053.063a1.983 1.983 0 0 0-.25.376l-.022.041-.004-.001-1.2-.48V2H9.12zm11.69 6.48l2.83 2.83-1.41 1.41-2.83-2.83 1.41-1.41zM22.12 20c0 5.51-4.49 10-10 10s-10-4.49-10-10c0-4.825 3.445-8.868 8-9.798 1.32-.27 2.68-.27 4 0 4.557.93 8 4.973 8 9.798zm-22 0c0 6.63 5.37 12 12 12s12-5.37 12-12c0-1.937-.468-3.76-1.282-5.379.293-.094.57-.249.803-.481l1.42-1.42c.78-.78.78-2.05 0-2.83l-2.83-2.83c-.78-.78-2.05-.78-2.83 0l-1.42 1.42c-.232.232-.387.51-.481.803a11.891 11.891 0 0 0-3.38-1.103v-.982l1.74-.698c.76-.3 1.26-1.04 1.26-1.85V2c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v2.65c0 .81.5 1.55 1.26 1.85l1.74.698v.982C4.446 9.133.12 14.053.12 20z" /><path d="M10.47 22.35l8-8-.7-.7-8 8z" /></g></svg>
                  Shortcuts and Nicknames
                </a>
              </li>
              <li>
                <a className="button-primary button-icon-left" href="#negating">
                  <svg aria-hidden="true" focusable="false" className="" width="32" height="31" viewBox="0 0 32 31" xmlns="http://www.w3.org/2000/svg"><path d="M16.122 16.002h8.993v-1.004H6.125v1.004h8.993zM15.62 2c7.44 0 13.5 6.06 13.5 13.5S23.06 29 15.62 29s-13.5-6.06-13.5-13.5S8.18 2 15.62 2m0 29c8.56 0 15.5-6.94 15.5-15.5 0-8.56-6.94-15.5-15.5-15.5C7.06 0 .12 6.94.12 15.5c0 8.56 6.94 15.5 15.5 15.5" /></svg>
                  Negating Conditions
                </a>
              </li>
              <li>
                <a className="button-primary button-icon-left" href="#regex">
                  <svg aria-hidden="true" focusable="false" className="" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M14 30h2v-2.051c1.642-.125 3.193-.557 4.608-1.234l1.025 1.775 1.731-1-1.021-1.768c1.323-.908 2.47-2.055 3.378-3.377l1.768 1.02.999-1.731-1.775-1.024c.679-1.415 1.11-2.968 1.235-4.609h2.052v-2h-2.051c-.125-1.642-.557-3.193-1.235-4.608l1.776-1.025-1-1.732-1.768 1.021c-.908-1.322-2.055-2.469-3.377-3.377l1.021-1.768-1.732-1-1.025 1.775c-1.416-.68-2.967-1.111-4.609-1.236v-2.051h-2v2.051c-1.642.125-3.193.557-4.608 1.234l-1.026-1.775-1.732 1 1.021 1.768c-1.323.908-2.469 2.054-3.378 3.376l-1.767-1.02-1.001 1.731 1.777 1.026c-.679 1.416-1.11 2.967-1.235 4.609h-2.051v2h2.051c.125 1.642.557 3.193 1.235 4.608l-1.776 1.026 1 1.732 1.768-1.021c.908 1.322 2.055 2.469 3.377 3.377l-1.021 1.768 1.732 1 1.025-1.775c1.415.678 2.967 1.109 4.608 1.234v2.051zm1-4c-1.647 0-3.204-.372-4.606-1.021l3.544-6.139c.34.094.692.16 1.062.16 1.861 0 3.412-1.277 3.858-3h7.091c-.506 5.605-5.212 10-10.949 10zm0-13c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm10.949 1h-7.091c-.446-1.723-1.997-3-3.858-3-.37 0-.722.066-1.063.16l-3.544-6.139c1.403-.649 2.96-1.021 4.607-1.021 5.737 0 10.443 4.395 10.949 10zm-21.949 1c0-3.712 1.844-6.988 4.66-8.98l3.539 6.129c-.739.726-1.199 1.734-1.199 2.851s.46 2.125 1.199 2.852l-3.539 6.128c-2.816-1.992-4.66-5.268-4.66-8.98z" /></svg>
                  Regular Expressions
                </a>
              </li>
              <li>
                <a className="button-primary button-icon-left" href="#exact">
                  <svg aria-hidden="true" focusable="false" className="" width="33" height="24" viewBox="0 0 33 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="evenodd"><path d="M2.12 5V3c0-.55.45-1 1-1h26c.55 0 1 .45 1 1v2h-28zm0 3h28V6h-28v2zm28 13c0 .55-.45 1-1 1h-26c-.55 0-1-.45-1-1V9h28v12zm-1-21h-26c-1.66 0-3 1.34-3 3v18c0 1.66 1.34 3 3 3h26c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3z" /><path d="M17.121 18h10v-1h-10v1zm0-3h10v-1h-10v1zM5.12 21c.03-1.11.95-2 2.06-2h.44c.39 0 .75-.24.91-.6.16-.36.09-.79-.18-1.08-.75-.81-1.23-2.14-1.23-3.38 0-1.79.98-2.94 2.5-2.94s2.5 1.15 2.5 2.94c0 1.24-.48 2.57-1.23 3.38-.27.29-.34.72-.18 1.08.16.36.52.6.91.6h.44c1.11 0 2.03.89 2.06 2h.995a3.057 3.057 0 0 0-3.054-3h-.44c.91-.98 1.5-2.54 1.5-4.06 0-2.49-1.57-3.94-3.5-3.94s-3.5 1.45-3.5 3.94c0 1.52.59 3.08 1.5 4.06h-.44a3.057 3.057 0 0 0-3.054 3h.994-.001z" /></g></svg>
                  Exact Names
                </a>
              </li>
              <li>
                <a className="button-primary button-icon-left" href="#unrolling">
                  <svg aria-hidden="true" focusable="false" className="" width="33" height="22" viewBox="0 0 33 22" xmlns="http://www.w3.org/2000/svg"><path d="M2.12 3.738l2 1.334v11.855l-2 1.336V3.738zm28 0v14.525l-2-1.336V5.073l2-1.335zm-4 2.67V17.65l-2-1.713V6.063l2-1.714v2.059zm-4-1.13V18h-12V4h12v1.278zm-16 10.314V4.349l2 1.714v9.874l-2 1.713v-2.058zM.98 21.176c.24 0 .51-.092.8-.285l2.34-1.561V20c0 .7.28 1.083.69 1.083.24 0 .52-.125.83-.385l2.554-2.19A2 2 0 0 0 10.121 20h12a2 2 0 0 0 1.927-1.492l2.553 2.19c.31.26.59.385.83.385.41 0 .69-.382.69-1.082v-.671l2.34 1.56c.29.194.56.286.8.286.51 0 .86-.425.86-1.175V2c0-.751-.35-1.176-.86-1.176-.24 0-.51.09-.8.286l-2.34 1.56V2c0-.701-.28-1.082-.69-1.082-.24 0-.52.124-.83.384l-2.553 2.19A2 2 0 0 0 22.121 2h-12c-.924 0-1.7.635-1.926 1.492l-2.554-2.19c-.31-.26-.59-.384-.83-.384-.41 0-.69.38-.69 1.082v.67l-2.34-1.56c-.29-.195-.56-.286-.8-.286-.51 0-.86.425-.86 1.176v18c0 .75.35 1.176.86 1.176H.98z" fillRule="evenodd" /></svg>
                  Unrolling Searches
                </a>
              </li>
              <li>
                <a className="button-primary button-icon-left" href="#or">
                  <svg aria-hidden="true" focusable="false" className="" width="33" height="30" viewBox="0 0 33 30" xmlns="http://www.w3.org/2000/svg"><path d="M7.12 18v1.172L2.95 15l4.17-4.172V14h7V2h4v12h7v-3.172L29.29 15l-4.17 4.172V16h-7v12h-4V16h-7v2zm2 0h3v12h8V18h3v6l9-9-9-9v6h-3V0h-8v12h-3V6l-9 9 9 9v-6z" fillRule="evenodd" /></svg>
                  Using OR
                </a>
              </li>
              <li>
                <a className="button-primary button-icon-left" href="#nesting">
                  <svg aria-hidden="true" focusable="false" className="" width="67" height="47" viewBox="0 0 67 47" xmlns="http://www.w3.org/2000/svg"><g fillRule="evenodd"><path d="M56.556 23.303c0 3.662-.513 6.848-1.538 9.558-1.026 2.71-2.385 4.993-4.078 6.848-1.676 1.84-3.584 3.276-5.725 4.31-2.14 1.033-4.325 1.696-6.555 1.989V43.81c3.076-.57 5.436-2.552 7.08-5.945 1.644-3.394 2.466-8.248 2.466-14.563 0-6.315-.822-11.17-2.466-14.563-1.644-3.394-4.004-5.375-7.08-5.945V.598c2.23.293 4.415.956 6.555 1.99 2.14 1.033 4.049 2.47 5.725 4.308 1.693 1.856 3.052 4.139 4.078 6.849 1.025 2.71 1.538 5.896 1.538 9.558z" /><path d="M66.896 23.705c0 3.662-.513 6.848-1.539 9.558-1.025 2.71-2.384 4.993-4.077 6.848-1.676 1.84-3.585 3.276-5.725 4.31-2.14 1.033-4.325 1.696-6.555 1.99v-2.198c3.076-.57 5.436-2.551 7.08-5.945 1.644-3.394 2.466-8.248 2.466-14.563 0-6.315-.822-11.17-2.466-14.563C54.436 5.75 52.076 3.767 49 3.197V1c2.23.293 4.415.956 6.555 1.99 2.14 1.033 4.049 2.47 5.725 4.309 1.693 1.855 3.052 4.138 4.077 6.848 1.026 2.71 1.539 5.896 1.539 9.558zm-66.113 0c0 3.662.513 6.848 1.538 9.558 1.026 2.71 2.385 4.993 4.077 6.848 1.677 1.84 3.585 3.276 5.726 4.31 2.14 1.033 4.325 1.696 6.555 1.99v-2.198c-3.076-.57-5.436-2.551-7.08-5.945-1.644-3.394-2.466-8.248-2.466-14.563 0-6.315.822-11.17 2.466-14.563 1.644-3.393 4.004-5.375 7.08-5.945V1c-2.23.293-4.415.956-6.555 1.99-2.14 1.033-4.05 2.47-5.726 4.309-1.692 1.855-3.051 4.138-4.077 6.848-1.025 2.71-1.538 5.896-1.538 9.558z" /><path d="M11.783 23.705c0 3.662.513 6.848 1.538 9.558 1.026 2.71 2.385 4.993 4.077 6.848 1.677 1.84 3.585 3.276 5.726 4.31 2.14 1.033 4.325 1.696 6.555 1.99v-2.198c-3.076-.57-5.436-2.551-7.08-5.945-1.644-3.394-2.466-8.248-2.466-14.563 0-6.315.822-11.17 2.466-14.563 1.644-3.393 4.004-5.375 7.08-5.945V1c-2.23.293-4.415.956-6.555 1.99-2.14 1.033-4.05 2.47-5.726 4.309-1.692 1.855-3.051 4.138-4.077 6.848-1.025 2.71-1.538 5.896-1.538 9.558z" /></g></svg>
                  Nesting Conditions
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="reference-block" id="colors">
        <div className="inner-flex">

          <div className="reference-block-doc">

            <h2 className="reference-block-header">
              <span className="reference-block-icon"><svg aria-hidden="true" focusable="false" className="" width="95" height="88" viewBox="0 0 95 88" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fillRule="evenodd"><path d="M47 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zm0-7c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM80 53c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zm0-7c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM65 88c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zm0-7c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM28 88c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zm0-7c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM15 54c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zm0-7c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" /></g></svg></span>
              Colors and Color Identity
            </h2>

            <p>You can find cards that are a certain color using the <code>c:</code> or <code>color:</code> keyword,
                and cards that are a certain color identity using the <code>id:</code> or <code>identity:</code> keywords.</p>

            <p>Both sets of keywords accepts full color names like <code>blue</code>
              or the abbreviated color letters <code>w</code>, <code>u</code>, <code>r</code>, <code>b</code> and <code>g</code>.</p>

            <p>You can use many nicknames for color sets:
              all guild names (e.g. <code>azorius</code>), all shard names (e.g. <code>bant</code>),
              all wedge names (e.g. <code>abzan</code>),
              and the four-color nicknames <code>chaos</code>, <code>aggression</code>,
              <code>altruism</code>, <code>growth</code>, <code>artifice</code> are supported.</p>

            <p>Use <code>c</code> or <code>colorless</code> to match colorless cards, and <code>m</code> or <code>multicolor</code> to match multicolor cards.</p>

            <p>Color search is strict by default, other colors will be excluded.
              You can use comparison expressions (<code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>, and <code>!=</code>)
              to check against <em>ranges</em> of colors.</p>
          </div>

          <div className="reference-block-examples">
            <a className="reference-example" href="/cards?q=c%3Arg">
              <span className="reference-example-text">
                <code>c:rg</code>
                <span>Cards that are red and&nbsp;green<p />
                </span>
              </span>
            </a>

            <a className="reference-example" href="/cards?q=color%3E%3Duw+-c%3Ared">
              <span className="reference-example-text">
                <code>color&gt;=uw -c:red</code>
                <span>Cards that are at least white and blue, but not&nbsp;red<p />
                </span>
              </span>
            </a>

            <a className="reference-example" href="/cards?q=id%3C%3Desper+t%3Ainstant">
              <span className="reference-example-text">
                <code>id&lt;=esper t:instant</code>
                <span>Instants you can play with an Esper&nbsp;commander<p />
                </span>
              </span>
            </a>

            <a className="reference-example" href="/cards?q=id%3Ac+t%3Aland">
              <span className="reference-example-text">
                <code>id:c t:land</code>
                <span>Land cards with colorless&nbsp;identity<p />
                </span>
              </span>
            </a>
          </div>

        </div>
      </div>

      <div className="reference-block" id="types">
        <div className="inner-flex">

          <div className="reference-block-doc">

            <h2 className="reference-block-header">
              <span className="reference-block-icon"><svg aria-hidden="true" focusable="false" className="" width="32" height="31" viewBox="0 0 32 31" xmlns="http://www.w3.org/2000/svg"><g fillRule="evenodd"><path d="M15.39 14.52c-.23-.5-.83-.71-1.33-.48-.5.24-.72.83-.48 1.33.68 1.46 1.86 4.11 2.99 6.93 1.13 2.83 2.23 5.85 2.75 7.99.14.54.68.87 1.22.73.53-.13.86-.67.73-1.21-.58-2.32-1.7-5.38-2.85-8.25-1.15-2.87-2.33-5.54-3.03-7.04" /><path d="M28.72 25.19c-2.24-6.88-6.07-15.03-6.12-15.15-1.55-3.28-4.86-5.39-8.47-5.39-1.39 0-2.75.31-4.01.91a9.366 9.366 0 0 0-4.8 5.35 9.36 9.36 0 0 0-.55 3.17c0 1.38.3 2.75.91 4.03 1.02 2.17 2.47 5.51 3.7 8.68a1.001 1.001 0 0 0 1.846.039 1 1 0 0 0 .014-.769c-1.25-3.22-2.71-6.58-3.75-8.8a7.385 7.385 0 0 1-.72-3.18c0-.84.14-1.68.43-2.5.67-1.87 2-3.36 3.78-4.21 1.01-.48 2.05-.72 3.15-.72 2.82 0 5.45 1.67 6.66 4.24.04.08 3.85 8.22 6.03 14.92a1 1 0 0 0 1.9-.62" /><path d="M30.86 20.78a.99.99 0 0 0 .58-1.29c-2.34-6.05-4.98-11.57-5.02-11.67v.01C24.14 3.06 19.25 0 13.93 0c-2.05 0-4.05.45-5.91 1.33-1.1.51-2.12 1.17-3.03 1.93a1 1 0 1 0 1.29 1.53A11.861 11.861 0 0 1 13.93 2c4.54 0 8.75 2.64 10.69 6.69v.01c.02.04 2.65 5.55 4.95 11.51.2.52.78.77 1.29.57m-29.4-1.2c.46.97 1 2.13 1.55 3.4.23.5.82.73 1.32.51.51-.22.74-.81.51-1.32-.56-1.28-1.1-2.46-1.57-3.45-.77-1.6-1.15-3.3-1.15-5.01a11.67 11.67 0 0 1 .91-4.5.997.997 0 0 0-.54-1.3.98.98 0 0 0-1.3.53c-.09.22-.18.44-.26.66-.54 1.5-.81 3.06-.81 4.61 0 2.01.45 4.01 1.34 5.87" /><path d="M19.14 12.38c-.83-1.85-2.63-3.08-4.63-3.08-.76 0-1.51.18-2.2.53-.8.4-1.47 1-1.96 1.74a.999.999 0 0 0 .27 1.39c.46.31 1.08.18 1.39-.28.31-.46.72-.82 1.2-1.07.43-.21.85-.31 1.3-.31 1.16-.01 2.28.72 2.8 1.9v-.01c.02.04.55 1.23 1.3 3.04.21.51.79.75 1.3.54.51-.21.76-.8.54-1.31-.76-1.82-1.29-3.03-1.31-3.08m5.33 17.88a.99.99 0 0 0 .74-1.2c-.56-2.4-1.53-5.28-2.54-7.98-.19-.52-.77-.78-1.29-.59-.51.2-.78.77-.58 1.29.99 2.66 1.94 5.49 2.47 7.74.12.53.66.87 1.2.74m-9.76-.8c.16.53.72.83 1.25.66.53-.16.82-.72.66-1.25-1.15-3.74-3.08-8.55-4.33-11.48-.22-.5-.81-.74-1.32-.52-.5.22-.74.8-.52 1.31 1.23 2.88 3.15 7.67 4.26 11.28" /></g></svg></span>
              Card Types
            </h2>

            <p>Find cards of a certain card type with the <code>t:</code> or <code>type:</code> keywords.
              You can search for any supertype, card type, or subtype.</p>

            <p>Using only partial words is allowed.</p>

          </div>

          <div className="reference-block-examples">

            <a className="reference-example" href="/cards?q=t%3Amerfolk+t%3Alegend">
              <span className="reference-example-text">
                <code>t:merfolk t:legend</code>
                <span>Legendary merfolk&nbsp;cards<p />
                </span>
              </span>
            </a>

            <a className="reference-example" href="/cards?q=t%3Agoblin+-t%3Acreature">
              <span className="reference-example-text">
                <code>t:goblin -t:creature</code>
                <span>Goblin cards that aren’t&nbsp;creatures<p />
                </span>
              </span>
            </a>

          </div>

        </div>
      </div>

      <div className="reference-block" id="oracle">
        <div className="inner-flex">

          <div className="reference-block-doc">

            <h2 className="reference-block-header">
              <span className="reference-block-icon"><svg aria-hidden="true" focusable="false" className="" width="29" height="32" viewBox="0 0 29 32" xmlns="http://www.w3.org/2000/svg"><g fillRule="evenodd"><path d="M23.12 29c1.1 0 2-.9 2-2V7h1v23h-22v-1h19zm-21-22h21v20h-21V7zm0-4c0-.55.45-1 1-1h22c.55 0 1 .45 1 1v3h-1V2l-2 4h-21V3zm2 29h22c1.1 0 2-.9 2-2V3c0-1.66-1.34-3-3-3h-22c-1.66 0-3 1.34-3 3v24c0 1.1.9 2 2 2v1c0 1.1.9 2 2 2z" /><path d="M4.121 11h17v-1h-17v1zm0 3h17v-1h-17v1zm0 3h17v-1h-17v1zm0 3h17v-1h-17v1z" /></g></svg></span>
              Oracle Text
            </h2>

            <p>Use the <code>o:</code> or <code>oracle:</code> keywords to find cards that have specific
              phrases in their text box.</p>

            <p>You can put quotes <code>" "</code> around text with punctuation or spaces.</p>

            <p>You can use <code>~</code> in your text as a placeholder for the card’s name.</p>

            <p>This keyword checks the current Oracle text for cards, so it uses the
              most up-to-date phrasing available.
              For example, “dies” instead of “is put into a graveyard”.</p>
          </div>

          <div className="reference-block-examples">

            <a className="reference-example" href="/cards?q=o%3Adraw+t%3Acreature">
              <span className="reference-example-text">
                <code>o:draw t:creature</code>
                <span>Creatures that deal with drawing&nbsp;cards<p />
                </span>
              </span>
            </a>

            <a className="reference-example" href="/cards?q=o%3A%22%7E+enters+the+battlefield+tapped%22">
              <span className="reference-example-text">
                <code>o:"~ enters the battlefield tapped"</code>
                <span>Cards that enter the battlefield&nbsp;tapped<p />
                </span>
              </span>
            </a>

          </div>

        </div>
      </div>

      <div className="reference-block" id="mana">
        <div className="inner-flex">

          <div className="reference-block-doc">

            <h2 className="reference-block-header">
              <span className="reference-block-icon"><svg aria-hidden="true" focusable="false" className="" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M22 11c-2.393 0-4.534.66-6 1.7v-6.7c0-2.762-3.582-5-8-5s-8 2.238-8 5v16c0 2.762 3.582 5 8 5 2.512 0 4.751-.725 6.218-1.857.828 2.21 3.994 3.857 7.782 3.857 4.418 0 8-2.238 8-5v-8c0-2.762-3.582-5-8-5zm-14-8c3.434 0 6 1.584 6 3s-2.566 3-6 3-6-1.584-6-3 2.566-3 6-3zm-6 6.3c1.466 1.04 3.607 1.7 6 1.7s4.534-.66 6-1.7v.7c0 1.416-2.566 3-6 3s-6-1.584-6-3v-.7zm0 4c1.466 1.04 3.607 1.7 6 1.7s4.534-.66 6-1.7v.7c0 1.416-2.566 3-6 3s-6-1.584-6-3v-.7zm0 4c1.466 1.04 3.607 1.7 6 1.7s4.534-.66 6-1.7v.7c0 1.416-2.566 3-6 3s-6-1.584-6-3v-.7zm6 7.7c-3.434 0-6-1.584-6-3v-.7c1.466 1.04 3.607 1.7 6 1.7s4.534-.66 6-1.7v.7c0 1.416-2.566 3-6 3zm20-1c0 1.416-2.566 3-6 3s-6-1.584-6-3v-.7c1.466 1.04 3.607 1.7 6 1.7s4.534-.66 6-1.7v.7zm0-4c0 1.416-2.566 3-6 3s-6-1.584-6-3v-.7c1.466 1.04 3.607 1.7 6 1.7s4.534-.66 6-1.7v.7zm-6-1c-3.434 0-6-1.584-6-3s2.566-3 6-3 6 1.584 6 3-2.566 3-6 3z" /></svg></span>
              Mana Costs
            </h2>

            <p>Use the <code>m:</code> or <code>mana</code>: keyword to search for cards that have
              certain symbols in their mana costs.</p>

            <p>This keyword uses the official text version of mana costs set
              forth in the <a href="http://magic.wizards.com/en/game-info/gameplay/rules-and-formats/rules" rel="nofollow noreferrer">Comprehensive Rules</a>.
              For example, <code>{`G`}</code> represents a green mana.</p>

            <p>Shorthand for is allowed for symbols that aren’t split: <code>G</code> is the same as <code>{`G`}</code></p>

            <p>However, you must always wrap complex/split symbols like <code>{`2/G`}</code> in braces.</p>

            <p>You can find cards of a specific converted mana cost with <code>cmc</code>,
              comparing with a numeric expression (<code>&gt;</code>, <code>&lt;</code>, <code>=</code>, <code>&gt;=</code>, <code>&lt;=</code>, and <code>!=</code>)</p>

            <p>You can filter cards that contain hybrid mana symbols with <code>is:hybrid</code></p>

          </div>

          <div className="reference-block-examples">

            <a className="reference-example" href="/cards?q=mana%3A%7BG%7D%7BU%7D">
              <span className="reference-example-text">
                <code>mana:{`G`}{`U`}</code>
                <span>Cards with one green and blue mana in their&nbsp;costs<p />
                </span>
              </span>
            </a>

            <a className="reference-example" href="/cards?q=m%3A2WW">
              <span className="reference-example-text">
                <code>m:2WW</code>
                <span>Cards with two generic and two white mana in their&nbsp;cost<p />
                </span>
              </span>
            </a>

            <a className="reference-example" href="/cards?q=m%3A%7BR%2FP%7D">
              <span className="reference-example-text">
                <code>m:{`R/P`}</code>
                <span>Cards with one Phyrexian red mana in their&nbsp;cost<p />
                </span>
              </span>
            </a>

            <a className="reference-example" href="/cards?q=c%3Au+cmc%3D5">
              <span className="reference-example-text">
                <code>c:u cmc=5</code>
                <span>Blue cards with converted mana cost&nbsp;5<p />
                </span>
              </span>
            </a>
          </div>

        </div>
      </div>

      <div className="reference-block" id="stats">
        <div className="inner-flex">

          <div className="reference-block-doc">

            <h2 className="reference-block-header">
              <span className="reference-block-icon"><svg aria-hidden="true" focusable="false" className="" width="33" height="32" viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg"><path d="M3.12 21h15v5c0 .551-.45 1-1 1h-14c-.55 0-1-.449-1-1v-5h1zm0-19.001h14c.55 0 1 .45 1 1.001v16.342h-16V3c0-.551.45-1.001 1-1.001zM26.12 14h3c.55 0 1 .448 1 1v14c0 .552-.45 1-1 1h-23c-.55 0-1-.448-1-1h12c1.66 0 3-1.343 3-3V14h6zm-20 18h23c1.66 0 3-1.343 3-3V15a2.995 2.995 0 0 0-3-2.999h-9V3c0-1.656-1.34-3-3-3h-14c-1.66 0-3 1.344-3 3v23c0 1.657 1.34 3 3 3 0 1.657 1.34 3 3 3zM23.83 5.293l-1.42 1.414L24.706 9l2.415 2.414L29.537 9l2.294-2.293-1.42-1.414-2.29 2.292V5c0-2.761-2.24-5-5-5h-2v2h2c1.65 0 3 1.346 3 3v2.585l-2.29-2.292h-.001z" /></svg></span>
              Power, Toughness, and Loyalty
      </h2>

            <p>You can use numeric expressions (<code>&gt;</code>, <code>&lt;</code>, <code>=</code>, <code>&gt;=</code>, <code>&lt;=</code>, and <code>!=</code>)
              to find cards with certain
              power, <code>power</code>/<code>pow</code>, toughness, <code>toughness</code>/<code>tou</code>,
              or starting loyalty, <code>loyalty</code>/<code>loy</code>.</p>

            <p>You can compare the values with each other or with a provided number.</p>

          </div>

          <div className="reference-block-examples">

            <a className="reference-example" href="/cards?q=pow%3E%3D8">
              <span className="reference-example-text">
                <code>pow&gt;=8</code>
                <span>Cards with 8 or more&nbsp;power<p />
                </span>
              </span>
            </a>

            <a className="reference-example" href="/cards?q=pow%3Etou+c%3Aw+t%3Acreature">
              <span className="reference-example-text">
                <code>pow&gt;tou c:w t:creature</code>
                <span>White creatures that are&nbsp;top-heavy<p />
                </span>
              </span>
            </a>

            <a className="reference-example" href="/cards?q=t%3Aplaneswalker+loy%3D3">
              <span className="reference-example-text">
                <code>t:planeswalker loy=3</code>
                <span>Planeswalkers that start at 3&nbsp;loyalty<p />
                </span>
              </span>
            </a>

          </div>

        </div>
      </div>

      <div className="reference-block" id="faces">
        <div className="inner-flex">

          <div className="reference-block-doc">

            <h2 className="reference-block-header">
              <span className="reference-block-icon"><svg aria-hidden="true" focusable="false" className="" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M2.12 22.764V9.237l14-7.001 13.765 6.882L16.12 16v13.764l-14-7zm28 0l-13 6.5V16.618l13-6.5v12.646zm2 1.236V8l-16-8-16 8v16l16 8 16-8z" fillRule="evenodd" /></svg></span>
              Multi-faced Cards
            </h2>

            <p>You can find cards that have more than one face with
              <code>is:split</code> (split cards), <code>is:flip</code> (flip cards),
              <code>is:transform</code> (cards that transform),
              <code>is:meld</code> (cards that meld), and <code>is:leveler</code> (cards with Level Up)
            </p>

          </div>

          <div className="reference-block-examples">

            <a className="reference-example" href="/cards?q=is%3Ameld">
              <span className="reference-example-text">
                <code>is:meld</code>
                <span>Cards that&nbsp;meld<p />
                </span>
              </span>
            </a>

            <a className="reference-example" href="/cards?q=is%3Asplit">
              <span className="reference-example-text">
                <code>is:split</code>
                <span>Split-faced&nbsp;cards<p />
                </span>
              </span>
            </a>

          </div>

        </div>
      </div>

      <div className="reference-block" id="spells">
        <div className="inner-flex">

          <div className="reference-block-doc">

            <h2 className="reference-block-header">
              <span className="reference-block-icon"><svg aria-hidden="true" focusable="false" className="" width="33" height="33" viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg"><path d="M12.121 25h1v-4h-1v4zM3.43 20.99l.7.7 2.83-2.83-.7-.7-2.83 2.83zM.121 13h4v-1h-4v1zM4.13 3.31l-.7.7 2.83 2.83.7-.7-2.83-2.83zm7.991.69h1V0h-1v4zm8.989-.69l-2.83 2.83.7.7 2.83-2.83-.7-.7zm.011 9.69h4v-1h-4v1zm-9.671-1l.67-.67 2.986 2.985-.67.67L11.451 12h-.001zm17.67 17.67L15.136 15.685l.67-.67L29.79 29l-.67.67zm2.79-1.38L12.83 9.21a.992.992 0 0 0-1.42 0l-2.08 2.08c-.39.39-.39 1.03 0 1.42l19.08 19.08a.992.992 0 0 0 1.42 0l2.08-2.08c.39-.39.39-1.03 0-1.42z" fillRule="evenodd" /></svg></span>
              Spells, Permanents, and ETB
            </h2>

            <p>Find cards that are cast as spells with <code>is:spell</code>.</p>

            <p>Find permanent cards with <code>is:permanent</code>.</p>

            <p>Find vanilla creatures with <code>is:vanilla</code></p>

            <p>Find cards that have an
              enters-the-battlefield trigger with <code>is:etb</code>.</p>

          </div>

          <div className="reference-block-examples">

            <a className="reference-example" href="/cards?q=c%3Abrm+is%3Aspell+f%3Aduel">
              <span className="reference-example-text">
                <code>c:brm is:spell f:duel</code>
                <span>Black and red multicolor spells in Duel&nbsp;Commander<p />
                </span>
              </span>
            </a>

            <a className="reference-example" href="/cards?q=is%3Apermanent+t%3Arebel">
              <span className="reference-example-text">
                <code>is:permanent t:rebel</code>
                <span>Rebel&nbsp;permanents<p />
                </span>
              </span>
            </a>

            <a className="reference-example" href="/cards?q=is%3Avanilla">
              <span className="reference-example-text">
                <code>is:vanilla</code>
                <span>Vanilla&nbsp;creatures<p />
                </span>
              </span>
            </a>

          </div>

        </div>
      </div>

      <div className="reference-block" id="extras">
        <div className="inner-flex">

          <div className="reference-block-doc">

            <h2 className="reference-block-header">
              <span className="reference-block-icon"><svg aria-hidden="true" focusable="false" className="" width="31" height="32" viewBox="0 0 31 32" xmlns="http://www.w3.org/2000/svg"><path d="M.172 25.29A6.653 6.653 0 0 0 2.122 30a6.635 6.635 0 0 0 4.707 1.95c1.7 0 3.409-.65 4.707-1.95l14.292-14.29-1.414-1.42-14.293 14.3a4.632 4.632 0 0 1-3.292 1.36 4.635 4.635 0 0 1-3.293-1.36 4.66 4.66 0 0 1 0-6.59L22.538 3a3.198 3.198 0 0 1 2.29-.95c.833 0 1.656.31 2.292.95h.003c.635.64.948 1.46.949 2.29.002.86-.34 1.684-.95 2.29L12.121 22.59a1.843 1.843 0 0 1-2.586 0 1.837 1.837 0 0 1-.536-1.3c0-.47.177-.93.536-1.29L19.828 9.71l-1.414-1.42-10.293 10.3a3.807 3.807 0 0 0-1.122 2.7c-.001.98.376 1.96 1.12 2.71a3.809 3.809 0 0 0 2.709 1.12c.976 0 1.962-.37 2.707-1.12L28.537 9a5.232 5.232 0 0 0 1.535-3.71 5.209 5.209 0 0 0-1.535-3.7l-.003-.01A5.235 5.235 0 0 0 24.829.05c-1.338 0-2.685.51-3.706 1.53L2.122 20.59a6.613 6.613 0 0 0-1.95 4.7" fillRule="evenodd" /></svg></span>
              Extra Cards and Funny Cards
            </h2>

            <p><a href="/cards?q=t:vanguard" rel="nofollow noreferrer">Vanguard</a>,
              <a href="/cards?q=t%3Aplane+-t%3Aplaneswalker" rel="nofollow noreferrer">plane</a>,
              <a href="/cards?q=t:scheme" rel="nofollow noreferrer">scheme</a>,
              and <a href="/cards?q=t:phenomenon" rel="nofollow noreferrer">phenomenon</a>
              cards are hidden by default.
              You must either search for their type
              (using the <a href="#types" rel="nofollow noreferrer"><code>t:</code> keyword</a>)
              or a set that contains them (the <a href="#sets" rel="nofollow noreferrer"><code>e:</code> keyword</a>).
            </p>

            <p>Un-cards, holiday cards, and
              other funny cards are findable with <code>is:funny</code>
              or mentioning their set.</p>

            <p>You may also use <code>include:extras</code> to
              reveal absolutely every card when you search.</p>
          </div>

          <div className="reference-block-examples">

            <a className="reference-example" href="/cards?q=is%3Afunny">
              <span className="reference-example-text">
                <code>is:funny</code>
                <span>All funny&nbsp;cards<p />
                </span>
              </span></a>

            <a className="reference-example" href="/cards?q=t%3Ascheme">
              <span className="reference-example-text">
                <code>t:scheme</code>
                <span>Scheme&nbsp;cards<p />
                </span>
              </span></a>

            <a className="reference-example" href="/cards?q=power+include%3Aextras">
              <span className="reference-example-text">
                <code>power include:extras</code>
                <span>Cards with “power” in their name, including&nbsp;extras<p />
                </span>
              </span></a>

          </div>

        </div>
      </div>

      <div className="reference-block" id="rarity">
        <div className="inner-flex">

          <div className="reference-block-doc">

            <h2 className="reference-block-header">
              <span className="reference-block-icon"><svg aria-hidden="true" focusable="false" className="" width="32" height="31" viewBox="0 0 32 31" xmlns="http://www.w3.org/2000/svg"><path d="M22 17.24l-1.21.87.49 1.41 2.65 7.78-6.79-4.91-1.14-.82-1.14.82-6.79 4.91 2.65-7.78.49-1.41-1.21-.87-5.93-4.29H13l.46-1.34L16 4.05l2.58 7.56.42 1.34h8.89L22 17.24zm9-6.29H20.44L16.92.67a1 1 0 0 0-1.85 0l-3.51 10.28H1a1 1 0 0 0-.57 1.82l8.45 6.1L5.2 29.6a1 1 0 0 0 1.5 1.14l9.3-6.72 9.29 6.72a1 1 0 0 0 1.5-1.14l-3.65-10.73 8.45-6.1a1 1 0 0 0-.59-1.82z" fillRule="evenodd" /></svg></span>
              Rarity
      </h2>

            <p>Use <code>r:</code> or <code>rarity:</code> to find cards by their print rarity.
You can search for <code>common</code>, <code>uncommon</code>, <code>rare</code>, <code>mythic</code>.</p>

          </div>

          <div className="reference-block-examples">

            <a className="reference-example" href="/cards?q=r%3Acommon+t%3Aartifact">
              <span className="reference-example-text">
                <code>r:common t:artifact</code>
                <span>Common&nbsp;artifacts<p />
                </span>
              </span></a>

          </div>

        </div>
      </div>

      <div className="reference-block" id="sets">
        <div className="inner-flex">

          <div className="reference-block-doc">

            <h2 className="reference-block-header">
              <span className="reference-block-icon"><svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30"><path d="M15 2C11.704 7.789 9.287 15.983 0 8l4 12v8h22v-8l4-12c-9.287 7.983-11.704-.211-15-6zM6 26v-4h18v4H6zm18-6.324V20H6v-.324l-2.32-6.962c5.055 1.849 8.383-.683 11.32-6.475 2.938 5.792 6.266 8.323 11.32 6.475L24 19.676z" /></svg></span>
              Sets, Blocks, and Reprints
      </h2>

            <p>Use <code>s:</code>, <code>e:</code>, <code>set:</code>, or <code>edition:</code> to find cards using their
three or four-letter Magic set code.</p>

            <p>Use <code>b:</code> or <code>block:</code> to find cards in a Magic block by
providing the three-letter code for any set in that block.</p>

            <p>You can find reprints with <code>is:reprint</code>, cards that
were new in their set with <code>not:reprint</code>, and cards that
have only been in a single set with <code>is:unique</code>. You can also compare
the number of times a card has been printed with syntax like <code>prints=1</code>,
or the number of sets a card has been in with <code>sets=1</code>. These can also
be compared including only paper sets with <code>paperprints=1</code> and
<code>papersets=1</code>.</p>

            <p>The <code>in:</code> keyword finds cards that once “passed through”
the given set code. For example <code>in:lea</code> would only match cards
that once appeared in Alpha.</p>

          </div>

          <div className="reference-block-examples">

            <a className="reference-example" href="/cards?q=e%3Amm2">
              <span className="reference-example-text">
                <code>e:mm2</code>
                <span>Cards from Modern Masters&nbsp;2015<p />
                </span>
              </span></a>

            <a className="reference-example" href="/cards?q=b%3Awwk">
              <span className="reference-example-text">
                <code>b:wwk</code>
                <span>Cards in Zendikar Block (but using the Worldwake&nbsp;code)<p />
                </span>
              </span></a>

            <a className="reference-example" href="/cards?q=e%3Ac16+not%3Areprint">
              <span className="reference-example-text">
                <code>e:c16 not:reprint</code>
                <span>Cards that were new in Commander&nbsp;2016<p />
                </span>
              </span></a>

            <a className="reference-example" href="/cards?q=in%3Alea+in%3Am15">
              <span className="reference-example-text">
                <code>in:lea in:m15</code>
                <span>Cards that were in both Alpha and Magic&nbsp;2015<p />
                </span>
              </span></a>

            <a className="reference-example" href="/cards?q=e%3Aktk+is%3Aunique">
              <span className="reference-example-text">
                <code>e:ktk is:unique</code>
                <span>Cards that were in Khans of Tarkir and not printed in any other&nbsp;set<p />
                </span>
              </span></a>

            <a className="reference-example" href="/cards?q=sets%3E%3D20">
              <span className="reference-example-text">
                <code>sets&gt;=20</code>
                <span>Cards that have been printed in 20 or more distinct&nbsp;sets<p />
                </span>
              </span></a>

            <a className="reference-example" href="/cards?q=e%3Aarn+papersets%3D1">
              <span className="reference-example-text">
                <code>e:arn papersets=1</code>
                <span>Cards that were printed in Arabian Nights but never reprinted in&nbsp;paper<p />
                </span>
              </span></a>

          </div>

        </div>
      </div>

      <div className="reference-block" id="cubes">
        <div className="inner-flex">

          <div className="reference-block-doc">

            <h2 className="reference-block-header">
              <span className="reference-block-icon"><svg aria-hidden="true" focusable="false" className="" width="51" height="56" viewBox="0 0 51 56" xmlns="http://www.w3.org/2000/svg"><path d="M25.045.685L.76 10.4c-.45.18-.765.653-.76 1.137V44.32c.002.48.316.94.76 1.12l24.285 9.714c.288.117.622.117.91 0L50.24 45.44c.444-.18.758-.64.76-1.12V11.538c.005-.484-.31-.956-.76-1.138L25.956.684c-.394-.127-.708-.06-.91 0zm.455 2.448l21.003 8.385L25.5 19.923 4.497 11.518 25.5 3.133zM2.43 13.32l21.856 8.747v30.146L2.43 43.486V13.32zm46.14 0v30.166l-21.856 8.727V22.067L48.57 13.32z" fillRule="nonzero" fill="#000" /></svg>
              </span>
              Cubes
      </h2>

            <p>Find cards that are part of cube lists using the
<code>cube:</code> keyword. The currently supported cubes are
<code>legacy</code>, <code>twisted</code>, <code>april</code>, <code>vintage</code>, and <code>modern</code>.</p>

          </div>

          <div className="reference-block-examples">

            <a className="reference-example" href="/cards?q=cube%3Avintage">
              <span className="reference-example-text">
                <code>cube:vintage</code>
                <span>Cards in the Vintage&nbsp;Cube<p />
                </span>
              </span></a>

            <a className="reference-example" href="/cards?q=cube%3Amodern+t%3Aplaneswalker">
              <span className="reference-example-text">
                <code>cube:modern t:planeswalker</code>
                <span>Planeswalkers in the Modern&nbsp;Cube<p />
                </span>
              </span></a>

          </div>

        </div>
      </div>

      <div className="reference-block" id="legality">
        <div className="inner-flex">

          <div className="reference-block-doc">

            <h2 className="reference-block-header">
              <span className="reference-block-icon"><svg aria-hidden="true" focusable="false" className="" width="33" height="25" viewBox="0 0 33 25" xmlns="http://www.w3.org/2000/svg"><path d="M25.788 18H8.561l-1.996-6-.665-2-1-3h1.555l1 3 .666 2 1 3h17.222l.998 3h-1.553zm-.447 5.001H6.561L2.89 12h1.564l2.666 8h17.223l.998 3.001zM27.788 13H10.561l-.333-1-.668-2-1.001-3-.667-2-1.001-3h18.79l3.67 11h-1.563zM4.121 0l1.667 5H2.121l1.667 5H.121l5 15h23l-1.666-5h3.666l-1.666-5h3.666l-5-15h-23z" fillRule="evenodd" /></svg></span>
              Format Legality
      </h2>

            <p>Use the <code>f:</code> or <code>format:</code> keywords
to find cards that are legal in a given format.</p>

            <p>The current supported formats are:
<code>standard</code>, <code>modern</code>, <code>legacy</code>, <code>vintage</code>, <code>commander</code>,
<code>future</code> (future Standard),
<code>pauper</code>, <code>frontier</code>, <code>penny</code> (Penny Dreadful),
<code>1v1</code> (1v1 Commander), and <code>duel</code> (Duel Commander).</p>

            <p>Use <code>is:commander</code> to find cards that can be your commander.</p>

            <p>You can also find cards that are explicitly
banned in a format with the <code>banned:</code> keyword and
restricted with the <code>restricted:</code> keyword.</p>

            <p>Finally, you can find cards on the Reserved List with <code>is:reserved</code>.</p>

          </div>

          <div className="reference-block-examples">

            <a className="reference-example" href="/cards?q=c%3Ag+t%3Acreature+f%3Apauper">
              <span className="reference-example-text">
                <code>c:g t:creature f:pauper</code>
                <span>Green creatures in Pauper&nbsp;format<p />
                </span>
              </span></a>

            <a className="reference-example" href="/cards?q=banned%3Alegacy">
              <span className="reference-example-text">
                <code>banned:legacy</code>
                <span>Cards banned in Legacy&nbsp;format<p />
                </span>
              </span></a>

            <a className="reference-example" href="/cards?q=is%3Acommander">
              <span className="reference-example-text">
                <code>is:commander</code>
                <span>Cards that can be your&nbsp;commander<p />
                </span>
              </span></a>

            <a className="reference-example" href="/cards?q=is%3Areserved">
              <span className="reference-example-text">
                <code>is:reserved</code>
                <span>Cards on the Reserved&nbsp;List<p />
                </span>
              </span></a>

          </div>

        </div>
      </div>

      <div className="reference-block" id="prices">
        <div className="inner-flex">

          <div className="reference-block-doc">

            <h2 className="reference-block-header">
              <span className="reference-block-icon"><svg aria-hidden="true" focusable="false" className="" width="33" height="30" viewBox="0 0 33 30" xmlns="http://www.w3.org/2000/svg"><path d="M27.27 19.44c.54.55.85 1.29.85 2.06s-.31 1.51-.85 2.06l-.854.855a3.513 3.513 0 0 0-.71-.71l.855-.855c.36-.36.56-.84.56-1.35 0-.51-.2-.99-.56-1.35l-1.34-1.35-.004-.005L23.411 17H3.891l-1.5-12h23.46l-.08.64.907-.907.837-.836.006-.007.63-.63.019-.018c-.02-.08-.05-.156-.05-.242 0-.55.45-1 1-1 .097 0 .184.03.272.055l.019-.015.21-.04c.13 0 .26.05.35.15.15.15.19.37.11.56l-.015.019c.026.088.055.175.055.27 0 .55-.45 1-1 1-.085 0-.162-.028-.241-.048l-.02.019-1.01 1-.005.006-.463.463-1.411 1.41a.47.47 0 0 1-.35.15h-.02l-.247 1.973-.66 5.28-.29 2.32.007.008 1.57 1.57.01.01 1.28 1.28h-.001zM10.07 27c.024-.165.05-.33.05-.5 0-.171-.026-.335-.05-.5h10.102c-.024.165-.051.329-.051.5 0 .17.027.335.05.5H10.07zm-4.95-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm17 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm7.6-20.56A2.997 2.997 0 0 0 32.12 3c0-1.66-1.34-3-3-3a2.996 2.996 0 0 0-2.94 2.4l-.6.6H2.39C1.18 3 .25 4.05.4 5.25l1.5 12c.13 1 .98 1.75 1.99 1.75h18.69l2.5 2.5-1.503 1.504a3.49 3.49 0 0 0-2.398.996H9.063c-.651-.64-1.528-1-2.442-1-1.757 0-3.202 1.306-3.45 2.996-.023.166-.05.33-.05.504 0 .173.027.338.05.504C3.419 28.694 4.864 30 6.621 30c.95 0 1.81-.383 2.442-1h12.116c.632.617 1.492 1 2.442 1a3.502 3.502 0 0 0 3.496-3.462l1.564-1.558c.92-.93 1.44-2.18 1.44-3.48 0-1.3-.52-2.55-1.44-3.48l-2.165-2.165.958-7.668 2.247-2.247h-.001z" fillRule="evenodd" /></svg></span>
              USD/EUR/TIX prices
      </h2>

            <p>You can find prints within certain <code>usd</code>, <code>eur</code>, <code>tix</code> price
ranges by comparing them with a
numeric expression (<code>&gt;</code>, <code>&lt;</code>, <code>=</code>, <code>&gt;=</code>, <code>&lt;=</code>, and <code>!=</code>)</p>

          </div>

          <div className="reference-block-examples">

            <a className="reference-example" href="/cards?as=checklist&amp;order=tix&amp;q=tix%3E15.00">
              <span className="reference-example-text">
                <code>tix&gt;15.00</code>
                <span>Cards that cost more than 15 TIX at MTGO&nbsp;stores<p />
                </span>
              </span></a>

            <a className="reference-example" href="/cards?as=checklist&amp;order=usd&amp;q=usd%3E%3D0.50+e%3Aema">
              <span className="reference-example-text">
                <code>usd&gt;=0.50 e:ema</code>
                <span>Cards worth 50¢ or more in Eternal&nbsp;Masters<p />
                </span>
              </span></a>

          </div>

        </div>
      </div>

      <div className="reference-block" id="flavor">
        <div className="inner-flex">

          <div className="reference-block-doc">

            <h2 className="reference-block-header">
              <span className="reference-block-icon"><svg aria-hidden="true" focusable="false" className="" width="33" height="28" viewBox="0 0 33 28" xmlns="http://www.w3.org/2000/svg"><path d="M5.794 25.16l.847-.85-.347-1.15A4.001 4.001 0 0 1 10.121 18c2.206 0 4 1.79 4 4s-1.794 4-4 4H4.949l.845-.84zm9.626-13.08l1.18-.897 4.34 4.34-.895 1.177c-.5.66-1.712 1.21-2.648 1.21-.094 0-.183 0-.263-.01l-1.06-.16c-.75-.1-1.59-.94-1.697-1.69l-.152-1.06c-.13-.91.462-2.36 1.195-2.91zm11.924-9.07c.779-.59 1.712-.94 2.128-.97.206.11.498.4.614.61-.032.34-.31 1.25-.973 2.13l-7.565 9.943-4.15-4.148 9.946-7.565zM10.12 28a6.002 6.002 0 0 0 5.537-8.312c.044.008.088.026.133.032l1.06.16c.177.02.359.03.546.03 1.539 0 3.349-.83 4.24-2l9.068-11.92c.999-1.32 1.59-3.06 1.316-3.89-.275-.83-1.175-1.72-2-2a1.413 1.413 0 0 0-.481-.07c-.913 0-2.312.55-3.407 1.39l-11.924 9.06c-1.313 1-2.197 3.16-1.964 4.79l.152 1.06c.006.045.023.088.032.132a6.002 6.002 0 0 0-8.049 7.278L.119 28H10.12z" fillRule="evenodd" /></svg></span>
              Artist, Flavor Text and Watermark
      </h2>

            <p>Search for cards illustrated by a
certain artist with the <code>a:</code>, <code>art:</code>, or <code>artist:</code> keywords.</p>

            <p>Search for words in a card’s flavor text using the
<code>ft:</code> or <code>flavor:</code> keywords.</p>

            <p>Search for a card’s affiliation watermark using the
<code>wm:</code> or <code>watermark:</code> keywords.</p>

            <p>For any of these, you can wrap statements with spaces
or punctuation in quotes <code>" "</code>.</p>

          </div>

          <div className="reference-block-examples">

            <a className="reference-example" href="/cards?q=a%3A%22proce%22">
              <span className="reference-example-text">
                <code>a:"proce"</code>
                <span>Cards illustrated by Vincent&nbsp;Proce<p />
                </span>
              </span></a>

            <a className="reference-example" href="/cards?q=ft%3Amishra">
              <span className="reference-example-text">
                <code>ft:mishra</code>
                <span>Cards that mention Mishra in their flavor&nbsp;text<p />
                </span>
              </span></a>

            <a className="reference-example" href="/cards?q=ft%3Adesigned+e%3Am15">
              <span className="reference-example-text">
                <code>ft:designed e:m15</code>
                <span>Cards created by guest designers in Magic&nbsp;2015<p />
                </span>
              </span></a>

            <a className="reference-example" href="/cards?q=wm%3Aorzhov">
              <span className="reference-example-text">
                <code>wm:orzhov</code>
                <span>Cards with Orzhov guild&nbsp;watermark<p />
                </span>
              </span></a>

          </div>

        </div>
      </div>

      <div className="reference-block" id="frame">
        <div className="inner-flex">

          <div className="reference-block-doc">

            <h2 className="reference-block-header">
              <span className="reference-block-icon"><svg aria-hidden="true" focusable="false" className="" width="33" height="32" viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg"><g fillRule="evenodd"><path d="M2.121 30h28V2h-28v28zm28-30.001h-28c-1.1 0-2 .897-2 2.001v28c0 1.105.9 2 2 2h28c1.1 0 2-.895 2-2V2c0-1.104-.9-2.001-2-2.001z" /><path d="M5.121 11h22V5h-22v6zm-1 1h24V4h-24v8zm1 15h6V14h-6v13zm-1 1h8V13h-8v15zm10-1h13V14h-13v13zm-1 1h15V13h-15v15z" /></g></svg></span>
              Border, Frame &amp; Resolution
      </h2>

            <p>Use the <code>border:</code> keyword
to find cards with a <code>black</code>, <code>white</code>, or <code>silver</code> border.</p>

            <p>You can find cards with a certain frame edition with
<code>is:new</code>, <code>is:modern</code>, <code>is:old</code>, and <code>is:future</code>. You can find
cards with full art using <code>is:full</code>.</p>

            <p>Because the definition of “new” will shift over time,
you can also search for <code>frame:1993</code>,
<code>frame:2003</code>, <code>frame:2015</code>, and <code>frame:future</code>,
which will not change.</p>

            <p>You can find cards in our database with high-resolution images
using <code>is:hires</code>.</p>

          </div>

          <div className="reference-block-examples">

            <a className="reference-example" href="/cards?q=border%3Awhite+t%3Acreature">
              <span className="reference-example-text">
                <code>border:white t:creature</code>
                <span>White-bordered creature&nbsp;cards<p />
                </span>
              </span></a>

            <a className="reference-example" href="/cards?q=is%3Anew+r%3Amythic">
              <span className="reference-example-text">
                <code>is:new r:mythic</code>
                <span>Mythic cards with the 2015 holofoil-stamp&nbsp;frame<p />
                </span>
              </span></a>

            <a className="reference-example" href="/cards?q=is%3Ahires">
              <span className="reference-example-text">
                <code>is:hires</code>
                <span>Cards with high-resolution&nbsp;scans<p />
                </span>
              </span></a>

          </div>

        </div>
      </div>

      <div className="reference-block" id="promos">
        <div className="inner-flex">

          <div className="reference-block-doc">

            <h2 className="reference-block-header">
              <span className="reference-block-icon"><svg aria-hidden="true" focusable="false" className="" width="33" height="32" viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg"><path d="M6.66 4.77l-.85.66.34 1.01.15.42-.26-.2-.92-.7-.92.7-.26.2.15-.42.34-1.01-.85-.66-.29-.22h1.44l.35-1.02.04-.12.04.12.35 1.02h1.44l-.29.22zm2.86-1.72H6.58L5.68.42A.587.587 0 0 0 5.12 0c-.23 0-.47.14-.56.42l-.9 2.63H.72c-.58 0-.82.77-.35 1.13l2.3 1.78-1.09 3.2c-.16.44.18.84.56.84.12 0 .24-.04.36-.12l2.62-2.03 2.63 2.03c.11.08.23.12.35.12.38 0 .72-.4.56-.84l-1.09-3.2 2.3-1.78c.47-.36.23-1.13-.35-1.13zm-5.86 12.5h1.07l.35-1.02.04-.12.04.12.35 1.02h1.44l-.29.22-.85.66.34 1.01.15.42-.26-.2-.92-.7-.92.7-.26.2.15-.42.34-1.01-.85-.66-.29-.22h.37zm-3.29-.37l2.3 1.78-1.09 3.2c-.16.44.18.84.56.84.12 0 .24-.04.36-.12l2.62-2.03 2.63 2.03c.11.08.23.12.35.12.38 0 .72-.4.56-.84l-1.09-3.2 2.3-1.78c.47-.36.23-1.13-.35-1.13H6.58l-.89-2.63a.598.598 0 0 0-.57-.42c-.23 0-.47.14-.56.42l-.9 2.63H.72c-.58 0-.82.77-.35 1.13zm3.29 11.37h1.07l.35-1.02.04-.12.04.12.35 1.02h1.44l-.29.22-.85.66.34 1.01.15.42-.26-.2-.92-.7-.92.7-.26.2.15-.42.34-1.01-.85-.66-.29-.22h.37zm-3.29-.37l2.3 1.78-1.09 3.2c-.16.44.18.84.56.84.12 0 .24-.04.36-.12l2.62-2.03 2.63 2.03c.11.08.23.12.35.12.38 0 .72-.4.56-.84l-1.09-3.2 2.3-1.78c.47-.36.23-1.13-.35-1.13H6.58l-.9-2.63a.587.587 0 0 0-.56-.42c-.23 0-.47.14-.56.42l-.9 2.63H.72c-.58 0-.82.77-.35 1.13zM12.121 7h20V5h-20v2zm0 11h20v-2h-20v2zm0 11h20v-2h-20v2z" fillRule="evenodd" /></svg></span>
              Games, Promos, &amp; Spotlights
      </h2>

            <p>You can find specific prints available in different Magic game
environments with the <code>game:</code> keyword.
The games <code>paper</code>, <code>mtgo</code>, and <code>arena</code> are supported.</p>

            <p>You can filter by a card’s availability in a game with the <code>in:</code> keyword.
The games <code>paper</code>, <code>mtgo</code>, and <code>arena</code> are supported.</p>

            <p>Find prints that are only available digitally (MTGO and Arena) with <code>is:digital</code>.</p>

            <p>Find promotional cards (in any environment) with <code>is:promo</code>.</p>

            <p>Find cards that are Story Spotlights with <code>is:spotlight</code>,</p>

          </div>

          <div className="reference-block-examples">

            <a className="reference-example" href="/cards?q=game%3Aarena">
              <span className="reference-example-text">
                <code>game:arena</code>
                <span>Cards available on&nbsp;MTG:Arena<p />
                </span>
              </span></a>

            <a className="reference-example" href="/cards?q=-in%3Amtgo+f%3Alegacy">
              <span className="reference-example-text">
                <code>-in:mtgo f:legacy</code>
                <span>Legacy legal cards not available on&nbsp;MTGO<p />
                </span>
              </span></a>

            <a className="reference-example" href="/cards?q=is%3Apromo">
              <span className="reference-example-text">
                <code>is:promo</code>
                <span>Promotional&nbsp;cards<p />
                </span>
              </span></a>

            <a className="reference-example" href="/cards?q=is%3Aspotlight">
              <span className="reference-example-text">
                <code>is:spotlight</code>
                <span>Story Spotlight&nbsp;cards<p />
                </span>
              </span></a>

          </div>

        </div>
      </div>

      <div className="reference-block" id="year">
        <div className="inner-flex">

          <div className="reference-block-doc">

            <h2 className="reference-block-header">
              <span className="reference-block-icon"><svg aria-hidden="true" focusable="false" className="" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M25 4c0-1.656-1.343-3-3-3s-3 1.344-3 3h-8c0-1.656-1.343-3-3-3s-3 1.344-3 3h-4v25h28v-25h-4zm-4 0c0-.551.448-1 1-1s1 .449 1 1v2c0 .551-.448 1-1 1s-1-.449-1-1v-2zm-14 0c0-.551.448-1 1-1s1 .449 1 1v2c0 .551-.448 1-1 1s-1-.449-1-1v-2zm20 23h-24v-14h24v14zm0-16h-24v-5h2c0 1.656 1.343 3 3 3s3-1.344 3-3h8c0 1.656 1.343 3 3 3s3-1.344 3-3h2v5zm-3 4h-14v4h-4v6h18v-10zm-14 8h-2v-2h2v2zm4 0h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2z" /></svg></span>
              Year
      </h2>

            <p>You can use numeric expressions (<code>&gt;</code>, <code>&lt;</code>, <code>=</code>, <code>&gt;=</code>, <code>&lt;=</code>, and <code>!=</code>)
to find cards that were released relative to a certain year.</p>

          </div>

          <div className="reference-block-examples">

            <a className="reference-example" href="/cards?q=year%3C%3D1994">
              <span className="reference-example-text">
                <code>year&lt;=1994</code>
                <span>Cards from 1994 and&nbsp;before<p />
                </span>
              </span></a>

            <a className="reference-example" href="/cards?q=year%3D2017">
              <span className="reference-example-text">
                <code>year=2017</code>
                <span>Cards released this&nbsp;year<p />
                </span>
              </span></a>

          </div>

        </div>
      </div>

      <div className="reference-block" id="shortcuts">
        <div className="inner-flex">

          <div className="reference-block-doc">

            <h2 className="reference-block-header">
              <span className="reference-block-icon"><svg aria-hidden="true" focusable="false" className="" width="26" height="32" viewBox="0 0 26 32" xmlns="http://www.w3.org/2000/svg"><g fillRule="evenodd"><path d="M9.12 2h6v2.65l-1.2.48-.004.002c-.01-.018-.02-.034-.028-.052a2.134 2.134 0 0 0-.25-.371c-.016-.018-.03-.038-.047-.056a2.023 2.023 0 0 0-.39-.332c-.012-.008-.027-.014-.04-.022a1.985 1.985 0 0 0-.53-.225 1.952 1.952 0 0 0-.51-.074 1.99 1.99 0 0 0-.63.11 1.988 1.988 0 0 0-.418.191c-.012.007-.025.012-.036.019a1.976 1.976 0 0 0-.387.331c-.02.02-.035.042-.053.063a1.983 1.983 0 0 0-.25.376l-.022.041-.004-.001-1.2-.48V2H9.12zm11.69 6.48l2.83 2.83-1.41 1.41-2.83-2.83 1.41-1.41zM22.12 20c0 5.51-4.49 10-10 10s-10-4.49-10-10c0-4.825 3.445-8.868 8-9.798 1.32-.27 2.68-.27 4 0 4.557.93 8 4.973 8 9.798zm-22 0c0 6.63 5.37 12 12 12s12-5.37 12-12c0-1.937-.468-3.76-1.282-5.379.293-.094.57-.249.803-.481l1.42-1.42c.78-.78.78-2.05 0-2.83l-2.83-2.83c-.78-.78-2.05-.78-2.83 0l-1.42 1.42c-.232.232-.387.51-.481.803a11.891 11.891 0 0 0-3.38-1.103v-.982l1.74-.698c.76-.3 1.26-1.04 1.26-1.85V2c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v2.65c0 .81.5 1.55 1.26 1.85l1.74.698v.982C4.446 9.133.12 14.053.12 20z" /><path d="M10.47 22.35l8-8-.7-.7-8 8z" /></g></svg></span>
              Shortcuts and Nicknames
      </h2>

            <p>The search system includes a few convenience shortcuts for
common card sets:</p>

            <p>You can find some interesting land groups with
<code>is:bikeland</code> (alias <code>cycleland</code>, <code>bicycleland</code>),
<code>is:bounceland</code> (alias <code>karoo</code>),
<code>is:checkland</code>,
<code>is:dual</code>,
<code>is:fastland</code>,
<code>is:fetchland</code>,
<code>is:filterland</code>,
<code>is:gainland</code>,
<code>is:painland</code>,
<code>is:scryland</code>,
<code>is:shadowland</code>,
<code>is:shockland</code>,
<code>is:storageland</code>,
and <code>is:tangoland</code> (alias <code>battleland</code>)</p>

            <p>You can find color- and timeshifted
cards from Time Spiral block with
<code>is:colorshifted</code> and <code>is:timeshifted</code></p>

            <p>You can find all Masterpiece Series cards with <code>is:masterpiece</code></p>

          </div>

          <div className="reference-block-examples">

            <a className="reference-example" href="/cards?q=is%3Adual">
              <span className="reference-example-text">
                <code>is:dual</code>
                <span>Cards that are dual&nbsp;lands<p />
                </span>
              </span></a>

            <a className="reference-example" href="/cards?q=is%3Afetchland">
              <span className="reference-example-text">
                <code>is:fetchland</code>
                <span>Cards that are&nbsp;fetchlands<p />
                </span>
              </span></a>

            <a className="reference-example" href="/cards?q=is%3Acolorshifted">
              <span className="reference-example-text">
                <code>is:colorshifted</code>
                <span>Colorshifted&nbsp;cards<p />
                </span>
              </span></a>

          </div>

        </div>
      </div>

      <div className="reference-block" id="negating">
        <div className="inner-flex">

          <div className="reference-block-doc">

            <h2 className="reference-block-header">
              <span className="reference-block-icon"><svg aria-hidden="true" focusable="false" className="" width="32" height="31" viewBox="0 0 32 31" xmlns="http://www.w3.org/2000/svg"><path d="M16.122 16.002h8.993v-1.004H6.125v1.004h8.993zM15.62 2c7.44 0 13.5 6.06 13.5 13.5S23.06 29 15.62 29s-13.5-6.06-13.5-13.5S8.18 2 15.62 2m0 29c8.56 0 15.5-6.94 15.5-15.5 0-8.56-6.94-15.5-15.5-15.5C7.06 0 .12 6.94.12 15.5c0 8.56 6.94 15.5 15.5 15.5" /></svg></span>
              Negating Conditions
      </h2>

            <p>All keywords except for <code>include</code> can be negated by
prefixing them with a hyphen (<code>-</code>).
This inverts the meaning of the keyword to reject
cards that matched what you’ve searched for.</p>

            <p>The <code>is:</code> keyword has a convenient inverted mode <code>not:</code>
              which is the same as <code>-is:</code>.
Conversely, <code>-not:</code> is the same as <code>is:</code>.</p>

            <p>Loose name words can also be inverted with <code>-</code></p>

          </div>

          <div className="reference-block-examples">

            <a className="reference-example" href="/cards?q=-fire+c%3Ar+t%3Ainstant">
              <span className="reference-example-text">
                <code>-fire c:r t:instant</code>
                <span>Red instants without the word “fire” in their&nbsp;name<p />
                </span>
              </span></a>

            <a className="reference-example" href="/cards?q=o%3Achangeling+-t%3Acreature">
              <span className="reference-example-text">
                <code>o:changeling -t:creature</code>
                <span>Changeling cards that aren’t&nbsp;creatures<p />
                </span>
              </span></a>

            <a className="reference-example" href="/cards?q=not%3Areprint+e%3Ac16">
              <span className="reference-example-text">
                <code>not:reprint e:c16</code>
                <span>Cards in Commander 2016 that aren’t&nbsp;reprints<p />
                </span>
              </span></a>

          </div>

        </div>
      </div>

      <div className="reference-block" id="regex">
        <div className="inner-flex">

          <div className="reference-block-doc">

            <h2 className="reference-block-header">
              <span className="reference-block-icon"><svg aria-hidden="true" focusable="false" className="" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M14 30h2v-2.051c1.642-.125 3.193-.557 4.608-1.234l1.025 1.775 1.731-1-1.021-1.768c1.323-.908 2.47-2.055 3.378-3.377l1.768 1.02.999-1.731-1.775-1.024c.679-1.415 1.11-2.968 1.235-4.609h2.052v-2h-2.051c-.125-1.642-.557-3.193-1.235-4.608l1.776-1.025-1-1.732-1.768 1.021c-.908-1.322-2.055-2.469-3.377-3.377l1.021-1.768-1.732-1-1.025 1.775c-1.416-.68-2.967-1.111-4.609-1.236v-2.051h-2v2.051c-1.642.125-3.193.557-4.608 1.234l-1.026-1.775-1.732 1 1.021 1.768c-1.323.908-2.469 2.054-3.378 3.376l-1.767-1.02-1.001 1.731 1.777 1.026c-.679 1.416-1.11 2.967-1.235 4.609h-2.051v2h2.051c.125 1.642.557 3.193 1.235 4.608l-1.776 1.026 1 1.732 1.768-1.021c.908 1.322 2.055 2.469 3.377 3.377l-1.021 1.768 1.732 1 1.025-1.775c1.415.678 2.967 1.109 4.608 1.234v2.051zm1-4c-1.647 0-3.204-.372-4.606-1.021l3.544-6.139c.34.094.692.16 1.062.16 1.861 0 3.412-1.277 3.858-3h7.091c-.506 5.605-5.212 10-10.949 10zm0-13c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm10.949 1h-7.091c-.446-1.723-1.997-3-3.858-3-.37 0-.722.066-1.063.16l-3.544-6.139c1.403-.649 2.96-1.021 4.607-1.021 5.737 0 10.443 4.395 10.949 10zm-21.949 1c0-3.712 1.844-6.988 4.66-8.98l3.539 6.129c-.739.726-1.199 1.734-1.199 2.851s.46 2.125 1.199 2.852l-3.539 6.128c-2.816-1.992-4.66-5.268-4.66-8.98z" /></svg></span>
              Regular Expressions
      </h2>

            <p>The <code>regex:</code> or <code>re:</code> keywords are available to filter
Oracle text against a regular expression pattern.</p>

            <p>Scryfall supports
wildcards <code>*</code> and <code>~</code>,
option groups <code>(|)</code>,
classes
<code>\d</code>,
<code>\d+</code>,
<code>\w</code>,
and <code>\w+</code>,
and anchors
<code>(?!)</code>,
<code>\b</code>,
<code>^</code>,
and <code>$</code>.</p>

            <p>Full documentation for this keyword is available on
our <a href="/docs/regular-expressions" rel="nofollow noreferrer">Regular Expressions help page</a>.</p>

          </div>

          <div className="reference-block-examples">

            <a className="reference-example" href="/cards?q=t%3Acreature+re%3A%22%5E%7BT%7D%3A%22">
              <span className="reference-example-text">
                <code>t:creature re:"^{`T`}:"</code>
                <span>Creatures that tap with no other&nbsp;payment<p />
                </span>
              </span></a>

            <a className="reference-example" href="/cards?q=t%3Ainstant+re%3A%22%2B%5Cd%2F%2B%5Cd%22">
              <span className="reference-example-text">
                <code>t:instant re:"+\d/+\d"</code>
                <span>Instants that provide +X/+X&nbsp;effects<p />
                </span>
              </span></a>

            <a className="reference-example" href="/cards?q=t%3Aland+re%3A%22%28%7BW%7D%7C%7BU%7D%7Cany%29%22">
              <span className="reference-example-text">
                <code>t:land re:"({`W`}|{`U`}|any)"</code>
                <span>Lands that mention white, blue, or “any”&nbsp;mana<p />
                </span>
              </span></a>

          </div>

        </div>
      </div>

      <div className="reference-block" id="exact">
        <div className="inner-flex">

          <div className="reference-block-doc">

            <h2 className="reference-block-header">
              <span className="reference-block-icon"><svg aria-hidden="true" focusable="false" className="" width="33" height="24" viewBox="0 0 33 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="evenodd"><path d="M2.12 5V3c0-.55.45-1 1-1h26c.55 0 1 .45 1 1v2h-28zm0 3h28V6h-28v2zm28 13c0 .55-.45 1-1 1h-26c-.55 0-1-.45-1-1V9h28v12zm-1-21h-26c-1.66 0-3 1.34-3 3v18c0 1.66 1.34 3 3 3h26c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3z" /><path d="M17.121 18h10v-1h-10v1zm0-3h10v-1h-10v1zM5.12 21c.03-1.11.95-2 2.06-2h.44c.39 0 .75-.24.91-.6.16-.36.09-.79-.18-1.08-.75-.81-1.23-2.14-1.23-3.38 0-1.79.98-2.94 2.5-2.94s2.5 1.15 2.5 2.94c0 1.24-.48 2.57-1.23 3.38-.27.29-.34.72-.18 1.08.16.36.52.6.91.6h.44c1.11 0 2.03.89 2.06 2h.995a3.057 3.057 0 0 0-3.054-3h-.44c.91-.98 1.5-2.54 1.5-4.06 0-2.49-1.57-3.94-3.5-3.94s-3.5 1.45-3.5 3.94c0 1.52.59 3.08 1.5 4.06h-.44a3.057 3.057 0 0 0-3.054 3h.994-.001z" /></g></svg></span>
              Exact Names
      </h2>

            <p>If you prefix words or quoted phrases with <code>!</code>
              you will find cards with that exact name only.</p>

            <p>This is still case-insensitive.</p>

          </div>

          <div className="reference-block-examples">

            <a className="reference-example" href="/cards?q=%21fire">
              <span className="reference-example-text">
                <code>!fire</code>
                <span>The card&nbsp;Fire<p />
                </span>
              </span></a>

            <a className="reference-example" href="/cards?q=%21%22sift+through+sands%22">
              <span className="reference-example-text">
                <code>!"sift through sands"</code>
                <span>The card Sift Through&nbsp;Sands<p />
                </span>
              </span></a>

          </div>

        </div>
      </div>

      <div className="reference-block" id="unrolling">
        <div className="inner-flex">

          <div className="reference-block-doc">

            <h2 className="reference-block-header">
              <span className="reference-block-icon"><svg aria-hidden="true" focusable="false" className="" width="33" height="22" viewBox="0 0 33 22" xmlns="http://www.w3.org/2000/svg"><path d="M2.12 3.738l2 1.334v11.855l-2 1.336V3.738zm28 0v14.525l-2-1.336V5.073l2-1.335zm-4 2.67V17.65l-2-1.713V6.063l2-1.714v2.059zm-4-1.13V18h-12V4h12v1.278zm-16 10.314V4.349l2 1.714v9.874l-2 1.713v-2.058zM.98 21.176c.24 0 .51-.092.8-.285l2.34-1.561V20c0 .7.28 1.083.69 1.083.24 0 .52-.125.83-.385l2.554-2.19A2 2 0 0 0 10.121 20h12a2 2 0 0 0 1.927-1.492l2.553 2.19c.31.26.59.385.83.385.41 0 .69-.382.69-1.082v-.671l2.34 1.56c.29.194.56.286.8.286.51 0 .86-.425.86-1.175V2c0-.751-.35-1.176-.86-1.176-.24 0-.51.09-.8.286l-2.34 1.56V2c0-.701-.28-1.082-.69-1.082-.24 0-.52.124-.83.384l-2.553 2.19A2 2 0 0 0 22.121 2h-12c-.924 0-1.7.635-1.926 1.492l-2.554-2.19c-.31-.26-.59-.384-.83-.384-.41 0-.69.38-.69 1.082v.67l-2.34-1.56c-.29-.195-.56-.286-.8-.286-.51 0-.86.425-.86 1.176v18c0 .75.35 1.176.86 1.176H.98z" fillRule="evenodd" /></svg></span>
              “Unrolling” Searches
      </h2>

            <p>By default, searching finds each Magic card name only once.
For example, if your search results include the card Pacifism,
you will only see Pacifism once and
not every single reprint of Pacifism.</p>

            <p>However, if you prefix your whole search with <code>++</code> you
will “unroll” the search and
find every single print of all matching cards.</p>

          </div>

          <div className="reference-block-examples">

            <a className="reference-example" href="/cards?q=%2B%2B%21%22Lightning+Bolt%22">
              <span className="reference-example-text">
                <code>++!"Lightning Bolt"</code>
                <span>Every printing of Lightning&nbsp;Bolt<p />
                </span>
              </span></a>

            <a className="reference-example" href="/cards?q=%2B%2Bt%3Aforest+a%3A%22john+avon%22">
              <span className="reference-example-text">
                <code>++t:forest a:"john avon"</code>
                <span>Every Forest illustrated by John&nbsp;Avon<p />
                </span>
              </span></a>

            <a className="reference-example" href="/cards?q=%2B%2Byamazaki">
              <span className="reference-example-text">
                <code>++yamazaki</code>
                <span>Both Brothers&nbsp;Yamazaki<p />
                </span>
              </span></a>

            <a className="reference-example" href="/cards?q=%2B%2Be%3Aall">
              <span className="reference-example-text">
                <code>++e:all</code>
                <span>Every card, including alternate arts, in&nbsp;Alliances<p />
                </span>
              </span></a>

          </div>

        </div>
      </div>

      <div className="reference-block" id="or">
        <div className="inner-flex">

          <div className="reference-block-doc">

            <h2 className="reference-block-header">
              <span className="reference-block-icon"><svg aria-hidden="true" focusable="false" className="" width="33" height="30" viewBox="0 0 33 30" xmlns="http://www.w3.org/2000/svg"><path d="M7.12 18v1.172L2.95 15l4.17-4.172V14h7V2h4v12h7v-3.172L29.29 15l-4.17 4.172V16h-7v12h-4V16h-7v2zm2 0h3v12h8V18h3v6l9-9-9-9v6h-3V0h-8v12h-3V6l-9 9 9 9v-6z" fillRule="evenodd" /></svg></span>
              Using “OR”
      </h2>

            <p>By default every search term you enter is combined.
All of them must match to find a card.</p>

            <p>If you want to search over a set of options or choices,
you can put the special word <code>or</code>/<code>OR</code> between terms.</p>

          </div>

          <div className="reference-block-examples">

            <a className="reference-example" href="/cards?q=t%3Afish+or+t%3Abird">
              <span className="reference-example-text">
                <code>t:fish or t:bird</code>
                <span>Cards that are Fish or&nbsp;Birds<p />
                </span>
              </span></a>

            <a className="reference-example" href="/cards?q=t%3Aland+%28a%3Atitus+or+a%3Abradley%29">
              <span className="reference-example-text">
                <code>t:land (a:titus or a:bradley)</code>
                <span>Lands illustrated by Titus Lunter of Noah&nbsp;Bradley<p />
                </span>
              </span></a>

          </div>

        </div>
      </div>

      <div className="reference-block" id="nesting">
        <div className="inner-flex">

          <div className="reference-block-doc">

            <h2 className="reference-block-header">
              <span className="reference-block-icon"><svg aria-hidden="true" focusable="false" className="" width="67" height="47" viewBox="0 0 67 47" xmlns="http://www.w3.org/2000/svg"><g fillRule="evenodd"><path d="M56.556 23.303c0 3.662-.513 6.848-1.538 9.558-1.026 2.71-2.385 4.993-4.078 6.848-1.676 1.84-3.584 3.276-5.725 4.31-2.14 1.033-4.325 1.696-6.555 1.989V43.81c3.076-.57 5.436-2.552 7.08-5.945 1.644-3.394 2.466-8.248 2.466-14.563 0-6.315-.822-11.17-2.466-14.563-1.644-3.394-4.004-5.375-7.08-5.945V.598c2.23.293 4.415.956 6.555 1.99 2.14 1.033 4.049 2.47 5.725 4.308 1.693 1.856 3.052 4.139 4.078 6.849 1.025 2.71 1.538 5.896 1.538 9.558z" /><path d="M66.896 23.705c0 3.662-.513 6.848-1.539 9.558-1.025 2.71-2.384 4.993-4.077 6.848-1.676 1.84-3.585 3.276-5.725 4.31-2.14 1.033-4.325 1.696-6.555 1.99v-2.198c3.076-.57 5.436-2.551 7.08-5.945 1.644-3.394 2.466-8.248 2.466-14.563 0-6.315-.822-11.17-2.466-14.563C54.436 5.75 52.076 3.767 49 3.197V1c2.23.293 4.415.956 6.555 1.99 2.14 1.033 4.049 2.47 5.725 4.309 1.693 1.855 3.052 4.138 4.077 6.848 1.026 2.71 1.539 5.896 1.539 9.558zm-66.113 0c0 3.662.513 6.848 1.538 9.558 1.026 2.71 2.385 4.993 4.077 6.848 1.677 1.84 3.585 3.276 5.726 4.31 2.14 1.033 4.325 1.696 6.555 1.99v-2.198c-3.076-.57-5.436-2.551-7.08-5.945-1.644-3.394-2.466-8.248-2.466-14.563 0-6.315.822-11.17 2.466-14.563 1.644-3.393 4.004-5.375 7.08-5.945V1c-2.23.293-4.415.956-6.555 1.99-2.14 1.033-4.05 2.47-5.726 4.309-1.692 1.855-3.051 4.138-4.077 6.848-1.025 2.71-1.538 5.896-1.538 9.558z" /><path d="M11.783 23.705c0 3.662.513 6.848 1.538 9.558 1.026 2.71 2.385 4.993 4.077 6.848 1.677 1.84 3.585 3.276 5.726 4.31 2.14 1.033 4.325 1.696 6.555 1.99v-2.198c-3.076-.57-5.436-2.551-7.08-5.945-1.644-3.394-2.466-8.248-2.466-14.563 0-6.315.822-11.17 2.466-14.563 1.644-3.393 4.004-5.375 7.08-5.945V1c-2.23.293-4.415.956-6.555 1.99-2.14 1.033-4.05 2.47-5.726 4.309-1.692 1.855-3.051 4.138-4.077 6.848-1.025 2.71-1.538 5.896-1.538 9.558z" /></g></svg></span>
              Nesting Conditions
      </h2>

            <p>You may nest conditions inside parenthesis <code>( )</code>
              to group them together.
This is most useful when combined with the <code>OR</code> keyword.</p>

            <p>Remember that terms that are <em>not</em> separated by <code>OR</code>
              are still combined.</p>

          </div>

          <div className="reference-block-examples">

            <a className="reference-example" href="/cards?q=t%3Alegendary+%28t%3Agoblin+or+t%3Aelf%29">
              <span className="reference-example-text">
                <code>t:legendary (t:goblin or t:elf)</code>
                <span>Legendary goblins or&nbsp;elves<p />
                </span>
              </span></a>

            <a className="reference-example" href="/cards?q=through+%28depths+or+sands+or+mists%29">
              <span className="reference-example-text">
                <code>through (depths or sands or mists)</code>
                <span>The Unspeakable&nbsp;combo<p />
                </span>
              </span></a>

          </div>

        </div>
      </div>
    </div>
  );
};