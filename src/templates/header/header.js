import React, { Component } from 'react';
import { Affix, Menu } from 'antd';
import { goToTop, goToAnchor, configureAnchors, removeHash } from 'react-scrollable-anchor';



class Nav extends Component {

    state = {
        current: 'Home',
    }

    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
        this.scroll(e);
    }

    scroll = (e) => {
        configureAnchors({ offset: -10, scrollDuration: 300 });
        if (e.key === 'Home') {
            goToTop();
            removeHash();
        } else {
            goToAnchor(e.key, true);
        }
    }



    render() {

        return (
            <Affix>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                    theme="dark"
                >
                    <Menu.Item key="Home"><Icon type="home" /></Menu.Item>
                    <Menu.Item key="Intro"><Icon type="user" /><span className="hidden">About Me</span></Menu.Item>
                    <Menu.Item key="Projects"><Icon type="code" /><span className="hidden">Projects</span></Menu.Item>
                    <Menu.Item key="Message"><Icon type="message" /><span className="hidden">Contact</span></Menu.Item>
                </Menu>
            </Affix>
        )
    }


}

export default Nav;