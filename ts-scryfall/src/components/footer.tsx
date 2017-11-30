import * as React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.StatelessComponent<{}> = () => {
    return (
            <footer id="footer" className="footer">
                <div className="inner-flex">

                    <div className="footer-column">
                        <h6>Find Cards</h6>
                        <ul>
                            <li><Link to={`/advanced`} className="footer-link" >Advanced Search</Link></li>
                            <li><Link to={`/reference`} className="footer-link" >Syntax Guide</Link></li>
                            <li><Link to={`/sets`} className="footer-link" >All Sets</Link></li>
                            <li><Link to={`/random`} className="footer-link" >Random Card</Link></li>
                            <li><Link to={`/deck`} className="footer-link" >Current Deck</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h6>Scryfall</h6>
                        <ul>
                            <li><a className="footer-link" href="/docs/contact">Contact Us</a></li>
                            <li><a className="footer-link" href="/docs/terms">Terms of Service</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h6>Developer</h6>
                        <ul>
                            <li><a className="footer-link" href="/docs/api">API Documentation</a></li>
                            <li><a className="footer-link" href="/changelog">Changelog</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h6>Support Us</h6>
                        <li>
                            <a className="footer-link"  href="https://www.patreon.com/scryfall">
                            Patreon&nbsp;&nbsp;<span className="new-pill">New</span>
                            </a>      
                        </li>
                        <li><a className="footer-link"  href="https://www.paypal.me/scryfall">PayPal</a></li>
                        <li><a className="footer-link"  href="https://cash.me/$scryfall">Square Cash</a></li>
                    </div>

                    <div className="footer-column">
                        <h6>Other Planes</h6>
                        <ul>
                            <li><a className="footer-link"  href="https://twitter.com/scryfall">Twitter</a></li>
                            <li><a className="footer-link"  href="https://www.reddit.com/user/Scryfall/">Reddit</a></li>
                            <li><a className="footer-link"  href="https://github.com/scryfall">GitHub</a></li>
                        </ul>
                    </div>

                    <div className="footer-legal">
                        <p>
                            The literal and graphical information presented on this site
                            about Magic: The Gathering, including card images, the mana symbols, and Oracle text,
                            is copyright Wizards of the Coast, LLC, a subsidiary of Hasbro, Inc.
                            This website is not produced by, endorsed by, supported by,
                            or affiliated with Wizards of the Coast.
                        </p>
                        <p>
                            The Slack logo and Slack API are copyright Slack Technologies, Inc.
                            The Discord logo and Discord API are copyright Discord, Inc.
                            This website is not created by, affiliated with, 
                            or supported by Slack Technologies and Discord.
                        </p>
                        <p>
                            Card prices represent daily averages and/or market values provided by Scryfall's affiliates.
                            Absolutely no guarantee is made for any price information.
                            See stores for final prices and availability.
                        </p>
                        <p>
                            Design is cloned from Scryfall and are copyright Some Assembly, LLC, DBA Scryfall
                        </p>
                    </div>

                </div>
            </footer>
    );
};