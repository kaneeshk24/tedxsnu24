import Link from 'next/link'
import '../../styles/routes/confirm.scss'
export default function Confirm() {
    return (
        <div className="Confirm">
            <div className='ConfirmSection'>
                <img className="ConfirmSection__image" src="/Images/Assets/tick.png" />
                <p className="ConfirmSection__thank">Thank You</p>
                <p className="ConfirmSection__email">Confirmation Email Will Be Sent</p>
                <Link href='/'>
                <p className='ConfirmSection__home'>Home</p>
                </Link>
            </div>
        </div>
    )
}