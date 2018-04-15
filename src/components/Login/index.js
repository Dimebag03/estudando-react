import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
const FormItem = Form.Item;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { redirect: false };
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) return;

            console.log('Received values of form: ', values);
            this.setState({ redirect: true });
        });
    }
    render() {
        if (this.state.redirect) return <Redirect to="/" />;

        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login-block">
                <Row style={{ minWidth: '300px' }}>
                    <Col span={24}>
                    <h1 className="text-center">UltraBeats</h1>
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <FormItem>
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: 'Por favor insira seu nome de usuário!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Usuário" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Por favor insira sua senha!' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Senha" />
                                )}
                            </FormItem>
                            <FormItem>
                                <Row>
                                    <Col span={12}>
                                        {getFieldDecorator('remember', {
                                            valuePropName: 'checked',
                                            initialValue: true,
                                        })(<Checkbox>Lembrar senha</Checkbox>)}
                                    </Col>
                                    <Col span={12}>
                                        <a className="login-form-forgot" href="" style={{ float: 'right' }}>Esqueci minha senha</a>
                                    </Col>
                                </Row>
                                <Row>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        className="login-form-button"
                                        style={{ width: '100%' }}>
                                        Log in
                                </Button>
                                </Row>
                                Ou <a href="">registre agora!</a>
                            </FormItem>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}

const WrappedLoginForm = Form.create()(Login);

export default WrappedLoginForm;