import * as React from 'react';
import { CardSymbols } from './cardSymbols';

interface OracleProps {
    oracleText: string;
    oracleClass: string;
}

interface TextFragment {
    line: string;
    isItalicized: boolean;
}

export const OracleText: React.StatelessComponent<OracleProps> = ({oracleText, oracleClass}) => {
    return (
        <div className={oracleClass}>
            {/* Split the Oracle text into separate lines */}
            {oracleText.split('\n').map((line, lineKey) => {
                const textFragments = [] as TextFragment[];
                
                // If there's an ability word, italicize it
                if (line.indexOf('\u2014') > -1) {
                    const ability = line.substring(0, line.indexOf('\u2014') - 1);
                    const textLine = {
                        line: ability,
                        isItalicized: true
                    } as TextFragment;
                    textFragments.push(textLine);
                    line = line.substring(line.indexOf('\u2014') - 1);
                }

                // This should only run once, but I have a feeling 
                // there's at least one card with reminder text twice in the same line
                while (line.indexOf('(') > -1) {
                    // Get everything up to the open parens
                    const textLine = {
                        line: line.substring(0, line.indexOf('(') - 1),
                        isItalicized: false
                    } as TextFragment;
                    line = line.substring(line.indexOf('(') - 1);
                    textFragments.push(textLine);

                    // Get everything up to the closing parens
                    const reminderLine = {
                        line: line.substring(0, line.indexOf(')') + 1),
                        isItalicized: true
                    } as TextFragment;
                    line = line.substring(line.indexOf(')') + 1);
                    textFragments.push(reminderLine);
                }
                
                textFragments.push({
                    line: line,
                    isItalicized: false
                } as TextFragment);

                return (
                    <p key={lineKey}>
                    {textFragments.map((content, contentKey) => {
                        if (content.isItalicized) {
                            return (
                                <i key={contentKey}>
                                    <CardSymbols content={content.line} cardName={contentKey.toString()} />
                                </i>
                            );
                        } else {
                            return (
                                <text key={contentKey}>
                                    <CardSymbols content={content.line} cardName={contentKey.toString()} />
                                </text>
                            );
                        }
                    })}
                    </p>
                );
            })}
        </div>
    );
};