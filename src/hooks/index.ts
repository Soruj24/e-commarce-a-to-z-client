import type { AppDispatch } from '@/app/store';
import {  useDispatch, useSelector } from 'react-redux';
 
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = useSelector;