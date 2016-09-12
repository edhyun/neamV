import React from 'react'

const UserInputForm = ({ tempStoredItem, currentUser, onSave, children }) => {
    let input

    return (
        <div>
            <textarea ref={node => { input = node }} cols="40" rows="10"></textarea>
            <br />
            <button className="btn btn-default pull-right" onClick={ e => {
                    e.preventDefault()
                    onSave(tempStoredItem, currentUser, input.value)
                    input.value = ''
                }}>
                { children }
            </button>
        </div>
    )
}

export default UserInputForm
