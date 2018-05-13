import React, { Component } from 'react';
import './Contact.css';
import { Card, Tooltip, Button } from 'antd';
import { SocialIcon } from 'react-social-icons';

// const { Header, Footer, Sider, Content } = Layout;

const url = [
  'https://www.linkedin.com/in/bzf8989',
  'https://github.com/BZF8989',
  'https://stackoverflow.com/users/7275708/bill-f?tab=profile',
  'billfan10@gmail.com'
];

const text = [
  'Linkedin',
  'Github',
  'Stackoverflow',
  'Gmail'
];


export class Contact extends Component {
  render() {

    return (
      <div className="Contact">
        <Card title="Contact Me" bordered={true} hoverable={true}>
          <h3 className="temp">
            Looking for a web developer? <span className="block">Want to network?</span> <span className="block">Just looking for a pub buddy?</span> <span className="block">Feel free to drop me a line!</span>
          </h3>
          <Tooltip placement="right" text={text[0]} arrowPointAtCenter>
            <SocialIcon url={url[0]} className="social-icon" />
          </Tooltip>
          <Tooltip placement="right" text={text[1]} arrowPointAtCenter>
            <SocialIcon url={url[1]} className="social-icon" />
          </Tooltip>
          <Tooltip placement="right" text={text[2]} arrowPointAtCenter>
            <SocialIcon url={url[2]} className="social-icon" />
          </Tooltip>
        </Card>
      </div>
    );
  }
}

