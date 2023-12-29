import React from 'react'

const NewsItem = (props) => {

        // let { title, description, imgUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='container my-4'>
                <div className="card">
                    <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: 0, fontSize: '20px'}}>
                        <span className="badge rounded-pill bg-success" style={{}}> By {props.source} </span>
                    </div>
                    <img src={props.imgUrl ? props.imgUrl : "https://i.ytimg.com/vi/MEEqcM5DYHA/maxresdefault.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title} </h5>
                        <p className="card-text">{props.description ? props.description : "Two career criminals -- Vinod, and Ramesh -- were killed in a police encounter at Gud..."}</p>
                        <p className="card-text"><small className="text-muted">By {props.author} on {new Date(props.date).toGMTString()}</small></p>
                        <a href={props.newsUrl} rel='noreferrer' target='_blank' className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem
