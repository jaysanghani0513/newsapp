import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";



export default class News extends Component {

    static defaultProps = {
        pageSize: "12",
        category: "general",
        totalResults: "0",
        loading: "true"
    }



    constructor(props) {
        super(props);
        this.state =
        {
            artical: [],
            loading: false,
            page: 1,

        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)}-News`;
    };

    async Update() {
        this.props.setProgress(10);
        
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.props.setProgress(40);
        let data = await fetch(url);
        this.props.setProgress(50);
        let parsedData = await data.json();
        this.props.setProgress(65);
        this.setState({
            artical: parsedData.articles,
            totalResults: parsedData.totalResults,

        })
        this.props.setProgress(100);

    }

    async componentDidMount() {

        this.Update();
    }

    fetchMoreData = async () => {
        this.setState(
            {
                page: this.state.page + 1,
            }
        )
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=5be8d6a654504e258431ffab9b7a44c2&page=${this.state.page}&pageSize=${this.props.pageSize}`;

        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            artical: this.state.artical.concat(parsedData.articles),
            totalResults: parsedData.totalResults,

        })
    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    render() {
        return (

            <>  <h1 className="text-center mb-5" style={{marginTop:'100px'}}> {this.capitalizeFirstLetter(this.props.category)}-News Top headlines</h1>
                {this.state.loading && <Spinner />}


                <InfiniteScroll
                    dataLength={this.state.artical.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.artical.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.artical.map((element) => {
                                return <div className="col-md-3" key={element.url}>
                                    <Newsitem title={element.title} imgurl={element.urlToImage} description={element.description} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>

                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-evenly my-5">
                    <button type="button" disabled={this.state.page <= 1} onClick={this.HandlePreviousbtn} class="btn btn-dark">&larr;Previous</button>
                    <button type="button" disabled={this.state.page > Math.ceil(this.state.totalResults / this.props.pageSize)} class="btn btn-dark" onClick={this.HandleNextbtn}>Next &rarr;</button>
                </div> */}
            </>


        )
    }
}




















