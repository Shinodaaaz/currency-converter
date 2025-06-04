import React from 'react'
import type {ReactNode} from 'react';
import {Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import type {RootState} from '@/store/store'

type ProtectedRouteProps = {
  children: ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children}) => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth)

  return isAuth ? <>{children}</> : <Navigate to="/login"/>
}

export default ProtectedRoute
