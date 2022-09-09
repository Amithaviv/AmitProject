import "./userDetails.css"

function Details({user}) {
  return (
    <div className="App">
        <form className="form">
        <img id="image" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="userImage"></img>
        <div id="name">{user}</div>
        <br></br>
        <div>Your last orders:</div>
        </form>
    </div>
  );
}
export default Details;
