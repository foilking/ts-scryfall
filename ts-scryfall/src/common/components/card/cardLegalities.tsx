import * as React from 'react';
import { capitalize } from 'lodash';
import { Legalities } from '../../../model';

interface Props {
    legalities: Legalities;
}

export const CardLegalities: React.StatelessComponent<Props> = ({ legalities }) => {
    const cardLegal = Object.keys(legalities);
    const groupSize = 2;
    // Logic for the rows from here: 
    // https://stackoverflow.com/questions/34458165/how-to-surround-every-x-elements-with-a-class-using-react-js/34458452#34458452
    const rows = cardLegal.map((content, key) => {
        const legalName = legalities[content] as string;
        return (
            <div className="card-legality-item" key={key}>
                <dt>{capitalize(content)}</dt>
                <dd className={legalName.replace('_', '-')}>{capitalize(legalName.replace('_', ' '))}</dd>
            </div>
        );
    }).reduce<any[]>((r, element, index) => {
        if (index % groupSize === 0) {
            r.push([]);
        }
        r[r.length - 1].push(element);
        return r;
    }, 
    [] ).map((rowContent, key) => {
        return <div className="card-legality-row" key={key}>{rowContent}</div>;
    });
    return (
        <dl className="card-legality" >
            {rows}
        </dl>
    );
};