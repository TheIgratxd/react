import { useNavigate } from "react-router-dom";

interface HeaderProps {
  bannerSrc: string;
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ bannerSrc, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      navigate("/");
    }
  };

  return (
    <header>
      <img
        className="banner"
        src={bannerSrc}
        alt=""
        style={{ backgroundSize: "cover" }}
      />
      <button className="btn-derecha" onClick={handleLogout}>
        <span className="icono">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="white"
            viewBox="0 0 24 24"
          >
            <rect
              x="2"
              y="4"
              width="13"
              height="16"
              rx="2"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M9 12h11m0 0l-3-3m3 3l-3 3"
              stroke="white"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="texto">
          CERRAR
          <br />
          SESIÓN
        </span>
      </button>
    </header>
  );
};

export default Header;
