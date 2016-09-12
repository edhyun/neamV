import React from 'react'
import Item from './Item'

const ContentBody = ({items, ...props}) => (
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
    </div>
)

export default ContentBody
