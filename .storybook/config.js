import { configure, addDecorator } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs/vue';
import { withInfo } from 'storybook-addon-vue-info';

import Vue from 'vue';
import Vuex from 'vuex';
import Decorator from './Decorator.vue';
Vue.use(Vuex);

// Import all files ending in *.stories.js
const req = require.context('../components', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
addDecorator(withKnobs);
addDecorator(withInfo);
addDecorator(story => ({
  components: { Decorator },
  render(h) {
    return (
      <decorator>
        <story slot='story' />
      </decorator>
    );
  }
}));
