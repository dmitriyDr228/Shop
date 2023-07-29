import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

const NavBar = observer(() => {

    const {user} = useContext(Context);

    const navigate = useNavigate();

    const logout = () =>{
        user.setIsAuth(false)
        user.setUser({})
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'darkgray'}} href={SHOP_ROUTE}>Магазин</NavLink>

                {user.isAuth
                ?<Nav className="ml-auto">
                        <Button variant={'outline-info'}
                                onClick={()=> navigate(ADMIN_ROUTE)}>Админ панель</Button>
                        <Button variant={'outline-info'}
                                style={{marginLeft:'10px'}}
                                onClick={()=> logout()}>Выйти</Button>
                 </Nav>
                :<Nav className="ml-auto">
                        <Button
                            variant={'outline-info'}
                            onClick={() => {
                                navigate(LOGIN_ROUTE)
                            }}>Авторизация</Button>
                 </Nav>
                }

            </Container>
        </Navbar>
    );
});

export default NavBar;