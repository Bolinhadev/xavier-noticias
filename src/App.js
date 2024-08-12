// App.js
import React, { useState, useEffect } from 'react';
import './styles.css';

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [news, setNews] = useState([]);
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
      localStorage.setItem('news', JSON.stringify(updatedNews));
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
