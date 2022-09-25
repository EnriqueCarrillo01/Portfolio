import './index.scss'
import {Link} from 'react-router-dom'
import LogoW from '../../assets/images/negro.png'


const SideBar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoW} alt='Logo'/>
            </Link>
        </div>
    )
}

export default SideBar;