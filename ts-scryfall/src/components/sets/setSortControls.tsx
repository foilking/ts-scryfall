import * as React from 'react';
import { SetOrder, SetType, SetOrderFormat } from '../../common/constants/setFormats';

interface SetSortProps {
    setsCount: number;
    setOrder: SetOrder;
    setType: SetType;
    changeListDisplay: (setOrder: SetOrder, setType: SetType) => void;
}

export class SetSortControls extends React.Component<SetSortProps, {}> {
    constructor(props: SetSortProps) {
        super(props);
        this.orderChange = this.orderChange.bind(this);
        this.typeChange = this.typeChange.bind(this);
    }

    public render() {
        const { setsCount } = this.props;
        return (
            <div className="search-controls">
                <div className="inner-flex">
                    <div className="search-controls-options" data-component="search-controls-form">
                        {setsCount} sets
                    <label htmlFor="order">sorted by</label>
                        <select name="order" id="order" className="button-select" onChange={event => this.orderChange(event.currentTarget.value as SetOrder)} >
                            {Object.keys(SetOrder).filter(key => isNaN(Number(SetOrder[key]))).map((key, keyIndex) => {
                                return (
                                    <option value={SetOrder[key]} key={key}>{SetOrderFormat[key]}</option>
                                );
                            })}
                        </select>
                        <label htmlFor="type">of type</label>
                        <select name="type" id="type" className="button-select" onChange={event => this.typeChange(event.currentTarget.value as SetType)} >
                            {Object.keys(SetType).filter(key => isNaN(Number(SetType[key]))).map((key, keyIndex) => {
                                return (
                                    <option value={SetType[key]} key={key}>{SetType[key]}</option>
                                );
                            })}
                        </select>
                    </div>
                </div>
            </div>
        );
    }

    private orderChange (order: SetOrder) {
        this.props.changeListDisplay(order, this.props.setType);
    }
    
    private typeChange (type: SetType) {
        this.props.changeListDisplay(this.props.setOrder, type);
    }
}