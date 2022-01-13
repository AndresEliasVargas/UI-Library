import Tooltip from './ninja-ui/tooltip';
import Dropdown from './ninja-ui/dropdown';
import Tabs from './ninja-ui/tabs';
import Snackbar from './ninja-ui/snackbar';

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

// Snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');
let message = 'You clicked me :)';
button.addEventListener('click', () => {
  snackbar.show(message);
});