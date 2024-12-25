import { AppRoute } from '../../consts';
import { Route } from '../../types/route';

type AccountLink = {
  Icon: string;
  Route: Route;
  Label: string;
};

type AccountLinks = { [key: string]: AccountLink };

const AccountLinks: AccountLinks = {
  Orders: {
    Icon: '#icon-bag',
    Route: AppRoute.Orders,
    Label: 'Мои заказы',
  },
  MyPurchases: {
    Icon: '#icon-shopping-cart',
    Route: AppRoute.MyPurchases,
    Label: 'Мои покупки',
  },
};

export const CoachLinks = [AccountLinks.Orders];
export const CustomerLinks = [AccountLinks.MyPurchases];
