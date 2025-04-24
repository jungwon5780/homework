import './App.css';
import ProfileCard from './components/ProfileCard';
import profileImg from './assets/images/zi-a.png';

function App() {
  return (
    <div className="main-container">
      <h1 className="title">정원 사이트 🐳</h1>

      <ProfileCard
        image={profileImg}
        name="배정원"
        description="GSITM 부트캠프 진주 10기 "
      />

      <div className="link-area">
          <a
          className="link-button"
          href="http://127.0.0.1:5500/index.html"
          target="_blank"
          rel="noopener noreferrer">
          📚 과제 수행 페이지
          </a>
          <a
          className="link-button"
          href="https://vristo-delta.vercel.app/"
          target="_blank"
          rel="noopener noreferrer">
          🔖 vristo 페이지
          </a>

      </div>
    </div>
  );
}

export default App;
