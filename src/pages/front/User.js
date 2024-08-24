export default function User() {
    const userData = {
        userId: '652612',
        email: 'text@gmail.com',
        password: '123456',
        name: 'Ken',
        gender: '男',
        tel: '0914785236',
        intro: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi laboriosam illum deleniti consectetur hic enim esse placeat eum quibusdam blanditiis, accusantium a dolorem inventore tempore nobis ipsum, rem nulla nesciunt.'
    }
    const { email, password, name, gender, tel, intro } = userData
    return (
        <>
            <div className="user container py-5">
                <div className="profile-picture">
                    <img src="default-avatar.png" alt="User Avatar" id="avatar" />
                    <button className="edit-button"
                    //onClick={handleAvatarUpload}
                    >Edit</button>
                </div>
                <div className="basic-info">
                <p>email:{email}</p>
                <p>password:{password}</p>
                <p>name:{name}</p>
                <p>Gender: {gender}</p>
                <p>tel: {tel}</p>
                <button className="edit-button"
                //onClick={handleEdit}
                >Edit Info</button>
            </div>
            <div className="personal-intro">
                <h3>Personal Introduction</h3>
                <p>{intro}</p>
                <button className="edit-button"
                    //onClick={handleEdit}
                >Edit Introduction</button>
            </div>
            </div>
           
        </>
    )
}