import * as React from 'react';
import { Link } from 'react-router-dom';
import { Set } from '../../model';

interface Props {
    sets: Set[];
    fetchSets: () => void;
}

export class SetsPage extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
        this.props.fetchSets();
        document.title = 'All Sets';
    }

    public render() {
        const { sets } = this.props;
        let mappedSets = [] as Set[];
        let setsCount = 0;
        if (sets) {
            setsCount = sets.length;
            sets.filter((set) => set.parent_set_code == null).forEach((set) => {
                mappedSets.push(set);
                sets.filter((childSet) => childSet.parent_set_code === set.code).forEach((childSet) => {
                    mappedSets.push(childSet);
                });
            });
        }        
        
        return (
            <div className="checklist-wrapper">
                <div className="search-controls">
                    <div className="inner-flex">
                        <div className="search-controls-options" data-component="search-controls-form">
                        {setsCount} sets
                        <label htmlFor="order">sorted by</label>
                        <select name="order" id="order" className="button-select js-search-option" data-other-param="type"><option value="">Release Date</option>
                    <option value="set">Name</option>
                    <option value="block">Block/Group</option>
                    <option value="cards">No. of Cards</option></select>
                        <label htmlFor="type">of type</label>
                        <select name="type" id="type" className="button-select js-search-option" data-other-param="order"><option value="">Any</option>
                    <option value="cube">Cube</option>
                    <option value="archenemy">Archenemy</option>
                    <option value="box">Box</option>
                    <option value="commander">Commander</option>
                    <option value="conspiracy">Conspiracy</option>
                    <option value="core">Core</option>
                    <option value="duel_deck">Duel Deck</option>
                    <option value="expansion">Expansion</option>
                    <option value="from_the_vault">From The Vault</option>
                    <option value="funny">Funny</option>
                    <option value="masterpiece">Masterpiece</option>
                    <option value="masters">Masters</option>
                    <option value="memorabilia">Memorabilia</option>
                    <option value="planechase">Planechase</option>
                    <option value="premium_deck">Premium Deck</option>
                    <option value="promo">Promo</option>
                    <option value="starter">Starter</option>
                    <option value="token">Token</option>
                    <option value="treasure_chest">Treasure Chest</option>
                    <option value="vanguard">Vanguard</option></select>
                        </div>
                    </div>
                </div>
                <table className="checklist">
                    <thead>
                        <tr>
                            <th><span className="visuallyhidden">Symbol</span></th>
                            <th>Name</th>
                            <th>Block/Group</th>
                            <th>Cards</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mappedSets && mappedSets.map((set, key) => {
                            return (
                                <tr className={set.parent_set_code ? 'indent' : ''} key={key}>
                                    <td className="set-symbol">
                                        <Link to={`/set/${set.code}`} >
                                            <img aria-hidden="true" className="" src={set.icon_svg_uri} />
                                        </Link>            
                                    </td>
                                    <td>
                                        <Link to={`/set/${set.code}`} >
                                            {set.name} <small>{set.code.toUpperCase()}</small>
                                        </Link>            
                                    </td>
                                    <td>
                                        <Link to={`/set/${set.code}`} >Block</Link>
                                    </td>
                                    <td><Link to={`/set/${set.code}`} >{set.card_count}</Link></td>
                                    <td><Link to={`/set/${set.code}`} >Release Date</Link></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}