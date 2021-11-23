import React, {useContext} from 'react'
import { ThingsContext } from './ThingsContext'


function List(props) {

    const {things} = useContext(ThingsContext)
    //map through the array and render each item...should this be here, App, or in ThemeContext?

    return (
        <div>
            {things}
        </div>
    )
}

export default List
