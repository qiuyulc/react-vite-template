import { createSlice } from '@reduxjs/toolkit';

// 使用该类型定义初始 state
const initialState: {
  global: any;
} = {
  global: {},
};

export const globalSlice = createSlice({
  name: 'global',
  // `createSlice` 将从 `initialState` 参数推断 state 类型
  initialState,
  reducers: {},
});

// export const { setGlobalStyle, setColorPrimary } = globalSlice.actions;

export default globalSlice.reducer;
