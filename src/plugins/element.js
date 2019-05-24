import Vue from 'vue';
import {
  Button,
  Input,
  Radio,
  Checkbox,
  Form,
  FormItem,
  RadioGroup,
  Select,
  Option,
  Icon,
  Message
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Button);
Vue.use(Input);
Vue.use(Radio);
Vue.use(Checkbox);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(RadioGroup);
Vue.use(Select);
Vue.use(Option);
Vue.use(Icon);
Vue.prototype.$Message = Message;
