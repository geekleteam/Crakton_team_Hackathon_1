import { apiRoutes } from './utils/apiRoutes'

export const LoginService = async (userInfo) => {
	try {
		const response = await fetch(apiRoutes.login, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
			  },
			  body: JSON.stringify(userInfo),
		})
		if (!response.ok) {
			throw new Error("Network response was not ok")
		}

		const data = await response.json()

		// Process the  data
		return data
	} catch (error) {
		console.error("Error fetching  data:", error)

		throw error
	}
}
