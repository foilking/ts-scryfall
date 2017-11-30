import * as React from 'react';

export const NoCards: React.StatelessComponent<{}> = () => {
    return (
        <div className="search-empty">
            <div className="inner-flex">
            <svg aria-hidden="true" focusable="false" className="search-empty-status" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M5 0v20l10 10 10-10v-20h-20zm18 19.172l-8 8-8-8v-17.172h16v17.172zm-3-11.172h-10v2h10v-2z" /></svg>

            <h1>No cards found</h1>
            <p>
                Your search didn’t find any cards.
                Adjust your terms or try one of the links below:
            </p>
            <p>
                <a className="button-primary js-back-link" href="/">Go Back</a>
                <a className="button-primary" href="/reference">Syntax Guide</a>
                <a className="button-primary" href="/advanced">Advanced Search</a>
            </p>
            </div>
        </div>
    );
};