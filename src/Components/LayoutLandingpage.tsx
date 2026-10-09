import {Link, Outlet} from 'react-router-dom';
import borge_elektro_img from '../assets/borge_elektro_img.png';
import electrician from '../assets/electrician.jpg';
import '../App.css'
import borge_elektro_bil from "../assets/borge_elektro_bil.png"

export default function LayoutLandingpage(): React.JSX.Element {
  return (
    <>
    <header className="layout-landingpage">
      <div className="bilder-container">
      <img src={borge_elektro_bil} alt="Borge elektro Bil" className="bil" />
      </div>
      <ul className="navigation">
        <Link to="/"><li>Hjem</li></Link>
        <Link to="/om-oss"><li>Om oss</li></Link>
        <Link to="/kontakt"><li>Kontakt</li></Link>
        <Link to="/tjenester"><li>Tjenester</li></Link>
      </ul>
    </header>
    <main>
      <div className="electrician-container">
        <img src={electrician} alt="Electrician" className="electrician" />
      </div>
    </main>
    <Outlet />
    <footer className="footer">
      <p>&copy; 2026 Borge Elektro AS. Alle rettigheter reservert.</p>
    </footer>
    </>
  );
}