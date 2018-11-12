import React from 'react';
import addons from '@storybook/addons';

import Markup from './component';

addons.register('storybook/markup', api => {
  addons.addPanel('storybook/markup/panel', {
    title: 'Mark up',
    render: () => <Markup channel={addons.getChannel()} api={api} />,
  })
});