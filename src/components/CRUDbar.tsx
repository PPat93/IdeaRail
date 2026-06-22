function BtnbarEdit() {
    return <div className="btn-group" role="group" aria-label="Button bar">
        <button type="button" className="btn btn-primary">View</button>
        <button type="button" className="btn btn-primary">Edit</button>
        <button type="button" className="btn btn-primary">Delete</button>
    </div>
}

function CRUDbar() {
    return <>
        <BtnbarEdit/>
    </>

}

export default CRUDbar;