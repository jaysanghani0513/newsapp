import React, { Component } from 'react'

export default class Newsitem extends Component {
    render() {
        let { title, description, imgurl, newsurl, author, date,source } = this.props;
        return (
            <div>
                <div className="card">
                    
                    <img src={!imgurl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIJUOnS_he8z8fgK_BG7f5-Kal8yE_4KP8g&usqp=CAU" : imgurl} className="card-img-top" alt="..." />
                    <span className="position-absolute top badge rounded-pill bg-danger" style={{
                        display : 'flex',
                         justifyContent:'flex-end',
                         position : 'absolute',
                         right : '0'
                    }}>
                        {source}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">by {!author ? "unknown" : author} On {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-dark">Read More</a>
                    </div>
                </div>

            </div>
        )
    }
}
