export const ROUTE = {
  HOME: '/',
  CART: '/cart',
  ORDER: '/order',
  ORDER_DETAIL: (orderId?: number) =>
    `/order/${orderId === undefined ? ':orderId' : orderId}`,
  ORDER_PAYMENT: (orderId?: number) =>
    `/payment/${orderId === undefined ? ':orderId' : orderId}`,
};
