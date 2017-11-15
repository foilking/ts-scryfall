import * as React from 'react';
import { isNumber } from 'util';
// import Select from 'react-select';
// import { SearchTerms, SearchOrder } from '../../model';

enum Color {
   WHITE = 'w',
   BLUE = 'u',
   BLACK = 'b',
   RED = 'r',
   GREEN = 'g',
   COLORLESS = 'c'
}

interface AdvanceSearchProps {
}

interface AdvanceSearchState {
    name: string;
    oracle: string;
    type: string;
    allowPartialTypeMatch: boolean;
    colors: Color[];
    requiresMulticolored: boolean;
    excludeUnselectedColors: boolean;
    allowPartialColorMatch: boolean;
    mana: string;
    formats: string[];
    commanderIdentity: Color[];
    sets: string[];
    rarities: string[];
    artist: string;
    flavor: string;
    lore: string;
    display: string;
    order: string;
    showAllPrints: boolean;
    includeFunny: boolean;
}

export class AdvanceSearchPage extends React.Component<AdvanceSearchProps, AdvanceSearchState> {
    constructor(props: AdvanceSearchProps) {        
        super(props);
        document.title = 'Advance Search' + ' | TS Scryfall';

        this.state = {
            name: '',
            oracle: '',
            type: '',
            allowPartialTypeMatch: false,
            colors: [],
            requiresMulticolored: false,
            excludeUnselectedColors: false,
            allowPartialColorMatch: false,
            mana: '',
            formats: [],
            commanderIdentity: [],
            sets: [],
            rarities: [],
            artist: '',
            flavor: '',
            lore: '',
            display: '',
            order: '',
            showAllPrints: false,
            includeFunny: false
        };
    }

    public render() {
        return (
            <div className="form-layout advanced-search">
                <input name="utf8" value="✓" type="hidden" />
                <div className="inner-flex">
                    <div className="form-row">

                        <label className="form-row-label" htmlFor="name">
                            <svg aria-hidden="true" focusable="false" className="" width="33" height="24" viewBox="0 0 33 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="evenodd"><path d="M2.12 5V3c0-.55.45-1 1-1h26c.55 0 1 .45 1 1v2h-28zm0 3h28V6h-28v2zm28 13c0 .55-.45 1-1 1h-26c-.55 0-1-.45-1-1V9h28v12zm-1-21h-26c-1.66 0-3 1.34-3 3v18c0 1.66 1.34 3 3 3h26c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3z" /><path d="M17.121 18h10v-1h-10v1zm0-3h10v-1h-10v1zM5.12 21c.03-1.11.95-2 2.06-2h.44c.39 0 .75-.24.91-.6.16-.36.09-.79-.18-1.08-.75-.81-1.23-2.14-1.23-3.38 0-1.79.98-2.94 2.5-2.94s2.5 1.15 2.5 2.94c0 1.24-.48 2.57-1.23 3.38-.27.29-.34.72-.18 1.08.16.36.52.6.91.6h.44c1.11 0 2.03.89 2.06 2h.995a3.057 3.057 0 0 0-3.054-3h-.44c.91-.98 1.5-2.54 1.5-4.06 0-2.49-1.57-3.94-3.5-3.94s-3.5 1.45-3.5 3.94c0 1.52.59 3.08 1.5 4.06h-.44a3.057 3.057 0 0 0-3.054 3h.994-.001z" /></g></svg>
                            Card Name
                        </label>
                        <div className="form-row-content">
                            <div className="form-row-content-band">
                                <input name="name" id="name" className="form-input" placeholder="Any words in the name, e.g. “Fire”" type="text" value={this.state.name} onChange={event => this.onFieldChange(event.currentTarget.name, event.currentTarget.value)}  />
                            </div>
                        </div>

                    </div>
                    <div className="form-row">
                        <label className="form-row-label" htmlFor="oracle">
                            <svg aria-hidden="true" focusable="false" className="" width="29" height="32" viewBox="0 0 29 32" xmlns="http://www.w3.org/2000/svg"><g fillRule="evenodd"><path d="M23.12 29c1.1 0 2-.9 2-2V7h1v23h-22v-1h19zm-21-22h21v20h-21V7zm0-4c0-.55.45-1 1-1h22c.55 0 1 .45 1 1v3h-1V2l-2 4h-21V3zm2 29h22c1.1 0 2-.9 2-2V3c0-1.66-1.34-3-3-3h-22c-1.66 0-3 1.34-3 3v24c0 1.1.9 2 2 2v1c0 1.1.9 2 2 2z" /><path d="M4.121 11h17v-1h-17v1zm0 3h17v-1h-17v1zm0 3h17v-1h-17v1zm0 3h17v-1h-17v1z" /></g></svg>
                            Oracle Text
                        </label>
                        <div className="form-row-content">
                            <div className="form-row-content-band">
                                <input name="oracle" id="oracle" className="form-input" placeholder="Any Oracle text, e.g. “draw a card”" type="text" value={this.state.oracle} onChange={event => this.onFieldChange(event.currentTarget.name, event.currentTarget.value)} />
                                <select className="advanced-search-subjoiner" aria-hidden="true" onChange={event => this.onJoinerDropdownFieldChange('oracle', event.currentTarget.value)} value={''}>
                                    <option value="">Add symbol</option>
                                    <option value="{T}">{`{T}`} – tap this permanent</option>
                                    <option value="{Q}">{`{Q}`} – untap this permanent</option>
                                    <option value="{E}">{`{E}`} – an energy counter</option>
                                    <option value="{PW}">{`{PW}`} – planeswalker</option>
                                    <option value="{CHAOS}">{`{CHAOS}`} – chaos</option>
                                    <option value="{W}">{`{W}`} – one white mana</option>
                                    <option value="{U}">{`{U}`} – one blue mana</option>
                                    <option value="{B}">{`{B}`} – one black mana</option>
                                    <option value="{R}">{`{R}`} – one red mana</option>
                                    <option value="{G}">{`{G}`} – one green mana</option>
                                    <option value="{C}">{`{C}`} – one colorless mana</option>
                                    <option value="{X}">{`{X}`} – X generic mana</option>
                                    <option value="{0}">{'{0}'} – zero mana</option>
                                    <option value="{1}">{`{1}`} – one generic mana</option>
                                    <option value="{2}">{`{2}`} – two generic mana</option>
                                    <option value="{3}">{`{3}`} – three generic mana</option>
                                    <option value="{4}">{`{4}`} – four generic mana</option>
                                    <option value="{5}">{`{5}`} – five generic mana</option>
                                    <option value="{6}">{`{6}`} – six generic mana</option>
                                    <option value="{7}">{`{7}`} – seven generic mana</option>
                                    <option value="{8}">{`{8}`} – eight generic mana</option>
                                    <option value="{9}">{`{9}`} – nine generic mana</option>
                                    <option value="{10}">{`{10}`} – ten generic mana</option>
                                    <option value="{11}">{`{11}`} – eleven generic mana</option>
                                    <option value="{12}">{`{12}`} – twelve generic mana</option>
                                    <option value="{15}">{`{15}`} – fifteen generic mana</option>
                                    <option value="{16}">{`{16}`} – sixteen generic mana</option>
                                    <option value="{W/U}">{`{W/U}`} – one white or blue mana</option>
                                    <option value="{W/B}">{`{W/B}`} – one white or black mana</option>
                                    <option value="{B/R}">{`{B/R}`} – one black or red mana</option>
                                    <option value="{B/G}">{`{B/G}`} – one black or green mana</option>
                                    <option value="{U/B}">{`{U/B}`} – one blue or black mana</option>
                                    <option value="{U/R}">{`{U/R}`} – one blue or red mana</option>
                                    <option value="{R/G}">{`{R/G}`} – one red or green mana</option>
                                    <option value="{R/W}">{`{R/W}`} – one red or white mana</option>
                                    <option value="{G/W}">{`{G/W}`} – one green or white mana</option>
                                    <option value="{G/U}">{`{G/U}`} – one green or blue mana</option>
                                    <option value="{2/W}">{`{2/W}`} – two generic mana or one white mana</option>
                                    <option value="{2/U}">{`{2/U}`} – two generic mana or one blue mana</option>
                                    <option value="{2/B}">{`{2/B}`} – two generic mana or one black mana</option>
                                    <option value="{2/R}">{`{2/R}`} – two generic mana or one red mana</option>
                                    <option value="{2/G}">{`{2/G}`} – two generic mana or one green mana</option>
                                    <option value="{W/P}">{`{W/P}`} – one white mana or two life</option>
                                    <option value="{U/P}">{`{U/P}`} – one blue mana or two life</option>
                                    <option value="{B/P}">{`{B/P}`} – one black mana or two life</option>
                                    <option value="{R/P}">{`{R/P}`} – one red mana or two life</option>
                                    <option value="{G/P}">{`{G/P}`} – one green mana or two life</option>
                                </select>
                            </div>
                            <p className="form-row-tip">
                                Enter text that should appear in the rules box.
                                You can use ~ as a placeholder for the card name.
                                Word order&nbsp;doesn't&nbsp;matter.
                            </p>
                        </div>
                    </div>
                    <div className="form-row">

                        <label className="form-row-label" htmlFor="type">
                            <svg aria-hidden="true" focusable="false" className="" width="32" height="31" viewBox="0 0 32 31" xmlns="http://www.w3.org/2000/svg"><g fillRule="evenodd"><path d="M15.39 14.52c-.23-.5-.83-.71-1.33-.48-.5.24-.72.83-.48 1.33.68 1.46 1.86 4.11 2.99 6.93 1.13 2.83 2.23 5.85 2.75 7.99.14.54.68.87 1.22.73.53-.13.86-.67.73-1.21-.58-2.32-1.7-5.38-2.85-8.25-1.15-2.87-2.33-5.54-3.03-7.04" /><path d="M28.72 25.19c-2.24-6.88-6.07-15.03-6.12-15.15-1.55-3.28-4.86-5.39-8.47-5.39-1.39 0-2.75.31-4.01.91a9.366 9.366 0 0 0-4.8 5.35 9.36 9.36 0 0 0-.55 3.17c0 1.38.3 2.75.91 4.03 1.02 2.17 2.47 5.51 3.7 8.68a1.001 1.001 0 0 0 1.846.039 1 1 0 0 0 .014-.769c-1.25-3.22-2.71-6.58-3.75-8.8a7.385 7.385 0 0 1-.72-3.18c0-.84.14-1.68.43-2.5.67-1.87 2-3.36 3.78-4.21 1.01-.48 2.05-.72 3.15-.72 2.82 0 5.45 1.67 6.66 4.24.04.08 3.85 8.22 6.03 14.92a1 1 0 0 0 1.9-.62" /><path d="M30.86 20.78a.99.99 0 0 0 .58-1.29c-2.34-6.05-4.98-11.57-5.02-11.67v.01C24.14 3.06 19.25 0 13.93 0c-2.05 0-4.05.45-5.91 1.33-1.1.51-2.12 1.17-3.03 1.93a1 1 0 1 0 1.29 1.53A11.861 11.861 0 0 1 13.93 2c4.54 0 8.75 2.64 10.69 6.69v.01c.02.04 2.65 5.55 4.95 11.51.2.52.78.77 1.29.57m-29.4-1.2c.46.97 1 2.13 1.55 3.4.23.5.82.73 1.32.51.51-.22.74-.81.51-1.32-.56-1.28-1.1-2.46-1.57-3.45-.77-1.6-1.15-3.3-1.15-5.01a11.67 11.67 0 0 1 .91-4.5.997.997 0 0 0-.54-1.3.98.98 0 0 0-1.3.53c-.09.22-.18.44-.26.66-.54 1.5-.81 3.06-.81 4.61 0 2.01.45 4.01 1.34 5.87" /><path d="M19.14 12.38c-.83-1.85-2.63-3.08-4.63-3.08-.76 0-1.51.18-2.2.53-.8.4-1.47 1-1.96 1.74a.999.999 0 0 0 .27 1.39c.46.31 1.08.18 1.39-.28.31-.46.72-.82 1.2-1.07.43-.21.85-.31 1.3-.31 1.16-.01 2.28.72 2.8 1.9v-.01c.02.04.55 1.23 1.3 3.04.21.51.79.75 1.3.54.51-.21.76-.8.54-1.31-.76-1.82-1.29-3.03-1.31-3.08m5.33 17.88a.99.99 0 0 0 .74-1.2c-.56-2.4-1.53-5.28-2.54-7.98-.19-.52-.77-.78-1.29-.59-.51.2-.78.77-.58 1.29.99 2.66 1.94 5.49 2.47 7.74.12.53.66.87 1.2.74m-9.76-.8c.16.53.72.83 1.25.66.53-.16.82-.72.66-1.25-1.15-3.74-3.08-8.55-4.33-11.48-.22-.5-.81-.74-1.32-.52-.5.22-.74.8-.52 1.31 1.23 2.88 3.15 7.67 4.26 11.28" /></g></svg>
                            Type Line
                        </label>
                        <div className="form-row-content">
                            <div className="form-row-content-band">
                                <input name="type" id="type" className="form-input" placeholder="Enter any card types, e.g. “legendary”" type="text" value={this.state.type} onChange={event => this.onFieldChange(event.currentTarget.name, event.currentTarget.value)} />
                            </div>

                            <div className="form-row-content-band">
                                <label className="advanced-search-checkbox">
                                    <input name="allowPartialTypeMatch" id="allowPartialTypeMatch" checked={!!this.state.allowPartialTypeMatch} type="checkbox" onChange={event => this.onCheckboxChange(event.currentTarget.name, event.currentTarget.checked)} />
                                    Allow partial type matches
                                </label>
                            </div>
                            <p className="form-row-tip">
                                Enter any card type, supertype, or subtype to match, in any order.
                            Prefix a word with "-" to negate.
                            </p>
                        </div>

                    </div>
                    <div className="form-row">

                        <label className="form-row-label short">
                            <svg aria-hidden="true" focusable="false" className="" width="95" height="88" viewBox="0 0 95 88" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fillRule="evenodd"><path d="M47 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zm0-7c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM80 53c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zm0-7c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM65 88c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zm0-7c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM28 88c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zm0-7c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM15 54c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zm0-7c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" /></g></svg>
                            Colors
                        </label>
                        <div className="form-row-content">
                            <fieldset>
                                <div className="form-row-content-band">
                                    <legend className="visuallyhidden">Card colors</legend>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="colors" value={Color.WHITE} type="checkbox" onChange={event => this.onMulitCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        <abbr className="card-symbol card-symbol-W" title="one white mana">{`W`}</abbr>
                                        White
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="colors" value={Color.BLUE} type="checkbox" onChange={event => this.onMulitCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        <abbr className="card-symbol card-symbol-U" title="one blue mana">{`U`}</abbr>
                                        Blue
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="colors" value={Color.BLACK} type="checkbox" onChange={event => this.onMulitCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        <abbr className="card-symbol card-symbol-B" title="one black mana">{`B`}</abbr>
                                        Black
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="colors" value={Color.RED} type="checkbox" onChange={event => this.onMulitCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        <abbr className="card-symbol card-symbol-R" title="one red mana">{`R`}</abbr>
                                        Red
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="colors" value={Color.GREEN} type="checkbox" onChange={event => this.onMulitCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        <abbr className="card-symbol card-symbol-G" title="one green mana">{`G`}</abbr>
                                        Green
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="colors" value={Color.COLORLESS} type="checkbox" onChange={event => this.onMulitCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        <abbr className="card-symbol card-symbol-C" title="one colorless mana">{`C`}</abbr>
                                        Colorless
                                    </label>
                                </div>
                            </fieldset>

                            <fieldset>
                                <legend className="visuallyhidden">Additional color options</legend>
                                <div className="form-row-content-band">
                                    <label className="advanced-search-checkbox" htmlFor="colors_multicolored">
                                        <input name="requiresMulticolored" id="requiresMulticolored" checked={!!this.state.requiresMulticolored} type="checkbox" onChange={event => this.onCheckboxChange(event.currentTarget.name, event.currentTarget.checked)} />
                                        Require multicolored
                                    </label>
                                    <label className="advanced-search-checkbox" htmlFor="excludeUnselectedColors">
                                        <input name="excludeUnselectedColors" id="excludeUnselectedColors" checked={!!this.state.excludeUnselectedColors} type="checkbox" onChange={event => this.onCheckboxChange(event.currentTarget.name, event.currentTarget.checked)}  />
                                        Excluded unselected
                                    </label>
                                    <label className="advanced-search-checkbox" htmlFor="allowPartialColorMatch">
                                        <input name="allowPartialColorMatch" id="allowPartialColorMatch" checked={!!this.state.allowPartialColorMatch} type="checkbox" onChange={event => this.onCheckboxChange(event.currentTarget.name, event.currentTarget.checked)} />
                                        Allow partial matches
                                    </label>
                                </div>
                            </fieldset>

                            <p className="form-row-tip">
                                Select each color that the cards must be.
                            Allowing partial matches means that the card will be some of the colors
                            you selected but not necessarily all of them.
                            </p>

                        </div>
                    </div>
                    <div className="form-row">

                        <label className="form-row-label" htmlFor="mana">
                            <svg aria-hidden="true" focusable="false" className="" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M22 11c-2.393 0-4.534.66-6 1.7v-6.7c0-2.762-3.582-5-8-5s-8 2.238-8 5v16c0 2.762 3.582 5 8 5 2.512 0 4.751-.725 6.218-1.857.828 2.21 3.994 3.857 7.782 3.857 4.418 0 8-2.238 8-5v-8c0-2.762-3.582-5-8-5zm-14-8c3.434 0 6 1.584 6 3s-2.566 3-6 3-6-1.584-6-3 2.566-3 6-3zm-6 6.3c1.466 1.04 3.607 1.7 6 1.7s4.534-.66 6-1.7v.7c0 1.416-2.566 3-6 3s-6-1.584-6-3v-.7zm0 4c1.466 1.04 3.607 1.7 6 1.7s4.534-.66 6-1.7v.7c0 1.416-2.566 3-6 3s-6-1.584-6-3v-.7zm0 4c1.466 1.04 3.607 1.7 6 1.7s4.534-.66 6-1.7v.7c0 1.416-2.566 3-6 3s-6-1.584-6-3v-.7zm6 7.7c-3.434 0-6-1.584-6-3v-.7c1.466 1.04 3.607 1.7 6 1.7s4.534-.66 6-1.7v.7c0 1.416-2.566 3-6 3zm20-1c0 1.416-2.566 3-6 3s-6-1.584-6-3v-.7c1.466 1.04 3.607 1.7 6 1.7s4.534-.66 6-1.7v.7zm0-4c0 1.416-2.566 3-6 3s-6-1.584-6-3v-.7c1.466 1.04 3.607 1.7 6 1.7s4.534-.66 6-1.7v.7zm-6-1c-3.434 0-6-1.584-6-3s2.566-3 6-3 6 1.584 6 3-2.566 3-6 3z" /></svg>
                            Mana Cost
                        </label>
                        <div className="form-row-content">

                            <div className="form-row-content-band">
                                <input name="mana" id="mana" className="form-input short" placeholder="Any mana symbols, e.g. “{W}{W}”" type="text" value={this.state.mana} onChange={event => this.onFieldChange(event.currentTarget.name, event.currentTarget.value)} />
                                <select className="advanced-search-subjoiner" aria-hidden="true" onChange={event => this.onJoinerDropdownFieldChange('mana', event.currentTarget.value)} value={''}>
                                    <option value="">Add symbol</option>
                                    <option value="{W}">{'{W}'} – one white mana</option>
                                    <option value="{U}">{`{U}`} – one blue mana</option>
                                    <option value="{B}">{`{B}`} – one black mana</option>
                                    <option value="{R}">{`{R}`} – one red mana</option>
                                    <option value="{G}">{`{G}`} – one green mana</option>
                                    <option value="{C}">{`{C}`} – one colorless mana</option>
                                    <option value="{X}">{`{X}`} – X generic mana</option>
                                    <option value="{0}">{'{0}'} – zero mana</option>
                                    <option value="{1}">{`{1}`} – one generic mana</option>
                                    <option value="{2}">{`{2}`} – two generic mana</option>
                                    <option value="{3}">{`{3}`} – three generic mana</option>
                                    <option value="{4}">{`{4}`} – four generic mana</option>
                                    <option value="{5}">{`{5}`} – five generic mana</option>
                                    <option value="{6}">{`{6}`} – six generic mana</option>
                                    <option value="{7}">{`{7}`} – seven generic mana</option>
                                    <option value="{8}">{`{8}`} – eight generic mana</option>
                                    <option value="{9}">{`{9}`} – nine generic mana</option>
                                    <option value="{10}">{`{10}`} – ten generic mana</option>
                                    <option value="{11}">{`{11}`} – eleven generic mana</option>
                                    <option value="{12}">{`{12}`} – twelve generic mana</option>
                                    <option value="{15}">{`{15}`} – fifteen generic mana</option>
                                    <option value="{16}">{`{16}`} – sixteen generic mana</option>
                                    <option value="{W/U}">{`{W/U}`} – one white or blue mana</option>
                                    <option value="{W/B}">{`{W/B}`} – one white or black mana</option>
                                    <option value="{B/R}">{`{B/R}`} – one black or red mana</option>
                                    <option value="{B/G}">{`{B/G}`} – one black or green mana</option>
                                    <option value="{U/B}">{`{U/B}`} – one blue or black mana</option>
                                    <option value="{U/R}">{`{U/R}`} – one blue or red mana</option>
                                    <option value="{R/G}">{`{R/G}`} – one red or green mana</option>
                                    <option value="{R/W}">{`{R/W}`} – one red or white mana</option>
                                    <option value="{G/W}">{`{G/W}`} – one green or white mana</option>
                                    <option value="{G/U}">{`{G/U}`} – one green or blue mana</option>
                                    <option value="{2/W}">{`{2/W}`} – two generic mana or one white mana</option>
                                    <option value="{2/U}">{`{2/U}`} – two generic mana or one blue mana</option>
                                    <option value="{2/B}">{`{2/B}`} – two generic mana or one black mana</option>
                                    <option value="{2/R}">{`{2/R}`} – two generic mana or one red mana</option>
                                    <option value="{2/G}">{`{2/G}`} – two generic mana or one green mana</option>
                                    <option value="{W/P}">{`{W/P}`} – one white mana or two life</option>
                                    <option value="{U/P}">{`{U/P}`} – one blue mana or two life</option>
                                    <option value="{B/P}">{`{B/P}`} – one black mana or two life</option>
                                    <option value="{R/P}">{`{R/P}`} – one red mana or two life</option>
                                    <option value="{G/P}">{`{G/P}`} – one green mana or two life</option>
                                </select>
                            </div>

                            <p className="form-row-tip">
                                Enter symbols that should be in the mana cost. Combine with CMC to search this exact amount.
                            </p>

                        </div>

                    </div>
                    <div className="form-row">

                        <label className="form-row-label" htmlFor="stat_1">
                            <svg aria-hidden="true" focusable="false" className="" width="33" height="32" viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg"><path d="M3.12 21h15v5c0 .551-.45 1-1 1h-14c-.55 0-1-.449-1-1v-5h1zm0-19.001h14c.55 0 1 .45 1 1.001v16.342h-16V3c0-.551.45-1.001 1-1.001zM26.12 14h3c.55 0 1 .448 1 1v14c0 .552-.45 1-1 1h-23c-.55 0-1-.448-1-1h12c1.66 0 3-1.343 3-3V14h6zm-20 18h23c1.66 0 3-1.343 3-3V15a2.995 2.995 0 0 0-3-2.999h-9V3c0-1.656-1.34-3-3-3h-14c-1.66 0-3 1.344-3 3v23c0 1.657 1.34 3 3 3 0 1.657 1.34 3 3 3zM23.83 5.293l-1.42 1.414L24.706 9l2.415 2.414L29.537 9l2.294-2.293-1.42-1.414-2.29 2.292V5c0-2.761-2.24-5-5-5h-2v2h2c1.65 0 3 1.346 3 3v2.585l-2.29-2.292h-.001z" /></svg>
                            Stats
                        </label>
                        <div className="advanced-search-row-content js-advanced-search-duplicant">

                            <div className="form-row-content-band js-advanced-search-duplicant-template">
                                <label className="visuallyhidden" htmlFor="stat_1">Stat 1</label>
                                <select name="stat_1" id="stat_1" className="form-input auto">
                                    <option value="cmc">CMC</option>
                                    <option value="pow">Power</option>
                                    <option value="tou">Toughness</option>
                                    <option value="loy">Loyalty</option>
                                </select>
                                <label className="visuallyhidden" htmlFor="stat_1_mode">Stat 1 requirement</label>
                                <select name="stat_1_mode" id="stat_1_mode" className="form-input auto">
                                    <option value="=">equal to</option>
                                    <option value="<">less than</option>
                                    <option value=">">greater than</option>
                                    <option value="<=">less than or equal to</option>
                                    <option value=">=">greater than or equal to</option>
                                    <option value="!=">not equal to</option>
                                </select>
                                <label className="visuallyhidden" htmlFor="stat_1_value">Stat 1 value</label>
                                <input name="stat_1_value" id="stat_1_value" className="form-input auto" placeholder="Any value, e.g. “2”" pattern="d*" type="number" />
                            </div>

                            <p className="form-row-tip js-advanced-search-row-tip">
                                Restrict cards based on their numeric statistics. Cards without stats will not be returned.
                            </p>

                        </div>

                    </div>
                    <div className="form-row">
                        <label className="form-row-label short" htmlFor="colors">
                            <svg aria-hidden="true" focusable="false" className="" width="33" height="25" viewBox="0 0 33 25" xmlns="http://www.w3.org/2000/svg"><path d="M25.788 18H8.561l-1.996-6-.665-2-1-3h1.555l1 3 .666 2 1 3h17.222l.998 3h-1.553zm-.447 5.001H6.561L2.89 12h1.564l2.666 8h17.223l.998 3.001zM27.788 13H10.561l-.333-1-.668-2-1.001-3-.667-2-1.001-3h18.79l3.67 11h-1.563zM4.121 0l1.667 5H2.121l1.667 5H.121l5 15h23l-1.666-5h3.666l-1.666-5h3.666l-5-15h-23z" fillRule="evenodd" /></svg>
                            Formats
                        </label>
                        <div className="form-row-content">

                            <fieldset>
                                <legend className="visuallyhidden">Desired formats</legend>
                                <div className="form-row-content-band">
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="formats" value="standard" type="checkbox" onChange={event => this.onMulitCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        Standard
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="formats" value="frontier" type="checkbox" onChange={event => this.onMulitCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        Frontier
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="formats" value="modern" type="checkbox" onChange={event => this.onMulitCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        Modern
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="formats" value="legacy" type="checkbox" onChange={event => this.onMulitCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        Legacy
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="formats" value="commander" type="checkbox" onChange={event => this.onMulitCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        Commander
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="formats" value="vintage" type="checkbox" onChange={event => this.onMulitCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        Vintage
                                    </label>
                                </div>
                            </fieldset>

                            <fieldset>
                                <legend className="visuallyhidden">Additional desired formats</legend>
                                <div className="form-row-content-band">
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="formats" value="future" type="checkbox" onChange={event => this.onMulitCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        Future Standard
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="formats" value="pauper" type="checkbox" onChange={event => this.onMulitCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        Pauper
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="formats" value="penny" type="checkbox" onChange={event => this.onMulitCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        Penny
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="formats" value="1v1" type="checkbox" onChange={event => this.onMulitCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        1v1 Cmdr.
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="formats" value="duel" type="checkbox" onChange={event => this.onMulitCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        Duel Cmdr.
                                    </label>
                                </div>
                            </fieldset>

                            <p className="form-row-tip">
                                Only return cards legal in all of the selected formats.
                                Future Standard lets you brew using the upcoming standard additions/rotations.
                            </p>

                        </div>

                    </div>
                    <div className="form-row">

                        <label className="form-row-label short">
                            <svg aria-hidden="true" focusable="false" className="" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M15 0c-1 3-10 7-14 6 0 9 5 21 14 24 9-3 14-15 14-24-4 1-13-3-14-6zm0 27.871c-6.811-2.716-11.218-11.796-11.906-19.737 3.534-.235 8.961-2.25 11.906-4.888 2.944 2.638 8.372 4.654 11.906 4.888-.688 7.941-5.095 17.021-11.906 19.737z" /></svg>
                            Commander
                        </label>
                        <div className="form-row-content">

                            <fieldset>
                                <legend className="visuallyhidden">Commander colors</legend>
                                <div className="form-row-content-band">
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="commanderIdentity" id="false" value={Color.WHITE} type="checkbox" onChange={event => this.onMulitCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        <abbr className="card-symbol card-symbol-W" title="one white mana">{`W`}</abbr>
                                        White
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="commanderIdentity" id="false" value={Color.BLUE} type="checkbox" onChange={event => this.onMulitCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        <abbr className="card-symbol card-symbol-U" title="one blue mana">{`U`}</abbr>
                                        Blue
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="commanderIdentity" id="false" value={Color.BLACK} type="checkbox" onChange={event => this.onMulitCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        <abbr className="card-symbol card-symbol-B" title="one black mana">{`B`}</abbr>
                                        Black
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="commanderIdentity" id="false" value={Color.RED} type="checkbox" onChange={event => this.onMulitCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        <abbr className="card-symbol card-symbol-R" title="one red mana">{`R`}</abbr>
                                        Red
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="commanderIdentity" id="false" value={Color.GREEN} type="checkbox" onChange={event => this.onMulitCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        <abbr className="card-symbol card-symbol-G" title="one green mana">{`G`}</abbr>
                                        Green
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="commanderIdentity" id="false" value={Color.COLORLESS} type="checkbox" onChange={event => this.onMulitCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        <abbr className="card-symbol card-symbol-C" title="one colorless mana">{`C`}</abbr>
                                        Colorless
                                    </label>
                                </div>
                            </fieldset>

                            <p className="form-row-tip">
                                Select your commanders’ color identity, and only cards that
                            fit in your deck will be returned.
                            </p>

                        </div>

                    </div>
                    <div className="form-row">

                        <label className="form-row-label" htmlFor="set">
                            <svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30"><path d="M15 2C11.704 7.789 9.287 15.983 0 8l4 12v8h22v-8l4-12c-9.287 7.983-11.704-.211-15-6zM6 26v-4h18v4H6zm18-6.324V20H6v-.324l-2.32-6.962c5.055 1.849 8.383-.683 11.32-6.475 2.938 5.792 6.266 8.323 11.32 6.475L24 19.676z" /></svg>
                            Sets
                        </label>
                        <div className="form-row-content">

                            <div className="form-row-content-band">
                                <input name="sets" defaultValue={this.state.sets.join(',')} type="hidden" />
                                <select name="sets" id="set" data-component="advanced-search-autocomplete" data-placeholder="Enter a set name or choose from the list" tabIndex={-1} className="select2-hidden-accessible" aria-hidden="true" onChange={event => this.onMulitCheckboxChange(event.currentTarget.name, event.currentTarget.value)} >
                                    <option value="p15a">15th Anniversary Cards (P15A)</option>
                                    <option value="htr">2016 Heroes of the Realm (HTR)</option>
                                    <option value="aer">Aether Revolt (AER)</option>
                                    <option value="paer">Aether Revolt Promos (PAER)</option>
                                    <option value="taer">Aether Revolt Tokens (TAER)</option>
                                    <option value="arb">Alara Reborn (ARB)</option>
                                    <option value="tarb">Alara Reborn Tokens (TARB)</option>
                                    <option value="all">Alliances (ALL)</option>
                                    <option value="akh">Amonkhet (AKH)</option>
                                    <option value="mp2">Amonkhet Invocations (MP2)</option>
                                    <option value="pakh">Amonkhet Promos (PAKH)</option>
                                    <option value="takh">Amonkhet Tokens (TAKH)</option>
                                    <option value="ath">Anthologies (ATH)</option>
                                    <option value="atq">Antiquities (ATQ)</option>
                                    <option value="apc">Apocalypse (APC)</option>
                                    <option value="arn">Arabian Nights (ARN)</option>
                                    <option value="arc">Archenemy (ARC)</option>
                                    <option value="e01">Archenemy: Nicol Bolas (E01)</option>
                                    <option value="te01">Archenemy: Nicol Bolas Tokens (TE01)</option>
                                    <option value="parl">Arena League 1996 (PARL)</option>
                                    <option value="pal99">Arena League 1999 (PAL99)</option>
                                    <option value="pal00">Arena League 2000 (PAL00)</option>
                                    <option value="pal01">Arena League 2001 (PAL01)</option>
                                    <option value="pal02">Arena League 2002 (PAL02)</option>
                                    <option value="pal03">Arena League 2003 (PAL03)</option>
                                    <option value="pal04">Arena League 2004 (PAL04)</option>
                                    <option value="pal05">Arena League 2005 (PAL05)</option>
                                    <option value="pal06">Arena League 2006 (PAL06)</option>
                                    <option value="palp">Asia Pacific Land Program (PALP)</option>
                                    <option value="avr">Avacyn Restored (AVR)</option>
                                    <option value="pavr">Avacyn Restored Promos (PAVR)</option>
                                    <option value="tavr">Avacyn Restored Tokens (TAVR)</option>
                                    <option value="bfz">Battle for Zendikar (BFZ)</option>
                                    <option value="pbfz">Battle for Zendikar Promos (PBFZ)</option>
                                    <option value="tbfz">Battle for Zendikar Tokens (TBFZ)</option>
                                    <option value="brb">Battle Royale Box Set (BRB)</option>
                                    <option value="tbth">Battle the Horde (TBTH)</option>
                                    <option value="btd">Beatdown Box Set (BTD)</option>
                                    <option value="bok">Betrayers of Kamigawa (BOK)</option>
                                    <option value="pss1">BFZ Standard Series (PSS1)</option>
                                    <option value="bng">Born of the Gods (BNG)</option>
                                    <option value="thp2">Born of the Gods Hero's Path (THP2)</option>
                                    <option value="pbng">Born of the Gods Promos (PBNG)</option>
                                    <option value="tbng">Born of the Gods Tokens (TBNG)</option>
                                    <option value="pcel">Celebration Cards (PCEL)</option>
                                    <option value="chk">Champions of Kamigawa (CHK)</option>
                                    <option value="pcmp">Champs and States (PCMP)</option>
                                    <option value="chr">Chronicles (CHR)</option>
                                    <option value="6ed">Classic Sixth Edition (6ED)</option>
                                    <option value="csp">Coldsnap (CSP)</option>
                                    <option value="cst">Coldsnap Theme Decks (CST)</option>
                                    <option value="tcsp">Coldsnap Tokens (TCSP)</option>
                                    <option value="ced">Collector’s Edition (CED)</option>
                                    <option value="cmd">Commander 2011 (CMD)</option>
                                    <option value="c13">Commander 2013 (C13)</option>
                                    <option value="tc13">Commander 2013 Tokens (TC13)</option>
                                    <option value="c14">Commander 2014 (C14)</option>
                                    <option value="tc14">Commander 2014 Tokens (TC14)</option>
                                    <option value="c15">Commander 2015 (C15)</option>
                                    <option value="tc15">Commander 2015 Tokens (TC15)</option>
                                    <option value="c16">Commander 2016 (C16)</option>
                                    <option value="tc16">Commander 2016 Tokens (TC16)</option>
                                    <option value="c17">Commander 2017 (C17)</option>
                                    <option value="tc17">Commander 2017 Tokens (TC17)</option>
                                    <option value="cma">Commander Anthology (CMA)</option>
                                    <option value="cm1">Commander's Arsenal (CM1)</option>
                                    <option value="con">Conflux (CON)</option>
                                    <option value="tcon">Conflux Tokens (TCON)</option>
                                    <option value="cns">Conspiracy (CNS)</option>
                                    <option value="cn2">Conspiracy: Take the Crown (CN2)</option>
                                    <option value="tcn2">Conspiracy: Take the Crown Tokens (TCN2)</option>
                                    <option value="tcns">Conspiracy Tokens (TCNS)</option>
                                    <option value="dka">Dark Ascension (DKA)</option>
                                    <option value="pdka">Dark Ascension Promos (PDKA)</option>
                                    <option value="tdka">Dark Ascension Tokens (TDKA)</option>
                                    <option value="dst">Darksteel (DST)</option>
                                    <option value="plgm">DCI Legend Membership (PLGM)</option>
                                    <option value="dkm">Deckmasters (DKM)</option>
                                    <option value="tdag">Defeat a God (TDAG)</option>
                                    <option value="dis">Dissension (DIS)</option>
                                    <option value="pdrc">Dragon Con (PDRC)</option>
                                    <option value="dgm">Dragon's Maze (DGM)</option>
                                    <option value="pdgm">Dragon's Maze Promos (PDGM)</option>
                                    <option value="tdgm">Dragon's Maze Tokens (TDGM)</option>
                                    <option value="dtk">Dragons of Tarkir (DTK)</option>
                                    <option value="pdtk">Dragons of Tarkir Promos (PDTK)</option>
                                    <option value="tdtk">Dragons of Tarkir Tokens (TDTK)</option>
                                    <option value="ddh">Duel Decks: Ajani vs. Nicol Bolas (DDH)</option>
                                    <option value="tddh">Duel Decks: Ajani vs. Nicol Bolas Tokens (TDDH)</option>
                                    <option value="dvd">Duel Decks Anthology: Divine vs. Demonic (DVD)</option>
                                    <option value="evg">Duel Decks Anthology: Elves vs. Goblins (EVG)</option>
                                    <option value="tevg">Duel Decks Anthology: Elves vs. Goblins Tokens (TEVG)</option>
                                    <option value="gvl">Duel Decks Anthology: Garruk vs. Liliana (GVL)</option>
                                    <option value="jvc">Duel Decks Anthology: Jace vs. Chandra (JVC)</option>
                                    <option value="ddq">Duel Decks: Blessed vs. Cursed (DDQ)</option>
                                    <option value="ddc">Duel Decks: Divine vs. Demonic (DDC)</option>
                                    <option value="tddc">Duel Decks: Divine vs. Demonic Tokens (TDDC)</option>
                                    <option value="ddo">Duel Decks: Elspeth vs. Kiora (DDO)</option>
                                    <option value="ddf">Duel Decks: Elspeth vs. Tezzeret (DDF)</option>
                                    <option value="tddf">Duel Decks: Elspeth vs. Tezzeret Tokens (TDDF)</option>
                                    <option value="dd1">Duel Decks: Elves vs. Goblins (DD1)</option>
                                    <option value="ddd">Duel Decks: Garruk vs. Liliana (DDD)</option>
                                    <option value="tddd">Duel Decks: Garruk vs. Liliana Tokens (TDDD)</option>
                                    <option value="ddl">Duel Decks: Heroes vs. Monsters (DDL)</option>
                                    <option value="tddl">Duel Decks: Heroes vs. Monsters Tokens (TDDL)</option>
                                    <option value="ddj">Duel Decks: Izzet vs. Golgari (DDJ)</option>
                                    <option value="tddj">Duel Decks: Izzet vs. Golgari Tokens (TDDJ)</option>
                                    <option value="dd2">Duel Decks: Jace vs. Chandra (DD2)</option>
                                    <option value="pdd2">Duel Decks: Jace vs. Chandra Japanese Promos (PDD2)</option>
                                    <option value="tdd2">Duel Decks: Jace vs. Chandra Tokens (TDD2)</option>
                                    <option value="ddm">Duel Decks: Jace vs. Vraska (DDM)</option>
                                    <option value="tddm">Duel Decks: Jace vs. Vraska Tokens (TDDM)</option>
                                    <option value="ddg">Duel Decks: Knights vs. Dragons (DDG)</option>
                                    <option value="tddg">Duel Decks: Knights vs. Dragons Tokens (TDDG)</option>
                                    <option value="ddt">Duel Decks: Merfolk vs. Goblins (DDT)</option>
                                    <option value="dds">Duel Decks: Mind vs. Might (DDS)</option>
                                    <option value="tdds">Duel Decks: Mind vs. Might Tokens (TDDS)</option>
                                    <option value="td2">Duel Decks: Mirrodin Pure vs. New Phyrexia (TD2)</option>
                                    <option value="ddr">Duel Decks: Nissa vs. Ob Nixilis (DDR)</option>
                                    <option value="dde">Duel Decks: Phyrexia vs. the Coalition (DDE)</option>
                                    <option value="tdde">Duel Decks: Phyrexia vs. the Coalition Tokens (TDDE)</option>
                                    <option value="ddk">Duel Decks: Sorin vs. Tibalt (DDK)</option>
                                    <option value="tddk">Duel Decks: Sorin vs. Tibalt Tokens (TDDK)</option>
                                    <option value="ddn">Duel Decks: Speed vs. Cunning (DDN)</option>
                                    <option value="tddn">Duel Decks: Speed vs. Cunning Tokens (TDDN)</option>
                                    <option value="ddi">Duel Decks: Venser vs. Koth (DDI)</option>
                                    <option value="tddi">Duel Decks: Venser vs. Koth Tokens (TDDI)</option>
                                    <option value="ddp">Duel Decks: Zendikar vs. Eldrazi (DDP)</option>
                                    <option value="dpa">Duels of the Planeswalkers (DPA)</option>
                                    <option value="pdtp">Duels of the Planeswalkers Promos 2009 (PDTP)</option>
                                    <option value="pdp10">Duels of the Planeswalkers Promos 2010 (PDP10)</option>
                                    <option value="pdp11">Duels of the Planeswalkers Promos 2011 (PDP11)</option>
                                    <option value="pdp12">Duels of the Planeswalkers Promos 2012 (PDP12)</option>
                                    <option value="pdp13">Duels of the Planeswalkers Promos 2013 (PDP13)</option>
                                    <option value="pdp14">Duels of the Planeswalkers Promos 2014 (PDP14)</option>
                                    <option value="8ed">Eighth Edition (8ED)</option>
                                    <option value="emn">Eldritch Moon (EMN)</option>
                                    <option value="pemn">Eldritch Moon Promos (PEMN)</option>
                                    <option value="temn">Eldritch Moon Tokens (TEMN)</option>
                                    <option value="ema">Eternal Masters (EMA)</option>
                                    <option value="tema">Eternal Masters Tokens (TEMA)</option>
                                    <option value="pelp">European Land Program (PELP)</option>
                                    <option value="eve">Eventide (EVE)</option>
                                    <option value="teve">Eventide Tokens (TEVE)</option>
                                    <option value="exo">Exodus (EXO)</option>
                                    <option value="e02">Explorers of Ixalan (E02)</option>
                                    <option value="tfth">Face the Hydra (TFTH)</option>
                                    <option value="fem">Fallen Empires (FEM)</option>
                                    <option value="frf">Fate Reforged (FRF)</option>
                                    <option value="cp2">Fate Reforged Clash Pack (CP2)</option>
                                    <option value="pfrf">Fate Reforged Promos (PFRF)</option>
                                    <option value="tfrf">Fate Reforged Tokens (TFRF)</option>
                                    <option value="5dn">Fifth Dawn (5DN)</option>
                                    <option value="5ed">Fifth Edition (5ED)</option>
                                    <option value="4ed">Fourth Edition (4ED)</option>
                                    <option value="fnm">Friday Night Magic 2000 (FNM)</option>
                                    <option value="f01">Friday Night Magic 2001 (F01)</option>
                                    <option value="f02">Friday Night Magic 2002 (F02)</option>
                                    <option value="f03">Friday Night Magic 2003 (F03)</option>
                                    <option value="f04">Friday Night Magic 2004 (F04)</option>
                                    <option value="f05">Friday Night Magic 2005 (F05)</option>
                                    <option value="f06">Friday Night Magic 2006 (F06)</option>
                                    <option value="f07">Friday Night Magic 2007 (F07)</option>
                                    <option value="f08">Friday Night Magic 2008 (F08)</option>
                                    <option value="f09">Friday Night Magic 2009 (F09)</option>
                                    <option value="f10">Friday Night Magic 2010 (F10)</option>
                                    <option value="f11">Friday Night Magic 2011 (F11)</option>
                                    <option value="f12">Friday Night Magic 2012 (F12)</option>
                                    <option value="f13">Friday Night Magic 2013 (F13)</option>
                                    <option value="f14">Friday Night Magic 2014 (F14)</option>
                                    <option value="f15">Friday Night Magic 2015 (F15)</option>
                                    <option value="f16">Friday Night Magic 2016 (F16)</option>
                                    <option value="f17">Friday Night Magic 2017 (F17)</option>
                                    <option value="v15">From the Vault: Angels (V15)</option>
                                    <option value="v14">From the Vault: Annihilation (V14)</option>
                                    <option value="drb">From the Vault: Dragons (DRB)</option>
                                    <option value="v09">From the Vault: Exiled (V09)</option>
                                    <option value="v11">From the Vault: Legends (V11)</option>
                                    <option value="v16">From the Vault: Lore (V16)</option>
                                    <option value="v12">From the Vault: Realms (V12)</option>
                                    <option value="v10">From the Vault: Relics (V10)</option>
                                    <option value="v13">From the Vault: Twenty (V13)</option>
                                    <option value="fut">Future Sight (FUT)</option>
                                    <option value="gtc">Gatecrash (GTC)</option>
                                    <option value="pgtc">Gatecrash Promos (PGTC)</option>
                                    <option value="tgtc">Gatecrash Tokens (TGTC)</option>
                                    <option value="pgtw">Gateway 2006 (PGTW)</option>
                                    <option value="pg07">Gateway 2007 (PG07)</option>
                                    <option value="pg08">Gateway 2008 (PG08)</option>
                                    <option value="pgpx">Grand Prix Promos (PGPX)</option>
                                    <option value="gpt">Guildpact (GPT)</option>
                                    <option value="pgru">Guru (PGRU)</option>
                                    <option value="phuk">Hachette UK (PHUK)</option>
                                    <option value="hho">Happy Holidays (HHO)</option>
                                    <option value="phpr">HarperPrism Book Promos (PHPR)</option>
                                    <option value="h17">HasCon 2017 (H17)</option>
                                    <option value="hml">Homelands (HML)</option>
                                    <option value="hou">Hour of Devastation (HOU)</option>
                                    <option value="phou">Hour of Devastation Promos (PHOU)</option>
                                    <option value="thou">Hour of Devastation Tokens (THOU)</option>
                                    <option value="ice">Ice Age (ICE)</option>
                                    <option value="ima">Iconic Masters (IMA)</option>
                                    <option value="pidw">IDW Comics 2012 (PIDW)</option>
                                    <option value="pi13">IDW Comics 2013 (PI13)</option>
                                    <option value="pi14">IDW Comics 2014 (PI14)</option>
                                    <option value="isd">Innistrad (ISD)</option>
                                    <option value="pisd">Innistrad Promos (PISD)</option>
                                    <option value="tisd">Innistrad Tokens (TISD)</option>
                                    <option value="cei">Intl. Collector’s Edition (CEI)</option>
                                    <option value="itp">Introductory Two-Player Set (ITP)</option>
                                    <option value="inv">Invasion (INV)</option>
                                    <option value="xln">Ixalan (XLN)</option>
                                    <option value="pxln">Ixalan Promos (PXLN)</option>
                                    <option value="txln">Ixalan Tokens (TXLN)</option>
                                    <option value="jou">Journey into Nyx (JOU)</option>
                                    <option value="thp3">Journey into Nyx Hero's Path (THP3)</option>
                                    <option value="pjou">Journey into Nyx Promos (PJOU)</option>
                                    <option value="tjou">Journey into Nyx Tokens (TJOU)</option>
                                    <option value="jgp">Judge Gift Cards 1998 (JGP)</option>
                                    <option value="g99">Judge Gift Cards 1999 (G99)</option>
                                    <option value="g00">Judge Gift Cards 2000 (G00)</option>
                                    <option value="g01">Judge Gift Cards 2001 (G01)</option>
                                    <option value="g02">Judge Gift Cards 2002 (G02)</option>
                                    <option value="g03">Judge Gift Cards 2003 (G03)</option>
                                    <option value="g04">Judge Gift Cards 2004 (G04)</option>
                                    <option value="g05">Judge Gift Cards 2005 (G05)</option>
                                    <option value="g06">Judge Gift Cards 2006 (G06)</option>
                                    <option value="g07">Judge Gift Cards 2007 (G07)</option>
                                    <option value="g08">Judge Gift Cards 2008 (G08)</option>
                                    <option value="g09">Judge Gift Cards 2009 (G09)</option>
                                    <option value="g10">Judge Gift Cards 2010 (G10)</option>
                                    <option value="g11">Judge Gift Cards 2011 (G11)</option>
                                    <option value="j12">Judge Gift Cards 2012 (J12)</option>
                                    <option value="j13">Judge Gift Cards 2013 (J13)</option>
                                    <option value="j14">Judge Gift Cards 2014 (J14)</option>
                                    <option value="j15">Judge Gift Cards 2015 (J15)</option>
                                    <option value="j16">Judge Gift Cards 2016 (J16)</option>
                                    <option value="j17">Judge Gift Cards 2017 (J17)</option>
                                    <option value="jud">Judgment (JUD)</option>
                                    <option value="pjas">Junior APAC Series (PJAS)</option>
                                    <option value="pjse">Junior Series Europe (PJSE)</option>
                                    <option value="psus">Junior Super Series (PSUS)</option>
                                    <option value="kld">Kaladesh (KLD)</option>
                                    <option value="mps">Kaladesh Inventions (MPS)</option>
                                    <option value="pkld">Kaladesh Promos (PKLD)</option>
                                    <option value="tkld">Kaladesh Tokens (TKLD)</option>
                                    <option value="ktk">Khans of Tarkir (KTK)</option>
                                    <option value="pktk">Khans of Tarkir Promos (PKTK)</option>
                                    <option value="tktk">Khans of Tarkir Tokens (TKTK)</option>
                                    <option value="plpa">Launch Parties (PLPA)</option>
                                    <option value="ltk">League Tokens (LTK)</option>
                                    <option value="l12">League Tokens 2012 (L12)</option>
                                    <option value="l13">League Tokens 2013 (L13)</option>
                                    <option value="l14">League Tokens 2014 (L14)</option>
                                    <option value="l15">League Tokens 2015 (L15)</option>
                                    <option value="l16">League Tokens 2016 (L16)</option>
                                    <option value="l17">League Tokens 2017 (L17)</option>
                                    <option value="pz1">Legendary Cube (PZ1)</option>
                                    <option value="leg">Legends (LEG)</option>
                                    <option value="lgn">Legions (LGN)</option>
                                    <option value="lea">Limited Edition Alpha (LEA)</option>
                                    <option value="leb">Limited Edition Beta (LEB)</option>
                                    <option value="lrw">Lorwyn (LRW)</option>
                                    <option value="tlrw">Lorwyn Tokens (TLRW)</option>
                                    <option value="pmei">Magazine Inserts (PMEI)</option>
                                    <option value="m10">Magic 2010 (M10)</option>
                                    <option value="pm10">Magic 2010 Promos (PM10)</option>
                                    <option value="tm10">Magic 2010 Tokens (TM10)</option>
                                    <option value="m11">Magic 2011 (M11)</option>
                                    <option value="pm11">Magic 2011 Promos (PM11)</option>
                                    <option value="tm11">Magic 2011 Tokens (TM11)</option>
                                    <option value="m12">Magic 2012 (M12)</option>
                                    <option value="pm12">Magic 2012 Promos (PM12)</option>
                                    <option value="tm12">Magic 2012 Tokens (TM12)</option>
                                    <option value="m13">Magic 2013 (M13)</option>
                                    <option value="pm13">Magic 2013 Promos (PM13)</option>
                                    <option value="tm13">Magic 2013 Tokens (TM13)</option>
                                    <option value="m14">Magic 2014 (M14)</option>
                                    <option value="pm14">Magic 2014 Promos (PM14)</option>
                                    <option value="tm14">Magic 2014 Tokens (TM14)</option>
                                    <option value="m15">Magic 2015 (M15)</option>
                                    <option value="cp1">Magic 2015 Clash Pack (CP1)</option>
                                    <option value="pm15">Magic 2015 Promos (PM15)</option>
                                    <option value="tm15">Magic 2015 Tokens (TM15)</option>
                                    <option value="prm">Magic Online Promos (PRM)</option>
                                    <option value="td0">Magic Online Theme Decks (TD0)</option>
                                    <option value="ori">Magic Origins (ORI)</option>
                                    <option value="cp3">Magic Origins Clash Pack (CP3)</option>
                                    <option value="pori">Magic Origins Promos (PORI)</option>
                                    <option value="tori">Magic Origins Tokens (TORI)</option>
                                    <option value="mpr">Magic Player Rewards 2001 (MPR)</option>
                                    <option value="pr2">Magic Player Rewards 2002 (PR2)</option>
                                    <option value="p03">Magic Player Rewards 2003 (P03)</option>
                                    <option value="p04">Magic Player Rewards 2004 (P04)</option>
                                    <option value="p05">Magic Player Rewards 2005 (P05)</option>
                                    <option value="p06">Magic Player Rewards 2006 (P06)</option>
                                    <option value="p07">Magic Player Rewards 2007 (P07)</option>
                                    <option value="p08">Magic Player Rewards 2008 (P08)</option>
                                    <option value="p09">Magic Player Rewards 2009 (P09)</option>
                                    <option value="p10">Magic Player Rewards 2010 (P10)</option>
                                    <option value="p11">Magic Player Rewards 2011 (P11)</option>
                                    <option value="pmps">Magic Premiere Shop 2005 (PMPS)</option>
                                    <option value="pmps06">Magic Premiere Shop 2006 (PMPS06)</option>
                                    <option value="pmps07">Magic Premiere Shop 2007 (PMPS07)</option>
                                    <option value="pmps08">Magic Premiere Shop 2008 (PMPS08)</option>
                                    <option value="pmps09">Magic Premiere Shop 2009 (PMPS09)</option>
                                    <option value="pmps10">Magic Premiere Shop 2010 (PMPS10)</option>
                                    <option value="pmps11">Magic Premiere Shop 2011 (PMPS11)</option>
                                    <option value="med">Masters Edition (MED)</option>
                                    <option value="me2">Masters Edition II (ME2)</option>
                                    <option value="me3">Masters Edition III (ME3)</option>
                                    <option value="me4">Masters Edition IV (ME4)</option>
                                    <option value="mmq">Mercadian Masques (MMQ)</option>
                                    <option value="mir">Mirage (MIR)</option>
                                    <option value="mrd">Mirrodin (MRD)</option>
                                    <option value="mbs">Mirrodin Besieged (MBS)</option>
                                    <option value="pmbs">Mirrodin Besieged Promos (PMBS)</option>
                                    <option value="tmbs">Mirrodin Besieged Tokens (TMBS)</option>
                                    <option value="pbok">Miscellaneous Book Promos (PBOK)</option>
                                    <option value="md1">Modern Event Deck 2014 (MD1)</option>
                                    <option value="tmd1">Modern Event Deck 2014 Tokens (TMD1)</option>
                                    <option value="mma">Modern Masters (MMA)</option>
                                    <option value="mm2">Modern Masters 2015 (MM2)</option>
                                    <option value="tmm2">Modern Masters 2015 Tokens (TMM2)</option>
                                    <option value="mm3">Modern Masters 2017 (MM3)</option>
                                    <option value="tmm3">Modern Masters 2017 Tokens (TMM3)</option>
                                    <option value="tmma">Modern Masters Tokens (TMMA)</option>
                                    <option value="mor">Morningtide (MOR)</option>
                                    <option value="tmor">Morningtide Tokens (TMOR)</option>
                                    <option value="mgb">Multiverse Gift Box (MGB)</option>
                                    <option value="nem">Nemesis (NEM)</option>
                                    <option value="nph">New Phyrexia (NPH)</option>
                                    <option value="pnph">New Phyrexia Promos (PNPH)</option>
                                    <option value="tnph">New Phyrexia Tokens (TNPH)</option>
                                    <option value="9ed">Ninth Edition (9ED)</option>
                                    <option value="ogw">Oath of the Gatewatch (OGW)</option>
                                    <option value="pogw">Oath of the Gatewatch Promos (POGW)</option>
                                    <option value="togw">Oath of the Gatewatch Tokens (TOGW)</option>
                                    <option value="ody">Odyssey (ODY)</option>
                                    <option value="ons">Onslaught (ONS)</option>
                                    <option value="plc">Planar Chaos (PLC)</option>
                                    <option value="hop">Planechase (HOP)</option>
                                    <option value="pc2">Planechase 2012 (PC2)</option>
                                    <option value="pca">Planechase Anthology (PCA)</option>
                                    <option value="tpca">Planechase Anthology Tokens (TPCA)</option>
                                    <option value="pls">Planeshift (PLS)</option>
                                    <option value="por">Portal (POR)</option>
                                    <option value="ppod">Portal Demo Game (PPOD)</option>
                                    <option value="p02">Portal: Second Age (P02)</option>
                                    <option value="ptk">Portal: Three Kingdoms (PTK)</option>
                                    <option value="pd2">Premium Deck Series: Fire and Lightning (PD2)</option>
                                    <option value="pd3">Premium Deck Series: Graveborn (PD3)</option>
                                    <option value="h09">Premium Deck Series: Slivers (H09)</option>
                                    <option value="ppre">Prerelease Events (PPRE)</option>
                                    <option value="phop">Promotional Planes (PHOP)</option>
                                    <option value="parc">Promotional Schemes (PARC)</option>
                                    <option value="pcy">Prophecy (PCY)</option>
                                    <option value="ppro">Pro Tour Promos (PPRO)</option>
                                    <option value="rav">Ravnica: City of Guilds (RAV)</option>
                                    <option value="prel">Release Events (PREL)</option>
                                    <option value="pres">Resale Promos (PRES)</option>
                                    <option value="rtr">Return to Ravnica (RTR)</option>
                                    <option value="prtr">Return to Ravnica Promos (PRTR)</option>
                                    <option value="trtr">Return to Ravnica Tokens (TRTR)</option>
                                    <option value="3ed">Revised Edition (3ED)</option>
                                    <option value="roe">Rise of the Eldrazi (ROE)</option>
                                    <option value="proe">Rise of the Eldrazi Promos (PROE)</option>
                                    <option value="troe">Rise of the Eldrazi Tokens (TROE)</option>
                                    <option value="rix">Rivals of Ixalan (RIX)</option>
                                    <option value="prix">Rivals of Ixalan Promos (PRIX)</option>
                                    <option value="rqs">Rivals Quick Start Set (RQS)</option>
                                    <option value="psdc">San Diego Comic-Con 2013 (PSDC)</option>
                                    <option value="ps14">San Diego Comic-Con 2014 (PS14)</option>
                                    <option value="ps15">San Diego Comic-Con 2015 (PS15)</option>
                                    <option value="ps16">San Diego Comic-Con 2016 (PS16)</option>
                                    <option value="ps17">San Diego Comic-Con 2017 (PS17)</option>
                                    <option value="sok">Saviors of Kamigawa (SOK)</option>
                                    <option value="som">Scars of Mirrodin (SOM)</option>
                                    <option value="psom">Scars of Mirrodin Promos (PSOM)</option>
                                    <option value="tsom">Scars of Mirrodin Tokens (TSOM)</option>
                                    <option value="scg">Scourge (SCG)</option>
                                    <option value="7ed">Seventh Edition (7ED)</option>
                                    <option value="shm">Shadowmoor (SHM)</option>
                                    <option value="tshm">Shadowmoor Tokens (TSHM)</option>
                                    <option value="soi">Shadows over Innistrad (SOI)</option>
                                    <option value="psoi">Shadows over Innistrad Promos (PSOI)</option>
                                    <option value="tsoi">Shadows over Innistrad Tokens (TSOI)</option>
                                    <option value="ala">Shards of Alara (ALA)</option>
                                    <option value="tala">Shards of Alara Tokens (TALA)</option>
                                    <option value="s99">Starter 1999 (S99)</option>
                                    <option value="s00">Starter 2000 (S00)</option>
                                    <option value="sth">Stronghold (STH)</option>
                                    <option value="sum">Summer Magic / Edgar (SUM)</option>
                                    <option value="psum">Summer of Magic (PSUM)</option>
                                    <option value="tmp">Tempest (TMP)</option>
                                    <option value="tpr">Tempest Remastered (TPR)</option>
                                    <option value="10e">Tenth Edition (10E)</option>
                                    <option value="p10e">Tenth Edition Promos (P10E)</option>
                                    <option value="t10e">Tenth Edition Tokens (T10E)</option>
                                    <option value="drk">The Dark (DRK)</option>
                                    <option value="ths">Theros (THS)</option>
                                    <option value="thp1">Theros Hero's Path (THP1)</option>
                                    <option value="pths">Theros Promos (PTHS)</option>
                                    <option value="tths">Theros Tokens (TTHS)</option>
                                    <option value="tsp">Time Spiral (TSP)</option>
                                    <option value="tsb">Time Spiral Timeshifted (TSB)</option>
                                    <option value="tor">Torment (TOR)</option>
                                    <option value="p2hg">Two-Headed Giant Tournament (P2HG)</option>
                                    <option value="ugin">Ugin's Fate (UGIN)</option>
                                    <option value="ugl">Unglued (UGL)</option>
                                    <option value="tugl">Unglued Tokens (TUGL)</option>
                                    <option value="unh">Unhinged (UNH)</option>
                                    <option value="2ed">Unlimited Edition (2ED)</option>
                                    <option value="ust">Unstable (UST)</option>
                                    <option value="purl">URL/Convention Promos (PURL)</option>
                                    <option value="uds">Urza's Destiny (UDS)</option>
                                    <option value="ulg">Urza's Legacy (ULG)</option>
                                    <option value="usg">Urza's Saga (USG)</option>
                                    <option value="pvan">Vanguard Series (PVAN)</option>
                                    <option value="vma">Vintage Masters (VMA)</option>
                                    <option value="tvma">Vintage Masters Tokens (TVMA)</option>
                                    <option value="vis">Visions (VIS)</option>
                                    <option value="wth">Weatherlight (WTH)</option>
                                    <option value="w16">Welcome Deck 2016 (W16)</option>
                                    <option value="w17">Welcome Deck 2017 (W17)</option>
                                    <option value="pwos">Wizards of the Coast Online Store (PWOS)</option>
                                    <option value="pwpn">Wizards Play Network 2008 (PWPN)</option>
                                    <option value="pwp09">Wizards Play Network 2009 (PWP09)</option>
                                    <option value="pwp10">Wizards Play Network 2010 (PWP10)</option>
                                    <option value="pwp11">Wizards Play Network 2011 (PWP11)</option>
                                    <option value="pwp12">Wizards Play Network 2012 (PWP12)</option>
                                    <option value="pwcq">World Magic Cup Qualifiers (PWCQ)</option>
                                    <option value="pwor">Worlds (PWOR)</option>
                                    <option value="wwk">Worldwake (WWK)</option>
                                    <option value="pwwk">Worldwake Promos (PWWK)</option>
                                    <option value="twwk">Worldwake Tokens (TWWK)</option>
                                    <option value="pss2">XLN Standard Showdown (PSS2)</option>
                                    <option value="pz2">You Make the Cube (PZ2)</option>
                                    <option value="zen">Zendikar (ZEN)</option>
                                    <option value="exp">Zendikar Expeditions (EXP)</option>
                                    <option value="pzen">Zendikar Promos (PZEN)</option>
                                    <option value="tzen">Zendikar Tokens (TZEN)</option>
                                </select>
                                <span className="select2 select2-container select2-container--default" dir="ltr">
                                    <span className="selection">
                                        <span className="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={-1}>
                                            <ul className="select2-selection__rendered">
                                                <li className="select2-search select2-search--inline">
                                                    <input className="select2-search__field" tabIndex={0} role="textbox" aria-autocomplete="list" placeholder="Enter a set name or choose from the list" type="search" />
                                                </li>
                                            </ul>
                                        </span>
                                    </span>
                                    <span className="dropdown-wrapper" aria-hidden="true" />
                                </span>
                            </div>

                            <div className="form-row-content-band">
                                <label className="visuallyhidden" htmlFor="block">Block or Group</label>
                                <input name="block[]" value="" type="hidden" />
                                <select name="block[]" id="block" data-component="advanced-search-autocomplete" data-placeholder="Enter a block name or choose from the list" tabIndex={-1} className="select2-hidden-accessible" aria-hidden="true">
                                    <option value="ala">Alara</option>
                                    <option value="akh">Amonkhet</option>
                                    <option value="parl">Arena League</option>
                                    <option value="bfz">Battle for Zendikar</option>
                                    <option value="cp1">Clash Packs</option>
                                    <option value="cmd">Commander</option>
                                    <option value="fnm">Friday Night Magic</option>
                                    <option value="pgtw">Gateway</option>
                                    <option value="ice">Ice Age</option>
                                    <option value="pidw">IDW Comics</option>
                                    <option value="isd">Innistrad</option>
                                    <option value="inv">Invasion</option>
                                    <option value="xln">Ixalan</option>
                                    <option value="jgp">Judge Gift Program</option>
                                    <option value="kld">Kaladesh</option>
                                    <option value="chk">Kamigawa</option>
                                    <option value="ktk">Khans of Tarkir</option>
                                    <option value="lrw">Lorwyn</option>
                                    <option value="med">Magic Online Master's Editions</option>
                                    <option value="pz1">Magic Online Prize Sets</option>
                                    <option value="mpr">Magic Player Rewards</option>
                                    <option value="mmq">Masques</option>
                                    <option value="mps">Masterpiece Series</option>
                                    <option value="mir">Mirage</option>
                                    <option value="mrd">Mirrodin</option>
                                    <option value="ody">Odyssey</option>
                                    <option value="ons">Onslaught</option>
                                    <option value="rav">Ravnica</option>
                                    <option value="rtr">Return to Ravnica</option>
                                    <option value="psdc">San Diego Comic-Con</option>
                                    <option value="som">Scars of Mirrodin</option>
                                    <option value="ppre">Set Release Promos</option>
                                    <option value="shm">Shadowmoor</option>
                                    <option value="soi">Shadows Over Innistrad</option>
                                    <option value="tmp">Tempest</option>
                                    <option value="ths">Theros</option>
                                    <option value="tsp">Time Spiral</option>
                                    <option value="usg">Urza</option>
                                    <option value="pwpn">Wizards Play Network</option>
                                    <option value="zen">Zendikar</option>
                                </select>
                                <span className="select2 select2-container select2-container--default" dir="ltr">
                                    <span className="selection">
                                        <span className="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={-1}>
                                            <ul className="select2-selection__rendered">
                                                <li className="select2-search select2-search--inline">
                                                    <input className="select2-search__field" tabIndex={0} role="textbox" aria-autocomplete="list" placeholder="Enter a block name or choose from the list" type="search" />
                                                </li>
                                            </ul>
                                        </span>
                                    </span>
                                    <span className="dropdown-wrapper" aria-hidden="true" />
                                </span>
                            </div>

                            <p className="form-row-tip">
                                Restrict cards based on their set, block, or group.
                            </p>

                        </div>

                    </div>
                    <div className="form-row">

                        <label className="form-row-label short">
                            <svg aria-hidden="true" focusable="false" className="" width="32" height="31" viewBox="0 0 32 31" xmlns="http://www.w3.org/2000/svg"><path d="M22 17.24l-1.21.87.49 1.41 2.65 7.78-6.79-4.91-1.14-.82-1.14.82-6.79 4.91 2.65-7.78.49-1.41-1.21-.87-5.93-4.29H13l.46-1.34L16 4.05l2.58 7.56.42 1.34h8.89L22 17.24zm9-6.29H20.44L16.92.67a1 1 0 0 0-1.85 0l-3.51 10.28H1a1 1 0 0 0-.57 1.82l8.45 6.1L5.2 29.6a1 1 0 0 0 1.5 1.14l9.3-6.72 9.29 6.72a1 1 0 0 0 1.5-1.14l-3.65-10.73 8.45-6.1a1 1 0 0 0-.59-1.82z" fillRule="evenodd" /></svg>
                            Rarity
                        </label>
                        <div className="form-row-content">

                            <fieldset>
                                <legend className="visuallyhidden">Desired rarities</legend>
                                <div className="form-row-content-band">
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="rarities" id="false" value="c" type="checkbox" onChange={event => this.onMulitCheckboxChange(event.currentTarget.name, event.currentTarget.value)}  />
                                        Common
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="rarities" id="false" value="u" type="checkbox" onChange={event => this.onMulitCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        Uncommon
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="rarities" id="false" value="r" type="checkbox" onChange={event => this.onMulitCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        Rare
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="rarities" id="false" value="m" type="checkbox" onChange={event => this.onMulitCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        Mythic Rare
                                    </label>
                                </div>
                            </fieldset>

                            <p className="form-row-tip">
                                Only return cards of the selected rarities.
                            </p>

                        </div>

                    </div>
                    <div className="form-row">

                        <label className="form-row-label" htmlFor="is">
                            <svg aria-hidden="true" focusable="false" className="" width="33" height="32" viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg"><path d="M6.66 4.77l-.85.66.34 1.01.15.42-.26-.2-.92-.7-.92.7-.26.2.15-.42.34-1.01-.85-.66-.29-.22h1.44l.35-1.02.04-.12.04.12.35 1.02h1.44l-.29.22zm2.86-1.72H6.58L5.68.42A.587.587 0 0 0 5.12 0c-.23 0-.47.14-.56.42l-.9 2.63H.72c-.58 0-.82.77-.35 1.13l2.3 1.78-1.09 3.2c-.16.44.18.84.56.84.12 0 .24-.04.36-.12l2.62-2.03 2.63 2.03c.11.08.23.12.35.12.38 0 .72-.4.56-.84l-1.09-3.2 2.3-1.78c.47-.36.23-1.13-.35-1.13zm-5.86 12.5h1.07l.35-1.02.04-.12.04.12.35 1.02h1.44l-.29.22-.85.66.34 1.01.15.42-.26-.2-.92-.7-.92.7-.26.2.15-.42.34-1.01-.85-.66-.29-.22h.37zm-3.29-.37l2.3 1.78-1.09 3.2c-.16.44.18.84.56.84.12 0 .24-.04.36-.12l2.62-2.03 2.63 2.03c.11.08.23.12.35.12.38 0 .72-.4.56-.84l-1.09-3.2 2.3-1.78c.47-.36.23-1.13-.35-1.13H6.58l-.89-2.63a.598.598 0 0 0-.57-.42c-.23 0-.47.14-.56.42l-.9 2.63H.72c-.58 0-.82.77-.35 1.13zm3.29 11.37h1.07l.35-1.02.04-.12.04.12.35 1.02h1.44l-.29.22-.85.66.34 1.01.15.42-.26-.2-.92-.7-.92.7-.26.2.15-.42.34-1.01-.85-.66-.29-.22h.37zm-3.29-.37l2.3 1.78-1.09 3.2c-.16.44.18.84.56.84.12 0 .24-.04.36-.12l2.62-2.03 2.63 2.03c.11.08.23.12.35.12.38 0 .72-.4.56-.84l-1.09-3.2 2.3-1.78c.47-.36.23-1.13-.35-1.13H6.58l-.9-2.63a.587.587 0 0 0-.56-.42c-.23 0-.47.14-.56.42l-.9 2.63H.72c-.58 0-.82.77-.35 1.13zM12.121 7h20V5h-20v2zm0 11h20v-2h-20v2zm0 11h20v-2h-20v2z" fillRule="evenodd" /></svg>
                            Criteria
                        </label>
                        <div className="form-row-content">

                            <div className="form-row-content-band">
                                <label className="visuallyhidden" htmlFor="block">Block or Group</label>
                                <input name="is[]" value="" type="hidden" />
                                <select name="is[]" id="is" multiple={true} data-component="advanced-search-autocomplete" data-placeholder="Enter a criteria or choose from the list" tabIndex={-1} className="select2-hidden-accessible" aria-hidden="true">
                                    <option value="promo">Promo</option>
                                    <option value="digital">Digital</option>
                                    <option value="reprint">Reprint</option>
                                    <option value="firstprint">Firstprint</option>
                                    <option value="firstprinting">Firstprinting</option>
                                    <option value="onlyprint">Onlyprint</option>
                                    <option value="onlyprinting">Onlyprinting</option>
                                    <option value="unique">Unique</option>
                                    <option value="extra">Extra</option>
                                    <option value="old">Old</option>
                                    <option value="modern">Modern</option>
                                    <option value="new">New</option>
                                    <option value="future">Future</option>
                                    <option value="futureshifted">Futureshifted</option>
                                    <option value="hires">Hires</option>
                                    <option value="highres">Highres</option>
                                    <option value="spotlight">Spotlight</option>
                                    <option value="vanilla">Vanilla</option>
                                    <option value="spell">Spell</option>
                                    <option value="permanent">Permanent</option>
                                    <option value="splitmana">Splitmana</option>
                                    <option value="hybrid">Hybrid</option>
                                    <option value="hybridmana">Hybridmana</option>
                                    <option value="commander">Commander</option>
                                    <option value="masterpiece">Masterpiece</option>
                                    <option value="transform">Transform</option>
                                    <option value="doublesided">Doublesided</option>
                                    <option value="doublefaced">Doublefaced</option>
                                    <option value="split">Split</option>
                                    <option value="flip">Flip</option>
                                    <option value="meld">Meld</option>
                                    <option value="leveler">Leveler</option>
                                    <option value="token">Token</option>
                                    <option value="bikeland">Bikeland</option>
                                    <option value="bob">Bob</option>
                                    <option value="bounceland">Bounceland</option>
                                    <option value="checkland">Checkland</option>
                                    <option value="dual">Dual</option>
                                    <option value="etb">Etb</option>
                                    <option value="fastland">Fastland</option>
                                    <option value="fetchland">Fetchland</option>
                                    <option value="filterland">Filterland</option>
                                    <option value="finkel">Finkel</option>
                                    <option value="funny">Funny</option>
                                    <option value="gainland">Gainland</option>
                                    <option value="gary">Gary</option>
                                    <option value="mom">Mom</option>
                                    <option value="painland">Painland</option>
                                    <option value="pikula">Pikula</option>
                                    <option value="reserved">Reserved</option>
                                    <option value="scryland">Scryland</option>
                                    <option value="shadowland">Shadowland</option>
                                    <option value="shockland">Shockland</option>
                                    <option value="storageland">Storageland</option>
                                    <option value="tangoland">Tangoland</option>
                                    <option value="tron">Tron</option>
                                    <option value="useless">Useless</option>
                                    <option value="cute">Cute</option>
                                    <option value="fullart">Fullart</option>
                                    <option value="colorshifted">Colorshifted</option>
                                    <option value="timeshifted">Timeshifted</option>
                                    <option value="futureshifted">Futureshifted</option>
                                    <option value="release">Release</option>
                                    <option value="prerelease">Prerelease</option>
                                    <option value="buyabox">Buyabox</option>
                                    <option value="giftbox">Giftbox</option>
                                    <option value="league">League</option>
                                    <option value="draftweekend">Draftweekend</option>
                                    <option value="openhouse">Openhouse</option>
                                    <option value="planeswalkerdeck">Planeswalkerdeck</option>
                                    <option value="intropack">Intropack</option>
                                    <option value="-promo">-Promo</option>
                                    <option value="-digital">-Digital</option>
                                    <option value="-reprint">-Reprint</option>
                                    <option value="-firstprint">-Firstprint</option>
                                    <option value="-firstprinting">-Firstprinting</option>
                                    <option value="-onlyprint">-Onlyprint</option>
                                    <option value="-onlyprinting">-Onlyprinting</option>
                                    <option value="-unique">-Unique</option>
                                    <option value="-extra">-Extra</option>
                                    <option value="-old">-Old</option>
                                    <option value="-modern">-Modern</option>
                                    <option value="-new">-New</option>
                                    <option value="-future">-Future</option>
                                    <option value="-futureshifted">-Futureshifted</option>
                                    <option value="-hires">-Hires</option>
                                    <option value="-highres">-Highres</option>
                                    <option value="-spotlight">-Spotlight</option>
                                    <option value="-vanilla">-Vanilla</option>
                                    <option value="-spell">-Spell</option>
                                    <option value="-permanent">-Permanent</option>
                                    <option value="-splitmana">-Splitmana</option>
                                    <option value="-hybrid">-Hybrid</option>
                                    <option value="-hybridmana">-Hybridmana</option>
                                    <option value="-commander">-Commander</option>
                                    <option value="-masterpiece">-Masterpiece</option>
                                    <option value="-transform">-Transform</option>
                                    <option value="-doublesided">-Doublesided</option>
                                    <option value="-doublefaced">-Doublefaced</option>
                                    <option value="-split">-Split</option>
                                    <option value="-flip">-Flip</option>
                                    <option value="-meld">-Meld</option>
                                    <option value="-leveler">-Leveler</option>
                                    <option value="-token">-Token</option>
                                    <option value="-bikeland">-Bikeland</option>
                                    <option value="-bob">-Bob</option>
                                    <option value="-bounceland">-Bounceland</option>
                                    <option value="-checkland">-Checkland</option>
                                    <option value="-dual">-Dual</option>
                                    <option value="-etb">-Etb</option>
                                    <option value="-fastland">-Fastland</option>
                                    <option value="-fetchland">-Fetchland</option>
                                    <option value="-filterland">-Filterland</option>
                                    <option value="-finkel">-Finkel</option>
                                    <option value="-funny">-Funny</option>
                                    <option value="-gainland">-Gainland</option>
                                    <option value="-gary">-Gary</option>
                                    <option value="-mom">-Mom</option>
                                    <option value="-painland">-Painland</option>
                                    <option value="-pikula">-Pikula</option>
                                    <option value="-reserved">-Reserved</option>
                                    <option value="-scryland">-Scryland</option>
                                    <option value="-shadowland">-Shadowland</option>
                                    <option value="-shockland">-Shockland</option>
                                    <option value="-storageland">-Storageland</option>
                                    <option value="-tangoland">-Tangoland</option>
                                    <option value="-tron">-Tron</option>
                                    <option value="-useless">-Useless</option>
                                    <option value="-cute">-Cute</option>
                                    <option value="-fullart">-Fullart</option>
                                    <option value="-colorshifted">-Colorshifted</option>
                                    <option value="-timeshifted">-Timeshifted</option>
                                    <option value="-futureshifted">-Futureshifted</option>
                                    <option value="-release">-Release</option>
                                    <option value="-prerelease">-Prerelease</option>
                                    <option value="-buyabox">-Buyabox</option>
                                    <option value="-giftbox">-Giftbox</option>
                                    <option value="-league">-League</option>
                                    <option value="-draftweekend">-Draftweekend</option>
                                    <option value="-openhouse">-Openhouse</option>
                                    <option value="-planeswalkerdeck">-Planeswalkerdeck</option>
                                    <option value="-intropack">-Intropack</option>
                                </select>
                                <span className="select2 select2-container select2-container--default" dir="ltr">
                                    <span className="selection">
                                        <span className="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={-1}>
                                            <ul className="select2-selection__rendered">
                                                <li className="select2-search select2-search--inline">
                                                    <input className="select2-search__field" tabIndex={0} role="textbox" aria-autocomplete="list" placeholder="Enter a criteria or choose from the list" type="search" />
                                                </li>
                                            </ul>
                                        </span>
                                    </span>
                                    <span className="dropdown-wrapper" aria-hidden="true" />
                                </span>
                            </div>

                            <div className="form-row-content-band">
                                <label className="advanced-search-checkbox">
                                    <input name="is_partial" id="is_partial" value="1" type="checkbox" />
                                    Allow partial criteria matches
                                </label>
                            </div>

                            <p className="form-row-tip">
                                Enter any card criteria to match, in any order. Prefix a term with "-" to negate.
                            </p>

                        </div>

                    </div>
                    <div className="form-row">

                        <label className="form-row-label">
                            <svg aria-hidden="true" focusable="false" className="" width="33" height="30" viewBox="0 0 33 30" xmlns="http://www.w3.org/2000/svg"><path d="M27.27 19.44c.54.55.85 1.29.85 2.06s-.31 1.51-.85 2.06l-.854.855a3.513 3.513 0 0 0-.71-.71l.855-.855c.36-.36.56-.84.56-1.35 0-.51-.2-.99-.56-1.35l-1.34-1.35-.004-.005L23.411 17H3.891l-1.5-12h23.46l-.08.64.907-.907.837-.836.006-.007.63-.63.019-.018c-.02-.08-.05-.156-.05-.242 0-.55.45-1 1-1 .097 0 .184.03.272.055l.019-.015.21-.04c.13 0 .26.05.35.15.15.15.19.37.11.56l-.015.019c.026.088.055.175.055.27 0 .55-.45 1-1 1-.085 0-.162-.028-.241-.048l-.02.019-1.01 1-.005.006-.463.463-1.411 1.41a.47.47 0 0 1-.35.15h-.02l-.247 1.973-.66 5.28-.29 2.32.007.008 1.57 1.57.01.01 1.28 1.28h-.001zM10.07 27c.024-.165.05-.33.05-.5 0-.171-.026-.335-.05-.5h10.102c-.024.165-.051.329-.051.5 0 .17.027.335.05.5H10.07zm-4.95-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm17 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm7.6-20.56A2.997 2.997 0 0 0 32.12 3c0-1.66-1.34-3-3-3a2.996 2.996 0 0 0-2.94 2.4l-.6.6H2.39C1.18 3 .25 4.05.4 5.25l1.5 12c.13 1 .98 1.75 1.99 1.75h18.69l2.5 2.5-1.503 1.504a3.49 3.49 0 0 0-2.398.996H9.063c-.651-.64-1.528-1-2.442-1-1.757 0-3.202 1.306-3.45 2.996-.023.166-.05.33-.05.504 0 .173.027.338.05.504C3.419 28.694 4.864 30 6.621 30c.95 0 1.81-.383 2.442-1h12.116c.632.617 1.492 1 2.442 1a3.502 3.502 0 0 0 3.496-3.462l1.564-1.558c.92-.93 1.44-2.18 1.44-3.48 0-1.3-.52-2.55-1.44-3.48l-2.165-2.165.958-7.668 2.247-2.247h-.001z" fillRule="evenodd" /></svg>
                            Prices
                        </label>
                        <div className="advanced-search-row-content js-advanced-search-duplicant">

                            <div className="form-row-content-band js-advanced-search-duplicant-template">
                                <label className="visuallyhidden" htmlFor="price_1">Currency 1</label>
                                <select className="form-input auto" name="price_1" id="price_1">
                                    <option value="usd">USD</option>
                                    <option value="eur">Euros</option>
                                    <option value="tix">MTGO Tickets</option>
                                </select>
                                <label className="visuallyhidden" htmlFor="price_1_mode">Currency 1 requirement</label>
                                <select className="form-input auto" name="price_1_mode" id="price_1_mode">
                                    <option value="<">less than</option>
                                    <option value=">">greater than</option>
                                    <option value="<=">less than or equal to</option>
                                    <option value=">=">greater than or equal to</option>
                                </select>
                                <label className="visuallyhidden" htmlFor="price_1_value">Currency 1 value</label>
                                <input name="price_1_value" id="price_1_value" className="form-input auto" placeholder="Any value, e.g. “15.00”" pattern="d*" type="number" />
                            </div>

                            <p className="form-row-tip js-advanced-search-row-tip">
                                Restrict cards based on their price.
                            </p>

                        </div>

                    </div>
                    <div className="form-row">

                        <label className="form-row-label" htmlFor="artist">
                            <svg aria-hidden="true" focusable="false" className="" width="33" height="28" viewBox="0 0 33 28" xmlns="http://www.w3.org/2000/svg"><path d="M5.794 25.16l.847-.85-.347-1.15A4.001 4.001 0 0 1 10.121 18c2.206 0 4 1.79 4 4s-1.794 4-4 4H4.949l.845-.84zm9.626-13.08l1.18-.897 4.34 4.34-.895 1.177c-.5.66-1.712 1.21-2.648 1.21-.094 0-.183 0-.263-.01l-1.06-.16c-.75-.1-1.59-.94-1.697-1.69l-.152-1.06c-.13-.91.462-2.36 1.195-2.91zm11.924-9.07c.779-.59 1.712-.94 2.128-.97.206.11.498.4.614.61-.032.34-.31 1.25-.973 2.13l-7.565 9.943-4.15-4.148 9.946-7.565zM10.12 28a6.002 6.002 0 0 0 5.537-8.312c.044.008.088.026.133.032l1.06.16c.177.02.359.03.546.03 1.539 0 3.349-.83 4.24-2l9.068-11.92c.999-1.32 1.59-3.06 1.316-3.89-.275-.83-1.175-1.72-2-2a1.413 1.413 0 0 0-.481-.07c-.913 0-2.312.55-3.407 1.39l-11.924 9.06c-1.313 1-2.197 3.16-1.964 4.79l.152 1.06c.006.045.023.088.032.132a6.002 6.002 0 0 0-8.049 7.278L.119 28H10.12z" fillRule="evenodd" /></svg>
                            Artist
                        </label>
                        <div className="form-row-content">
                            <div className="form-row-content-band">
                                <input name="artist" id="artist" placeholder="Any artist name, e.g. “Terese”" className="form-input short" type="text" value={this.state.artist} onChange={event => this.onFieldChange(event.currentTarget.name, event.currentTarget.value)} />
                            </div>
                        </div>

                    </div>
                    <div className="form-row">

                        <label className="form-row-label" htmlFor="flavor">
                            <svg aria-hidden="true" focusable="false" className="" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M3 2v26h24v-26h-24zm4 24h-2v-22h2v22zm18 0h-16v-22h16v22zm-2-18h-12v2h12v-2zm0 4h-12v2h12v-2z" /></svg>
                            Flavor Text
                        </label>
                        <div className="form-row-content">

                            <div className="form-row-content-band">
                                <input name="flavor" id="flavor" className="form-input" placeholder="Any flavor text, e.g. “Lemurs?”" type="text" value={this.state.flavor} onChange={event => this.onFieldChange(event.currentTarget.name, event.currentTarget.value)} />
                            </div>

                            <p className="form-row-tip">
                                Enter words that should appear in the flavor text.
                            Word order doesn't matter.
                            </p>

                        </div>

                    </div>
                    <div className="form-row">

                        <label className="form-row-label" htmlFor="lore">
                            <svg aria-hidden="true" focusable="false" className="" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M15 5c-4.094-3.531-11.125-4-14-4v24c2.875 0 9.906.469 14 4 4.094-3.531 11.125-4 14-4v-24c-2.875 0-9.906.469-14 4zm-1 20.906c-3.624-2.037-8.035-2.677-11-2.848v-19.99c4.69.429 8.085 1.265 11 3.69v19.148zm7-21.787c.635-.192 1.305-.352 2-.49v6.371l-1-1.333-1 1.333v-5.881zm6 18.94c-2.965.171-7.376.811-11 2.848v-19.148c.938-.781 1.936-1.383 3-1.874v11.115l3-4 3 4v-12.705c.643-.086 1.303-.163 2-.227v19.991z" /></svg>
                            Lore Finder™
                        </label>
                        <div className="form-row-content">

                            <div className="form-row-content-band">
                                <input name="lore" id="lore" className="form-input" placeholder="Any text, especially names. e.g. “Hanna”" type="text" value={this.state.lore} onChange={event => this.onFieldChange(event.currentTarget.name, event.currentTarget.value)} />
                            </div>

                            <p className="form-row-tip">
                                Enter names or words here and the system will search each part of the card
                                for that word. Great for finding every card that mentions
                                your favorite character or creature type.
                            </p>

                        </div>

                    </div>
                    <div className="form-row">

                        <label className="form-row-label">
                            <svg aria-hidden="true" focusable="false" className="" width="31" height="32" viewBox="0 0 31 32" xmlns="http://www.w3.org/2000/svg"><path d="M.172 25.29A6.653 6.653 0 0 0 2.122 30a6.635 6.635 0 0 0 4.707 1.95c1.7 0 3.409-.65 4.707-1.95l14.292-14.29-1.414-1.42-14.293 14.3a4.632 4.632 0 0 1-3.292 1.36 4.635 4.635 0 0 1-3.293-1.36 4.66 4.66 0 0 1 0-6.59L22.538 3a3.198 3.198 0 0 1 2.29-.95c.833 0 1.656.31 2.292.95h.003c.635.64.948 1.46.949 2.29.002.86-.34 1.684-.95 2.29L12.121 22.59a1.843 1.843 0 0 1-2.586 0 1.837 1.837 0 0 1-.536-1.3c0-.47.177-.93.536-1.29L19.828 9.71l-1.414-1.42-10.293 10.3a3.807 3.807 0 0 0-1.122 2.7c-.001.98.376 1.96 1.12 2.71a3.809 3.809 0 0 0 2.709 1.12c.976 0 1.962-.37 2.707-1.12L28.537 9a5.232 5.232 0 0 0 1.535-3.71 5.209 5.209 0 0 0-1.535-3.7l-.003-.01A5.235 5.235 0 0 0 24.829.05c-1.338 0-2.685.51-3.706 1.53L2.122 20.59a6.613 6.613 0 0 0-1.95 4.7" fillRule="evenodd" /></svg>
                            Preferences
                        </label>
                        <div className="form-row-content">

                            <div className="form-row-content-band">
                                <label className="visuallyhidden" htmlFor="display">Display</label>
                                <select className="form-input auto" name="display" id="display" onChange={event => this.onFieldChange(event.currentTarget.name, event.currentTarget.value)}>
                                    <option value="">Display as Images</option>
                                    <option value="checklist">Display as Pricelist</option>
                                    <option value="full">Display as Full</option>
                                </select>
                                <label className="visuallyhidden" htmlFor="order">Order</label>
                                <select className="form-input auto" name="order" id="order" onChange={event => this.onFieldChange(event.currentTarget.name, event.currentTarget.value)}>
                                    <option value="">Sort by Name</option>
                                    <option value="set">Sort by Set/Number</option>
                                    <option value="rarity">Sort by Rarity</option>
                                    <option value="color">Sort by Color/ID</option>
                                    <option value="usd">Sort by Price: USD</option>
                                    <option value="tix">Sort by Price: TIX</option>
                                    <option value="eur">Sort by Price: EUR</option>
                                    <option value="cmc">Sort by CMC</option>
                                    <option value="power">Sort by Power</option>
                                    <option value="toughness">Sort by Toughness</option>
                                    <option value="edhrec">Sort by EDHREC Rank</option>
                                </select>
                            </div>

                            <div className="form-row-content-band">
                                <label className="advanced-search-checkbox" htmlFor="showAllPrints">
                                    <input name="showAllPrints" id="showAllPrints" checked={!!this.state.showAllPrints} type="checkbox" onChange={event => this.onCheckboxChange(event.currentTarget.name, event.currentTarget.checked)} />
                                    Show all card prints (++)
                                </label>
                            </div>

                            <div className="form-row-content-band">
                                <label className="advanced-search-checkbox" htmlFor="includeFunny">
                                    <input name="includeFunny" id="includeFunny" checked={!!this.state.includeFunny} type="checkbox" onChange={event => this.onCheckboxChange(event.currentTarget.name, event.currentTarget.checked)} />
                                    Include extra cards and funny cards (tokens, Unstable, etc)
                                </label>
                            </div>

                        </div>

                    </div>
                    <div className="form-row">
                        <div className="form-row-label" />
                        <div className="form-row-content">
                            <div className="form-row-content-band">
                                <button type="submit" className="button-primary-large" onClick={event => this.submitButtonClicked()}>
                                    Search with these options
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    private onFieldChange(fieldName: string, fieldValue: string) {
        const newState = {... this.state, [fieldName]: fieldValue};        
        this.setState(newState);
    }

    private onJoinerDropdownFieldChange(targetName: string, addValue: string) {        
        const field = this.state[targetName];        
        const fieldValue = field ? field + addValue : addValue;
        const newState = {...this.state, [targetName]: fieldValue};
        this.setState(newState);
    }

    private onCheckboxChange(fieldName: string, checked: boolean) {        
        const newState = {... this.state, [fieldName]: checked};        
        this.setState(newState);        
    }
    
    private onMulitCheckboxChange(fieldName: string, fieldValue: any) {
        const field = this.state[fieldName] as any[];        
        const fieldIndex = field.indexOf(fieldValue);
        if (fieldIndex > -1) {
            field.splice(fieldIndex, 1);
        } else {
            field.push(fieldValue);
        }
        const newState = {... this.state, [fieldName]: field};   
        this.setState(newState);  
    }

    private submitButtonClicked() {
        console.log(this.state);  
        let searchQueryArray = [];
        if (this.state.showAllPrints) {
            searchQueryArray.push('++');
        }
        if (this.state.name) {
            searchQueryArray.push(this.splitWords(this.state.name.split(' ')));
        }
        if (this.state.oracle) {
            searchQueryArray.push(this.splitWords(this.state.oracle.split(' '), 'o:'));
        }
        if (this.state.type) {
            searchQueryArray.push(this.splitWords(this.state.type.split(' '), 't:', this.state.allowPartialTypeMatch));
        }
        if (this.state.colors && this.state.colors.length > 0) {
            searchQueryArray.push(this.splitWords(this.state.colors, 'colors≥', this.state.allowPartialColorMatch));

            if (this.state.excludeUnselectedColors) {
                let excludedColors = [] as string[];
                for (let key in Color) {
                    if (!isNumber(key)) {
                        const color = Color[key] as Color;
                        if (this.state.colors.indexOf(color) < 0) {
                            excludedColors.push('-c≥' + color.toLowerCase());
                        }
                    }
                }
                searchQueryArray.push('(' + excludedColors.join(' AND ') + ')');
            }
        }
        if (this.state.requiresMulticolored) {
            searchQueryArray.push('colors≥2');
        }
        if (this.state.mana) {
            searchQueryArray.push(this.splitWords(this.state.mana.split(' '), 'mana:'));
        }
        if (this.state.formats && this.state.formats.length > 0) {
            searchQueryArray.push(this.splitWords(this.state.formats, 'f:'));
        }
        if (this.state.commanderIdentity && this.state.commanderIdentity.length > 0) {
            searchQueryArray.push(this.splitWords(this.state.commanderIdentity, 'ids≤', true));
        }
        if (this.state.rarities && this.state.rarities.length > 0) {
            searchQueryArray.push(this.splitWords(this.state.rarities, 'r:', true));
        }
        if (this.state.artist) {
            searchQueryArray.push(this.splitWords(this.state.artist.split(' '), 'a:'));
        }
        if (this.state.flavor) {
            searchQueryArray.push(this.splitWords(this.state.flavor.split(' '), 'ft:'));
        }
        if (this.state.lore) {
            searchQueryArray.push(this.splitWords(this.state.lore.split(' '), 'lore:'));
        }
        if (this.state.includeFunny) {
            searchQueryArray.push('include:extras');
        }
        console.log(searchQueryArray.join(' '));        
    }

    private splitWords(searchTerm: any[], prefix: string = '', conditional: boolean = false): string {
        let searchTerms = '';
        let termArray = [] as string[];
        searchTerm.forEach(element => {
            termArray.push(prefix + element);
        });
        if (termArray.length > 1) {
            const types = conditional ? termArray.join(' OR ') :  termArray.join(' ');
            searchTerms = '(' + types + ')';
        } else {
            searchTerms = termArray[0];
        }
        return searchTerms;
    }
}