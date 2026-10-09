import {Link, Outlet} from 'react-router-dom';
import electrician from '../assets/electrician.jpg';
import '../App.css'
import borge_elektro_bil from "../assets/borge_elektro_bil.png"
import flash from "../assets/flash (1).png"

export default function LayoutLandingpage(): React.JSX.Element {
  return (
    <>
    <header className="layout-landingpage">
      <div className="bilder-container">
      <img src={borge_elektro_bil} alt="Borge elektro Bil" className="bil" />
      </div>
      <ul className="navigation">
        <Link to="/"><li><img src={flash} alt="Lyn ikon" className="lyn"/>Hjem</li></Link>
        <Link to="/om-oss"><li><img src={flash} alt="Lyn ikon" className="lyn"/>Om oss</li></Link>
        <Link to="/kontakt"><li><img src={flash} alt="Lyn ikon" className="lyn"/>Kontakt</li></Link>
        <Link to="/tjenester"><li><img src={flash} alt="Lyn ikon" className="lyn"/>Tjenester</li></Link>
      </ul>
    </header>
    <main>
      <div className="electrician-container">
        <img src={electrician} alt="Electrician" className="electrician" />
      </div>
    <Outlet />
    </main>
    <footer className="footer">
      <p>&copy; 2026 Borge Elektro AS. Alle rettigheter reservert.</p>
    </footer>
    </>
  );
}