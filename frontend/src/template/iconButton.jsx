import React from 'react'
import IF from './if'

export default props => (
    <IF test={!props.hide}>
        <button className={'btn btn-'+ props.style} onClick={props.onClick} type='button'>
            <i className={'fa fa-'+ props.icon}></i>
        </button>
    </IF>
)