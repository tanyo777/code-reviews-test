
function User(props) {

    const deleteUser = () => {
        props.deleteSelectedUser(props.index);
    }

    return (
        <div>
            <h3>{props.name}, age: {props.age}</h3>
            <button 
            className="delete-btn"
            onClick={deleteUser}
            >delete</button>
        </div>
    );
}


export default User;