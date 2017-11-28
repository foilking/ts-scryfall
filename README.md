This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# TS-Scryfall
A rebuild of Scryfall.com, using TypeScript, React, and Redux to build on top of Scryfall's API.

## Table of Contents

- [Baseline Features](#baseline-features)
- [Additional Features](#additional-features)
  - [Deck Building](#deck-building)
- [Missing Pieces](#missing-pieces)

## Baseline Features
- [X] Card Results page
  - [X] Display of cards in search results
    - [X] Image
    - [X] Pricelist
    - [X] Full
  - [X] Sorting cards
  - [X] Paging through results
- [X] Card Details page
  - [X] Card Image
  - [X] Card Details
  - [X] Card Printings (see [Missing Pieces](#missing-pieces))
  - [X] Toolbox
  - [X] Purchase Links
  - [X] MTGO Purchase Links
  - [X] Copy-Paste
  - [ ] Notes and rules (see [Missing Pieces](#missing-pieces))
- [X] Header card search
- [ ] Advanced search page
  - [X] Card Name
  - [X] Oracle Text with symbols
  - [X] Type Line with partial matching
  - [X] Colors
  - [X] Mana Cost with symbols
  - [ ] Stats
  - [X] Formats
  - [X] Commander
  - [ ] Sets and Blocks
  - [X] Rarity
  - [ ] Criteria
  - [ ] Prices
  - [X] Artist
  - [X] Flavor Text
  - [X] Lore Finder
  - [X] Preferences
- [X] Syntax reference page
- [X] Set listing page
  - [X] Set name and symbol
  - [X] Display sub-sets of a set
  - [X] Set block
  - [X] Number of cards in a set
  - [X] Release date
  - [X] Sorting
- [X] Set Details page
  - [X] Set Header (see [Missing Pieces](#missing-pieces))
  - [X] Display of cards in set
    - [X] Image
    - [X] Pricelist
    - [X] Full
  - [X] Sorting cards
- [ ] Random card page
- [X] Header search functionality

## Additional Features

### Deck Building
To get a better feel of Redux and state management, I am working on functionality to create decks. This will replace Scryfall's "Saved Cards" feature, as this is just a more advanced form of it.

## Missing Pieces

The following pieces of the original Scryfall site aren't in TS-Scryfall:

- Notes and rules information for individual cards

  - Scryfall's API doesn't return the notes and rules information when requesting a card via /cards/:setCode/:collectorNumber

- Listing out different prints of a card on card prints sidebar
  
  - Scryfall's API doesn't give a list of different prints for a card when searching. In order to get this list, we'd have to do a secondary query for each card.

- SVG images for some sets

  - Scryfall uses SVG paths to display different set symbols. There were two options to have this functionality on TS-Scryfall: keep a lookup of the set code and the path value or link to an image on Scryfall by using the set code. The former would need to be updated every time a set was given a set symbol and the latter would have broken images for some set codes (e.g. TSB, some promo sets). Because of how small this issue is to me, I opted for the latter.



