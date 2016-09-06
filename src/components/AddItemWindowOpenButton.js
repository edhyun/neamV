import React from 'react'

const AddItemWindowOpenButton = ({ saveItem, addItemWindowOpen, children }) => {
    //let input

    return (
        <div>
            { /* <input type="text" ref={node => { input = node }} /> */ }
            <button className="btn btn-default" onClick={ e => {
                    e.preventDefault()
                    //saveItem(input.value)
                    addItemWindowOpen()
                    //input.value = ''
                }}>
                { children }
            </button>
        </div>
    )
}

export default AddItemWindowOpenButton
