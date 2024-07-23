import Link from 'next/link';
import './HomeHeader.scss'

function HomeHeader() {
    return (
        <div className="HomeHeaderContainer">
            <p className="HomeHeaderContainer__heading">We&apos;re currently building our website.</p>
            <p className="HomeHeaderContainer__description">Take a look at out Past Conferences!</p>
            <div className="HomeHeaderContainer__buttons">
                <Link href='/pastConferences'>
                    <p className="HomeHeaderContainer__buttons--pastConf">Past Conferences</p>
                </Link>
                <Link href='/contact'>
                    <p className="HomeHeaderContainer__buttons--contactUs">Contact Us</p>
                </Link>
            </div>
        </div>
    )
}

export default HomeHeader; 