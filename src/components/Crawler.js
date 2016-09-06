import React from 'react'

const Crawler = ({ loading, temp, crawl }) => {
    let input

    return (
        <div>
            <input type="text" ref={node => { input = node }} onKeyUp={ e=> {
                if(input.value.indexOf("http://") === 0 || input.value.indexOf("https://") === 0){
                    crawl(input.value)
                }else{
                    console.log('try proper url in input form')
                }
            }} />
            <div className="crawled_result_temp">
            {temp.jsonRes ?
                <div>
                    <strong>{temp.jsonRes.site_title}</strong>
                    <p>{temp.jsonRes.description}</p>
                </div>
                : null}
            </div>
        </div>
    )
}

export default Crawler
