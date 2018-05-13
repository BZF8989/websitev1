import React from 'react';
import Button from 'antd/lib/button';
import { Input } from 'antd';
import { Checkbox } from 'antd';

export default class Form extends React.Component {

    state = {
        username:"",
        password:"",
        checked:true,
    }

    change = (e) => {
        this.setState({
                [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) =>{
        e.preventDefault();
        alert(this.state.username + " " + this.state.password);
    }

    checked = (e) =>{
        this.setState({
            checked:!this.state.checked
        });
        //console.log(this.state.checked);//DEBUGGING
    }

    onReset = (e) =>{
        this.setState({
            username:"",
            password:"",
            checked: false,
        })

    }

    render(){
        return (
            <div>
                <form className="loginForm">
                    <Input
                        name="username"
                        placeholder="username"
                        value ={this.state.username}
                        onChange={ e => this.change(e)}
                    />
                    <br />
                    <br />
                    <Input
                        name="password"
                        placeholder="password"
                        type="password"
                        value ={this.state.password}
                        onChange={ e => this.change(e)}
                        onPressEnter= {
                            e => this.onSubmit(e)
                        }
                    />
                    <br />
                    <Checkbox onChange={e=>this.checked(e)}>Remember Me</Checkbox>

                    <div className="loginButtons">
                        <Button type="primary" onClick={e => this.onSubmit(e)}>Submit</Button>
                        <Button type="primary" onClick={e => this.onReset(e)}>Reset</Button>
                    </div>
                </form>
            </div>
        );
    }

}