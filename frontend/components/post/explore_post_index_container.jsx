import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchExplore } from '../../actions/post_actions';
import { openPostModal, openLoadingModal, closeLoadingModal } from '../../actions/modal_actions';
import { receiveScroll } from '../../actions/scroll_actions'

const mSP = (state, ownProps) => ({
  posts: state.entities.posts,
  pages: ownProps.pages,
  id: null
})

const mDP = dispatch => ({
    action: (id) => dispatch(fetchExplore()),
    openPostModal: modal => {
        dispatch(receiveScroll(modal.scroll));
        dispatch(openPostModal(modal));
    },
    openLoadingModal: () => dispatch(openLoadingModal()),
    closeLoadingModal: () => dispatch(closeLoadingModal())
})

export default connect(mSP, mDP)(PostIndex)