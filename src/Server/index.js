export const getUsers = async (page) => {
  const response = await fetch(
    `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`,
  )
  if (!response.ok) {
    throw new Error('Failed to fetch users')
  }
  return await response.json()
}

export const getPositions = async () => {
  const response = await fetch(
    `https://frontend-test-assignment-api.abz.agency/api/v1/positions`,
  )
  if (!response.ok) {
    throw new Error('Failed to fetch Positions')
  }
  return await response.json()
}

export const postData = async (name, email, phone, position_id, file) => {
  const formData = new FormData()
  formData.append('position_id', position_id)
  formData.append('name', name)
  formData.append('email', email)
  formData.append('phone', phone)
  formData.append('photo', file)

  const token = await getToken()

  const response = await fetch(
    'https://frontend-test-assignment-api.abz.agency/api/v1/users',
    {
      method: 'POST',
      headers: {
        Token: token,
      },
      body: formData,
    },
  )
  if (!response.ok) {
    throw new Error('Failed to post users')
  }
  return await response.json()
}

const getToken = async () => {
  const tokenResponse = await fetch(
    'https://frontend-test-assignment-api.abz.agency/api/v1/token',
  )
  const tokenData = await tokenResponse.json()
  return tokenData.token
}
