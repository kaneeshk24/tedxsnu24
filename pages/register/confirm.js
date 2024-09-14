import Link from 'next/link'
import '../../styles/routes/confirm.scss'
import useTicket from '../../hooks/useTicket'
export default function Confirm() {
    const { myRefCode } = useTicket();
    return (
        <div className="Confirm">
            <div className='ConfirmSection'>
                <img className="ConfirmSection__image" src="/Images/Assets/tick.png" />
                <p className="ConfirmSection__thank">Thank You</p>
                <p className="ConfirmSection__email">Confirmation Email Will Be Sent</p>
                <p className="ConfirmSection__ref">Your Reference Code is: <span>{myRefCode}</span></p>
                <Link href='/ThroughTheLookingGlass'>
                    <p className='ConfirmSection__home'>Home</p>
                </Link>
            </div>
        </div>
    )
}