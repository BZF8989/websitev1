import React, { Component } from 'react';
import { Card, Icon, Button, Modal } from 'antd';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import './Demo.css';
import { Collapse, Switch, Radio } from 'antd';

const ButtonGroup = Button.Group;


const { token, styles } = require('./demo.json');

const Panel = Collapse.Panel;

const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoiYmlsbGZhbjEwIiwiYSI6ImNqZzRudWRxYTAyMmwyd2tiODhkMXgxOXQifQ.AfWr0F5t4MfTXySpXlB70g"
});

const InitialPos = [-123.116226, 49.246292];

const selectedStyles = ['basic', 'dark', 'light', 'outdoor'];
const actualStyles = ["mapbox://styles/mapbox/basic-v9",
    "mapbox://styles/mapbox/dark-v9",
    "mapbox://styles/mapbox/light-v9",
    "mapbox://styles/mapbox/outdoors-v10"];

export default class Demo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            keyValue: 0,
            mapModal: false,
            mapCenter: InitialPos,

        };

        this.changeStyleState = this.changeStyleState.bind(this);
    }

    changeStyleState = (event) => {
        this.setState({
            keyValue: event.target.value
        });
    }

    openModal = (event) => {
        //console.log(event)
        if (event == 1) {
            this.setState({
                mapModal: true
            });
        }
    }

    handleOk = (event) => {
        this.closeModal(event);
    }

    handleCancel = (event) => {
        this.closeModal(event);
    }

    closeModal = (event) => {
        this.setState({
            mapModal: false
        });
    }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                const { latitude, longitude } = coords;

                this.setState({
                    // featuresPostion: [[longitude, latitude], InitialPos],
                    mapCenter: [longitude, latitude]
                });
            },
            err => {
                console.error('Error with retriving location data', err);
            }
        );
    }



    render() {

        const styleKey = this.state.keyValue;
        const mapCenter = this.state.mapCenter;

        return (
            <div className="Demo">
                {/* <Card title="Demo" bordered={true} hoverable={true}> */}
                <Collapse onChange={this.openModal} accordion>
                    <Panel header="Map Demo" key="1">
                        <Modal
                            title="Map Demo"
                            visible={this.state.mapModal}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                        >
                            <Map
                                className="map"
                                style={actualStyles[styleKey]}
                                containerStyle={{
                                    height: "75vh",
                                    width: "70vw"
                                }}
                                center={mapCenter}
                            >

                            </Map>
                            <br />
                            <Radio.Group value={styleKey} onChange={this.changeStyleState}>
                                <Radio.Button value='0'>Default</Radio.Button>
                                <Radio.Button value='1'>Dark</Radio.Button>
                                <Radio.Button value='2'>Light</Radio.Button>
                                <Radio.Button value='3'>Outdoors</Radio.Button>
                            </Radio.Group>
                        </Modal>
                    </Panel>
                    <Panel header="Coming Soon..." key="2">
                        <h4>Seriously, I'm working on it...</h4>
                    </Panel>

                </Collapse>

                {/* </Card> */}
            </div>
        );
    }
}

