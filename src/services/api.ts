export const makeAuthenticatedRequest = async (url: string, token: string, method: string, body?: BodyInit) => {
  return fetch(url, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }, 
    method: method,
    body: body
  })
}