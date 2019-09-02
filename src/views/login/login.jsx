import React from "react";
import {Card, Button, Form, Input} from "element-react";
import getPublicKey from "../../api/getPublicKey";
import login from "../../api/login";
import {Link} from "react-router-dom";
import "./login.css";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                email: "",
                password: ""
            },
            rules: {
                email: {
                    required: true,
                    message: "邮箱不能为空",
                    trigger: "change"

                },
                password: {
                    required: true,
                    message: "密码不能为空",
                    trigger: "change"
                }
            }
            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        getPublicKey().then((value) => {
            localStorage.publicKey = value.data.key;
        }).catch((error) => {
            console.log(error);
        });
    }

    handleChange(key, value) {
        this.setState({
            form: Object.assign({}, this.state.form, { [key]: value })
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.refs.form.validate((valid) => {
            if(valid) {
                login(this.state.form).then(res => {
                    debugger;
                    if(res.code === "000001") {
                        localStorage.setItem("token", res.data);
                        localStorage.setItem("token_exp", new Date().getTime());
                        this.props.history.push("/");
                    }
                });
            }
        });
    }

    render() {
        return (
            <Card className="loginBox" bodyStyle={{padding: "30px"}}>
                <Form ref="form" model={this.state.form} rules={this.state.rules} className="loginInfo">
                    {/* <Form.Item prop="userName">
                        <Input className="loginInput" value={this.state.form.userName} placeholder="用户名" onChange={this.handleChange.bind(this, 'userName')}/>
                    </Form.Item> */}
                    <Form.Item prop="email">
                        <Input className="loginInput" value={this.state.form.email} placeholder="邮箱" onChange={this.handleChange.bind(this, "email")}/>
                    </Form.Item>
                    <Form.Item prop="password">
                        <Input className="loginInput" type="password" value={this.state.form.password} placeholder="输入密码" onChange={this.handleChange.bind(this, "password")}/>
                    </Form.Item>
                    <Form.Item>
                        <Button nativeType="button" type="primary" className="loginBtn" onClick={this.handleSubmit}>登录</Button>
                    </Form.Item>
                </Form>
                <Link to="/signup">新用户注册</Link>
            </Card>
        )
    }
}