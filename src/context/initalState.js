// import { fetchUser } from "../utils/fetchLocalStorageData";

import { fetchUser } from "../utils/fetchLocalStorageData";

const userInfo = fetchUser();

export const initialState = {
  user: userInfo,
  foodItems: null,
  //   cartShow: false,
  //   cartItems: cartInfo,
};
