import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Arivane Noronha Machado</h1>
        <h5>Engenharia Eletrônica</h5>
      </header>

      <section>
        <h2>Apresentação</h2>
        <p>
          Estudante de Engenharia Eletrônica com ênfase em Biomédica, entusiasmada em 
          trabalhar em projetos que combinem Sinais e Sistema, programação e Biomédica. 
          Atualmente, está cursando as disciplinas Processamento de Sinais e Modelagem 
          para Sistemas Biológicos para aprofundar o conhecimento na área de atuação.
        </p>

      </section>

      <section>
      <h2>Educação</h2>
      <div className="EducationContainer"> 
        <h4>Universidade de Brasília</h4> 
        <h4>FGA-Gama</h4>
      </div>

      <div className="EducationContainer">
        <p>Engenharia Eletrônica</p>
        <p>2016-Atualmente</p>
      </div>
    
      </section>

      <section>
        <h2>Habilidades</h2> 
        <ul>
          <li>Desenvolvimento de software em placas: Arduino, MSP430, Raspberry Pi e FPGA.</li>
          <li>Linguagens de desenvolvimento: C, Python, Shell Script, VHDL, Assembly e Matlab.</li>
          <li>Prática em desenvolvimento de esquemáticos elétricos e eletrônicos utilizando Qucs e Circuit Maker.</li>
          <li>Inglês avançado (formatura em dezembro de 2015) e alemão básico.</li>
        </ul>
      </section>

      <section>
        <h2>Projetos</h2>

        <h4>Bafômetro eletrônico</h4>
        <ul>
          <li>Desenvolvido em Arduino e MSP430.</li>
          <li>Utiliza um sensor MQ3 para aferir a concentração de álcool do usuário.</li>
        </ul>

        <h4>Estufa automatizada para massas</h4>
        <ul>
          <li>Desenvolvido em Raspberry 3B.</li>
          <li>
            Acompanha o crescimento da massa por meio de processamento de imagem e controla a temperatura
            da estufa, bem como avisa ao usuário quando a massa está pronta.
          </li>
        </ul>

      </section>

      <section>
        <h2>Atividades Extracurriculares</h2>
        <h4>
          Desenvolvimento, avaliação e aplicação de inovações para uso no ambiente do 
          Sistema Único de Saúde (SUS)- Caso Modal 3TS: Secretaria Municipal de Goiânia- GO
        </h4>

        <h5>Participante</h5>

        <ul>
          <li>Projeto em desenvolvimento desde 2019. Atualmente, está na fase de implementação.</li>
          <li>Trabalha principalmente com o software, além de auxiliar com eventuais demandas, 
            como cronograma e escrita.
          </li>
        </ul>

        <h4>Orc'estra Gamificação</h4>

        <h5>Trainee</h5>
        <p>Trainee na Empresa Júnior Orc'estra Gamificação.</p>

        <h4>Coursera</h4>
        
        <h5>Estudante</h5>

        <p>
          Participante do curso "Programming for Everybody (Getting Start With Python)" e 
          "Python Data Structures" oferecido pela Universidade de Michigan por meio do site Coursera.
        </p>

        <h4>Diretório Acadêmico das Engenharias (DAEng)</h4>

        <h5>Membro</h5>

        <ul>
          <li>Participante de conselhos e colegiados da Faculdade do Gama.</li>
          <li>Intermediária entre direção e alunos durante a transição para o 
            Laboratório de Desenvolvimento de Transportes e Energias Alternativas (LDTEA).
            </li>
        </ul>
        

      </section>
    </div>
  );
}

export default App;
