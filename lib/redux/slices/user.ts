import { createSlice } from '@reduxjs/toolkit'
import { UserProps } from '@/utils/types/redux'

const initialState: UserProps = {
    id: '',
    email: '',
    firstName: '',
    lastName: ''
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, { payload: { email, firstName, lastName, id } }) => {
            state.id = id
            state.email = email
            state.firstName = firstName
            state.lastName = lastName
        },
        removeUser: state => {
            state.id = initialState.id
            state.email = initialState.email
            state.firstName = initialState.firstName
            state.lastName = initialState.lastName
        }
    }
})
export const { setUser, removeUser } = userSlice.actions
export default userSlice.reducer
