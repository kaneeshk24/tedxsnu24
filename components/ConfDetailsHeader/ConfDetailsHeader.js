import ConfDetailsSlider from '../ConfDetailsSlider/ConfDetailsSlider';
import './ConfDetailsHeader.scss'

function ConfHeader({title,year,desc, images}) {
    return (
        <div className='ConfHeader'>
            <div className='ConfHeader__heading'>
                <p><span>{title}</span><br /> {year}</p>
            </div>
            <div className='ConfHeader__details'>
                <div className='ConfHeader__details--slider'>
                    <ConfDetailsSlider images={images} />
                </div>
                {/* <img className='ConfHeader__details--divider' src='/Images/divider.svg' /> */}
                <div className='ConfHeader__details--content'>
                    <p className='ConfHeader__details--content__title'>{title}</p>
                    <p className='ConfHeader__details--content__desc'>
                        {desc}
                    </p>
                    <p className='ConfHeader__details--content__aftermovie'>Watch AfterMovie</p>
                </div>
            </div>
        </div>
    )
}

export default ConfHeader;