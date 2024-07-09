import { SendMssg } from '@/services/sendMssg'
import { useMutation  } from 'react-query'

const useSendMssg = () => {
	const {
		data,
		isLoading: isLoadingMssg,
		error: mssgError,
		isSuccess,
		mutate
	} = useMutation(SendMssg)
   
    
    const result = data && JSON.parse(data);

	return {
		data:result,
		mutate,
		isSuccess,
		isLoadingMssg,
		mssgError
	}
}

export default useSendMssg
