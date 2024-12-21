import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Order {
  id: string;
  products: any[];
  totalAmount: number;
  paymentDate: string;
}

interface OrderState {
  orders: Order[];
}

const initialState: OrderState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder(state, action: PayloadAction<Order>) {
      state.orders.push(action.payload);
    },
  },
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
