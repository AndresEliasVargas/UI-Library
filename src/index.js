import Tooltip from './ninja-ui/tooltip';
import Dropdown from './ninja-ui/dropdown';

//Tooltip 
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

// Dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});
