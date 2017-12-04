import { actionTypes } from '../common/constants/actionTypes';
import { Deck, Card, CardInDeck, DeckFormat } from '../model/index';

export const initialState: Deck = {
    id: 1,
    isActive: true,
    isCurrent: true,
    name: 'My Deck',
    cards: [
      {
        card: {
          object: 'card',
          id: '5410254f-cf9d-46c2-acea-07298ae65924',
          multiverse_ids: [
            380190
          ],
          mtgo_id: 52501,
          name: 'Jace, Architect of Thought',
          uri: 'https://api.scryfall.com/cards/ddm/1',
          scryfall_uri: 'https://scryfall.com/card/ddm/1?utm_source=api',
          layout: 'normal',
          highres_image: true,
          image_uris: {
            small: 'https://img.scryfall.com/cards/small/en/ddm/1.jpg?1510051347',
            normal: 'https://img.scryfall.com/cards/normal/en/ddm/1.jpg?1510051347',
            large: 'https://img.scryfall.com/cards/large/en/ddm/1.jpg?1510051347',
            png: 'https://img.scryfall.com/cards/png/en/ddm/1.png?1510051347',
            art_crop: 'https://img.scryfall.com/cards/art_crop/en/ddm/1.jpg?1510051347',
            border_crop: 'https://img.scryfall.com/cards/border_crop/en/ddm/1.jpg?1510051347'
          },
          cmc: 4,
          type_line: 'Legendary Planeswalker — Jace',
          oracle_text: '+1: Until your next turn, whenever a creature an opponent controls attacks, it gets -1/-0 until end of turn.\n−2: Reveal the top three cards of your library. An opponent separates those cards into two piles. Put one pile into your hand and the other on the bottom of your library in any order.\n−8: For each player, search that player\'s library for a nonland card and exile it, then that player shuffles his or her library. You may cast those cards without paying their mana costs.',
          mana_cost: '{2}{U}{U}',
          loyalty: '4',
          colors: [
            'U'
          ],
          color_identity: [
            'U'
          ],
          legalities: {
            standard: 'not_legal',
            frontier: 'not_legal',
            modern: 'legal',
            pauper: 'not_legal',
            legacy: 'legal',
            penny: 'not_legal',
            vintage: 'legal',
            duel: 'legal',
            commander: 'legal',
            '1v1': 'legal',
            future: 'not_legal'
          },
          reserved: false,
          reprint: true,
          set: 'ddm',
          set_name: 'Duel Decks: Jace vs. Vraska',
          set_uri: 'https://api.scryfall.com/cards/search?q=%2B%2Be%3Addm',
          set_search_uri: 'https://api.scryfall.com/cards/search?q=%2B%2Be%3Addm',
          scryfall_set_uri: 'https://scryfall.com/sets/ddm?utm_source=api',
          prints_search_uri: 'https://api.scryfall.com/cards/search?order=set&q=%2B%2B%21%22Jace%2C+Architect+of+Thought%22',
          collector_number: '1',
          digital: false,
          rarity: 'Mythic',
          artist: 'Igor Kieryluk',
          frame: '2003',
          full_art: false,
          border_color: 'black',
          timeshifted: false,
          colorshifted: false,
          futureshifted: false,
          usd: '2.23',
          tix: '7.00',
          eur: '2.65',
          related_uris: {
            gatherer: 'http://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=380190',
            tcgplayer_decks: 'http://decks.tcgplayer.com/magic/deck/search?contains=Jace%2C+Architect+of+Thought&page=1&partner=Scryfall',
            edhrec: 'http://edhrec.com/route/?cc=Jace%2C+Architect+of+Thought',
            mtgtop8: 'http://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Jace%2C+Architect+of+Thought'
          },
          purchase_uris: {
            amazon: 'https://www.amazon.com/gp/search?ie=UTF8&index=toys-and-games&keywords=Jace%2C+Architect+of+Thought&tag=scryfall-20',
            ebay: 'http://rover.ebay.com/rover/1/711-53200-19255-0/1?campid=5337966903&icep_catId=19107&icep_ff3=10&icep_sortBy=12&icep_uq=Jace%2C+Architect+of+Thought&icep_vectorid=229466&ipn=psmain&kw=lg&kwid=902099&mtid=824&pub=5575230669&toolid=10001',
            tcgplayer: 'http://store.tcgplayer.com/magic/duel-decks-jace-vs-vraska/jace-architect-of-thought?partner=Scryfall',
            magiccardmarket: 'https://www.cardmarket.com/Magic/Products/Singles/Duel+Decks%3A+Jace+vs.+Vraska/Jace%2C+Architect+of+Thought?referrer=scryfall',
            cardhoarder: 'https://www.cardhoarder.com/cards/52501?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall',
            card_kingdom: 'https://www.cardkingdom.com/catalog/item/193778?partner=scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall',
            mtgo_traders: 'http://www.mtgotraders.com/deck/ref.php?id=52501&referral=scryfall',
            coolstuffinc: 'http://www.coolstuffinc.com/main_search.php?pa=searchOnName&page=1&q=Jace%2C+Architect+of+Thought&resultsPerPage=50&utm_source=scryfall'
          },
          edhrec_rank: 1201
        } as Card,
        quantity: 1
      } as CardInDeck
    ],
    formats: [
      {
        name: 'standard',
        isLegal: false
      },
      {
        name: 'frontier',
        isLegal: false
      },
      {
        name: 'modern',
        isLegal: true
      },
      {
        name: 'pauper',
        isLegal: false
      },
      {
        name: 'legacy',
        isLegal: true
      },
      {
        name: 'penny',
        isLegal: false
      },
      {
        name: 'vintage',
        isLegal: true
      },
      {
        name: 'duel',
        isLegal: true
      },
      {
        name: 'commander',
        isLegal: true
      },
      {
        name: '1v1',
        isLegal: true
      },
      {
        name: 'future',
        isLegal: false
      }
    ]
} as Deck;

export const deckReducer = (state: Deck = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.ADD_CARD_TO_DECK:
            return handleAddCardToDeck(state, action.payload as Card);
        case actionTypes.REMOVE_CARD_FROM_DECK:
            return handleRemoveCardFromDeck(state, action.payload as Card);
        default:
            return state;
    }
};

const handleAddCardToDeck = (deck: Deck, card: Card) => {    
    if (!deck.cards) {
        deck.cards = [] as CardInDeck[];
    }
    let cardInDeck = deck.cards.find((c) => c.card === card);
    if (cardInDeck) {
        deck = {...deck, cards: deck.cards.map((c, key) => 
            c.card === card ? {...c, quantity: c.quantity + 1} : c
        )};
    } else {
        cardInDeck = {card: card, quantity: 1};
        deck.cards = [...deck.cards, cardInDeck];
    }
    validateDeckLegal(deck, cardInDeck);
    return deck;
};

const handleRemoveCardFromDeck = (deck: Deck, card: Card) => {   
    if (deck.cards) {
        let cardInDeck = deck.cards.find((c) => c.card === card);
        if (cardInDeck) {
            if (cardInDeck.quantity === 1) {
                deck = {...deck, cards: deck.cards.filter((c) => c.card !== card)};
            } else {
                deck = {...deck, cards: deck.cards.map((c, key) => 
                    c.card === card ? {...c, quantity: c.quantity - 1} : c
                )};
            }
            validateDeckLegal(deck, cardInDeck);
        }
    }
    return deck;
};

const validateDeckLegal = (deck: Deck, cardInDeck: CardInDeck) => {
    // Some cards break the rules on how many you can have in a deck.
    // Here we're filtering those cards out.
    const excludeCardsThatAllowGreaterMultiples = deck.cards.filter((c) => {
        let typeLine = '';
        let oracleText = '';
        const card = c.card;
        // TODO: Make this check to see if we should use card_faces a property on the Card object so we don't have to write this long check every time.
        if ((card.layout === 'transform' || card.layout === 'double_faced_token' || card.layout === 'flip' || card.layout === 'split') && card.card_faces) {
            const cardFront = card.card_faces[0];
            typeLine = cardFront.type_line;
            oracleText = cardFront.oracle_text;
        } else {
            typeLine = card.type_line;
            oracleText = card.oracle_text;
        }
        return !(typeLine.indexOf('Basic') > -1 || oracleText.indexOf('A deck can have any number of cards named') > -1);
    });
    
    // Constructed decks can have only 4 of any one card that don't break the quantity rule.
    const isValidConstructedDeck = excludeCardsThatAllowGreaterMultiples
        .every((c) => c.quantity <= 4);
    
    // Highlander decks can have only 1 of any one card that don't break the quantity rule.
    const isValidHighlanderDeck = excludeCardsThatAllowGreaterMultiples
        .every((c) => c.quantity === 1);
    
    const formats = [] as DeckFormat[];

    // We can pull this out because every card has all the formats in there legalities
    const legalities = Object.keys(cardInDeck.card.legalities);

    // Figure out if the deck is legal
    deck.cards.forEach(c => {
        legalities.map((legality, key) => {    
            // Figure out if the card is legal
            let isLegal = (c.card.legalities[legality] === 'legal' 
                || (c.card.legalities[legality] === 'restricted' && c.quantity <= 1));
            
            // If the format is a highlander format, make sure the full deck is also highlander legal
            if (legality === 'duel' || legality === 'commander' || legality === '1v1') {
                isLegal = isLegal && isValidHighlanderDeck;
            } else {
                isLegal = isLegal && isValidConstructedDeck;
            }
                                
            const format = formats.find((f) => f.name === legality);
            if (format) {                  
                format.isLegal = format.isLegal && isLegal;
            } else {
                formats.push({ name: legality, isLegal: isLegal});
            }
        });
    });
    // Replace the formats, as the past state doesn't affect the current decks legality in formats
    deck.formats = formats;
};