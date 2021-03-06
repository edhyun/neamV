import React from 'react'
import CrawlerContainer from '../containers/CrawlerContainer'
import SaveItemButtonContainer from '../containers/SaveItemButtonContainer'

const AddItemWindow = ({ loading, addItemWindow, saveItem, addItemWindowClose }) => {

    return (
        <div>
            { addItemWindow ?
                <div id="addItemWindowWrapper" onClick={ e => {
                    if(e.target.id === "addItemWindowWrapper"){
                        addItemWindowClose()
                    }
                }}>
                    <div id="addItemWindow">
                        <div className="form">
                            Paste URL here
                            <CrawlerContainer />
                            Write your comment
                            <SaveItemButtonContainer>Save Item</SaveItemButtonContainer>
                        </div>
                        {loading ? <div id="loader_wrapper"><div id="loader"></div></div> : null}
                    </div>
                </div>
            : null
            }
        </div>
    )
}

export default AddItemWindow
