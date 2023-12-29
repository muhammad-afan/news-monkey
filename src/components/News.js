import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
// import PropTypes from 'prop-types'

const News = (props) => {


    // static defaultProps = {
    //     country: 'in',
    //     pageSize: 5
    // }

    // static PropTypes = {
    //     country: PropTypes.string,
    //     pageSize: PropTypes.number
    // }

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalized = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const upadteNews = async () => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3659a6456002464b9f477d06a6afb962&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url)
        props.setProgress(30)
        let parsedData = await data.json();
        props.setProgress(70)
        console.log(parsedData)
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        // setPage(page+1)
        props.setProgress(100)
    }


    useEffect(() => {
        document.title = `${capitalized(props.category)} - NewsMonkey`;
        upadteNews();
    },[])

    // async componentDidMount() {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9c18fc664be644b482cc3ee7cc16b3ed&page=${page}&pageSize=${props.pageSize}`
    //     this.setState({loading: true});
    //     let data = await fetch(url)
    //     let parsedData = await data.json();
    //     this.setState({
    //         articles: parsedData.articles,
    //         totalResults: parsedData.totalResults,
    //         loading: false
    //     })
    //     this.upadteNews();
    // }

    // const handlePreviousClick = async () => {

    //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9c18fc664be644b482cc3ee7cc16b3ed&page=${page - 1}&pageSize=${props.pageSize}`
    //     this.setState({loading: true});
    //     let data = await fetch(url)
    //     let parsedData = await data.json();
    //     console.log(parsedData)
    //     this.setState({
    //         page: page - 1,
    //         articles: parsedData.articles,
    //         loading: false
    //     })
    //     setPage({
    //         page: page 1 1
    //     })
    //     upadteNews();
    // }

    // const handleNextClick = async () => {

    //     if(!(page + 1 > Math.ceil(totalResults/this.pageSize))){
    //         let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9c18fc664be644b482cc3ee7cc16b3ed&page=${page + 1}&pageSize=${props.pageSize}`
    //         let data = await fetch(url)
    //         let parsedData = await data.json();
    //         console.log(parsedData);
    //         this.setState({
    //             page: page + 1,
    //             articles: parsedData.articles
    //         })
    //         console.log(page)
    //     }

        // setPage(page+1)
    //     upadteNews();
    // }


    const fetchMoreData = async () => {
        setPage(page+1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3659a6456002464b9f477d06a6afb962&page=${page+1}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url)
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    };

    return (
        // <div className='container my-4'>
        <>
            <h1 style={{marginTop: '90px'}} className='text-center'>NewsMonkey - Top {capitalized(props.category)} headlines</h1>
            {loading && <Spinner />}
            {/* {!loading && articles.map((elem) => { */}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={loading && <Spinner />}>

                <div className="container">

                    <div className="row">
                        {articles.map((elem) => {
                            return <div key={elem.url} className="col-md-4">
                                <NewsItem title={elem.title ? elem.title.slice(0, 42) + "..." : ''} description={elem.description ? elem.description.slice(0, 85) + "..." : ''} imgUrl={elem.urlToImage} newsUrl={elem.url} author={elem.author ? elem.author : 'unknown'} date={elem.publishedAt} source={elem.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className="container align-items-center justify-content-evenly d-flex my-4">
                    <button type="button" disabled={page <= 1} onClick={this.handlePreviousClick} className="btn btn-dark me-4">&larr; Previous</button>
                    <button type="button" disabled={page > (Math.ceil(totalResults / props.pageSize) - 1)} onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
                    <button type="button" onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
                </div> */}
            {/* </div> */}
        </>
    )
}

export default News
