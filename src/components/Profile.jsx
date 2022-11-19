import avatar from "/img/avatar.jpg";

function Profile() {
  return (
    <div className="profile">
      <img src={avatar} alt="avatar" height="85px" id="profile__img" />
      <div>
        <p>Frontend Developer</p>
        <p>
          Call me <strong>Avos</strong>
        </p>
      </div>
    </div>
  );
}
export default Profile;
