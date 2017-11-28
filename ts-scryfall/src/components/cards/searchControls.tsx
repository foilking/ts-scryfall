import * as React from 'react';
import { SearchTerms, SearchOrder, SearchOrderFormat } from '../../model';
import { CardFormat } from '../../common/constants/cardFormats';

interface SortProps {
    searchTerms: SearchTerms;
    cardFormat: CardFormat;
    resultCount: number;
    hasMore: boolean;
    fetchFilteredCards: (searchTerms: SearchTerms) => void;
    changeListDisplay: (cardFormat: CardFormat) => void;
}

export class SearchControls extends React.Component<SortProps, {}> {
    constructor(props: SortProps) {          
        super(props);
        this.orderChange = this.orderChange.bind(this);
        this.updatePage = this.updatePage.bind(this);
    }

    public render() {
        const { resultCount, searchTerms, hasMore, cardFormat } = this.props;
        
        let cardsShown = '';
        if (hasMore) {
            cardsShown = `${(searchTerms.page - 1) * 175 + 1} - ${searchTerms.page * 175} of ${resultCount.toLocaleString()}`;
        } else {
            cardsShown = resultCount ? resultCount.toString() : '0';
        }        
        return (
            <div className="search-controls">
                <div className="inner-flex">

                    <div className="search-controls-options" data-component="search-controls-form">
                        {cardsShown} cards
                        <label htmlFor="as">as</label>
                        <select name="as" id="as" className="button-select mq-short" defaultValue={cardFormat.toString()} onChange={event => this.changeListDisplay(event.currentTarget.value as CardFormat)}>
                            <option value="Image">Images</option>
                            <option value="List">Pricelist</option>
                            <option value="Full">Full</option>
                        </select>

                        <button className={`button-conjoined-left button-icon-left js-search-as mq-wide ${cardFormat === CardFormat.Image ? 'checked' : ''}`} onClick={event => this.changeListDisplay(CardFormat.Image)}>
                            {cardFormat === CardFormat.Image &&
                                <svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M15 0c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15zm0 28c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zm-3-8.906l-4.562-5.094-1.438 1.375 6 6.625 12-12.562-1.406-1.438-10.594 11.094z" /></svg>
                            }
                            Images
                        </button>        
                        <button className={`button-conjoined-middle button-icon-left js-search-as mq-wide ${cardFormat === CardFormat.List ? 'checked' : ''}`} onClick={event => this.changeListDisplay(CardFormat.List)}>
                            {cardFormat === CardFormat.List &&
                                <svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M15 0c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15zm0 28c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zm-3-8.906l-4.562-5.094-1.438 1.375 6 6.625 12-12.562-1.406-1.438-10.594 11.094z" /></svg>
                            }
                            Pricelist
                        </button>        
                        <button className={`button-conjoined-right button-icon-left js-search-as mq-wide ${cardFormat === CardFormat.Full ? 'checked' : ''}`} onClick={event => this.changeListDisplay(CardFormat.Full)}>
                            {cardFormat === CardFormat.Full &&
                                <svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M15 0c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15zm0 28c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zm-3-8.906l-4.562-5.094-1.438 1.375 6 6.625 12-12.562-1.406-1.438-10.594 11.094z" /></svg>
                            }
                            Full
                        </button>
                        <label htmlFor="order">sorted by</label>
                        <select name="order" id="order" className="button-select js-search-option" data-other-param="as" data-other-param-value="full" onChange={event => this.orderChange(event.currentTarget.value as SearchOrder)} value={searchTerms.order}>
                            {Object.keys(SearchOrder).filter(key => isNaN(Number(SearchOrder[key]))).map((key, keyIndex) => {
                                return (
                                    <option value={SearchOrder[key]} key={key}>{SearchOrderFormat[key]}</option>
                                );
                            })}
                        </select>
                    </div>

                    <div className="search-controls-pagination">
                        <span aria-hidden="true" className={`${searchTerms.page > 1 ? 'button-primary' : 'button-disabled'} button-icon-center`} onClick={event => this.updatePage(1)}>
                            <svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M18 4.438l-1.375-1.438-12.625 12 12.563 12 1.437-1.406-11.094-10.594 11.094-10.562zm12 0l-1.375-1.438-12.625 12 12.563 12 1.437-1.406-11.094-10.594 11.094-10.562zM2 3h-1.66v24h1.66z" /></svg>                    
                            <span className="vh">First Page</span>
                        </span>        
                        <span aria-hidden="true" className={`${searchTerms.page > 1 ? 'button-primary' : 'button-disabled'} button-icon-left`} onClick={event => this.updatePage(searchTerms.page - 1)}>
                            <svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M20.625 3l-12.625 12 12.563 12 1.437-1.406-11.094-10.594 11.094-10.562z" /></svg>
                            Previous
                        </span>
                        <span aria-hidden="true" className={`${hasMore ? 'button-primary' : 'button-disabled'}`} onClick={event => this.updatePage(searchTerms.page + 1)}>
                            Next 175
                            <svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M9.375 3l12.625 12-12.562 12-1.438-1.406 11.094-10.594-11.094-10.562z" /></svg>
                        </span>        
                        <span aria-hidden="true" className={`${hasMore ? 'button-primary' : 'button-disabled'} button-icon-center`} data-track="{&quot;category&quot;:&quot;Search Controls&quot;,&quot;action&quot;:&quot;Paginate&quot;,&quot;label&quot;:&quot;Last&quot;}">
                            <svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.438l1.375-1.438 12.625 12-12.563 12-1.437-1.406 11.094-10.594-11.094-10.562zm-12 0l1.375-1.438 12.625 12-12.563 12-1.437-1.406 11.094-10.594-11.094-10.562zM28 3h1.66v24h-1.66z" /></svg>
                            <span className="vh">Last Page</span>
                        </span>
                    </div>

                </div>
            </div>
        );
    }
    
    private orderChange (order: SearchOrder) {        
        const newSearchTerms = {...this.props.searchTerms, order};
        this.props.fetchFilteredCards(newSearchTerms);
    }

    private updatePage (page: number) {
        const newSearchTerms = {...this.props.searchTerms, page};
        this.props.fetchFilteredCards(newSearchTerms);
    }

    private changeListDisplay (cardFormat: CardFormat) {
        this.props.changeListDisplay(cardFormat);
    }
}