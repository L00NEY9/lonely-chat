import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store'
import { Dispatch } from 'react'

export const useAppDispatch: Dispatch<AppDispatch> = () => useDispatch<AppDispatch>()
