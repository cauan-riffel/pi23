import React,{ useState } from 'react';
import './App.css';

import Navbar from './components/navBar/Navbar';
import MainData from './components/mainData/MainData';
import Carrousel from './components/Carrousel/Carrousel';
import Footer from './components/Footer/Footer';
import Suggest from './components/Suggest/Suggest';
import Modal from './components/Modal/Modal';
import Quiz from './components/Quiz/Quiz';

function App() {

	const [showM,changeShow]=useState({child:null,show:false});


  return (
		<>
			<Navbar
				links={["Quiz","Sugestões","Sobre nós","Contato"]}
				locate={["quiz","suggest","carrousel","footer"]}
			/>
			<main>
				<MainData
					id={"mc1"}
					image={"1"}
					title={"O <span id='gradient'>equilíbrio</span> perfeito entre vida e trabalho"}
					subTitle={"Descubra a fórmula para alcançar o equilíbrio perfeito entre vida e trabalho e viva uma experiência extraordinária em todas as áreas da sua vida."}
					alt='asd'
				/>
				<MainData
					id={"mc2"}
					image={"2"}
					title={"O que é <span id='gradient'>Home Office?</span>"}
					subTitle={"O Home Office, ou trabalho remoto, é uma forma de trabalho em que os profissionais executam suas atividades diretamente de suas casas, sem a necessidade de estarem fisicamente presentes em um escritório tradicional. Essa modalidade tem ganhado popularidade nos últimos anos, oferecendo flexibilidade, liberdade e uma série de benefícios tanto para os trabalhadores quanto para as empresas."}
					mainContent={
						<>
							<h1>Teste de Modal!</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae blanditiis possimus vero quod harum, rem beatae, dolorem atque aliquam quae eum sunt suscipit totam tempore porro accusantium voluptatibus laboriosam. Officia?</p>
						</>
					}
					showContent={changeShow}
					alt='asd'
					reversed
					backGroundColor={"rgba(67, 98, 238, 0.2)"}
				/>
				<MainData
					id={"mc3"}
					image={"3"}
					title={"História do Home Office: <span id='gradient'>Trabalhando de Casa ao Longo dos Tempos!</span>"}
					subTitle={"Explore a história fascinante do Home Office, desde suas origens até o cenário atual. Descubra os benefícios, desafios e tendências desse modo de trabalho flexível e produtivo. Bem-vindo ao mundo do Home Office!"}
					mainContent={
						<>

						</>
					}
					showContent={changeShow}
					alt='asd'
				/>
				<MainData
					id={"mc4"}
					image={"4"}
					title={"Decifrando as <span id='gradient'>diferenças</span>: Home Office, Trabalho Híbrido e Remoto"}
					subTitle={"Entenda as diferenças entre o Home Office, Trabalho Híbrido e Remoto, e descubra qual modalidade se adequa melhor às suas necessidades. Explore as características distintas de cada uma, os benefícios que oferecem e as melhores práticas para se adaptar a essas formas flexíveis de trabalho. "}
					mainContent={
						<>

						</>
					}
					showContent={changeShow}
					alt='asd'
					reversed
					backGroundColor={"#FF847F26"}
				/>
				<MainData
					id={"quiz"}
					image={"5"}
					subTitle={"Teste seus conhecimentos sobre Home Office com nosso quiz! Descubra o quanto você sabe sobre essa forma de trabalho flexível e produtiva. Desafie-se com perguntas divertidas e informativas, e torne-se um especialista no assunto. Aproveite para aprender e se divertir enquanto explora o mundo do Home ."}
					mainContent={
						<>
							<Quiz />
						</>
					}
					showContent={changeShow}
					alt='asd'
					imageInTop
					centered
					backGroundColor={"#8566F1"}
				/>
				<MainData
					id={"mc6"}
					image={"6"}
					title={"Pra quem é <span id='gradient'>recomendado?</span>"}
					subTitle={"Explore a história fascinante do Home Office, desde suas origens até o cenário atual. Descubra os benefícios, desafios e tendências desse modo de trabalho flexível e produtivo. Bem-vindo ao mundo do Home Office!Explore a história fascinante do Home Office, desde suas origens até o cenário atual. Descubra os benefícios, desafios e tendências desse m"}
					mainContent={
						<>

						</>
					}
					showContent={changeShow}
					alt='asd'
				/>
				<MainData
					id={"mc7"}
					image={"7"}
					title={"Cuidados Essenciais: <span id='gradient'>casa e saúde integral</span>"}
					subTitle={"Aqui você encontrará informações e dicas valiosas sobre os cuidados essenciais para promover a saúde integral em sua casa. Desde a manutenção do ambiente físico até estratégias para preservar o bem-estar mental, nosso objetivo é ajudá-lo a criar um lar que seja um."}
					mainContent={
						<>

						</>
					}
					showContent={changeShow}
					alt='asd'

					reversed
					backGroundColor={"#6953D359"}
				/>
				<MainData
					id={"mc8"}
					image={"8"}
					title={"<span id='gradient'>Mulheres</span> no Home Office:<span id='gradient'> Desafios e Resiliência</span>"}
					subTitle={"Aqui você encontrará informações e dicas valiosas sobre os cuidados essenciais para promover a saúde integral em sua casa. Desde a manutenção do ambiente físico até estratégias para preservar o bem-estar mental, nosso objetivo é ajudá-lo a criar um lar que seja."}
					mainContent={
						<>

						</>
					}
					showContent={changeShow}
					alt='asd'
				/>
				<MainData
					id={"mc9"}
					image={"9"}
					title={"<span id='gradient'>Afinal</span>, o Home Office é para <span id='gradient'>todos?</span>"}
					subTitle={"Aqui você encontrará informações e dicas valiosas sobre os cuidados essenciais para promover a saúde integral em sua casa. Desde a manutenção do ambiente físico até estratégias para preservar o bem-estar mental, nosso objetivo é ajudá-lo a criar um lar que seja um verdadeiro refúgio de equilíbrio e harmonia. verdadeiro refúgio de equilíbrio e harmonia."}
					mainContent={
						<>

						</>
					}
					showContent={changeShow}
					alt='asd'

					reversed
					backGroundColor={"#FF847F26"}
				/>
				<Carrousel
					id={"carrousel"}
					names={["Cauan Riffel","Cristian Solutchak","Bruna Czarnobay","Vinicius Felicio","Maria Sievert","Rosemara Tacca"]}
					descriptions={["Magrão do frontend","Gordinho da startap","Integrante do PI3 de 2023","Baiano Profissional, prêmio nobel 2023","Integrante do PI3 de 2023","Integrante do PI3 de 2023"]}
					backGroundColors={["rgb(230, 249, 255)"]}
				/>
				<Suggest />
				<Footer
					id={"footer"}
					phone={["+55 (49) 99254-8547","+55 (54) 99824-7648"]}
					email={["homeoffice@icloud.com"]}
					location={["3891 Concórdia - Centro, Santa Catarina 89710-000"]}
					socialMedias={{instagram:"",facebook:"",linkedin:"",gmail:""}}
				/>
			</main>
			<Modal show={showM.show} content={showM.child} changeShow={changeShow}/>
		</>
  );
}
export default App;
