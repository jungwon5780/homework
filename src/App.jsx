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
          href="https://onop.vercel.app/hw/0422.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          📙 0422 과제
        </a>
        <a
          className="link-button"
          href="https://onop.vercel.app/hw/0423_1.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          🍎 0423 중간과제
        </a>
        <a
          className="link-button"
          href="https://onop.vercel.app/hw/0423_2.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          🧸 0423 과제 1
        </a>
        <a
          className="link-button"
          href="https://onop.vercel.app/hw/0423_3.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          🛫 0423 과제 2
          </a>
        <a
          className="link-button"
          href="https://onop.vercel.app/hw/0423_4.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          💫 0423 과제 3
          </a>
        <a
          className="link-button"
          href="https://onop.vercel.app/hw/0423_5.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          🎤 0423 과제 4
          </a>
      </div>
    </div>
  );
}

export default App;
