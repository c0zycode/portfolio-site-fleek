// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="c0zycode" />

            <div className='header__content'>
                <h1>Hi, I'm c0zycode</h1>
                <p>Blockchain Developer</p>
                <a href="mailto:0xc0zy@gmail.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;