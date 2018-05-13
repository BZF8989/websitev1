import React, { Component } from 'react';
import './Intro.css';
import { Card } from 'antd';
import { Padding } from '../padding';
import Python from '../static/imgs/devicons/python/python-original.svg';
import Django from '../static/imgs/devicons/django/django-original.svg';
import Java from '../static/imgs/devicons/java/java-original.svg';
import ReactIcon from '../static/imgs/devicons/react/react-original.svg';
import Bootstrap from '../static/imgs/devicons/bootstrap/bootstrap-plain.svg';
import Angular from '../static/imgs/devicons/angularjs/angularjs-original.svg';
import MySQL from '../static/imgs/devicons/mysql/mysql-original-wordmark.svg'

export class Intro extends Component {
  render() {
    return (
      <div >
        
        <Padding />
        <Card title="About Me" bordered={true} className="home" hoverable={true}>
          <h3>
            I'm a web developer in the beautiful city of Vancouver, British Columbia, Canada. I enjoy building elegant, easy to use websites using some of the biggest frameworks out there.
            My toolkit includes&nbsp;
            <a href="https://reactjs.org/">React</a>, &nbsp;
            <a href="https://angular.io/">Angular5</a>, &nbsp;
            <a href="https://www.djangoproject.com/">Django</a>, &nbsp;
            <a href="https://getbootstrap.com/">Booststrap</a>, and &nbsp;
            <a href="https://www.mysql.com/">MySQL</a>.&nbsp;
            I am in the process of learning React-Native and NodeJS.
            I am a recent graduate from Langara College with an Associate of Science Degree majoring in Computer Science. 
          </h3>

          <div className="skills-icons">
            <img width="50px" src={ReactIcon} alt="React" />
            <img width="50px" src={Angular} alt="Angular" />
            <img width="50px" src={Django} alt="Django" />
            <img width="50px" src={Bootstrap} alt="Bootstrap" />
            <img width="50px" src={Python} alt="Python" />
            <img width="50px" src={Java} alt="Java" />
            <img width="50px" src={MySQL} alt="MySQL" />
          </div>

          <h3>
            During my free time, you'll catch me at the pub, trying different foods, attending networking events, and playing some billards! I also love puppies. But who doesn't?
          </h3>

          
        </Card>
      </div>
    );
  }
}

