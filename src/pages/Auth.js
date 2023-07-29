import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, FormControl, NavLink, Row} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {useLocation, useNavigate} from "react-router-dom";
import {login, registration} from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {

    const location = useLocation()
    const navigate = useNavigate();

    const {user} = useContext(Context)

    const isLoginPage = location.pathname === LOGIN_ROUTE

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () =>{

        try {
            let data;
            if (isLoginPage){
                data = await login(email,password)
            }
            else{
                data = await registration(email,password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        }
        catch (e) {
            alert(e.response.data.message)
        }

    }


    return (
        <Container
            style={{height:window.innerHeight - 54}}
            className="d-flex justify-content-center align-items-center"
        >
            <Card style={{width:600, background:'darkgrey'}} className="p-5">

                <h2 className="m-auto">{isLoginPage ? `Авторизация` : `Регистрация`}</h2>
                <Form className="d-flex flex-column">
                    <FormControl
                        className="mt-3"
                        placeholder="Введите логин"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <FormControl
                        className="mt-3"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                    />

                    <Row className="d-flex justify-content-between  mt-3 ps-3 pe-3">
                        <Button
                            className="align-self-end"
                            variant={'outline-success'}
                            onClick={click}
                        >
                            {isLoginPage ? "Войти" : "Зарегестрироваться"}
                        </Button>

                        {isLoginPage
                        ?   <div className="d-flex justify-content-between mt-3">
                                Нет аккаунта?   <NavLink  style={{color:'blue'}} href={REGISTRATION_ROUTE}> Зарегистрируйся</NavLink>
                            </div>
                        :   <div className="d-flex justify-content-between mt-3">
                                Есть аккаунт   <NavLink  style={{color:'blue'}} href={LOGIN_ROUTE}> Войти</NavLink>
                            </div>
                        }


                    </Row>


                </Form>

            </Card>


        </Container>
    );
});

export default Auth;