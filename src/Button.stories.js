import React from 'react';
import {storiesOf} from '@storybook/react';
import {Button} from './Button';
import { color, text, boolean } from '@storybook/addon-knobs/react';


storiesOf('Button', module)
    .addWithJSX('with background 2', () => (
        <Button
            disabled={boolean('disabled', false, 'Disable')}
            bg={color('bg', 'purple', 'BG Color')}
            onClick={function () {
                alert("Clicked button");
            }}
        >
            {text('text', 'Hello world', 'Text')}
        </Button>
    ));
