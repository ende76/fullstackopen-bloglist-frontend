import React, { useState, useImperativeHandle } from 'react'

export default React.forwardRef((props, ref) => {
    const [ status, setState ] = useState(true)

    const toggleStatus = () => setState(!status)

    useImperativeHandle(ref, () => {
        return {
            toggleStatus
        }
    })

    return (
        <div>
            {status ? <button onClick={toggleStatus}>{props.buttonLabel}</button> : null}
            {status ? null
                : 
                    <div>
                        {props.children}
                        <button onClick={toggleStatus}>cancel</button>
                    </div>
            }
        </div>
    )
}) 