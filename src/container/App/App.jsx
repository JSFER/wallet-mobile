import './App.css'
import React, { Component } from 'react'
import Header from '@src/components/Header/Header'
import Carousel from '@src/components/Carousel/Carousel'
import NavBar from '@src/components/Navbar/NavBar'
import ScrollView from '@src/components/ScrollView/ScrollView'

const products = []
for (let i = 0; i < 100; i++) {
    products.push(i)
}

class App extends Component {
    render() {
        return (
            <div className="page-app">
                <Header title={'title'} />
                <Carousel>
                    <img
                        className="banner"
                        alt=""
                        src={'http://112.74.67.63:10080/iotglb-openapi/images/wx_homebanner_2.png'}
                    />
                    <img
                        className="banner"
                        alt=""
                        src={'http://112.74.67.63:10080/iotglb-openapi/images/wx_homebanner_2.png'}
                    />
                    <img
                        className="banner"
                        alt=""
                        src={'http://112.74.67.63:10080/iotglb-openapi/images/wx_homebanner_2.png'}
                    />
                </Carousel>
                <NavBar />
                <ScrollView height={window.innerHeight - 238}>
                    {products.map(p => {
                        return <div className="item">
                            <div className="logo-area">
                                <img className="logo" src="http://112.74.67.63:10080/iotglb-openapi/images/1520228775310.png" alt=""/>
                            </div>
                            <div className="info-area">
                                <div className="name">名称</div>
                                <div className="profile">简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介</div>
                            </div>
                            <div className="forward-area">
                                <span className="icon-forward"></span>
                            </div>
                        </div>
                    })}
                </ScrollView>
            </div>
        )
    }
}

export default App
