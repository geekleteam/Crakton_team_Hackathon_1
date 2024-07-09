import { useMutation,  } from 'react-query'
import { SignupService } from  '@/services/signup'

const useSignup = () => {
	const {
		isLoading: isLoadingSignup,
		error: signupError,
		isSuccess,
		mutate
	} = useMutation(SignupService)
   
    

	return {
		mutate,
		isSuccess,
		isLoadingSignup,
		signupError
	}
}

export default useSignup
