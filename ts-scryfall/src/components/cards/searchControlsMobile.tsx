import * as React from 'react';
import { SearchTerms, SearchOrder, SearchOrderFormat } from '../../model';
import { CardFormat } from '../../common/constants/cardFormats';

interface SortMobileProps {
    searchTerms: SearchTerms;
    cardFormat: CardFormat;
    resultCount: number;
    hasMore: boolean;
    fetchFilteredCards: (searchTerms: SearchTerms) => void;
    changeListDisplay: (cardFormat: CardFormat) => void;
}

interface SortMobileState {
    showViewOptions: boolean;
}

{/* TODO: Make this not static */}
export class SearchControlsMobile extends React.Component<SortMobileProps, SortMobileState> {
    constructor(props: SortMobileProps) {
        super(props);

        this.state = {
            showViewOptions: false
        };
    }
    public render() {
        // resultCount, searchTerms, hasMore, 
        const { cardFormat, searchTerms, hasMore, resultCount } = this.props;
        const viewOptionsStyle = {
            display: this.state.showViewOptions ? 'block' : 'none'
        };
        const lastPage = resultCount / 175 + 1;
        return (
            <text>
                <div className="search-controls-mobile">
                    <div className="inner-flex">
                        <div className="search-controls-mobile-block">
                            <span aria-hidden="true" className={`${searchTerms.page > 1 ? 'button-primary' : 'button-disabled'} button-icon-center`} onClick={event => this.updatePage(1)}>
                                <svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M18 4.438l-1.375-1.438-12.625 12 12.563 12 1.437-1.406-11.094-10.594 11.094-10.562zm12 0l-1.375-1.438-12.625 12 12.563 12 1.437-1.406-11.094-10.594 11.094-10.562zM2 3h-1.66v24h1.66z" /></svg>
                                <span className="vh">First Page</span>
                            </span>        
                            <span aria-hidden="true" className={`${searchTerms.page > 1 ? 'button-primary' : 'button-disabled'} button-icon-left`} onClick={event => this.updatePage(searchTerms.page - 1)}>
                                <svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M20.625 3l-12.625 12 12.563 12 1.437-1.406-11.094-10.594 11.094-10.562z" /></svg>
                                Prev
                            </span>    
                        </div>
                        <div className="search-controls-mobile-block">
                            <button name="button" type="button" className="mq-short js-search-mobile-ops" onClick={event => this.showViewOptions()}>
                                <div className="button-primary button-icon-center">
                                    <svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M15 0c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15zm0 28c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zm-8-15c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm8 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm8 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z" /></svg>
                                </div>
                            </button>      
                            <button name="button" type="button" className="mq-wide js-search-mobile-ops" onClick={event => this.showViewOptions()}>
                                <div className="button-primary">
                                    View Options
                                    <svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M15 0c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15zm0 28c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zm-8-15c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm8 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm8 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z" /></svg>
                                </div>
                            </button>    
                        </div>
                        <div className="search-controls-mobile-block">
                            <span aria-hidden="true" className={`${hasMore ? 'button-primary' : 'button-disabled'}`} onClick={event => this.updatePage(searchTerms.page + 1)}>
                                Next
                                <svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M9.375 3l12.625 12-12.562 12-1.438-1.406 11.094-10.594-11.094-10.562z" /></svg>
                            </span>
                            <span aria-hidden="true" className={`${hasMore ? 'button-primary' : 'button-disabled'} button-icon-center`} onClick={event => this.updatePage(lastPage)}>
                                <svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.438l1.375-1.438 12.625 12-12.563 12-1.437-1.406 11.094-10.594-11.094-10.562zm-12 0l1.375-1.438 12.625 12-12.563 12-1.437-1.406 11.094-10.594-11.094-10.562zM28 3h1.66v24h-1.66z" /></svg>
                                <span className="vh">Last Page</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="search-controls-mobile-options" style={viewOptionsStyle}>
                    <div className="inner-flex">
                
                        <div className="search-controls-mobile-options-block">
                            <label htmlFor="as">View as</label>
                            <select name="as" id="as" className="button-select js-search-option" defaultValue={cardFormat.toString()} onChange={event => this.changeListDisplay(event.currentTarget.value as CardFormat)} >
                                <option value="Image">Images</option>
                                <option value="List">Pricelist</option>
                                <option value="Full">Full</option>
                            </select>
                        </div>
                    
                        <div className="search-controls-mobile-options-block">
                            <label htmlFor="order">Sort by</label>
                            <select name="order" id="order" className="button-select js-search-option" onChange={event => this.orderChange(event.currentTarget.value as SearchOrder)} value={searchTerms.order}>
                                {Object.keys(SearchOrder).filter(key => isNaN(Number(SearchOrder[key]))).map((key, keyIndex) => {
                                    return (
                                        <option value={SearchOrder[key]} key={key}>{SearchOrderFormat[key]}</option>
                                    );
                                })}
                            </select>
                        </div>
                
                    </div>
                </div>
            </text>
        );
    }
    
    private updatePage (page: number) {
        const newSearchTerms = {...this.props.searchTerms, page};
        this.props.fetchFilteredCards(newSearchTerms);
    }
    
    private orderChange (order: SearchOrder) {        
        const newSearchTerms = {...this.props.searchTerms, order};
        this.props.fetchFilteredCards(newSearchTerms);
    }

    private changeListDisplay (cardFormat: CardFormat) {
        this.props.changeListDisplay(cardFormat);
    }

    private showViewOptions() {
        const showViewOptions = !this.state.showViewOptions;
        this.setState({ showViewOptions: showViewOptions });
    }
}