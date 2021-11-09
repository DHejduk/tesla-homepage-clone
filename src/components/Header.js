import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
    const [burgerStatus, setBurgerStatu] = useState(false)

    return (
        <Container>
            <a href="#">
                <img src="/images/logo.svg"/>
            </a>
            <MenuGroup>
                <div>Model S</div>
                <div>Model 3</div>
                <div>Model X</div>
                <div>Model Y</div>
                <div>Cybertruck</div>
                <div>Powerwall</div>
            </MenuGroup>
            <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Tesla account</a>
                <MenuIconContainer onClick={()=>setBurgerStatu(true)}>
                    <MenuIcon/>
                </MenuIconContainer>
            </RightMenu>
            <BurgerNav status={burgerStatus}>
                <CloseContainer onClick={()=> setBurgerStatu(false)}>
                    <Close/>
                </CloseContainer>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model 3</a></li>
                <li><a href="#">Model X</a></li>
                <li><a href="#">Model Y</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in drive</a></li>
                <li><a href="#">Test drive</a></li>
                <li><a href="#">Power Wall</a></li>
                <li><a href="#">Energy</a></li>

            </BurgerNav>
        </Container>
        
    )
}

export default Header

const Container = styled.div`
    display: flex;
    min-height: 60px;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
`

const MenuGroup = styled.div`
    display: flex;
    text-transform: uppercase;
    div{
        font-weight: 700;
        font-size: 15px;
        padding: 6px 10px;
        cursor: pointer;
        border-radius: 12px;
    }
    div:hover{
        transition: .3s ease-in;
        background-color: rgba(190, 190, 190, 0.5);
       
    }
`
const RightMenu = styled.div`
    display: flex;
    align-items: cantre;
    a{
        font-weight: 700;
        text-transform: uppercase;
        padding-right: 10px;
        border-radius: 12px;
    }
    a:hover{
        transition: .3s ease-in;

        background-color: rgba(190, 190, 190, 0.5);         
    }

`
const MenuIconContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    width: 300px;
    background: white;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
    list-style: none;
    box-shadow: ${props => props.status ? '0 0 10px 100vw rgba(0, 0, 0, .4)' : '' };
    transition: box-shadow .1s ease-in;
    transform: ${props => props.status ? 'translatex(0)' : 'translatex(100%)' };
    transition: transform .2s ease-in;
    
    li{
        display: flex;
        justify-content: flex-start;
        padding: 15px 5px;
        border-radius: 12px;
        a{
            font-weight: 600;
            color: darkslategray;
        }
    }
    li:hover{
        transition: .3s ease-in;
        background-color: rgba(190, 190, 190, 0.5);
    }
`

const Close= styled(CloseIcon)`
    cursor: pointer;
`

const CloseContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`