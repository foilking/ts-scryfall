import * as React from 'react';
import { isNumber } from 'util';
import { RouteComponentProps } from 'react-router';
import Select from 'react-select';
import { SearchTerms, SearchOrder, Set } from '../../model';

enum Color {
   WHITE = 'w',
   BLUE = 'u',
   BLACK = 'b',
   RED = 'r',
   GREEN = 'g',
   COLORLESS = 'c'
}

interface AdvanceSearchProps {
    searchTerms: SearchTerms;
    fetchSets: () => void;
    updateSearchTerms: (searchTerms: SearchTerms) => void;
    sets: Set[];
}

interface AdvanceSearchState {
    searchTerms: SearchTerms;
}

export class AdvanceSearchPage extends React.Component<AdvanceSearchProps & RouteComponentProps<AdvanceSearchProps>, AdvanceSearchState> {
    constructor(props: AdvanceSearchProps & RouteComponentProps<AdvanceSearchProps>) {        
        super(props);
        this.props.fetchSets();
        this.state = {
            searchTerms: props.searchTerms
        };
        console.log(props.searchTerms);
        
        document.title = 'Advance Search | TS Scryfall';
    }

    public render() {
        const { searchTerms } = this.state;
        
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
                                <input name="name" id="name" className="form-input" placeholder="Any words in the name, e.g. “Fire”" type="text" defaultValue={searchTerms.name} onChange={event => this.onFieldChange(event.currentTarget.name, event.currentTarget.value)}  />
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
                                <input name="oracle" id="oracle" className="form-input" placeholder="Any Oracle text, e.g. “draw a card”" type="text" value={searchTerms.oracle} onChange={event => this.onFieldChange(event.currentTarget.name, event.currentTarget.value)} />
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
                                <input name="type" id="type" className="form-input" placeholder="Enter any card types, e.g. “legendary”" type="text" value={searchTerms.type} onChange={event => this.onFieldChange(event.currentTarget.name, event.currentTarget.value)} />
                            </div>

                            <div className="form-row-content-band">
                                <label className="advanced-search-checkbox">
                                    <input name="allowPartialTypeMatch" id="allowPartialTypeMatch" defaultChecked={!!searchTerms.allowPartialTypeMatch} type="checkbox" onChange={event => this.onCheckboxChange(event.currentTarget.name, event.currentTarget.checked)} />
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
                                        <input name="colors" value={Color.WHITE} defaultChecked={searchTerms.colors.indexOf(Color.WHITE) > -1} type="checkbox" onChange={event => this.onMultiCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        <abbr className="card-symbol card-symbol-W" title="one white mana">{`W`}</abbr>
                                        White
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="colors" value={Color.BLUE} defaultChecked={searchTerms.colors.indexOf(Color.BLUE) > -1} type="checkbox" onChange={event => this.onMultiCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        <abbr className="card-symbol card-symbol-U" title="one blue mana">{`U`}</abbr>
                                        Blue
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="colors" value={Color.BLACK} defaultChecked={searchTerms.colors.indexOf(Color.BLACK) > -1} type="checkbox" onChange={event => this.onMultiCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        <abbr className="card-symbol card-symbol-B" title="one black mana">{`B`}</abbr>
                                        Black
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="colors" value={Color.RED} defaultChecked={searchTerms.colors.indexOf(Color.RED) > -1} type="checkbox" onChange={event => this.onMultiCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        <abbr className="card-symbol card-symbol-R" title="one red mana">{`R`}</abbr>
                                        Red
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="colors" value={Color.GREEN} defaultChecked={searchTerms.colors.indexOf(Color.GREEN) > -1} type="checkbox" onChange={event => this.onMultiCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        <abbr className="card-symbol card-symbol-G" title="one green mana">{`G`}</abbr>
                                        Green
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="colors" value={Color.COLORLESS} defaultChecked={searchTerms.colors.indexOf(Color.COLORLESS) > -1} type="checkbox" onChange={event => this.onMultiCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        <abbr className="card-symbol card-symbol-C" title="one colorless mana">{`C`}</abbr>
                                        Colorless
                                    </label>
                                </div>
                            </fieldset>

                            <fieldset>
                                <legend className="visuallyhidden">Additional color options</legend>
                                <div className="form-row-content-band">
                                    <label className="advanced-search-checkbox" htmlFor="colors_multicolored">
                                        <input name="requiresMulticolored" id="requiresMulticolored" defaultChecked={!!searchTerms.requiresMulticolored} type="checkbox" onChange={event => this.onCheckboxChange(event.currentTarget.name, event.currentTarget.checked)} />
                                        Require multicolored
                                    </label>
                                    <label className="advanced-search-checkbox" htmlFor="excludeUnselectedColors">
                                        <input name="excludeUnselectedColors" id="excludeUnselectedColors" defaultChecked={!!searchTerms.excludeUnselectedColors} type="checkbox" onChange={event => this.onCheckboxChange(event.currentTarget.name, event.currentTarget.checked)}  />
                                        Excluded unselected
                                    </label>
                                    <label className="advanced-search-checkbox" htmlFor="allowPartialColorMatch">
                                        <input name="allowPartialColorMatch" id="allowPartialColorMatch" defaultChecked={!!searchTerms.allowPartialColorMatch} type="checkbox" onChange={event => this.onCheckboxChange(event.currentTarget.name, event.currentTarget.checked)} />
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
                                <input name="mana" id="mana" className="form-input short" placeholder="Any mana symbols, e.g. “{W}{W}”" type="text" value={searchTerms.mana} onChange={event => this.onFieldChange(event.currentTarget.name, event.currentTarget.value)} />
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
                                        <input name="formats" value="standard" type="checkbox" onChange={event => this.onMultiCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        Standard
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="formats" value="frontier" type="checkbox" onChange={event => this.onMultiCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        Frontier
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="formats" value="modern" type="checkbox" onChange={event => this.onMultiCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        Modern
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="formats" value="legacy" type="checkbox" onChange={event => this.onMultiCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        Legacy
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="formats" value="commander" type="checkbox" onChange={event => this.onMultiCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        Commander
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="formats" value="vintage" type="checkbox" onChange={event => this.onMultiCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        Vintage
                                    </label>
                                </div>
                            </fieldset>

                            <fieldset>
                                <legend className="visuallyhidden">Additional desired formats</legend>
                                <div className="form-row-content-band">
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="formats" value="future" type="checkbox" onChange={event => this.onMultiCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        Future Standard
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="formats" value="pauper" type="checkbox" onChange={event => this.onMultiCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        Pauper
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="formats" value="penny" type="checkbox" onChange={event => this.onMultiCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        Penny
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="formats" value="1v1" type="checkbox" onChange={event => this.onMultiCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        1v1 Cmdr.
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="formats" value="duel" type="checkbox" onChange={event => this.onMultiCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
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
                                        <input name="commanderIdentity" id="false" value={Color.WHITE} type="checkbox" onChange={event => this.onMultiCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        <abbr className="card-symbol card-symbol-W" title="one white mana">{`W`}</abbr>
                                        White
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="commanderIdentity" id="false" value={Color.BLUE} type="checkbox" onChange={event => this.onMultiCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        <abbr className="card-symbol card-symbol-U" title="one blue mana">{`U`}</abbr>
                                        Blue
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="commanderIdentity" id="false" value={Color.BLACK} type="checkbox" onChange={event => this.onMultiCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        <abbr className="card-symbol card-symbol-B" title="one black mana">{`B`}</abbr>
                                        Black
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="commanderIdentity" id="false" value={Color.RED} type="checkbox" onChange={event => this.onMultiCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        <abbr className="card-symbol card-symbol-R" title="one red mana">{`R`}</abbr>
                                        Red
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="commanderIdentity" id="false" value={Color.GREEN} type="checkbox" onChange={event => this.onMultiCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        <abbr className="card-symbol card-symbol-G" title="one green mana">{`G`}</abbr>
                                        Green
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="commanderIdentity" id="false" value={Color.COLORLESS} type="checkbox" onChange={event => this.onMultiCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
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
                                {/* <input name="sets" defaultValue={searchTerms.sets.map(set => set.name)} type="hidden" /> */}
                                <Select 
                                    name="sets" 
                                    value={searchTerms.sets.length > 0 ? searchTerms.sets : ''}
                                    placeholder="Enter a set name or choose from the list"
                                    options={this.props.sets} 
                                    valueKey="code"
                                    labelKey="name"
                                    onChange={event => this.onMultiCheckboxChange('sets', event)}  
                                />
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
                                        <input name="rarities" id="false" value="c" type="checkbox" onChange={event => this.onMultiCheckboxChange(event.currentTarget.name, event.currentTarget.value)}  />
                                        Common
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="rarities" id="false" value="u" type="checkbox" onChange={event => this.onMultiCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        Uncommon
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="rarities" id="false" value="r" type="checkbox" onChange={event => this.onMultiCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
                                        Rare
                                    </label>
                                    <label className="advanced-search-checkbox small-columns">
                                        <input name="rarities" id="false" value="m" type="checkbox" onChange={event => this.onMultiCheckboxChange(event.currentTarget.name, event.currentTarget.value)} />
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
                                <input name="artist" id="artist" placeholder="Any artist name, e.g. “Terese”" className="form-input short" type="text" value={searchTerms.artist} onChange={event => this.onFieldChange(event.currentTarget.name, event.currentTarget.value)} />
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
                                <input name="flavor" id="flavor" className="form-input" placeholder="Any flavor text, e.g. “Lemurs?”" type="text" value={searchTerms.flavor} onChange={event => this.onFieldChange(event.currentTarget.name, event.currentTarget.value)} />
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
                                <input name="lore" id="lore" className="form-input" placeholder="Any text, especially names. e.g. “Hanna”" type="text" value={searchTerms.lore} onChange={event => this.onFieldChange(event.currentTarget.name, event.currentTarget.value)} />
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
                                    <input name="showAllPrints" id="showAllPrints" defaultChecked={!!searchTerms.showAllPrints} type="checkbox" onChange={event => this.onCheckboxChange(event.currentTarget.name, event.currentTarget.checked)} />
                                    Show all card prints (++)
                                </label>
                            </div>

                            <div className="form-row-content-band">
                                <label className="advanced-search-checkbox" htmlFor="includeFunny">
                                    <input name="includeFunny" id="includeFunny" defaultChecked={!!searchTerms.includeFunny} type="checkbox" onChange={event => this.onCheckboxChange(event.currentTarget.name, event.currentTarget.checked)} />
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

    // private onEnter(keyCode: number) {
    //     if (keyCode === 13) {   
    //         this.buildQueryAndSearch();
    //     }
    // }

    private submitButtonClicked() {
        this.buildQueryAndSearch();
    }
    
    private onFieldChange(fieldName: string, fieldValue: string) {
        const newSearchTerms = {...this.state.searchTerms, [fieldName]: fieldValue};    
        this.setState({searchTerms: newSearchTerms});  
    }

    private onJoinerDropdownFieldChange(targetName: string, addValue: string) {        
        const field = this.state.searchTerms[targetName];        
        const fieldValue = field ? field + addValue : addValue;
        const newSearchTerms = {...this.state.searchTerms, [targetName]: fieldValue};
        this.setState({searchTerms: newSearchTerms});  
    }

    private onCheckboxChange(fieldName: string, checked: boolean) {        
        const newSearchTerms = {...this.state.searchTerms, [fieldName]: checked};    
        this.setState({searchTerms: newSearchTerms});  
    }
    
    private onMultiCheckboxChange(fieldName: string, fieldValue: any) {
        const field = this.state.searchTerms[fieldName] as any[];        
        const fieldIndex = field.indexOf(fieldValue);
        if (fieldIndex > -1) {
            field.splice(fieldIndex, 1);
        } else {
            field.push(fieldValue);
        }
        const newSearchTerms = {...this.state.searchTerms, [fieldName]: field};   
        this.setState({searchTerms: newSearchTerms});  
    }

    private buildQueryAndSearch() {
        const { searchTerms } = this.state;
        let searchQueryArray = [];
        if (searchTerms.showAllPrints) {
            searchQueryArray.push('++');
        }
        if (searchTerms.name) {
            searchQueryArray.push(this.splitWords(searchTerms.name.split(' ')));
        }
        if (searchTerms.oracle) {
            searchQueryArray.push(this.splitWords(searchTerms.oracle.split(' '), 'o:'));
        }
        if (searchTerms.type) {
            searchQueryArray.push(this.splitWords(searchTerms.type.split(' '), 't:', searchTerms.allowPartialTypeMatch));
        }
        if (searchTerms.colors && searchTerms.colors.length > 0) {
            searchQueryArray.push(this.splitWords(searchTerms.colors, 'colors≥', searchTerms.allowPartialColorMatch));

            if (searchTerms.excludeUnselectedColors) {
                let excludedColors = [] as string[];
                for (let key in Color) {
                    if (!isNumber(key)) {
                        const color = Color[key];
                        if (searchTerms.colors.indexOf(color) < 0) {
                            excludedColors.push('-c≥' + color.toLowerCase());
                        }
                    }
                }
                searchQueryArray.push('(' + excludedColors.join(' AND ') + ')');
            }
        }
        if (searchTerms.requiresMulticolored) {
            searchQueryArray.push('colors≥2');
        }
        if (searchTerms.mana) {
            searchQueryArray.push(this.splitWords(searchTerms.mana.split(' '), 'mana:'));
        }
        if (searchTerms.formats && searchTerms.formats.length > 0) {
            searchQueryArray.push(this.splitWords(searchTerms.formats, 'f:'));
        }
        if (searchTerms.commanderIdentity && searchTerms.commanderIdentity.length > 0) {
            searchQueryArray.push(this.splitWords(searchTerms.commanderIdentity, 'ids≤', true));
        }
        if (searchTerms.rarities && searchTerms.rarities.length > 0) {
            searchQueryArray.push(this.splitWords(searchTerms.rarities, 'r:', true));
        }
        if (searchTerms.artist) {
            searchQueryArray.push(this.splitWords(searchTerms.artist.split(' '), 'a:'));
        }
        if (searchTerms.flavor) {
            searchQueryArray.push(this.splitWords(searchTerms.flavor.split(' '), 'ft:'));
        }
        if (searchTerms.lore) {
            searchQueryArray.push(this.splitWords(searchTerms.lore.split(' '), 'lore:'));
        }
        if (searchTerms.includeFunny) {
            searchQueryArray.push('include:extras');
        }
        const q = searchQueryArray.join(' ').trim();
        const newSearchTerms = { ...this.state.searchTerms, q, page: 1, order: SearchOrder.Name };
        
        this.props.updateSearchTerms(newSearchTerms);
        this.props.history.push('/cards/' + q);       
    }

    private splitWords(searchTerm: string[], prefix: string = '', conditional: boolean = false): string {
        let searchTerms = [] as string[];
        let inclusiveArray = [] as string[];
        let exclusiveArray = [] as string[];

        searchTerm.forEach(element => {
            if (element.startsWith('-')) {
                exclusiveArray.push('-' + prefix + element.substr(1));
            } else {
                inclusiveArray.push(prefix + element);
            }
        });

        // Turn off conditional if there's any exclusion
        conditional = conditional && exclusiveArray.length === 0;

        if (exclusiveArray.length > 1) {
            const types = conditional ? exclusiveArray.join(' OR ') :  exclusiveArray.join(' ');
            searchTerms.push('(' + types + ')');
        } else {
            searchTerms.push(exclusiveArray[0]);
        }

        if (inclusiveArray.length > 1) {
            const types = conditional ? inclusiveArray.join(' OR ') :  inclusiveArray.join(' ');
            searchTerms.push('(' + types + ')');
        } else {
            searchTerms.push(inclusiveArray[0]);
        }
        return searchTerms.join(' ');
    }
}