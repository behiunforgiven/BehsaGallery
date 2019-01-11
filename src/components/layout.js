import React from 'react'
import '../assets/scss/main.rtl.css'

import Header from './Header'

class Template extends React.Component {
    render() {
        const { children } = this.props

        return (
            <div>
                {children}
                <Header />
            </div>
        )
    }
}

export default Template
