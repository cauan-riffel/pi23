import React from "react";

class Question{
	constructor(ask,alternatives,correct){
		this.ask=ask;
		this.alternatives=alternatives;
		this.correct=correct;
	}
}

const questions =[
	new Question("Por que é importante estabelecer métas diárias ou semanais ao trabalhar em casa?",["Não é importante, métas não são importantes.","Ajuda a manter o foco e a motivação.","Aumenta o estresse desnecessáriamente."],1),
	new Question("Quais são os possíveis desafios na comunicação no trabalho remoto?",["Comunicação clara e eficaz é sempre garantida.","dificuldades na interpretação de mensagens escritas.","Não existe nenhum desafio já que todos estão sempre online."],1),
	new Question("Como lidar com a procrastinação ao trabalhar em casa.",["ignorar a procrastinação.","identificar e enfrentar as causas da procrastinação.","Pensar nisto mais tarde."],1),
	new Question("Qual é uma prática recomendada para manter a produtividade no home office?"["Trabalhar na cama.","Ignorar pausas para maximizar o tempo de trabalho","estabelecer um horário fixo de trabalho.",2]),
	new Question("O que é importante para criar um ambiênte de trabalho ergonometro em casa?",["Usar uma cadeira pouco confortável.","Trabalhar na mesa de jantar.","Ter uma mesa e cadeira ergonômicas.",2]),
	new Question("Qual a vantagem de estabelecer limites entre a vida pessoal e profissional no home office?",["Aumentar o estresse.","Melhorar a qualidade do trabalho.","Misturar tarefas domésticas com trabalho.",1]),
	new Question("Como lidar com a solidão e o isolamento no home office?",["Ignorar os sentimentos oriundos da solidão.","Manter contato virtual com colegas e amigos.","Evitar interações sociais online."],1)
];

export default function Quiz(){




	return(
		<>
			<p></p>
		</>
	)
}
