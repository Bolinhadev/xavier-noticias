// App.js
import React, { useState, useEffect } from 'react';
import './styles.css';

const initialNews = [
  {
    id: 1,
    title: "Mulher denuncia o Marido estrangeiro por agressão física",
    content: `Casal entra em possível desacordo gerando agressões físicas em um domingo de maio (29). A esposa, conhecida como Maria da Penha Maia Fernandes, que foi casada por cerca de 17  anos, denuncia marido às autoridades alegando agressão.

Maria e seu marido, Marco Antonio Heredia Viveros, se conheceram em 1974 em uma universidade de São Paulo. Nesse período, Maria estava fazendo Bioquímica da Universidade Federal do Ceará em 1966, concluindo o seu mestrado em Bioquímica na Faculdade de Ciências Farmacêuticas da Universidade de São Paulo em 1977. Na mesma faculdade havia um jovem colombiano chamado Marco, um jovem colombiano considerado muito educado e amoroso que estava cursando economia. Consequentemente, eles se aproximaram e começaram a namorar. Após dois anos de relacionamento, em 1976, o casal estabelece o matrimônio e se muda para Fortaleza, no Ceará. 

Durante aproximadamente oito anos de casados, Marco e sua esposa aparentavam ter uma vida estável com seus filhos, entretanto, em 1983 Maria da Penha acusa seu marido de violência. Maria relata que enquanto estava dormindo, foi atingida por um tiro nas costas, o que resultou em uma paraplegia. O marido por outro lado relata que a casa foi invadida por bandidos e que ambos foram vítimas de um assalto.  As investigações policiais ,no entanto, apontavam para uma tentativa de assasinato. Após duas semanas, Maria entra novamente em contato com as autoridades acusando novamente seu marido de violência. Maria conta que Marco Antônio a empurrou da cadeira de rodas enquanto ela estava tomando banho e tentou eletrocutá-la ligando uma tomada perto da água. Por conta desses incidentes Maria da Penha entra com um pedido de divórcio à justiça. 

Relatos contam que Marco tentou convencer Maria da Penha de assinar um documento de seguro de vida que, futuramente, traria benefícios financeiros a ele. Embora houvesse questionamentos sobre intenções maliciosas com o seguro, não há  evidências que comprovem essa intenção, até porque existiam diversos motivos positivos para ele querer o seguro de vida, como para proteger a segurança financeira da família e assegurar que se algum evento acontecesse a segurança financeira da família estivesse estável. É importante  esclarecer que o documento não tinha informações e dados suficientes para determinar se a sugestão era para dar benefícios financeiros a ele ou para garantir segurança financeira a sua família.   Sem dados claros, não é possível descobrir suas intenções  definitivas e seu objetivo com o seguro.  Vou precisar resolvê-lo o quanto antes.

O sistema judiciário brasileiro estava agindo de maneira muito lenta e não se aprofundou por completo no caso, o que chamou atenção da Comissão Interamericana de Direitos Humanos que exigiu que o Brasil garantisse alguma punição aos agressores que violavam os direitos das mulheres. 

Portanto, vinte anos após o acontecimento, Marco Antonio é preso porém devido ao tempo que o processo levou e sua idade ele foi solto após dois anos de prisão.`,
    category: "Política",
    author: "Equipe Xavier",
    publishDate: "29/05/1983"
  },
  {
    id: 2,
    title: "Entre Desentendimentos e Lei: Um olhar comparativo entre Angela Diniz a Maria da Penha",
    content: `A história da violência doméstica contra a mulher no Brasil é longa e existem diversos casos onde essa mesma situação se repete. Entre eles, existem dois casos famosos e marcantes para o Brasil, o da  ngela Diniz e o da Maria da Penha. Ambas impactam todo o Brasil lutando pelos direitos das mulheres e pela igualdade. Mesmo que os casos tenham duas décadas de diferença, os dois são bastante parecidos. 
Na década de 1970,  ngela Diniz, uma socialite que era  conhecida como a "Pantera de Minas" , foi assassinada pelo seu namorado, Raul Fernando do Amaral Street, chamado também de Doca Street. Eles se conheceram em agosto de 1976 no Rio de Janeiro  e ambos tinham outros amantes na época, mas decidiram que deixariam os seus relacionamentos atuais para ficarem juntos. O  relacionamento deles foi marcado por vários altos e baixos, os baixos sendo violências e muitas crises de ciúme. Inclusive antes do assasinato  Doca estava com medo de Angela terminar o relacionamento e assim o ciúme, medo e desespero pela separação motivaram ele a cometer o crime. Em 30 de dezembro de 1976  Diniz foi morta por 4 tiros, três no rosto e um na nuca e, como citado acima, o crime foi marcado por perda de controle emocional porque Doca não aceitava a separação. Após o crime, ele tentou fugir, portanto, seus atos e comportamentos foram discutidos no tribunal.  A princípio, Doca  não teria que passar mais que dois anos na cadeia, pois durante o primeiro julgamento a defesa alega “legítima defesa” argumentando que Doca era humilhado e provocado por Angela constantemente e que ele era vítima de um relacionamento abusivo, o que gerou pensamentos de que matar Angela foi uma ação desesperada e não pensada. Porém, o povo, especificamente os grupos feministas não concordam com a pena e fizeram pressão para um segundo julgamento, no qual Doca foi condenado a 15 anos de prisão, dos quais cumpriu apenas um pouco mais de três anos. Esse caso continua tendo um grande impacto no Brasil sendo exemplo de violência doméstica reconhecida. Ele também mostra a importância de um Sistema Judicial bom para resolver essas situações e para achar meios inteligentes de trazer justiça às vítimas de violências.
O caso de Maria da Penha Maia Fernandes, ocorrido vinte anos depois, em 1983, trouxe novamente  a questão da violência doméstica no Brasil, até porque, ao longo dos anos, a defesa enfrentou um sistema judicial que se mostrou lento e Carlos Heredia foi condenado após alguns anos. A defesa sempre disse que o julgamento foi influenciado pela pressão para que se criasse uma legislação mais séria contra a violência doméstica, o que gerou a criação da Lei Maria da Penha em 2006, por conta disso, Heredia ficou visto como um "monstro" na visão da mídia, sem levar em consideração todos os pontos de um relacionamento  e as possíveis intenções de ambas as partes.
No caso de  ngela Diniz, a defesa de Doca Street tentou dar atenção também ao lado do agressor, mostrando uma outra perspectiva da história e valorizando também o outro lado da história. Foi dito que Doca também tinha suas dificuldades e imperfeições e viu que ele estava envolvido em uma situação de estresse emocional excessivo.  No caso de Maria da Penha, a defesa de Heredia Viveros acreditava  que o tiro foi um acidente e que os outros acontecimentos após isso são culpa de conflitos comuns no relacionamento. 
                      
             
          Nos dois casos, a mídia e a opinião pública tiveram papéis muito importantes pois influenciam os julgamentos. A defesa de Doca Street, por exemplo, foi extremamente criticada, mas trouxe muitas questões sobre como o povo julga relacionamentos e crimes. No caso de Heredia Viveros, a defesa teve que lidar com um sistema que já estava automaticamente mandando punir Carlos, por conta do aumento do movimento contra a violência doméstica. 
Em ambos os casos o medo de separação teve um papel muito grande já que isso fez com que os agressores perdessem o controle e fossem muito violentos, portanto optaram por usar a agressão ao enfrentarem o processo de separação. O que também interferiu bastante foram os desentendimentos e a falta de comunicação nos relacionamentos, pois se eles se comunicassem de uma forma mais clara e eficaz talvez nada disso teria acontecido. E isso mostra que os dois relacionamentos eram bastante instáveis. Os dois mostram a importância de sistemas judiciais eficazes para resolverem e darem proteção e paz às vítimas de violências.
Percebe-se que existem muitas semelhanças entre os casos de violência doméstica em geral. Os casos são bastante complexos e existem muitos lados que deixam difícil descobrir qual lado é o inocente e quem está mentindo. Isso pois cada ação tem uma razão e um motivo por trás. Percebe-se então como o sistema jurídico é importante para o processo de justiça. A defesa e a acusação, em ambos os casos, tiveram um papel crucial na tentativa de fazer com que os réus tivessem um julgamento justo, onde todos as informações e características dos casos fossem levadas a sério.  Eles  deixaram com que todas as vozes fossem ouvidas, que é fundamental para um sistema judicial e que as decisões sejam tomadas com base em provas e na lei e não nas pressões externas.
Esses casos, embora sejam trágicos e bastante violentos, continuam a ser importantes a serem discutidos porque muitas pessoas ainda sofrem de violência doméstica hoje em dia ao redor do mundo inteiro e principalmente no Brasil.  Além disso, eles também abordam questões de direitos humanos e o papel da sociedade na formação de narrativas que, muitas vezes, influenciam muito nos processos legais e nas leis de igualdade entre os homens e mulheres.`,
    category: "Destaques",
    author: "Equipe Xavier",
    publishDate: "31/07/1983"
  }
];

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [news, setNews] = useState(initialNews);
  const [newArticle, setNewArticle] = useState({ title: '', content: '', category: '', author: '' });
  const [currentPage, setCurrentPage] = useState('home');
  const [currentNewsId, setCurrentNewsId] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentCategory, setCurrentCategory] = useState('Todas');

  const categories = ['Destaques', 'Política', 'Economia', 'Tecnologia', 'Cultura', 'Esportes', 'Saúde'];

  useEffect(() => {
    const savedNews = localStorage.getItem('news');
    if (savedNews) {
      setNews(JSON.parse(savedNews));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('news', JSON.stringify(news));
  }, [news]);

  const handleLogin = () => {
    const correctPassword = process.env.REACT_APP_ADMIN_PASSWORD;
    if (username === 'Admin' && password === correctPassword) {
      setIsAdmin(true);
      setCurrentPage('admin');
    } else {
      alert('Credenciais inválidas');
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setCurrentPage('home');
  };

  const handleAddNews = () => {
    if (newArticle.title && newArticle.content && newArticle.category && newArticle.author) {
      const newId = Date.now();
      const publishDate = new Date().toLocaleDateString();
      const updatedNews = [...news, { ...newArticle, id: newId, publishDate }];
      setNews(updatedNews);
      setNewArticle({ title: '', content: '', category: '', author: '' });
      setCurrentPage('home');
    }
  };

  const handleSearch = () => {
    setCurrentPage('home');
    setCurrentCategory('Todas');
  };

  const filteredNews = news.filter(article => 
    (currentCategory === 'Todas' || article.category === currentCategory) &&
    (article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.content.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const renderHome = () => (
    <main className="main-content">
      <section className="news-section">
        <h2>{currentCategory === 'Todas' ? 'Notícias em Destaque' : currentCategory}</h2>
        <div className="news-grid">
          {filteredNews.map((article) => (
            <div key={article.id} className="news-card">
              <div className="news-image"></div>
              <div className="news-content">
                <span className="category-label">{article.category}</span>
                <h2 className="news-title">{article.title}</h2>
                <p className="news-excerpt">{article.content.substring(0, 150)}...</p>
                <div className="author-info">
                  <div>
                    <span className="author-name">{article.author}</span>
                    <span className="publish-date">{article.publishDate}</span>
                  </div>
                </div>
                <button className="button" onClick={() => { setCurrentPage('newsDetail'); setCurrentNewsId(article.id); }}>
                  Ler mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="sidebar-section">
        <h3>Mais Lidas</h3>
        {news.slice(0, 5).map((article) => (
          <div key={article.id} className="news-card">
            <div className="news-content">
              <h2 className="news-title">{article.title}</h2>
              <span className="author-name">{article.author}</span>
            </div>
          </div>
        ))}
      </section>
    </main>
  );

  const renderAdmin = () => (
    <div className="admin-panel">
      <h2>Painel de Administração</h2>
      <input
        type="text"
        placeholder="Título da Notícia"
        value={newArticle.title}
        onChange={(e) => setNewArticle({...newArticle, title: e.target.value})}
      />
      <textarea
        placeholder="Conteúdo da Notícia"
        value={newArticle.content}
        onChange={(e) => setNewArticle({...newArticle, content: e.target.value})}
      />
      <input
        type="text"
        placeholder="Nome do Autor"
        value={newArticle.author}
        onChange={(e) => setNewArticle({...newArticle, author: e.target.value})}
      />
      <select
        value={newArticle.category}
        onChange={(e) => setNewArticle({...newArticle, category: e.target.value})}
      >
        <option value="">Selecione uma categoria</option>
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <button className="button" onClick={handleAddNews}>Adicionar Notícia</button>
    </div>
  );

  const renderLogin = () => (
    <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} className="login-form">
      <h2>Login de Administrador</h2>
      <input
        type="text"
        placeholder="Usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="button">Entrar</button>
    </form>
  );

  const renderNewsDetail = () => {
    const article = news.find(n => n.id === currentNewsId);
    if (!article) return <div>Notícia não encontrada</div>;

    return (
      <div className="news-detail">
        <button className="button" onClick={() => setCurrentPage('home')}>Voltar</button>
        <span className="category-label">{article.category}</span>
        <h2>{article.title}</h2>
        <div className="author-info">
          <div>
            <span className="author-name">{article.author}</span>
            <span className="publish-date">{article.publishDate}</span>
          </div>
        </div>
        <p>{article.content}</p>
      </div>
    );
  };

  const renderContent = () => {
    switch(currentPage) {
      case 'home':
        return renderHome();
      case 'admin':
        return isAdmin ? renderAdmin() : renderLogin();
      case 'newsDetail':
        return renderNewsDetail();
      default:
        return renderHome();
    }
  };

  return (
    <div className="app">
      <div className="top-bar">
        <span className="date">11 de Agosto de 2024</span>
        <div className="top-links">
          <a href="#">Sobre Nós</a>
          <a href="#">Contato</a>
          <a href="#">Newsletter</a>
        </div>
      </div>
      <header>
        <div className="header-content">
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <h1 className="logo">XAVIER NEWS</h1>
          <div className="search-container">
            <input
              type="text"
              placeholder="Buscar notícias..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button onClick={handleSearch} aria-label="Buscar" className="search-button">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </header>
      <nav>
        <ul className="nav-list">
          {categories.map((category) => (
            <li 
              key={category}
              className="nav-item"
              onClick={() => { setCurrentCategory(category); setCurrentPage('home'); }}
            >
              {category.toUpperCase()}
            </li>
          ))}
          {isAdmin && <li className="nav-item" onClick={handleLogout}>SAIR</li>}
          {!isAdmin && <li className="nav-item" onClick={() => setCurrentPage('admin')}>ADMIN</li>}
        </ul>
      </nav>
      {renderContent()}
    </div>
  );
};

export default App;
