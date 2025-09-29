import { useAuth as useClerkAuth } from '@clerk/clerk-react'

export const useAuth = () => {
  const { getToken, isSignedIn, userId, isLoaded } = useClerkAuth()

  const getAuthToken = async () => {
    if (!isSignedIn) return null
    return await getToken()
  }

  return {
    getAuthToken,
    isSignedIn,
    userId,
    isLoaded
  }
}