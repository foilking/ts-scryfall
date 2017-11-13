import * as React from 'react';

export const About: React.StatelessComponent<{}> = () => {
    return (
        <div className="reference-doc">
            <button className="reference-doc-menu-expander" data-component="reference-doc-menu-expander">
                <span>Help Pages <svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path fill="#5822AC" d="M27 9.375l-12 12.625-12-12.562 1.406-1.438 10.594 11.094 10.563-11.094z" /></svg>
                </span>
            </button>

            <div className="reference-doc-menu collapsed">

                <h6>Site Help</h6>

                <ul>
                    <li><a href="/reference"><svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M15 0c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15zm0 28c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zm-1-4h2v-4h-2v4zm1-18c-2.958 0-5.2 1.834-5.2 5h2c0-2.041 1.389-3 3.2-3 1.598 0 3 .935 3 2 0 3.281-4 2.656-4 8h2c-.146-4.063 4-3.646 4-8 0-2.209-2.238-4-5-4z" /></svg>
                        Syntax Guide</a></li>
                    <li><a href="/docs/regular-expressions"><svg aria-hidden="true" focusable="false" className="" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M14 30h2v-2.051c1.642-.125 3.193-.557 4.608-1.234l1.025 1.775 1.731-1-1.021-1.768c1.323-.908 2.47-2.055 3.378-3.377l1.768 1.02.999-1.731-1.775-1.024c.679-1.415 1.11-2.968 1.235-4.609h2.052v-2h-2.051c-.125-1.642-.557-3.193-1.235-4.608l1.776-1.025-1-1.732-1.768 1.021c-.908-1.322-2.055-2.469-3.377-3.377l1.021-1.768-1.732-1-1.025 1.775c-1.416-.68-2.967-1.111-4.609-1.236v-2.051h-2v2.051c-1.642.125-3.193.557-4.608 1.234l-1.026-1.775-1.732 1 1.021 1.768c-1.323.908-2.469 2.054-3.378 3.376l-1.767-1.02-1.001 1.731 1.777 1.026c-.679 1.416-1.11 2.967-1.235 4.609h-2.051v2h2.051c.125 1.642.557 3.193 1.235 4.608l-1.776 1.026 1 1.732 1.768-1.021c.908 1.322 2.055 2.469 3.377 3.377l-1.021 1.768 1.732 1 1.025-1.775c1.415.678 2.967 1.109 4.608 1.234v2.051zm1-4c-1.647 0-3.204-.372-4.606-1.021l3.544-6.139c.34.094.692.16 1.062.16 1.861 0 3.412-1.277 3.858-3h7.091c-.506 5.605-5.212 10-10.949 10zm0-13c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm10.949 1h-7.091c-.446-1.723-1.997-3-3.858-3-.37 0-.722.066-1.063.16l-3.544-6.139c1.403-.649 2.96-1.021 4.607-1.021 5.737 0 10.443 4.395 10.949 10zm-21.949 1c0-3.712 1.844-6.988 4.66-8.98l3.539 6.129c-.739.726-1.199 1.734-1.199 2.851s.46 2.125 1.199 2.852l-3.539 6.128c-2.816-1.992-4.66-5.268-4.66-8.98z" /></svg> Regular Expressions</a></li>
                    <li><a href="/docs/faqs"><svg aria-hidden="true" focusable="false" className="" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M16 1H4v28h22V11L16 1zm0 2.828L23.172 11H16V3.828zM24 27H6V3h8v10h10v14zM8 17h14v-2H8v2zm0 4h14v-2H8v2zm0 4h14v-2H8v2z" /></svg>
                        FAQs</a></li>
                    <li><a className="current" href="/docs/contact"><svg aria-hidden="true" focusable="false" className="" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M25 1H5C2.8 1 1 2.8 1 5v14c0 2.2 1.8 4 4 4h5l5 6 5-6h5c2.2 0 4-1.8 4-4V5c0-2.2-1.8-4-4-4zm2 18c0 1.103-.897 2-2 2h-5.937L15 25.876 10.937 21H5c-1.103 0-2-.897-2-2V5c0-1.103.897-2 2-2h20c1.103 0 2 .897 2 2v14z" /></svg>
                        Contact Us</a></li>
                </ul>

                <h6>Scryfall Resources</h6>

                <ul>
                    <li><a href="https://scryfall.com/docs/api"><svg aria-hidden="true" focusable="false" className="" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M11.625 4L0 15l11.625 11L13 24.563 2.906 15 13 5.438 11.625 4zm6.75 0L17 5.438 27.094 15 17 24.563 18.375 26 30 15 18.375 4z" /></svg>
                        API Reference</a></li>
                </ul>

            </div>

            <div className="reference-doc-content">
                <div className="prose">

                    <h1>Contact Us</h1>

                    <p>Want to ask a question? Need help? Weird issue? Got free burritos? We love hearing from everyone.</p>

                    <p>If you see a problem on a card page, then please use the hand-dandy <a href="/feedback" rel="nofollow noreferrer">Report Card Issue</a> button at the bottom of the page. If you’ve noticed other problems around the site or thought up some neat ideas to improve Scryfall, then please give us a shout using the <a href="/feedback" rel="nofollow noreferrer">feedback form</a>.</p>

                    <p>If you want to know how to get specific results, make sure you’ve looked over the <a href="/docs/syntax" rel="nofollow noreferrer">syntax guide</a> and the <a href="/docs/faqs" rel="nofollow noreferrer">FAQs</a> first.</p>

                    <p>Here’s how you can find us:</p>

                    <ul>
                        <li><a href="https://twitter.com/scryfall" rel="nofollow noreferrer">@scryfall on Twitter</a> — Mention us or send us a message. Our DMs are open.</li>
                        <li><a href="https://www.reddit.com/user/Scryfall/" rel="nofollow noreferrer">/u/Scryfall on Reddit</a> — Send us a message or mention us in a thread.</li>
                    </ul>

                    <h2 id="about-the-scryfall-team">About The Scryfall Team</h2>

                    <p>We’re a small group of <em>Magic: The Gathering</em> nerds.
We built Scryfall because we were frustrated with some of the other
<em>Magic</em> search tools on the web,
and we also wanted to give back to the community by providing
an <a href="/docs/api-methods" rel="nofollow noreferrer">extensive API</a> along with
<a href="/bots" rel="nofollow noreferrer">other software</a>.</p>

                    <p>This Scryfall clone is built by
<a href="https://twitter.com/foilking" rel="nofollow noreferrer">@foilking</a>.</p>

                    <p>I am not affiliated with Scryfall or Wizards of the Coast (but I love them).</p>

                </div>
            </div>
        </div>
    );
};