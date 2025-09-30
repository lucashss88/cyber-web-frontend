import { useAuth } from '../hooks/useAuth'
import { Navigate } from 'react-router-dom'
import { ReactNode } from 'react'

interface ProtectedRouteProps {
  children: ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isSignedIn, isLoaded } = useAuth()

  if (!isLoaded) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  if (!isSignedIn) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}

export default ProtectedRoute