import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
Router.prototype.goBack = function() {
  window.history.go(-1);
};
const Login = resolve => require(['@/components/login/login'], resolve);
const Register = resolve =>
  require(['@/components/register/register'], resolve);
const Home = resolve => require(['@/components/home/home'], resolve);
const Loan = resolve => require(['@/components/loan/loan'], resolve);
const ConfirmCard = resolve =>
  require(['@/components/confirmCard/confirmCard'], resolve);
const ConfirmCardRes = resolve =>
  require(['@/components/confirmCard/confirmCardRes'], resolve);
const Detection = resolve =>
  require(['@/components/detection/detection'], resolve);
const PerfectUserInfo = resolve =>
  require(['@/components/perfectUserInfo/perfectUserInfo'], resolve);
const FamilyInfo = resolve =>
  require(['@/components/familyInfo/familyInfo'], resolve);
const WorkInfo = resolve =>
  require(['@/components/workInfo/workInfo'], resolve);
const AddLink = resolve => require(['@/components/addLink/addLink'], resolve);
const AddBankCard = resolve =>
  require(['@/components/addBankCard/addBankCard'], resolve);
const CompleteCredit = resolve =>
  require(['@/components/completeCredit/completeCredit'], resolve);
const Advance = resolve => require(['@/components/advance/advance'], resolve);
const RepayPlan = resolve =>
  require(['@/components/repayPlan/repayPlan'], resolve);
export default new Router({
  routes: [
    {
      path: '*',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/loan',
      name: 'loan',
      component: Loan
    },
    {
      path: '/confirmCard',
      name: 'confirmCard',
      component: ConfirmCard
    },
    {
      path: '/confirmCardRes',
      name: 'confirmCardRes',
      component: ConfirmCardRes
    },
    {
      path: '/detection',
      name: 'detection',
      component: Detection
    },
    {
      path: '/perfectUserInfo',
      name: 'perfectUserInfo',
      component: PerfectUserInfo
    },
    {
      path: '/familyInfo',
      name: 'familyInfo',
      component: FamilyInfo
    },
    {
      path: '/workInfo',
      name: 'workInfo',
      component: WorkInfo
    },
    {
      path: '/addLink',
      name: 'addLink',
      component: AddLink
    },
    {
      path: '/addBankCard',
      name: 'addBankCard',
      component: AddBankCard
    },
    {
      path: '/completeCredit',
      name: 'completeCredit',
      component: CompleteCredit
    },
    {
      path: '/advance',
      name: 'advance',
      component: Advance
    },
    {
      path: '/repayPlan',
      name: 'repayPlan',
      component: RepayPlan
    }
  ]
});
