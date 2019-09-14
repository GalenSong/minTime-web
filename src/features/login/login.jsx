import React from "react";
import {Card, Button, Form, Input} from "element-react";
import getPublicKey from "../../common/api/getPublicKey";
import login from "./api/loginApi";
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
                email: [
                    {
                        required: true,
                        message: "请输入邮箱",
                        trigger: "change"
                    },
                    {
                        validator: (rule, value, callback) => {
                            var pattern = /^\w+@[a-z0-9]+\.[a-z]{2,4}$/;
                            if(value === "") {
                                callback(new Error("请输入邮箱"));
                                return;
                            }
                            if(!pattern.test(value)) {
                                callback(new Error("您输入的邮箱不正确"));
                                return;
                            }
                            callback();
                        }, 
                        trigger: 'blur'
                    }
                ],
                password: [
                    {
                        required: true,
                        message: "请输入密码",
                        trigger: "change"
                    },
                    {
                        validator: (rule, value, callback) => {
                            var pattern = /^[a-zA-Z][\w_-]{5,15}$/;
                            if(value === "") {
                                callback(new Error("请输入密码"));
                                return;
                            };
                            if(value.length < 6 || value.length > 16) {
                                callback(new Error("你输入的密码不正确"));
                                return;
                            };
                            if(!pattern.test(value)) {
                                callback(new Error("您输入的密码不正确"));
                                return;
                            };
                            callback();
                        },
                        trigger: 'blur'
                    }
                ]
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
                    if(res.data.code === 1) {
                        localStorage.setItem("token", res.data.data);
                        localStorage.setItem("token_exp", new Date().getTime());
                        this.props.history.push("/");
                    }else if(res.data.code === -1) {
                        alert("用户不存在，请检查登录信息！")
                    }else if(res.data.code === 0) {
                        alert("请检查密码是否正确")
                    }
                });
            }
        });
    }

    render() {
        return (
            <Card className="loginBox" bodyStyle={{padding: "30px"}}>
                <Form ref="form" model={this.state.form} rules={this.state.rules} className="loginInfo">
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
                <Link to="/register">新用户注册</Link>
            </Card>
        )
    }
}