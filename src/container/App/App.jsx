import './App.css'
import React, { Component } from 'react'
import Header from '@src/components/Header/Header'
import Carousel from '@src/components/Carousel/Carousel'
import NavBar from '@src/components/Navbar/NavBar'
import ScrollView from '@src/components/ScrollView/ScrollView'
import ApiService from '@src/utils/ApiService'

class App extends Component {
    state = {
        products: []
    }
    componentDidMount() {
        ApiService.get('/api/product/query').then(res => {
            if (res.code === 0) {
                this.setState({
                    products: res.data.products
                })
            }
        })
    }
    handleItemClick = url => {
        window.location.href = url
    }
    render() {
        const { products = [] } = this.state
        return (
            <div className="page-app">
                <Header title={'急速贷款'} />
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
                <ScrollView height={window.innerHeight - 230}>
                    {products.map((p, idx) => {
                        return (
                            <div
                                key={idx}
                                className="item"
                                onClick={() => {
                                    if (p.url) {
                                        this.handleItemClick(p.url)
                                    }
                                }}
                            >
                                <div className="logo-area">
                                    <img
                                        className="logo"
                                        src={p.logoUrl || '//pdxzogn6s.bkt.clouddn.com/default.png'}
                                        alt=""
                                    />
                                </div>
                                <div className="info-area">
                                    <div className="name">{p.name}</div>
                                    <div className="profile">{p.profile}</div>
                                    <div className="footer">
                                        {p.limit && (
                                            <div className="limit">
                                                额度：
                                                {p.limit}
                                            </div>
                                        )}
                                        {p.applyForCount && (
                                            <div className="apply-for-count">
                                                申请人数
                                                <span className="num">{p.applyForCount}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="forward-area">
                                    <span className="icon-forward" />
                                </div>
                            </div>
                        )
                    })}
                </ScrollView>
            </div>
        )
    }
}

export default App
