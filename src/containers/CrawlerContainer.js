import { connect } from 'react-redux'
import { crawlerActions } from '../actions'
import Crawler from '../components/Crawler'

const mapStateToProps = (state, ownProps) => {
    return {
        loading: state.crawler.loading,
        temp: state.crawler.temp
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        crawl: (value) => {
            dispatch(crawlerActions.crawlerStart(value))
        }
    }
}

const CrawlerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Crawler)

export default CrawlerContainer
