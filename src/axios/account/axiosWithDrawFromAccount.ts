import axios from 'axios'

export async function withDrawFromAccount() {
	await axios.post(
		'http://192.168.0.153:8080/app/auth/withdraw',
		{},
		{
			headers: { 'Content-Type': 'application/json' },
			withCredentials: true,
		}
	)
}
