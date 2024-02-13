const FieldData = ({name, value}) => {
    return (
        <div className="fieldBox" key={name}>
            <div className='field'>{name}</div>
            <div>{value}</div>
        </div>
    );
}

export default FieldData;