import React from "react";
import {Card, Button, Form, Input} from "element-react";
import getPublicKey from "../../api/getPublicKey";
import signUp from "../../api/signup";
import {Link} from "react-router-dom";
import "./signup.css";

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                // userName: "",
                email: "",
                password: "",
                checkPassword: ""
            },

            rules: {
                // userName: [
                //     { 
                //         required: true, 
                //         message: '请输入用户名', 
                //         trigger: 'blur' 
                //     },
                //     { 
                //         validator: (rule, value, callback) => {
                //             if (value === '') {
                //                 callback(new Error('请输入用户名'));
                //             } else {
                //                 if (this.state.form.userName !== '') {
                //                     this.refs.form.validateField('checkPass');
                //                 }
                //                 callback();
                //             }
                //         } 
                //     }
                // ],
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
                                callback(new Error("请检查邮箱格式"));
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
                                callback(new Error("密码长度应为6到16位"));
                                return;
                            };
                            if(!pattern.test(value)) {
                                callback(new Error("密码应只包含字母、数字、下划线，且不能以数字开头"));
                                return;
                            };
                            callback();
                        },
                        trigger: 'blur'
                    }
                ],
                checkPassword: [
                    {
                        required: true,
                        message: "请再次输入密码",
                        trigger: "blur"
                    },
                    {
                        validator: (rule, value, callback) => {
                            if(value === "") {
                                callback(new Error("请再次确认密码"));
                                return;
                            };
                            if(value !== this.state.form.password) {
                                callback(new Error("两次输入密码不一致"));
                            };
                            callback();
                        },
                        trigger: 'blur'
                    }
                ]
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        getPublicKey().then((value) => {
            localStorage.publicKey = value.data.key;
        }).catch((error) => {
            console.log(error);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.refs.form.validate((valid) => {
            if(!valid) {
                alert("请检查登录信息");
                return false; 
            }
            signUp(this.state.form).then((msg) => {
                if(msg.status === 200) {
                    this.props.history.push("/login");
                }
            }).catch((err) => {
                console.log(err);
            });
        })
        
    }

    handleChange(key, value) {
        this.setState({
          form: Object.assign({}, this.state.form, { [key]: value })
        });
      }

    render() {
        return (
            <Card className="signUpBox" bodyStyle={{padding: "30px"}}>
                <Form ref="form" model={this.state.form} rules={this.state.rules} className="signUpInfo">
                    {/* <Form.Item prop="userName">
                        <Input className="signUpInput" value={this.state.form.userName} placeholder="用户名" onChange={this.handleChange.bind(this, 'userName')}/>
                    </Form.Item> */}
                    <Form.Item prop="email">
                        <Input className="signUpInput" value={this.state.form.email} placeholder="邮箱" onChange={this.handleChange.bind(this, "email")}/>
                    </Form.Item>
                    <Form.Item prop="password">
                        <Input className="signUpInput" type="password" value={this.state.form.password} placeholder="输入密码" onChange={this.handleChange.bind(this, "password")}/>
                    </Form.Item>
                    <Form.Item prop="checkPassword">
                        <Input className="signUpInput" type="password" value={this.state.form.checkPassword} placeholder="确认密码" onChange={this.handleChange.bind(this, "checkPassword")}/>
                    </Form.Item>
                    <Form.Item>
                        <Button nativeType="button" type="primary" className="signUpBtn" onClick={this.handleSubmit}>注册</Button>
                    </Form.Item>
                </Form>
                <Link to="/login">已有账号登录</Link>
            </Card>
        );
    }
}