import * as React from 'react';
import * as numberToWords from 'number-to-words';

interface Props {
    content: string;
    cardName?: string;
}

export const CardSymbols: React.StatelessComponent<Props> = ({content, cardName}) => {
    const contentSections = content.split(/(\{[A-Z0-9]?[/]?[A-Z0-9]+\})/g).filter(String);
    return (
        <text>
            {contentSections.map((contentSection, key) => {
                if (contentSection.indexOf('{') > -1) {
                    const symbolCharacter = contentSection.replace(/}/g, '').replace(/{/g, '').trim();
                    const symbolClass = `card-symbol card-symbol-${symbolCharacter.replace('/', '')}`;
                    let symbolTitle = '';
                    // TODO: Replace this with results from fetchCardSymbology and filter that way.
                    switch (symbolCharacter) {
                        case '':
                            symbolTitle = '';
                            break;
                        case 'T':
                            symbolTitle = 'tap this permanent';
                            break;
                        case 'Q':
                            symbolTitle = 'untap this permanent';
                            break;
                        case 'E':
                            symbolTitle = 'an energy counter';
                            break;
                        case 'PW':
                            symbolTitle = 'planeswalker';
                            break;
                        case 'CHAOS':
                            symbolTitle = 'chaos';
                            break;
                        case 'X':
                            symbolTitle = 'X generic mana';
                            break;
                        case 'Y':
                            symbolTitle = 'Y generic mana';
                            break;
                        case 'Z':
                            symbolTitle = 'Z generic mana';
                            break;
                        case '½':
                            symbolTitle = 'one-half generic mana';
                            break;
                        case '∞':
                            symbolTitle = 'infinite generic mana';
                            break;
                        case 'W/U':
                            symbolTitle = 'one white or blue mana';
                            break;
                        case 'W/B':
                            symbolTitle = 'one white or black mana';
                            break;
                        case 'B/R':
                            symbolTitle = 'one black or red mana';
                            break;
                        case 'B/G':
                            symbolTitle = 'one black or green mana';
                            break;
                        case 'U/B':
                            symbolTitle = 'one blue or black mana';
                            break;
                        case 'U/R':
                            symbolTitle = 'one blue or red mana';
                            break;
                        case 'R/G':
                            symbolTitle = 'one red or green mana';
                            break;
                        case 'R/W':
                            symbolTitle = 'one red or white mana';
                            break;
                        case 'G/W':
                            symbolTitle = 'one green or white mana';
                            break;
                        case 'G/U':
                            symbolTitle = 'one green or blue mana';
                            break;
                        case '2/W':
                            symbolTitle = 'two generic mana or one white mana';
                            break;
                        case '2/U':
                            symbolTitle = 'two generic mana or one blue mana';
                            break;
                        case '2/B':
                            symbolTitle = 'two generic mana or one black mana';
                            break;
                        case '2/R':
                            symbolTitle = 'two generic mana or one red mana';
                            break;
                        case '2/G':
                            symbolTitle = 'two generic mana or one green mana';
                            break;
                        case 'P':
                            symbolTitle = 'one colored mana or two life';
                            break;
                        case 'W/P':
                            symbolTitle = 'one white mana or two life';
                            break;
                        case 'U/P':
                            symbolTitle = 'one blue mana or two life';
                            break;
                        case 'B/P':
                            symbolTitle = 'one black mana or two life';
                            break;
                        case 'R/P':
                            symbolTitle = 'one red mana or two life';
                            break;
                        case 'G/P':
                            symbolTitle = 'one green mana or two life';
                            break;
                        case 'HW':
                            symbolTitle = 'one-half white mana';
                            break;
                        case 'HR':
                            symbolTitle = 'one-half red mana';
                            break;
                        case 'HW':
                            symbolTitle = 'one-half white mana';
                            break;
                        case 'W':
                            symbolTitle = 'one white mana';
                            break;
                        case 'U':
                            symbolTitle = 'one blue mana';
                            break;
                        case 'B':
                            symbolTitle = 'one black mana';
                            break;
                        case 'R':
                            symbolTitle = 'one red mana';
                            break;
                        case 'G':
                            symbolTitle = 'one green mana';
                            break;
                        case 'C':
                            symbolTitle = 'one colorless mana';
                            break;
                        case 'S':
                            symbolTitle = 'one snow mana';
                            break;
                        default:
                            const numberString = numberToWords.toWords(+symbolCharacter);
                            symbolTitle = `${numberString} generic mana`;
                            break;
                    }
                    return (
                        <abbr className={symbolClass} title={symbolTitle} key={key}>{contentSection}</abbr>
                    );
                } else {
                    return (
                        <text key={key}>{contentSection}</text>
                    );
                }
            })}
        </text>
    );
};