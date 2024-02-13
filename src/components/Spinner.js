import '../styles/spinner.css'

function Spinner(props) {

    return (
        <div className="lds-dual-ring" {...props} ></div>
    )
}

export default Spinner;