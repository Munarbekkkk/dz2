


const ContactPage = () => {

    const [ inputValue, setInputValue ] = useState()

    const contactTitle= useSelector(state => state.contactsPageReducer.title)
    const dispatch = useDispatch()

    const withParams = () => {
        dispatch({
            type: 'WITH_PARAMS',
            payload: 232432432
        })
    }

    const addInput = () => {
        dispatch({
            type: 'FROM_INPUT',
            payload: inputValue
        })
    }

    return (
        <div>
            <h1>{ contactTitle }</h1>
            <button onClick={withParams}>change title with params</button>
            <h2>-----------------------------------------------------</h2>
            <input type='text' onChange={(event) => setInputValue(event.target.value)} />
            <button onClick={addInput}>add</button>
        </div>
    )
}

export default ContactPage