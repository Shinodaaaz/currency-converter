import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  isAuth: boolean
}

const getInitialAuthState = (): AuthState => {
  const storedIsAuth = localStorage.getItem('isAuth')
  return {
    isAuth: storedIsAuth === 'true',
  }
}

const initialState: AuthState = getInitialAuthState()

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ login: string; password: string }>) {
      const { login, password } = action.payload

      if (login === 'demo' && password === 'demo') {
        state.isAuth = true
        localStorage.setItem('isAuth', 'true')
      } else {
        state.isAuth = false
        localStorage.removeItem('isAuth')
      }
    },
    logout(state) {
      state.isAuth = false
      localStorage.removeItem('isAuth')
    },
  },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
