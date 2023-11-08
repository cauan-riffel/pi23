import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {getTop} from './utils';

function App() {
  return (
    <main>
			<Navbar
				links={["Quiz","Sugestões","Sobre nós","Contato"]}
				locate={[]}
			/>
		</main>
  );
}
export default App;
