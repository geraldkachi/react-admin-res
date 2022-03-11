import { 
  // createAsyncThunk, 
  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState
  // , AppThunk 
} from '../../../../redux-crud/src/app/store';
import { UserDataProps, UsersData } from './fetchData';

export interface CounterState {
  value: Array<UserDataProps>;
  // status: 'idle' | 'loading' | 'failed';
}


const initialState: CounterState = {
  value: UsersData,
  // status: 'idle',
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserDataProps>) => {
      // state.value.push(action.payload);
      state.value.unshift(action.payload);
    },

    deleteUser: (state, action: PayloadAction<any>) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    updateUsername: (state, action: PayloadAction<any>) => {
      state.value.map((user: any) => {
        if (user.id === action.payload.id) {
          user.username = action.payload.username;
        }
        if ((user.name === "" || user.username ) === "") return;        
      });
    }
  }
})

export const { addUser, deleteUser, updateUsername } = userSlice.actions;

export const selectUserList = (state: RootState) => state.users.value

export default userSlice.reducer