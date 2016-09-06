import React from 'react'
import {DragSource} from 'react-dnd'

const Source = {
    beginDrag(props){
        return 'begin'
    },
    endDrag(props, monitor, component){
        return 'end'
    }
}

function collect(connect, monitor){
    return {
        connectDragSource:connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Dragable {
    render(){
        const { isDragging, connectDragSource } = this.props
        return connectDragSource(
            <div>
                dragable
                {isDragging && "dragging now"}
            </div>
        )
    }
}

export default DragSource("dragable_item", Source, collect)(Dragable)
