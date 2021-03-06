import fgInput from './components/UIComponents/Inputs/formGroupInput';
import DropDown from './components/UIComponents/Dropdown';
import Loader from './components/UIComponents/Loader';
import BackButton from './components/UIComponents/BackButton';
import FormButtons from './components/UIComponents/FormButtons';
import GoToAddPage from './components/UIComponents/Buttons/GoToAddPage';
/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(Vue) {
    Vue.component('fg-input', fgInput);
    Vue.component('drop-down', DropDown);
    Vue.component('loader', Loader);
    Vue.component('back-button', BackButton);
    Vue.component('go-to-add-page', GoToAddPage);
    Vue.component('form-buttons', FormButtons);
  },
};

export default GlobalComponents;
