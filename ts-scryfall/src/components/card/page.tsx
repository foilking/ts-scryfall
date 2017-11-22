import * as React from 'react';
import { Card } from '../../model';
import { CardFullLayout } from '../../common/components/card';

interface Props {
    setCode: string;
    collectorNumber: string;
    fetchCardByCodeAndCollectorNumber: (setCode: string, collectorNumber: string) => void;
    location: Location;
    card: Card;
    addCardToDeck: (card: Card) => void;
}

interface State {
}

export class CardPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);        
        this.props.fetchCardByCodeAndCollectorNumber(this.props.setCode, this.props.collectorNumber);
    }

    public render() {
        const { card, addCardToDeck } = this.props;
        if (card && card.name) {            
            document.title = card.name + ' | TS Scryfall';
            return (
                <div id="main" className="main">
                    <CardFullLayout card={card} addCardToDeck={addCardToDeck}/>
                    <div className="toolbox">
                        <div className="inner-flex">
                            <div className="toolbox-column">
                                <h6>Toolbox</h6>
                                <ul className="toolbox-links">
                                    <li>
                                        <a className="button-primary button-icon-left" rel="nofollow" href={card.related_uris.edhrec}>
                                            <svg aria-hidden="true" focusable="false" className="" width="386" height="351" viewBox="0 0 386 351" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero" fill="#000"><path d="M192.8 87.7L155.5 105l-27.7 12.8.2 147.2 64.8-30.3 64.8 30.3V117.7l-38-17.6" /><path d="M126.3 43.2l10.7-5 29.3 62.8-10.8 5M248.8 38.2l10.5 5.1-29.1 62.7-10.6-4.9" /><circle cx="124.2" cy="24.7" r="19.1" /><circle cx="261.8" cy="24.7" r="19.1" /><path d="M104.3 177.6l-80.8 37.6v98.6l80.8-37.7M281.7 177.5l80.9 37.7v98.5l-80.9-37.6M.1 350.6L193 260.7l192.8 89.7M142.6 39.9l60.7-33.2-.9 14.8L256.6.7l-60.5 33.1 1.2-13.5" /></g></svg>
                                            Card analysis on EDHREC
                                        </a>        
                                    </li>
                                    <li>
                                        <a className="button-primary button-icon-left" rel="nofollow" href={`https://deckstats.net/decks/search/?_source=scryfall&amp;search_cards%5B%5D=${card.name}`}>
                                            <svg aria-hidden="true" focusable="false" className="" width="578" height="586" viewBox="0 0 578 586" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero" fill="#000"><path d="M.894.146H131.96v585.59H.894M446.096 123.434H577.16v462.313H446.095M221.414 270.692H352.48v315.07H221.414" /></g></svg>
                                            Search DeckStats for this card
                                        </a>        
                                    </li>
                                    <li>
                                        <a className="button-primary button-icon-left" rel="nofollow" href={card.related_uris.mtgtop8}>
                                            <svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M29 8l-14-7-14 7 14 7 14-7zm-14-4.764l9.528 4.764-9.528 4.764-9.528-4.764 9.528-4.764zm7 10.5l2.528 1.264-9.528 4.764-9.528-4.764 2.528-1.264-2.236-1.118-4.764 2.382 14 7 14-7-4.764-2.382-2.236 1.118zm0 7l2.528 1.264-9.528 4.764-9.528-4.764 2.528-1.264-2.236-1.118-4.764 2.382 14 7 14-7-4.764-2.382-2.236 1.118z" /></svg>
                                            Search MTGTop8 for this card
                                        </a>        
                                    </li>
                                    <li>
                                        <a className="button-primary button-icon-left" rel="nofollow" href={card.related_uris.tcgplayer_decks}>
                                            <svg aria-hidden="true" focusable="false" className="" width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path d="M6.275 1H3.083c-.562 0-1 .447-1 1v11c0 .553.448 1 1 1h8.834c.562 0 1-.447 1-1V2c0-.553-.448-1-1-1h-1.862l.684 3.15c.032.096-.01.175-.126.235-.084.044-.184.066-.3.066-.052 0-.09 0-.116-.005L7.358 5.64l.82 4.054c.025.064.01.124-.045.18-.054.056-.137.094-.246.114-.065.008-.11.012-.135.012-.187 0-.323-.05-.407-.15L4.29 4.897c-.07-.097-.048-.185.068-.265.097-.06.206-.09.33-.09.025 0 .063.004.115.012l2.746-1.41L6.274 1zM1 1.007C1 .45 1.447 0 2 0h11c.553 0 1 .45 1 1.007v12.986C14 14.55 13.553 15 13 15H2c-.553 0-1-.45-1-1.007V1.007z" fill="#000" fillRule="evenodd" /></svg>
                                            TCGplayer decks with this card
                                        </a>        
                                    </li>
                                    <li>
                                        <a className="button-primary button-icon-left" rel="nofollow noreferrer" href={card.related_uris.gatherer}>
                                            <svg aria-hidden="true" focusable="false" className="" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M15 5c-4.094-3.531-11.125-4-14-4v24c2.875 0 9.906.469 14 4 4.094-3.531 11.125-4 14-4v-24c-2.875 0-9.906.469-14 4zm-1 20.906c-3.624-2.037-8.035-2.677-11-2.848v-19.99c4.69.429 8.085 1.265 11 3.69v19.148zm7-21.787c.635-.192 1.305-.352 2-.49v6.371l-1-1.333-1 1.333v-5.881zm6 18.94c-2.965.171-7.376.811-11 2.848v-19.148c.938-.781 1.936-1.383 3-1.874v11.115l3-4 3 4v-12.705c.643-.086 1.303-.163 2-.227v19.991z" /></svg>

                                            View on Gatherer
                                        </a>          
                                    </li>
                                </ul>
                            </div>

                            <div className="toolbox-column" id="stores">
                                <h6>Purchase Links</h6>
                                <ul className="toolbox-links">
                                    <li>
                                        <a className="button-primary button-icon-left" rel="nofollow" href={card.purchase_uris.tcgplayer}>
                                            <svg aria-hidden="true" focusable="false" className="" width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path d="M6.275 1H3.083c-.562 0-1 .447-1 1v11c0 .553.448 1 1 1h8.834c.562 0 1-.447 1-1V2c0-.553-.448-1-1-1h-1.862l.684 3.15c.032.096-.01.175-.126.235-.084.044-.184.066-.3.066-.052 0-.09 0-.116-.005L7.358 5.64l.82 4.054c.025.064.01.124-.045.18-.054.056-.137.094-.246.114-.065.008-.11.012-.135.012-.187 0-.323-.05-.407-.15L4.29 4.897c-.07-.097-.048-.185.068-.265.097-.06.206-.09.33-.09.025 0 .063.004.115.012l2.746-1.41L6.274 1zM1 1.007C1 .45 1.447 0 2 0h11c.553 0 1 .45 1 1.007v12.986C14 14.55 13.553 15 13 15H2c-.553 0-1-.45-1-1.007V1.007z" fill="#000" fillRule="evenodd" /></svg>
                                            Buy on TCGplayer
                                        </a>        
                                    </li>
                                    <li>
                                        <a className="button-primary button-icon-left" rel="nofollow" href={card.purchase_uris.card_kingdom}>
                                            <svg aria-hidden="true" focusable="false" className="" width="1345" height="1095" viewBox="0 0 1345 1095" xmlns="http://www.w3.org/2000/svg"><title>Combined Shape</title><path d="M1344.323 326.382h-106.61c-101.81 0-106.9 1.052-111.992 24.19-3.053 12.623-4.07 148.302-3.053 301.863l2.617 442.467H220.036l2.616-442.467c1.018-153.56 0-289.24-3.054-301.862-5.09-23.14-10.18-24.19-111.993-24.19H.703V.33H223.67l3.055 160.922 3.054 159.87 69.23 3.157 68.215 3.154V.33h234.167v326.052h142.536V.33h234.167v327.104l69.23-3.155 68.215-3.157 3.055-159.87L1121.65.33h222.673v326.052z" fill="#000" /></svg>
                                            Buy on Card Kingdom
                                        </a>        
                                    </li>
                                    <li>
                                        <a className="button-primary button-icon-left" rel="nofollow" href={card.purchase_uris.coolstuffinc}>
                                            <svg aria-hidden="true" focusable="false" className="" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m99.992 43.02c0.57812-13.758-32.355-20.453-33.781-22.023-0.71094-0.78125 1.6484-21.012-16.211-20.996-17.859-0.015625-15.5 20.215-16.211 20.996-1.4258 1.5664-34.355 8.2656-33.781 22.023 0.57422 13.758 18.051 6.6914 21.777 10.742 3.2617 3.543-15.277 26.23-17.352 40.633-0.67578 4.6953 0.64453 5.6055 5.207 5.6055 8.2773 0 16.176-0.003906 23.453-0.003906 3.2852 0 4.457-1.8906 6.1523-4.4922 3.7539-5.7617 8.2852-15.023 10.754-15.023 2.4648 0 7 9.2617 10.754 15.023 1.6953 2.6055 2.8633 4.4922 6.1523 4.4922 7.2734 0 15.176 0.003906 23.453 0.003906 4.5625 0 5.8828-0.91016 5.207-5.6055-2.0742-14.406-20.609-37.09-17.352-40.633 3.7266-4.0508 21.203 3.0156 21.777-10.742z" fillRule="evenodd" /></svg>
                                            Buy on CoolStuffInc
                                        </a>        
                                    </li>
                                    <li>
                                        <a className="button-primary button-icon-left" rel="nofollow" href={`https://www.cardmarket.com/Magic/Products/Singles/Eternal+Masters/${card.name}?referrer=scryfall`}>
                                            <svg aria-hidden="true" focusable="false" className="" width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><g fill="#303030" fillRule="nonzero"><path d="M4.168 14.093c-.084-.226-1-2.735-2.044-5.597C.038 2.773.094 3.14 1.18 2.73c.55-.21.592-.21.662.014.042.127.592 2.552 1.213 5.386 1.07 4.878 1.156 5.16 1.55 5.54.24.212.606.38.818.395.366 0 .366.014-.113.197-.747.296-.973.254-1.142-.17z" /><path d="M5.31 12.782c-.268-.268-.282-.465-.282-2.862 0-2.777.085-3.186.663-3.003.424.14 2.2 2.17 2.1 2.41-.126.353-.393.24-1.17-.52l-.746-.734v4.145h4.103l-.282-.366c-.17-.212-.297-.48-.297-.607s.945-1.17 2.1-2.326c1.552-1.552 2.172-2.073 2.34-2.003.128.043.213.17.185.282-.03.112-.875 1.1-1.904 2.17l-1.862 1.96.494.48c.507.493.634 1.028.254 1.17-.127.042-1.396.084-2.82.084-2.41 0-2.608-.014-2.876-.282zM3.224 5.183C2.8 3.18 2.49 1.39 2.52 1.208c.027-.268.168-.367.788-.494l.733-.17V4.69c0 2.284-.013 4.145-.027 4.145-.028 0-.38-1.65-.79-3.652z" /><path d="M7.143 6.917c-.776-.747-1.27-1.34-1.27-1.508 0-.184.692-.974 1.79-2.102l1.792-1.804-.536-.55c-.297-.31-.494-.62-.452-.705.07-.1.987-.156 2.763-.156 2.285 0 2.666.028 2.736.226.042.126.085 1.325.085 2.678 0 2.848-.07 3.003-.958 2.13l-.507-.523-1.79 1.762C9.61 7.552 8.918 8.13 8.707 8.13c-.198 0-.762-.437-1.565-1.213z" /></g></svg>
                                            Buy on MagicCardMarket
                                        </a>        
                                    </li>
                                    <li>
                                        <a className="button-primary button-icon-left" rel="nofollow" href={card.purchase_uris.amazon}>
                                            <svg aria-hidden="true" focusable="false" className="" width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zm207-115q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 .5h-10l-3-.5-2-1.5-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zm-672 21q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z" fill="red" /></svg>
                                            Buy on Amazon
                                        </a>        
                                    </li>
                                    <li>
                                        <a className="button-primary button-icon-left" rel="nofollow" href={card.purchase_uris.ebay}>
                                            <svg aria-hidden="true" focusable="false" className="" width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1757 1408l35 313q3 28-16 50-19 21-48 21h-1664q-29 0-48-21-19-22-16-50l35-313h1722zm-93-839l86 775h-1708l86-775q3-24 21-40.5t43-16.5h256v128q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5v-128h384v128q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5v-128h256q25 0 43 16.5t21 40.5zm-384-185v256q0 26-19 45t-45 19-45-19-19-45v-256q0-106-75-181t-181-75-181 75-75 181v256q0 26-19 45t-45 19-45-19-19-45v-256q0-159 112.5-271.5t271.5-112.5 271.5 112.5 112.5 271.5z" fill="red" /></svg>
                                            Buy on eBay
                                        </a>        
                                    </li>
                                </ul>
                            </div>

                            <div className="toolbox-column">
                                <h6>MTGO Purchase Links</h6>
                                <ul className="toolbox-links">
                                    <li>
                                        <a className="button-primary button-icon-left" rel="nofollow" href={card.purchase_uris.cardhoarder}>
                                            <svg aria-hidden="true" focusable="false" className="" width="15" height="12" viewBox="0 0 15 12" xmlns="http://www.w3.org/2000/svg"><path d="M1.553 4.615L6.116 9.41 3.92 4.616H1.552zM7.5 10.183l2.556-5.568H4.944L7.5 10.183zm-3.56-6.49L5.436.922h-1.92l-2.108 2.77H3.94zM8.885 9.41l4.563-4.795H11.08L8.885 9.41zm-3.88-5.718h4.993L8.503.922H6.497l-1.494 2.77zm6.055 0h2.533l-2.11-2.77H9.566l1.494 2.77zM12.09.187l2.812 3.693c.07.086.1.186.096.3-.005.112-.047.21-.125.29l-7.03 7.386c-.09.096-.203.144-.345.144-.142 0-.256-.048-.344-.144L.126 4.47c-.08-.08-.12-.178-.126-.29-.004-.114.027-.214.096-.3L2.908.188C2.996.061 3.12 0 3.282 0h8.436c.162 0 .286.063.374.188z" fill="#000" fillRule="evenodd" /></svg>
                                            Buy on Cardhoarder
                                        </a>        
                                    </li>
                                    <li>
                                        <a className="button-primary button-icon-left" rel="nofollow" href={card.purchase_uris.mtgo_traders}>
                                            <svg aria-hidden="true" focusable="false" className="" width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fillRule="evenodd"><path d="M4.267 11.99L2.56 13.7s-.206.134-.136.935c0 .014.028-.004.077-.047-.012.027-.015.04-.005.04.8-.07.896-.297.896-.297l1.356-1.928c.05.008.1.01.15.005.335-.03.582-.323.553-.657-.03-.334-.325-.58-.66-.55-.332.028-.58.322-.55.656.004.046.013.09.027.133zM11.41 11.843l1.706 1.712s.207.134.137.934c0 .013-.03-.004-.078-.047.014.026.016.04.007.04-.8-.07-.896-.298-.896-.298l-1.356-1.93c-.048.01-.1.01-.15.006-.334-.028-.58-.322-.552-.656.03-.333.323-.58.657-.55.334.028.58.322.552.656-.005.046-.014.09-.027.133zM12.17.957l-1.518 1.88s-.192.155-.038.943c.002.014.028-.006.072-.054-.01.028-.01.042-.002.04.788-.153.86-.39.86-.39l1.146-2.06c.05.004.1 0 .15-.01.33-.063.545-.382.48-.71-.063-.33-.382-.544-.71-.48-.33.064-.544.382-.48.71.01.047.022.09.04.13zM2.65.957l1.517 1.88s.192.155.04.943c-.004.014-.03-.006-.074-.054.01.028.012.042.003.04-.79-.153-.86-.39-.86-.39L2.13 1.317c-.05.004-.1 0-.15-.01-.33-.063-.545-.382-.48-.71.063-.33.38-.544.71-.48.33.064.544.382.48.71-.01.047-.023.09-.04.13z" /><path d="M7.5 0C7.036 1.5 2.857 3.5 1 3c0 4.5 2.32 10.5 6.5 12C11.68 13.5 14 7.5 14 3c-1.857.5-6.036-1.5-6.5-3zm0 13c-2.656-1.158-4.375-5.03-4.643-8.416 1.378-.1 3.495-.96 4.643-2.084 1.148 1.125 3.265 1.984 4.643 2.084C11.875 7.97 10.156 11.842 7.5 13z" fillRule="nonzero" /></g></svg>
                                            Buy on MTGO Traders
                                        </a>        
                                    </li>
                                </ul>
                                <h6>Copy-Paste</h6>
                                <ul className="toolbox-links">
                                    <li>
                                        <a className="button-primary button-icon-left" rel="nofollow" href={((card.layout === 'transform' || card.layout === 'double_faced_token') && card.card_faces) ? card.card_faces[0].image_uris.png : card.image_uris.png}>
                                            <svg aria-hidden="true" focusable="false" className="" width="12" height="15" viewBox="0 0 12 15" xmlns="http://www.w3.org/2000/svg"><path d="M0 0v15h12v-15h-12zm10.909 13.929h-9.818v-12.857h9.818v12.857zm-4.909-3.214c-.602 0-1.091.48-1.091 1.071s.489 1.071 1.091 1.071 1.091-.48 1.091-1.071-.489-1.071-1.091-1.071zm3.818-8.571h-7.636v7.5h7.636v-7.5zm-1.091 6.429h-5.455v-5.357h5.455v5.357z" /></svg>
                                            Download PNG image
                                        </a>          
                                    </li>
                                    {((card.layout === 'transform' || card.layout === 'double_faced_token') && card.card_faces ) &&
                                        <li>
                                            <a className="button-primary button-icon-left" rel="nofollow" href={card.card_faces[1].image_uris.png}>
                                                <svg aria-hidden="true" focusable="false" className="" width="12" height="15" viewBox="0 0 12 15" xmlns="http://www.w3.org/2000/svg"><path d="M0 0v15h12v-15h-12zm10.909 13.929h-9.818v-12.857h9.818v12.857zm-4.909-3.214c-.602 0-1.091.48-1.091 1.071s.489 1.071 1.091 1.071 1.091-.48 1.091-1.071-.489-1.071-1.091-1.071zm3.818-8.571h-7.636v7.5h7.636v-7.5zm-1.091 6.429h-5.455v-5.357h5.455v5.357z" /></svg>
                                                Download back image
                                            </a>          
                                        </li>
                                    }
                                    <li>
                                        <a className="button-primary button-icon-left" rel="nofollow" href="https://api.scryfall.com/cards/ema/219?format=text">
                                            <svg aria-hidden="true" focusable="false" className="" width="11" height="15" viewBox="0 0 11 15" xmlns="http://www.w3.org/2000/svg"><path d="M6 0h-6v15h11v-9.643l-5-5.357zm0 1.515l3.586 3.842h-3.586v-3.842zm4 12.414h-9v-12.857h4v5.357h5v7.5zm-8-5.357h7v-1.071h-7v1.071zm0 2.143h7v-1.071h-7v1.071zm0 2.143h7v-1.071h-7v1.071z" /></svg>
                                            Copy-pasteable text
                                        </a>        
                                    </li>
                                    <li>
                                        <a className="button-primary button-icon-left" rel="nofollow" href="https://api.scryfall.com/cards/ema/219?format=json&amp;pretty=true">
                                            <svg aria-hidden="true" focusable="false" className="" width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path d="M1.302 11.786h2.569v1.071c0 .179-.024.349-.061.515l-.035.127-.13.356-.035.073h-1.352l-.159-.02c-.591-.076-1.041-.643-1.041-1.319 0-.295.084-.575.244-.804zm3.506-9.313c0-.773.553-1.401 1.228-1.401h2.261c.161.316.261.679.261 1.071 0 1.184-.844 2.143-1.875 2.143h5.625v8.241c0 .774-.553 1.401-1.228 1.401h-6.432c.103-.334.159-.696.159-1.071v-10.383zm9.375-.33c0 .59-.422 1.071-.938 1.071h-3.91c.103-.335.159-.696.159-1.071s-.056-.736-.159-1.071h3.91c.516 0 .938.481.938 1.071zm-12.188 12.83v.027h9.085c1.2 0 2.166-1.108 2.166-2.473v-8.241c1.031 0 1.875-.959 1.875-2.143 0-1.183-.844-2.143-1.875-2.143h-7.21c-1.2 0-2.166 1.108-2.166 2.473v8.241h-2.953c-.488.438-.797 1.111-.797 1.875 0 1.239.825 2.249 1.875 2.384z" /></svg>
                                            Copy-pasteable JSON
                                        </a>        
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="row">No Card Found</div>
            );
        }
    }
}