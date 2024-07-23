import Link from 'next/link'
import './Footer.scss'
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathName = usePathname();
  const scrollTo = async (id) => {
    if (pathName !== '/') {
        await router.push('/');
        const element = document.getElementById(id);
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
    } else {
        const element = document.getElementById(id);
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
    }
  };

  return (
    <div className="Footer">
      <div className="Footer__header">
        <div className='Footer__header--text-container'>
         <p className="Footer__header--text">PARTNER WITH US</p>
         <div className="Footer__header--buttons">
          <Link href='/contact'>
            <button className="Footer__header--buttons__contact">Contact Us</button>
          </Link>
        </div>  
      </div>
    </div>
      <div className="Footer__below">
        <div className="Footer__below--sections">
          <p onClick={() => scrollTo("home")}className="Footer__below--sections__item">Home</p>
          <img className="Footer__below--sections__divider" src="/Images/Footer/circle.png" />
          <p onClick={() => scrollTo("about")} className="Footer__below--sections__item">About Us</p>
          <img className="Footer__below--sections__divider" src="/Images/Footer/circle.png" />
          <Link href='/pastConferences'><p className="Footer__below--sections__item">Past Conferences</p></Link>
          <img className="Footer__below--sections__divider" src="/Images/Footer/circle.png" />
          <p onClick={() => scrollTo("sponsors")} className="Footer__below--sections__item">Sponsors</p>
        </div>
        <div className="Footer__below--social">
        <img src="/Images/Footer/tedx.png" className="stretched-image" style={{ width: '23rem' }} />
          <img src="/Images/Footer/linkedin.png" />
        </div>
      </div>
    </div>
  )
}