import { configureStore } from '@reduxjs/toolkit'
import nameSlice from './slices/name.slices'

export default configureStore({
  reducer: {
    name: nameSlice
	}
})