import React, { Component } from 'react';
import './Projects.css';
import { Card } from 'antd';
import Python from '../static/imgs/devicons/python/python-original.svg';
import Django from '../static/imgs/devicons/django/django-original.svg';
import Java from '../static/imgs/devicons/java/java-original.svg';
import ReactIcon from '../static/imgs/devicons/react/react-original.svg';
import Bootstrap from '../static/imgs/devicons/bootstrap/bootstrap-plain.svg';
import { SocialIcon } from 'react-social-icons';



export class Projects extends Component {
  render() {

    return (
      <div className="Projects">
        <Card title="Projects" bordered={true} hoverable={true}>
          {/* <Carousel autoplay effect="fade" className="carousel"> */}
          <div className="cards">
            <Card.Grid className="grid-card">
              <a className="card-link" href="https://github.com/BZF8989/FlippingBooks" target="_blank">
                <div className="col">

                  <h3>Flipping Books</h3>
                  <p>
                    Web service for users to sell, buy and/or trade textbooks
                      <br />
                  </p>
                <img width="50px" src={Python} alt="Python" />
                <img width="50px" src={Django} alt="Django" />
                <img width="50px" src={Bootstrap} alt="Bootstrap" />
                </div>
              </a>
            </Card.Grid>

            <Card.Grid className="grid-card">
              <a className="card-link" href="https://github.com/BZF8989/React-AntDesign" target="_blank">
                <div className="col">
                  <h3>React- Ant Design Login Page</h3>
                  <p>
                    A fun little login page with reset button.
                    <br />
                  </p>
                  <img width="50px" src={ReactIcon} alt="React" />
                </div>
                
              </a>
            </Card.Grid>
            <Card.Grid className="grid-card">
              <a className="card-link" href="https://github.com/BZF8989/Chudnovsky" target="_blank">
                <div className="col">
                  <h3>Chudnovsky's Algorithm</h3>
                  <p>
                    Calculate pi to a certain decimal place.
                    <br />
                  </p>
                <img width="50px" src={Python} alt="Python" />
                </div >
              </a>
            </Card.Grid>
            <Card.Grid className="grid-card">
              <a className="card-link" href="https://github.com/BZF8989/Gradius" target="_blank">
                <div className="col">
                  <h3>Gradius Game</h3>
                  <p>
                    Fun Gradius game with score and levels!
                    <br />
                  </p>
                  <img width="50px" src={Java} alt="Java" />
                </div>
                
              </a>
            </Card.Grid>
          </div>
          {/* </Carousel> */}
          <br />
          <h3 className="centered-text">
            Interested in more projects? Check out my Github! <br />
            <SocialIcon className="social-icon" url="https://github.com/BZF8989" />
          </h3>

        </Card>
      </div>
    );
  }
}

