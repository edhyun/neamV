import React from 'react'

const UserInputForm = ({ tempStoredItem, onSave, children }) => {
    let input

    return (
        <div>
            <input type="text" ref={node => { input = node }} />
            <button onClick={ e => {
                    e.preventDefault()
                    onSave(tempStoredItem, input.value)
                    input.value = ''
                }}>
                { children }
            </button>
        </div>
    )
}

export default UserInputForm
