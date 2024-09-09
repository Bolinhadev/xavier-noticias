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
  },
  {
    id: 3,
    title: "Saiba mais sobre o caso: Maria da Penha e Marco Heredia",
    content: `Maria sofreu muito nas mãos de seu marido Marco Heredia, mas diversos relatos não foram levados em consideração no tribunal. É importante sempre estudar com cuidado ambos os lados da história quando o assunto é crime e cadeia até porque se deve evitar ao máximo uma possível injustiça. 
Foi revelado em uma entrevista à Brasil Paralelo que Marco jurava nunca ter atirado em sua esposa e que na verdade sua casa foi invadida por quatro bandidos que cometeram tal ato. Ele afirmava que o tiro foi acidental e foi disparado por um dos invasores durante o assalto em sua casa. Marco alegou que não foi ele que eletrocutou sua esposa no chuveiro e que isso foi um mero acidente causado pela parte elétrica da casa. Porém nenhuma dessas histórias foi realmente possível de ser provada até porque haviam várias inconsistências. Marco Antonio buscou diversas maneiras de tentar fazer sua história ter a atenção das pessoas e fez com que inclusive as empregadas da casa fossem interrogadas. Elas diziam que encontraram Marco ensanguentado com uma corda em seu pescoço. A perícia investigou mais afundo e realmente havia sinais de arrombamento em toda a casa porém havia também, no teto, um tiro de uma bala de 38mm, que coincidia com a arma que foi encontrada na casa de Marco Viveiros. Portanto, tudo o que foi dito por ele foi desconsiderado pois as chances do tiro ter sido feito por  Marco eram muito altas. Heredia apresentou mais tarde um documento informando que ele só comprou essa arma depois do incidente com Maria. Novamente, a polícia desmentiu isso alegando que o documento era falso. 
Independentemente se Marco foi preso injustamente ou não, seu caso levou o Brasil a criar uma lei muito importante para todas as vítimas de violência doméstica: A lei Maria da Penha.  
Ainda existem muitas mulheres que sofrem com violência doméstica, mas desde 2006 esse número já diminuiu 10%. Isso graças à lei Maria da Penha que melhorou muito a situação do país. A lei Maria da Penha é uma lei fundamental até porque a implantação dela fez com que o Brasil acordasse para realidade e  para o combate a violência doméstica  e familiar contra a mulher. 
Ela também proíbe a aplicação de penas onde o criminoso paga para sair da cadeia e dá a esses agressores três anos de prisão. Para as vítimas, é dado programas e serviços de proteção e assistência social. 
A lei foi oficialmente criada  no dia  7 de agosto de 2006, e teve seu nome em homenagem à própria Maria da Penha. Essa lei foi criada a não muito tempo atrás se comparado a quantidade de evolução do ser humano ao longo do tempo. Por isso deve-se ressaltar que a pouco tempo atrás essas visões sobre violência doméstica praticamente não existiam e que até poderia ser considerado “normal” o homem na relação bater em uma mulher. Até o ano passado, não existia nenhum adulto que tivesse nascido já com a implantação desta lei, algo muito irônico pois o caso que moveu essa lei ser criada aconteceu a praticamente quarenta anos atrás.  `,
    category: "Destaques",
    author: "Equipe Xavier",
    publishDate: "31/07/1983"
  },
  {
    id: 4,
    title: "Maria da penha- Processo Jurídico, justiça e desafios",
    content: `  O processo Jurídico inicia em 1983 quando Maria da Penha denuncia o agressor e inicia um processo legal que foi levado à justiça. A justiça apresentou muitas falhas no processo e com muita lentidão.  Isso é característico do sistema do Brasil,já que às vezes  o sistema judicial brasileiro não dá a prioridade e atenção necessária.                                                                
          Marco Antônio, agressor,  foi condenado a 15 anos de prisão após isso, para muitos foi considerado pouco tempo por causa da gravidade do crime cometido. Em 1985 a pena de prisão foi reduzida para 10 anos.  Ele sai após 6 anos em 1986 por causa de fatores legais e judiciais, pois foram feitas revisões  e apelações que permitiram isso. Depois de ser liberado, ele teve liberdade condicional que deixou Maria da Penha incomodada, pois estava com medo de possíveis próximos ataques. Como Maria estava insatisfeita com o sistema judicial nacional e leva o caso à CIDH, o Sistema Juridical do Brasil reformulou e revisou as leis em relação a violência doméstica e familiar criando a Lei Maria da Penha.  
   Antes da lei maria da penha ser criada, existia apenas uma lei para violência, a lei n. 9.099/1995, que era considerada insensível e sem atenção aos demais problemas individuais.  As penas dos agressores eram menos graves e eram compostas por pagamento de cestas básicas e  trabalhos comunitários.  A vítima também era obrigada a comparecer na data e horário certo estipulados no documento. Por causa disso, o Consórcio ONG que participou da criação da lei Maria da Penha achou muito importante refazer a Lei n. 9.099/1995. Para isso a ONG e outros grupos da Sociedade Civil sugeriram debates com o Governo e o Congresso. 
Os juizados especiais, criados para ajudar com casos de violencia domestica,  propuseram  medidas protetivas e refletiram a necessidade de um processo jurídico justo e mais sério nesses casos.     Após diversas discussões, ficou óbvio que era preciso melhorar o sistema para dar proteção adequada às vítimas.
             Finalmente, depois de discussões, a lei Maria da Penha foi criada pelo presidente da República. A lei é conhecida internacionalmente e  mesmo depois de ter sido criada ela continuou a passar por ajustes e melhorias para ser mais eficaz. Um ajuste feito foi implementar medidas protetivas para as vítimas e projetos educacionais para evitar a repetição dessas violências. Também foram criadas delegacias especializadas e foi reforçado que a violência pode ocorrer de diversas formas, incluindo a sexual, física e moral.
Embora essas iniciativas representem avanços importantes, ainda há críticas sobre a eficácia do sistema judicial já que muitas vezes, o sistema é considerado lento e falho, como aconteceu no caso de Maria da Penha. É essencial que, no sistema jurídico, todas as vozes sejam ouvidas e consideradas com seriedade.
A ONU e a Comissão Interamericana de Direitos Humanos (CIDH) têm se envolvido bastante em casos brasileiros, garantindo que sejam tratados com importância, mas é preocupante pensar que, sem essa intervenção internacional, o processo judicial no Brasil poderia ter sido menos justo. Isso mostra a necessidade de melhorias no sistema judicial brasileiro para assegurar que todos os casos sejam tratados com a seriedade e a justiça que merecem. `,
    category: "Destaques",
    author: "Equipe Xavier",
    publishDate: "31/07/1983"
  },
    {
    id: 5,
    title: "O QUE SE APRENDE COM O CASO MARIA DA PENHA",
    content: `O caso Maria da Penha ganhou muita atenção e fama até porque, por conta dele, o Brasil teve que prestar atenção em problemas que eram ignorados por muita gente: a violência doméstica contra as mulheres. O impacto desse caso foi tão grande que não mudou só as leis mas também gerou pensamentos sobre como a sociedade trata as mulheres. 
Maria da Penha, uma mulher que ficou conhecida por passar por momentos tristes e violentos, acabou virando um exemplo de resistência e luta por justiça. A princípio, quase ninguém poderia imaginar que sua história criaria um debate tão grande e tantas conversas sobre os direitos das mulheres, como a violência de gênero é séria e sobre a justiça e a visão de dois lados em um tribunal de justiça. 
Esse caso foi muito importante para “quebrar tabus” que a sociedade criou e fez com que esses assuntos pudessem ser discutidos mais livremente e também com que as pessoas enxergassem que todos devem ajudar a resolver os problemas de violência doméstica e não só ser considerada como “um problema de família”. Além disso, o caso se mostrou ser uma grande fonte de aprendizado para entender de forma justa como cada indivíduo deve ser tratado quando se trata de um crime e mesmo que o foco esteja totalmente na proteção das vítimas é muito importante ter certeza de que todos os processos foram justos e que os direitos de todos os lados do caso tenham sido respeitados. 
A violência doméstica é um problema sério, mas é muito importante que as soluções para esse problema sejam equilibradas e que todos tenham a chance de se defender de maneira adequada. No caso de Maria da Penha, a criação da lei, além de uma grande ajuda para a proteção das mulheres, também fez com que houvesse conversas sobre como as acusações devem ser tratadas com cuidado, evitando julgamentos precipitados.
O caso dela gerou muitas mudanças positivas, como mais conscientização sobre a violência doméstica nas escolas e na mídia. Os jovens de hoje, desde cedo, começaram a aprender sobre a importância da igualdade de gênero, do respeito e da justiça. Já que as escolas começaram  a discutir a violência doméstica, os direitos humanos e a igualdade de gênero. Outra mudança positiva é que a lei Maria da Penha serviu como modelo e  fez com que vários outros países também fizessem algo em relação à violência.  Esses são a Suécia, o Reino Unido, a França e a Noruega.  E muitos outros da américa do sul como a Bolívia em 2013  com a lei 348 e a Colômbia, Argentina  promovendo proteção e prevenção. A maioria desses países estabelecem  também leis  que principalmente lutam pela igualdade de gênero.  Também a ONU Mulheres e a CIDH começaram a discutir bastante a lei Maria da Penha.
Além disso, o impacto do caso Maria da Penha foi tão grande que motivou a criação de redes de apoio para as vítimas, o que é muito importante. No entanto, enquanto trabalhamos para apoiar as vítimas, também precisamos garantir que os processos legais sejam conduzidos de forma imparcial.
`,
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
