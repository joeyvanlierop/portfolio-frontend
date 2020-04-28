import React, { Component } from 'react'
import Typewriter from './Typewriter'

export class About extends Component {
    render() {
        const { text, className } = this.props

        return (
            <div id={"about-wrapper"} className={className || ""}>
                <div id={"about"}>
                    {this.props.header}
                    <p className="about-text">
                        {text}
                    </p>
                    {this.props.footer}
                </div>
            </div>
        )
    }
}

export default About
