import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uislice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Create the Redux store
export const store = configureStore({
    reducer: {
        ui: uiReducer,
    },
});

// TypeScript types for Redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed hooks for using Redux in your components
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;