import './sticky_footer.scss'
import Countdown from 'react-countdown';
import Link from 'next/link'


export default function StickyFooter() {

    return(
        <div className="StickyFooter">
            <div className='StickyFooter__container fadeInUp-animation'>
                 <p className="StickyFooter__container--text">Conference 24'</p>
                 <Countdown className="StickyFooter__container--text" date={1729987250000} />
                <Link href='/register'>
                 <button className="StickyFooter__container--button">Get Ticket</button>
                </Link>
            </div>        
        </div>
    )

}
