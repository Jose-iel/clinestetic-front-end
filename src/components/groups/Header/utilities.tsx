import {
  AiOutlineShoppingCart,
  AiOutlineCalendar,
  AiOutlinePlusCircle
} from 'react-icons/ai';

export function renderIcon(type: number) {
  switch (type) {
    case 4:
      return <AiOutlineCalendar size={18} />;

    case 5:
      return <AiOutlinePlusCircle size={18} />;

    case 6:
      return <AiOutlineShoppingCart size={18} />;
  }
}
