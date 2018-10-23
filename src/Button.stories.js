import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { withInfo } from '@storybook/addon-info';
import { color } from '@storybook/addon-knobs/react';

storiesOf('Button', module)
    .addWithJSX('with background', withInfo(`description of the component`) (() => <Button bg="palegoldenrod">Hello world</Button>))
    .addWithJSX('with background 2', withInfo(`description of the component`) (() => <Button bg={color('bg', 'green', 'group1')}>Hello world2</Button>));
