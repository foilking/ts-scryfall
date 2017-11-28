import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { SearchTerms, SearchOrder } from '../model';

interface HeaderProps {
  searchTerms: SearchTerms;
  fetchFilteredCards: (searchTerms: SearchTerms, getAll: boolean) => void;
}
interface State {
  isMenuOpen: boolean;
}

export class Header extends React.Component<HeaderProps & RouteComponentProps<HeaderProps>, State> {
  constructor(props: HeaderProps & RouteComponentProps<HeaderProps>) {
    super(props); 
    
    this.search = this.search.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.state = {
      isMenuOpen: false
    };    
  }

  public componentWillReceiveProps() {
    if (this.state.isMenuOpen) {
      this.setState({...this.state, isMenuOpen: false});
    }
  }

  public render() {
    const { isMenuOpen } = this.state;
    const { searchTerms } = this.props;
    
    return (
      <div id="header" className="header">
        <div className="inner-flex">

          <Link to={`/`} className="header-logo" title="Back to homepage">
            <span className="vh">Scryfall</span>
            <svg aria-hidden="true" focusable="false" className="" width="460" height="460" viewBox="0 0 460 460" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-60 -58)" fill="none" fillRule="evenodd"><circle fill="#000" opacity=".09" cx="290" cy="288" r="230" /><path fill="#BC979D" d="M279.508 112.547l-.028 361.84 43.137 6.808 56.715-13.23 28.54-72.547-28.044-178.926-31.887-113.004" /><path fill="#AE7F9C" d="M281.57 100.633l-2.457 383.13-67.972-21.888 13.9-355.852" /><path d="M207.05 113.316v344.032S87.364 394.5 93.388 283.043C99.41 171.586 207.05 113.316 207.05 113.316z" fill="#786076" /><path d="M237.375 107.21l-30.603 4.35s-20.682 10.42-37.922 25.5c-75.19 167.948 108.332 115.1-12.725 286.69 50.647 47.86 72.293 41.137 72.293 41.137l8.957-357.676z" fill="#947A92" /><path d="M343.058 89.985c-109.36-29.303-221.77 35.597-251.073 144.957-29.303 109.36 35.597 221.77 144.957 251.073 109.36 29.303 221.77-35.597 251.073-144.957 29.303-109.36-35.597-221.77-144.957-251.073zM256.342 451.95l.276.71c1.172 3.187 3.562 5.776 6.644 7.2 3.082 1.422 6.603 1.562 9.788.387l48.355-17.774c3.184-1.175 6.706-1.035 9.787.388 3.082 1.424 5.472 4.013 6.644 7.2l.19.56c2.105 5.852-.304 12.37-5.71 15.448-93.23 22.17-187.912-30.724-217.912-121.736s14.67-189.84 102.81-227.453c5.144.502 9.544 3.91 11.32 8.762 2.578 6.977 10.317 10.55 17.3 7.99l15.73-5.803c3.186-1.176 6.707-1.036 9.79.387 3.08 1.423 5.47 4.012 6.643 7.198l.19.56c1.174 3.185 1.034 6.706-.39 9.788-1.422 3.082-4.01 5.472-7.197 6.644l-109.46 40.366c-3.187 1.172-5.777 3.562-7.2 6.644-1.422 3.082-1.562 6.603-.388 9.788l.19.56c1.172 3.186 3.562 5.775 6.643 7.198 3.082 1.423 6.603 1.563 9.788.388l80.06-29.483c3.184-1.174 6.705-1.034 9.787.388 3.082 1.423 5.472 4.013 6.644 7.2l.19.56c1.173 3.184 1.034 6.705-.39 9.787-1.422 3.08-4.01 5.47-7.197 6.643l-127.814 47.08c-3.186 1.17-5.776 3.56-7.2 6.643-1.42 3.082-1.56 6.603-.387 9.788l.19.56c1.172 3.186 3.562 5.775 6.643 7.198 3.08 1.423 6.602 1.563 9.787.388L297.72 226.4c3.184-1.175 6.705-1.036 9.787.387 3.082 1.423 5.472 4.012 6.644 7.198l.467 1.27c1.174 3.186 1.035 6.707-.388 9.79-1.424 3.08-4.014 5.47-7.2 6.643l-113 41.54c-3.187 1.172-5.777 3.562-7.2 6.644-1.422 3.08-1.562 6.603-.387 9.787l.19.56c1.17 3.185 3.56 5.775 6.643 7.198 3.08 1.423 6.603 1.562 9.787.388l51.798-19.06c3.186-1.174 6.707-1.034 9.79.39 3.08 1.422 5.47 4.01 6.643 7.197l.19.56c1.174 3.185 1.034 6.706-.39 9.788-1.422 3.083-4.01 5.473-7.197 6.644l-89.085 32.754c-3.185 1.17-5.774 3.56-7.197 6.643-1.423 3.083-1.562 6.604-.388 9.79l.19.56c1.17 3.185 3.56 5.775 6.643 7.197 3.082 1.423 6.603 1.563 9.788.388L304.563 336.3c3.185-1.173 6.706-1.034 9.788.39 3.083 1.422 5.473 4.01 6.644 7.197l.19.56c1.174 3.185 1.035 6.706-.388 9.788s-4.013 5.472-7.198 6.644l-74.954 27.54c-3.186 1.17-5.776 3.56-7.2 6.643-1.422 3.082-1.56 6.603-.387 9.788l.19.56c1.172 3.187 3.562 5.777 6.643 7.2 3.082 1.422 6.603 1.562 9.788.387l94.147-34.537c3.185-1.175 6.706-1.035 9.788.388s5.472 4.012 6.644 7.198c2.428 6.58-.893 13.887-7.447 16.384l-86.903 33.168c-3.18 1.18-5.764 3.574-7.18 6.658-1.414 3.083-1.547 6.603-.367 9.784l-.018-.09z" fill="#FFF" /></g></svg>
          </Link>
          <div className="header-search">
            <label className="visuallyhidden" htmlFor="js-header-search-field">Search for Magic cards</label>
            <input name="q" onKeyUp={event => this.search(event.keyCode, event.currentTarget.value)} defaultValue={searchTerms.q} placeholder="Search for Magic cards" maxLength={1024} type="text" />
            <button type="submit" className="visuallyhidden">
              Find Cards
            </button>
          </div>

          <button type="button" className="header-menu-button" onClick={event => this.showMenu()}>
            <svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v2h26v-2h-26zm0 12h26v-2h-26v2zm0 10h26v-2h-26v2z" /></svg>
            Menu
          </button>

          <div className={`header-utility ${isMenuOpen ? '' : 'header-utility-closed'}`}>
            <Link to={`/`} className="header-utility-link header-mobile-only">
              <svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M20.625 3l-12.625 12 12.563 12 1.437-1.406-11.094-10.594 11.094-10.562z" /></svg>
              Homepage
            </Link>
            <Link to={`/advanced`} className="header-utility-link">
              <svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M10 6h-4v2h4v-2zm14 0h-12v2h12v-2zm-22-4v26h26v-26h-26zm24 24h-22v-14h22v14zm0-16h-22v-6h22v6z" /></svg>
              Advanced
            </Link>
            <Link to={`/reference`} className="header-utility-link">
              <svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M15 0c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15zm0 28c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zm-1-4h2v-4h-2v4zm1-18c-2.958 0-5.2 1.834-5.2 5h2c0-2.041 1.389-3 3.2-3 1.598 0 3 .935 3 2 0 3.281-4 2.656-4 8h2c-.146-4.063 4-3.646 4-8 0-2.209-2.238-4-5-4z" /></svg>
              Syntax
            </Link>
            <Link to={`/sets`} className="header-utility-link">
              <svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M15 2c-3.296 5.789-5.713 13.983-15 6l4 12v8h22v-8l4-12c-9.287 7.983-11.704-.211-15-6zm-9 24v-4h18v4h-18zm18-6.324v.324h-18v-.324l-2.32-6.962c5.055 1.849 8.383-.683 11.32-6.475 2.938 5.792 6.266 8.323 11.32 6.475l-2.32 6.962z" /></svg>
              Sets
            </Link>
            <Link to={`/random`} className="header-utility-link">
              <svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M20.594 18.406l3.594 3.594h-6.188l-.341-.034c-.229.655-.569 1.256-.997 1.786.421.151.867.248 1.338.248h6.188l-3.594 3.594 1.406 1.406 6-6-6-6-1.406 1.406zm3.594-10.406l-3.594 3.594 1.406 1.406 6-6-6-6-1.406 1.406 3.594 3.594h-6.188c-2.2 0-4 1.8-4 4v10c0 1.103-.897 2-2 2h-10v2h10c2.2 0 4-1.8 4-4v-10c0-1.103.896-2 2-2h6.188zm-11.848.034c.229-.654.565-1.258.993-1.787-.419-.15-.864-.247-1.333-.247h-10v2h10l.34.034z" /></svg>
              Random
            </Link>
            <Link to={`/decks`} className="header-utility-link header-mobile-only">
              <svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M29 8l-14-7-14 7 14 7 14-7zm-14-4.764l9.528 4.764-9.528 4.764-9.528-4.764 9.528-4.764zm7 10.5l2.528 1.264-9.528 4.764-9.528-4.764 2.528-1.264-2.236-1.118-4.764 2.382 14 7 14-7-4.764-2.382-2.236 1.118zm0 7l2.528 1.264-9.528 4.764-9.528-4.764 2.528-1.264-2.236-1.118-4.764 2.382 14 7 14-7-4.764-2.382-2.236 1.118z" /></svg>
              Decks
            </Link>
          </div>

        </div>
      </div>
    );
  }

  private search(keyCode: number, q: string) {
    if (keyCode === 13) {   
      document.title = q  + ' | TS Scryfall';
      
      const newSearchTerms = { ...this.props.searchTerms, q, page: 1, order: SearchOrder.Name };
      this.props.history.push(`/cards/` + q);
      
      this.props.fetchFilteredCards(newSearchTerms, false);      
    }
  }

  private showMenu() {
    const showMenu = !this.state.isMenuOpen;
    this.setState({ isMenuOpen: showMenu });
  }

}