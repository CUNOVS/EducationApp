import { routerRedux } from 'dva/router';
import { Modal } from 'components';
import { doDecode } from 'utils';

const getInfo = (info) => {
  if (info) {
    try {
      return doDecode(info);
    } catch (e) {
    }
  }
  return {};
};
const handleLessonClick = ( dispatch) => {
    dispatch(routerRedux.push({
      pathname:'lessondetails'
    }))
  }
const handleGridClick = ({ route = '',text='' }, dispatch) => {
  dispatch(routerRedux.push({
    pathname: `/${route}`,
    query:{
      name : `${text}`
    }
  }));
}

module.exports = {
  handleLessonClick,
  handleGridClick
};
