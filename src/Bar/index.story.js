import React from 'react';
import {storiesOf} from '@kadira/storybook';
import {withKnobs, select} from '@kadira/storybook-addon-knobs';
import {StoryWrapper} from './../_lib/storyUtils.js';
import Bar from './index.js';

storiesOf('Bar', module)
    .addDecorator(withKnobs)
    .addWithInfo(
        'default',
        'The bar. May be positioned top or bottom.',
        () => {
            const position = select('Position', ['top', 'bottom'], 'top');
            return (
                <StoryWrapper>
                    <div style={{minHeight: '50vh'}}>
                        <Bar position={position}>
                            Position of this bar: {position}
                        </Bar>
                    </div>
                </StoryWrapper>
            );
        },
        {inline: true, source: false}
    );
