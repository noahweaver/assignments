import React, {useContext} from 'react'
import { ThingsContext } from './ThingsContext'
import UglyThing from './UglyThing'


function List(props) {

    const {thingsList} = useContext(ThingsContext)
    const thingsListMap = thingsList.map(thing => <UglyThing key={thing._id} id={thing._id} title={thing.title} img={thing.imgUrl} description={thing.description} />)
    
    return (
        <ul>
            {thingsListMap}
        </ul>
    )
}

export default List
