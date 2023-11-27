import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const Page1 = () => {
  return (
    <div>
      <h1>Página 1</h1>
      <p>Five Nights at Freddy's</p>
      <p>
      Five Nights At Freddy's - O Pesadelo Sem Fim é a primeira adaptação cinematográfica da famosa franquia homônima de jogos lançada em 2014 e criada por Scott Cawthon. Dirigido por Emma Tammi (Terra Assombrada, Fair Chase), a história se passa em um restaurante familiar tipicamente americano chamado Freddy Fazbear's Pizza, que está atualmente desativado, e acompanha Mike Schmidt (Josh Hutcherson), um jovem que está passando por alguns problemas financeiros. Felizmente, ele vê a resposta para seus problemas ao ser contratado para trabalhar como o vigia noturno da pizzaria. Criado por Henry Emily e William Afton, o lugar costumava ser muito famoso por seus característicos robôs animados, que eram o rosto do local e faziam a festa das crianças durante o dia. Porém, quando o sol se põe e a escuridão da noite chega, um segredo obscuro e mortal é revelado: os bonecos animatrônicos ganham vida, transformando-se em assassinos psicopatas e partindo em uma violenta matança. 

      </p>
    </div>
  );
};

const Page2 = () => {
  return (
    <div>
      <h1>Página 2</h1>
      <p>Megan</p>
      <p>
      Em M3gan, seguimos uma jovem garota chamada Cady, que teve seus pais mortos em um acidente de carro e é deixado sob os cuidados de sua tia Gemma, uma roboticista de uma empresa high-tech de brinquedos de criança em Seattle. Gemma trabalha no desenvolvimento chamado M3GAN, um robô humanoide, designada para ajudar a criança e ser companhia para elas. Mas após um teste que ocorreu mal, o projeto foi cancelado. Sem ter alguma conexão com a sobrinha e sempre sendo workaholic, Gemma presenteia M3gan para a sobrinha após ela querer a "boneca". O modelo finalizado é emparelhado com Cady, e convence a empresa do potencial de sucesso do projeto após observar as interações de M3GAN com Cady. À medida que o tempo passa, M3gan acaba ficando mais independente e andando pela casa sem qualquer ordem, além de matar qualquer coisa que ela considere uma ameaça para Cady. Mas os dias passam e M3gan pode parecer mais uma ameaça para Cady e Gemma do que imaginado. 
      </p>
    </div>
  );
};

const Page3 = () => {
  return (
    <div>
      <h1>Página 3</h1>
      <p>Fale Comigo</p>
      <p>
      FALE COMIGO acompanha um grupo de jovens que descobre como invocar espíritos usando uma mão embalsamada, e ficam obcecados pela adrenalina. Procurando uma distração no aniversário da morte da sua mãe, Mia (Sophie Wilde) se reúne com os amigos para mais uma sessão, até que um deles vai longe demais e liberta terríveis forças sobrenaturais. 
    
      </p>
    </div>
  );
};

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/page1">Página 1</Link>
        </li>
        <li>
          <Link to="/page2">Página 2</Link>
        </li>
        <li>
          <Link to="/page3">Página 3</Link>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </Router>
  );
};

export default App;