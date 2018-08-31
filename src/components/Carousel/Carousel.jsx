import React from 'react'
import ReactSwipe from 'react-swipe'

export default class Carousel extends React.Component {
    render() {
        const { children } = this.props

        return (
            <ReactSwipe
                swipeOptions={{
                    continuous: false,
                    speed: 400,
                    auto: 3000
                }}
            >
                {children}
            </ReactSwipe>
        )
    }
}
