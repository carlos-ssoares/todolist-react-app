import React from 'react'
import IconButton from '../template/iconButton'
import Grid from '../template/grid'

export default props => (
    <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
            <input id='description' className='form-control' 
                placeholder='Adicione uma tarefa'
                onChange={props.handleChange}
                value={props.description}></input>
        </Grid>
        <Grid cols='12 3 2'>
            <IconButton icon='plus' style='primary' 
                onClick={props.handleAdd} />
        </Grid>
    </div>
)