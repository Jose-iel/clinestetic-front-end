import { BsChevronDown } from 'react-icons/bs';
import {
  AiOutlineShoppingCart,
  AiOutlineCalendar,
  AiOutlinePlusCircle
} from 'react-icons/ai';

export const menudata = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Tratamentos', path: '/tratamentos' },
  {
    id: 3,
    name: 'Cadastros',
    icon: <BsChevronDown />,
    path: '#',
    submenu: [
      { id: 4, name: 'Agenda', icon: <AiOutlineCalendar size={18} /> },
      { id: 5, name: 'Combo', icon: <AiOutlinePlusCircle size={18} /> },
      {
        id: 6,
        name: 'Procedimentos',
        icon: <AiOutlineShoppingCart size={18} />
      }
    ]
  }
];
