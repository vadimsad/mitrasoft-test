import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
	return (
		<div className='container d-flex flex-column'>
			<Header />
			<div className='flex-grow-1'>
				<Main />
			</div>
			<Footer />
		</div>
	);
}

export default App;
