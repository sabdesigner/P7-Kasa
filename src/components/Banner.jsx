import React from 'react'

class Banner extends React.Component {
    render() {
        return (
            <div>
                <article className="banner">
                    <h2>{this.props.title}</h2>
                    <img src={this.props.img} alt="Bannière" />
                </article>
            </div>
        )
    }
}

export default Banner
