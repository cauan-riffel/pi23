import React,{ useState } from 'react';
import './App.css';

//import {getTop} from './utils';

import Navbar from './components/navBar/Navbar';
import MainData from './components/mainData/MainData';
import Carrousel from './components/Carrousel/Carrousel';

function App() {

	const [showM,changeShow]=useState(null);

  return (
		<>
			<Navbar
				links={["Quiz","Sugestões","Sobre nós","Contato"]}
				locate={[]}
			/>
			<main>
				<MainData
					id={"Paulinho dos testes"}
					image={"1"}
					title={"let's go test it"}
					subTitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente natus reiciendis commodi cumque labore aspernatur aut impedit, voluptas quaerat possimus eveniet ipsa dolorem harum vero provident minus quod rerum alias!"}
					mainContent={"a"}
					showContent={changeShow}
					alt='asd'

				/>
				<MainData
					id={"Paulinho dos testes"}
					image={"2"}
					title={"let's go test it"}
					subTitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente natus reiciendis commodi "}
					mainContent={"a"}
					showContent={changeShow}
					button
					alt='asd'
					reversed
					backGroundColor={"rgba(67, 98, 238, 0.2)"}
					/>
				<MainData
					id={"Paulinho dos testes"}
					image={"3"}
					title={"let's go test it"}
					subTitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente natus reiciendis commodi cumque labore aspernatur aut impedit, voluptas quaerat possimus eveniet ipsa dolorem harum vero provident minus quod rerum alias!"}
					mainContent={"a"}
					showContent={changeShow}
					button
					alt='asd'
					/>
				<MainData
					id={"Paulinho dos testes"}
					image={"4"}
					title={"let's go test it"}
					subTitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente natus reiciendis commodi cumque labore aspernatur aut impedit, voluptas quaerat possimus eveniet ipsa dolorem harum vero provident minus quod rerum alias"}
					mainContent={"a"}
					showContent={changeShow}
					button
					alt='asd'
					reversed
					backGroundColor={"#FF847F26"}
				/>
				<MainData
					id={"Paulinho dos testes"}
					image={"5"}
					title={"let's go test it"}
					subTitle={"a"}
					mainContent={"a"}
					showContent={changeShow}
					button
					alt='asd'
					imageInTop
					centered
					backGroundColor={"#8566F1"}
				/>
				<MainData
					id={"Paulinho dos testes"}
					image={"6"}
					title={"let's go test it"}
					subTitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente natus reiciendis commodi cumque labore aspernatur aut impedit, voluptas quaerat possimus eveniet ipsa dolorem harum vero provident minus quod rerum alias"}
					mainContent={"a"}
					showContent={changeShow}
					button
					alt='asd'

				/>
				<MainData
					id={"Paulinho dos testes"}
					image={"7"}
					title={"let's go test it"}
					subTitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente natus reiciendis commodi cumque labore aspernatur aut impedit, voluptas quaerat possimus eveniet ipsa dolorem harum vero provident minus quod rerum alias"}
					mainContent={"a"}
					showContent={changeShow}
					button
					alt='asd'

					reversed
				/>
				<MainData
					id={"Paulinho dos testes"}
					image={"8"}
					title={"let's go test it"}
					subTitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente natus reiciendis commodi cumque labore aspernatur aut impedit, voluptas quaerat possimus eveniet ipsa dolorem harum vero provident minus quod rerum alias"}
					mainContent={"a"}
					showContent={changeShow}
					button
					alt='asd'

				/>
				<MainData
					id={"Paulinho dos testes"}
					image={"9"}
					title={"let's go test it"}
					subTitle={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat molestias ut rem reiciendis numquam nihil velit mollitia quia, cumque voluptatibus quisquam. Sint in dicta, accusamus debitis sunt tempore officiis dolorem!"}
					mainContent={"a"}
					showContent={changeShow}
					button
					alt='asd'

					reversed
				/>
				<Carrousel
					images={["1","2"]}
					names={["Cauan Riffel","Cristian Solutchak"]}
					descriptions={["Paulinho da hornet","Gordinho da startap"]}
				/>
			</main>
		</>
  );
}
export default App;
