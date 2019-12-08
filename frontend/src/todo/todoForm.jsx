import React from 'react'
import IconButton from '../template/iconButton'
import Grid from '../template/grid'

export default props => {
    const keyHandler = (e) => {
        if(e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input id='description' className='form-control' 
                    placeholder='Adicione uma tarefa'
                    onChange={props.handleChange}
                    value={props.description} 
                    onKeyUp={keyHandler}
                />
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton icon='plus' style='primary' 
                    onClick={props.handleAdd} />

                <IconButton icon='search' style='info' 
                    onClick={props.handleSearch} />

                <IconButton icon='close' style='default' 
                    onClick={props.handleClear} />
            </Grid>
        </div>
    )
}