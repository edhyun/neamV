import React from 'react'

const UserInputForm = ({ tempStoredItem, currentUser, onSave, children }) => {
    let input

    return (
        <div>
            <input type="text" ref={node => { input = node }} />
            <button onClick={ e => {
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
