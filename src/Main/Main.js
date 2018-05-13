import React, { Component } from 'react';
import { Layout, Affix, Menu, Icon } from 'antd';
import { Intro } from '../Intro/Intro';
import { Projects } from '../Projects/Projects';
import { Contact } from '../Contact/Contact';
import ScrollableAnchor from 'react-scrollable-anchor';
import { goToTop, goToAnchor, configureAnchors, removeHash } from 'react-scrollable-anchor';
import { Padding } from '../padding';
import Typist from 'react-typist';
import Demo from '../Demo/Demo';
import ScrollListener from 'react-scroll-listen';
// import Nav from '../templates/header/header';
// import Bottom from '../templates/footer/footer';


const { Header, Footer, Content } = Layout;


const local = [
    'Home',
    'Intro',
    'Projects',
    'Demo',
    'Message'
];



class Main extends Component {


    constructor(props) {
        super(props)
        this.state = {
            current: 'Home',
        }

        this.scroll = this.scroll.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.scrollListener = this.scrollListener.bind(this);

    }


    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
        this.scroll(e);
    }

    scroll = (e) => {
        configureAnchors({ offset: -50, scrollDuration: 300 });
        if (e.key === 'Home') {
            goToTop();
            removeHash();
        } else {
            goToAnchor(e.key, true);
        }
    }

    scrollListener(){
        const place = this.props.location.hash;
        //console.log(this.props.location);
        if(place == ''|| place == '#Home'){
            this.setState({current: 'Home'});
        }else if(place == '#Intro'){
            this.setState({current: 'Intro'});
        }else if(place == '#Projects'){
            this.setState({current: 'Projects'});
        }else if(place == '#Demo'){
            this.setState({current: 'Demo'});
        }else if(place == '#Message'){
            this.setState({current: 'Message'});
        }
    }

    render() {

        return (
            <div className="App">
                <ScrollListener
                    onScroll={value => this.scrollListener()}
                />
                <Layout className="Layout">
                    <Header className="Header">
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
                                <Menu.Item key="Demo"><Icon type="play-circle-o" /><span className="hidden">Demo</span></Menu.Item>
                                <Menu.Item key="Message"><Icon type="message" /><span className="hidden">Contact</span></Menu.Item>
                            </Menu>
                        </Affix>
                    </Header>
                    <ScrollableAnchor id={'Home'}>
                    <div className="title-background">
                        <Typist>
                            <Typist.Delay ms={1500} />
                            <h1 className="centered-text title-text name"><strong>Bill Fan</strong></h1>
                            <Typist.Delay ms={1100} />
                            <h2 className="centered-text title-text title">Full Stack Web Developer <span className="block">& </span><span className="block">AI Enthusiast</span></h2>
                        </Typist>
                    </div>
                    </ScrollableAnchor>
                    <Content className="Content">
                        <ScrollableAnchor id={'Intro'}>
                            <Intro className="Intro" />
                        </ScrollableAnchor>
                        <Padding />
                        <ScrollableAnchor id={'Projects'}>
                            <Projects className="Projects" />
                        </ScrollableAnchor>
                        <Padding />
                        <ScrollableAnchor id={'Demo'}>
                            <Demo className="Demo" />
                        </ScrollableAnchor>
                        <Padding />
                        <ScrollableAnchor id={'Message'}>
                            <Contact className="Contact" />
                        </ScrollableAnchor>
                        <Padding />
                    </Content>
                    <Padding />
                    <Footer className="Footer">
                        {/* <Bottom /> */}
                        <div className="centered-text">
                            <p>
                                <small>
                                    This website was built using React and Ant Design. Cover photo is used with permission and is copyright <a href="http://www.supadonkie.com/">SupaDonkie</a>
                                    <br />
                                    &copy; Bill Fan, 2018
                                    <br />
                                </small>
                            </p>
                        </div>
                    </Footer>
                </Layout>
                
            </div>
        )
    }


}

export default Main;