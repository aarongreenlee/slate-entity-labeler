/**
 * Copyright (c) Microsoft Corporation. All rights reserved.  
 * Licensed under the MIT License.
 */
import * as React from 'react'
import './CustomEntity.css'

// Simulate entity component props which have children
interface EntityComponentProps {
    children?: any
}

interface Props extends EntityComponentProps {
    name: string
    isEditing: boolean
    readOnly: boolean
    onClickName: () => void
    onClickDelete: () => void
}

export const CustomEntity = (props: Props) => {
    const { name, isEditing, readOnly } = props
    
    return (
        <span className={`cl-entity-node cl-entity-node--custom ${isEditing ? 'cl-entity-node--is-editing' : ''} ${readOnly ? 'cl-entity-node--read-only' : ''}`}>
            <div className="cl-entity-node-indicator noselect">
                <div className="cl-entity-node-indicator__mincontent">
                    <div className="cl-entity-node-indicator__controls">
                        {isEditing && <button onClick={props.onClickDelete}>
                            &times;
                        </button>}
                    </div>
                    <div className="cl-entity-node-indicator__name noselect" spellCheck={false}>
                        <button type="button" onClick={props.onClickName} tabIndex={-1}>
                            {name}
                        </button>
                    </div>
                </div>
                <div className='cl-entity-node-indicator__bracket' />
            </div>
            <span className="cl-entity-node__text" onClick={props.onClickName}>
                {props.children}
            </span>
        </span>
    )
}

export default CustomEntity