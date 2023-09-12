import React, { useState } from 'react';
import { Container, Logo, MenuWrapper, MenuButton, DropDown, MenuItem, RightSection, SearchInput, LoginButton } from './header.styles';

const Header: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    return (
        <Container>
            <Logo>MySite</Logo>
            <MenuWrapper>
                {['Spor', 'Film', 'Eğlence'].map(menu => (
                    <MenuButton key={menu} onClick={() => setActiveMenu(activeMenu === menu ? null : menu)}>
                        {menu}
                        {activeMenu === menu && (
                            <DropDown>
                                <MenuItem>İçindekiler</MenuItem>
                                <MenuItem>Öğe 2</MenuItem>
                                <MenuItem>Öğe 3</MenuItem>
                            </DropDown>
                        )}
                    </MenuButton>
                ))}
            </MenuWrapper>
            <RightSection>
                <SearchInput placeholder="Ara..." />
                <LoginButton>Giriş Yap</LoginButton>
            </RightSection>
        </Container>
    );
}

export default Header;
