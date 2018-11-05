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
const handleListClick = (data, dispatch) => {
	const { route = '',text='' } = data
  dispatch(routerRedux.push({
    pathname: `/${route}`,
    query:{
      name : `${text}`
    }
  }));
}

module.exports = {
	handleListClick,
  handleLessonClick,
  handleGridClick
};
