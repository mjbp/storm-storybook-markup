import addons from '@storybook/addons';
import { MESSAGE } from './constants';

export default {
    addWithMarkup(kind, storyFn) {
        const channel = addons.getChannel();

        const result = this.add(kind, context => {
            const story = storyFn(context);
            channel.emit(MESSAGE , { markup: story });
      
            return story;
          })
      
          return result
    }
};