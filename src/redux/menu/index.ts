import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { getMenu } from '@/api';

// 使用该类型定义初始 state
const initialState: {
  menu_list: global_menu[];
  tabs_list: tabs_type[];
  inlineCollapsed: boolean;
  routes: global_route[];
} = {
  menu_list: [],
  tabs_list: [],
  inlineCollapsed: false,
  routes: [],
};

export const menuSlice = createSlice({
  name: 'menu',
  // `createSlice` 将从 `initialState` 参数推断 state 类型
  initialState,
  reducers: {
    setMenu: (state, action: PayloadAction<global_menu[]>) => {
      state.menu_list = action.payload;
    },
    setTabs: (state, action) => {
      const tab: tabs_type | undefined = state.menu_list.find(
        (u: global_route) => '/' + u.key === action.payload,
      );

      if (
        tab &&
        state.tabs_list.findIndex((u: tabs_type) => u?.key === tab?.key) ===
          -1 &&
        tab.key !== ''
      ) {
        state.tabs_list.push(tab);
      }
    },
    toggleCollapsed: (state) => {
      state.inlineCollapsed = !state.inlineCollapsed;
    },
    removeTab: (state, action: PayloadAction<tabs_type[]>) => {
      state.tabs_list = action.payload;
    },
    setRoutes: (state, action: PayloadAction<global_route[]>) => {
      state.routes = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getMenuList.fulfilled, (state, action) => {
      const res = action.payload;
      if (res?.code === 200) {
        state.menu_list = res?.result;
      } else {
        state.menu_list = [];
      }
    });
  },
});

export const { setMenu, setTabs, removeTab, toggleCollapsed, setRoutes } =
  menuSlice.actions;
// 选择器等其他代码可以使用导入的 `RootState` 类型
export const selectMenuList = (state: RootState) => state.menuSlice.menu_list;

export const getMenuList = createAsyncThunk(
  'menu/getMenu',
  async (): Promise<request<global_menu[]>> => {
    return await getMenu({ userName: 'admin' });
  },
);
export default menuSlice.reducer;
