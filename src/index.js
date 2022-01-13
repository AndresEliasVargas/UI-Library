import Tooltip from './ninja-ui/tooltip';
import Dropdown from './ninja-ui/dropdown';
import Tabs from './ninja-ui/tabs';

//Tooltip 
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

// Dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

// Tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

