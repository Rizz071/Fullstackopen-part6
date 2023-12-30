import { useSelector, useDispatch } from "react-redux"
import { setFilterString } from '../reducers/filterReducer'

const Filter = () => {
    const dispatch = useDispatch()

    const handleChange = (event) => {
        event.preventDefault()

        dispatch(setFilterString({ string: event.target.value }))
    }

    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            filter <input onChange={handleChange} value={useSelector(({ filter }) => filter.string)} />
        </div>
    )
}

export default Filter