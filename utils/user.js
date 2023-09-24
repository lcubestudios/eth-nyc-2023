// @ts-ignore
export const checkUser = async (privyId) => {
	// @ts-ignore
	return await fetch(process.env.NEXT_PUBLIC_CHECK_USER_API_URL, {
		method: 'POST',
		body: JSON.stringify({
			privy_id: privyId
		})
	})
		.then((req) => req.json())
		.then((res) => {
			if (res.status_code === 200) return 'dashboard'
			else return 'register'
		})
		.catch((err) => {
			console.log(err)
			return null
		})
}

export const registerUser = async (payload) => {
	// @ts-ignore
	return await fetch(process.env.NEXT_PUBLIC_REGISTER_USER_API_URL, {
		method: 'POST',
		body: JSON.stringify(payload)
	})
		.then((req) => req.json())
		.then((res) => {
			console.log(res)
			if (res.status_code === 200) return true
			else return false
		})
		.catch((err) => {
			console.log(err)
			return null
		})
}