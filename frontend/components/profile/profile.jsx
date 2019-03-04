import React from 'react';

import UserPostsIndexContainer from '../post/user_post_index_container';
import Modal from '../modal/modal'

class Profile extends React.Component {
    constructor(props) {
        super(props)

        // this.state={username: "",}
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
    }

    componentDidUpdate(){
        // debugger
        if(!this.props.user || this.props.match.params.userId !== String(this.props.user.id)){
            this.props.fetchUser(this.props.match.params.userId)
        }
        // }else{
        //     this.props.fetchUser(this.props.match.params.userId)
        // }
    }

    render() { 
        const { user, currentUser, openModal } = this.props;
        return (  
            this.props.user ? (
                <>
                    <Modal />
                    <div className="profile-user">
                        <div>
                            {user.avatar ? (
                                <img src={user.avatar}/>
                            ):(
                                <img src="/assets/default_avatar.svg"/>

                            )}
                        </div>
                        <section>
                            <div>
                                <h1>{user.username}</h1>
                                {String(currentUser) === this.props.match.params.userId ? (<div onClick={() => openModal({type: 'settings'})} className="settings-icon icon glyph"></div>) : (<div>Follow</div>)}
                                
                            </div>
                            <div>
                                <p>{user.postIds.length}<span> posts</span></p>
                            </div>
                            <div>
                                <h3>{user.fullName}</h3>
                            </div>
                        </section>
                    </div>
                    <div>
                        <UserPostsIndexContainer id={this.props.match.params.userId}/>
                    </div>
                </>

            ) : (
                <div className="loader"> 
                    <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            )
        );
    }
}
 
export default Profile;