import { useMutation,  } from 'react-query'
import { LoginService } from  '@/services/login'

const useLogin = () => {
	const {
		data,
		isLoading: isLoadingLogin,
		error: loginError,
		isSuccess,
		mutate
	} = useMutation(LoginService)
   
    

	return {
		data,
		mutate,
		isSuccess,
		isLoadingLogin,
		loginError
	}
}

export default useLogin
