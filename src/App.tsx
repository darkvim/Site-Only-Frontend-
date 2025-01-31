import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Account } from './pages/account/Account'
import { Api } from './pages/api/Api'
import { Authenticate } from './pages/auth/login/Authenticate'
import { Register } from './pages/auth/register/Register'
import { Home } from './pages/home/Home'
import { Library } from './pages/library/Library'
import { News } from './pages/news/News'
import { Posts } from './pages/posts/Posts'

export function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/api' element={<Api />}></Route>
				<Route path='/library' element={<Library />} />
				<Route path='/news' element={<News />} />
				<Route path='/posts' element={<Posts />} />
				<Route path='/account' element={<Account />} />
				<Route path='/register' element={<Register />} />
				<Route path='/authenticate' element={<Authenticate />} />
			</Routes>
		</Router>
	)
}
