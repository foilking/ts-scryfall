import * as React from 'react';
import { Link } from 'react-router-dom';
import { Set } from '../../model';
import { SetOrder, SetType } from '../../common/constants/setFormats';
import { SetSortControls } from './setSortControls';

interface Props {
    sets: Set[];
    fetchSets: () => void;
}

interface State {
    indent: boolean;
    setOrder: SetOrder;
    setType: SetType;
}

export class SetsPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.changeListDisplay = this.changeListDisplay.bind(this);
        this.state = {
            setOrder: SetOrder.ReleaseDate,
            setType: SetType.Any,
            indent: true
        };
        this.props.fetchSets();
        document.title = 'All Sets' + ' | TS Scryfall';
    }

    public render() {
        const { sets } = this.props;
        const { setOrder, setType, indent } = this.state;
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
            <div>
                <SetSortControls setsCount={setsCount} setOrder={setOrder} setType={setType} changeListDisplay={this.changeListDisplay} />
                <div className="checklist-wrapper">
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
                                    <tr className={indent && set.parent_set_code ? 'indent' : ''} key={key}>
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
                                            <Link to={`/set/${set.code}`} >{set.block ? set.block : '—'}</Link>
                                        </td>
                                        <td><Link to={`/set/${set.code}`} >{set.card_count}</Link></td>
                                        <td><Link to={`/set/${set.code}`} >{set.released_at ? set.released_at : '—'}</Link></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <SetSortControls setsCount={setsCount} setOrder={setOrder} setType={setType} changeListDisplay={this.changeListDisplay} />                
            </div>
        );
    }
    
    private changeListDisplay(setOrder: SetOrder, setType: SetType) {
        const indent = setType === SetType.Any && setOrder !== SetOrder.Name;
        const newState = {...this.state, indent, setOrder, setType};
        this.setState(newState);
    }
}