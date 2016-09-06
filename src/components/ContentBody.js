import React from 'react'
import Item from './Item'

const ContentBody = ({items, loading, ...props}) => (
    <div className="col-md-12">
        <div className="row">
            {items.sort((a,b) => Date.parse(b.timestamp) - Date.parse(a.timestamp)).map(item =>
                <Item
                    key={item.id}
                    {...item}
                    {...props}
                />
            )}
        </div>
        {loading ? <div id="loader_wrapper"><div id="loader"></div></div> : null}
    </div>
)

export default ContentBody
