import {MenuItem} from '../interfaces/appInterfaces';

export const menuItems: MenuItem[] = [
  {
    name: 'Animaciones 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animaciones 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'TextInputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  },
];