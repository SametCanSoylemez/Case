import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <ul className="footer-links">
                    <li><a href="/">Ana Sayfa</a></li>
                    <li><a href="/about">Hakkımızda</a></li>
                    <li><a href="/contact">İletişim</a></li>
                    <li><a href="/terms">Kullanım Şartları</a></li>
                </ul>

                <p className="footer-copyright">© 2023 Şirket Adı. Tüm Hakları Saklıdır.</p>

                <div className="footer-socials">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

