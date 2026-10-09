import {Link, Outlet} from 'react-router-dom';
import borge_elektro_img from '../assets/borge_elektro_img.png';
import '../App.css'

export default function LayoutLandingpage() {
  return (
    <>
    <header className="layout-landingpage">
      <img src={borge_elektro_img} alt="Borge Elektro Logo" className="logo" />
      <ul className="navigation">
        <Link to="/"><li>Hjem</li></Link>
        <Link to="/om-oss"><li>Om oss</li></Link>
        <Link to="/kontakt"><li>Kontakt</li></Link>
        <Link to="/tjenester"><li>Tjenester</li></Link>
      </ul>
    </header>
    <main>
      <Outlet />
    </main>
    </>
  );
}