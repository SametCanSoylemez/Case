import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background-color: #95a5a6;
    color: dark;
   
`;

export const Logo = styled.div`
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        color: #bdc3c7;
    }
`;

export const MenuButton = styled.div`
    position: relative;
    margin-right: 30px;
    cursor: pointer;
`;

export const DropDown = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #ecf0f1;
    border-radius: 5px;
    list-style: none;
    margin-top: 10px;
    padding: 0;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index:100;
`;

export const MenuItem = styled.li`
    padding: 10px 20px;
    cursor: pointer;
    &:hover {
        background-color: #0e4f8f;
    }
`;

export const RightSection = styled.div`
    display: flex;
    align-items: center;
`;

export const SearchInput = styled.input`
    padding: 7px 15px;
    border: none;
    border-radius: 5px;
    margin-right: 15px;
    outline: none;
`;

export const LoginButton = styled.button`
    padding: 8px 16px;
    background-color: #0e4f8f;
    color: #ecf0f1;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #c0392b;
    }
`;


export const MenuWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px; 
`;


