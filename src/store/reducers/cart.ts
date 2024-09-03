import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Rest } from '../../pages/Home'

type CartState = {
  items: Rest[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Rest>) => {
      state.items.push(action.payload)
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer
