import * as React from 'react';

interface SortMobileProps {

}

{/* TODO: Make this not static */}
export const SearchControlsMobile: React.StatelessComponent<SortMobileProps> = () => {
    return (
        <div className="search-controls-mobile">
            <div className="inner-flex">
                <div className="search-controls-mobile-block">
                    <span aria-hidden="true" className="button-disabled button-icon-center" data-track="{&quot;category&quot;:&quot;Search Controls&quot;,&quot;action&quot;:&quot;Paginate&quot;,&quot;label&quot;:&quot;First&quot;}">
                    <svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M18 4.438l-1.375-1.438-12.625 12 12.563 12 1.437-1.406-11.094-10.594 11.094-10.562zm12 0l-1.375-1.438-12.625 12 12.563 12 1.437-1.406-11.094-10.594 11.094-10.562zM2 3h-1.66v24h1.66z"></path></svg>

                    <span className="vh">First Page</span>
                    </span>        
                    <span aria-hidden="true" className="button-disabled button-icon-left" data-track="{&quot;category&quot;:&quot;Search Controls&quot;,&quot;action&quot;:&quot;Paginate&quot;,&quot;label&quot;:&quot;Previous&quot;}">
                    <svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M20.625 3l-12.625 12 12.563 12 1.437-1.406-11.094-10.594 11.094-10.562z"></path></svg>
                    Prev
                    </span>    
                </div>
                <div className="search-controls-mobile-block">
                    <button name="button" type="button" className="mq-short js-search-mobile-ops">
                    <div className="button-primary button-icon-center">
                        <svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M15 0c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15zm0 28c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zm-8-15c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm8 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm8 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z"></path></svg>
                    </div>
                    </button>      
                    <button name="button" type="button" className="mq-wide js-search-mobile-ops">
                    <div className="button-primary">
                        View Options
                        <svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M15 0c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15zm0 28c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zm-8-15c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm8 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm8 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z"></path></svg>

                    </div>
                    </button>    
                </div>
                <div className="search-controls-mobile-block">
                    <span aria-hidden="true" className="button-disabled" data-track="{&quot;category&quot;:&quot;Search Controls&quot;,&quot;action&quot;:&quot;Paginate&quot;,&quot;label&quot;:&quot;Next&quot;}">
                        Next
                        <svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M9.375 3l12.625 12-12.562 12-1.438-1.406 11.094-10.594-11.094-10.562z"></path></svg>
                    </span>
                    <span aria-hidden="true" className="button-disabled button-icon-center" data-track="{&quot;category&quot;:&quot;Search Controls&quot;,&quot;action&quot;:&quot;Paginate&quot;,&quot;label&quot;:&quot;Last&quot;}">
                        <svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.438l1.375-1.438 12.625 12-12.563 12-1.437-1.406 11.094-10.594-11.094-10.562zm-12 0l1.375-1.438 12.625 12-12.563 12-1.437-1.406 11.094-10.594-11.094-10.562zM28 3h1.66v24h-1.66z"></path></svg>
                        <span className="vh">Last Page</span>
                    </span>
                </div>
            </div>
        </div>
    );
}