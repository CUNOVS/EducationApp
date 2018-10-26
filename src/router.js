import React from 'react';
import PropTypes from 'prop-types';
import { Router } from 'dva/router';
import App from 'routes/app';

const registerModel = (app, model) => {
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model);
  }
};

const Routers = function ({ history, app }) {
  const routes = [
    {
      path: '/',
      component: App,
      getIndexRoute (nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('models/dashboard'));
          cb(null, { component: require('routes/dashboard/') });
        }, 'dashboard');
      },
      childRoutes: [
        {
          path: 'dashboard',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/dashboard'));
              cb(null, require('routes/dashboard/'));
            }, 'dashboard');
          },
        },
        {
          path: 'studyBase',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/studyBase'));
              cb(null, require('routes/studyBase/'));
            }, 'studyBase');
          },
        },
        {
          path: 'classify',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/classify'));
              cb(null, require('routes/classify/'));
            }, 'classify');
          },
        },
        {
          path: 'login',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/login'));
              cb(null, require('routes/login/'));
            }, 'login');
          },
        },
        {
          path: 'mine',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/mine'));
              cb(null, require('routes/mine/'));
            }, 'mine');
          },
        }, {
          path: 'lanmusub',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/lanmusub'));
              cb(null, require('routes/lanmusub/'));
            }, 'lanmusub');
          },
        }, {
          path: 'lanmutab',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/lanmutab'));
              cb(null, require('routes/lanmutab/'));
            }, 'lanmutab');
          },
        },
        {
          path: 'iframe',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('routes/iframe/'));
            }, 'iframe');
          },
        },
        {
          path: 'setup',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/setup'));
              cb(null, require('routes/setup/'));
            }, 'setup');
          },
        },
        {
          path: 'aboutus',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/aboutus'));
              cb(null, require('routes/aboutus/'));
            }, 'aboutus');
          },
        },
        {
          path: 'opinion',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/opinion'));
              cb(null, require('routes/opinion/'));
            }, 'opinion');
          },
        },
        {
          path: 'school',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/school'));
              cb(null, require('routes/school/'));
            }, 'school');
          },
        },
        {
          path: 'building',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/building'));
              cb(null, require('routes/building/'));
            }, 'building');
          },
        },
        {
          path: 'lesson',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/lesson'));
              cb(null, require('routes/lesson/'));
            }, 'lesson');
          },
        },
        {
          path: 'lessondetails',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/lessondetails'));
              cb(null, require('routes/lessondetails/'));
            }, 'lessondetails');
          },
        },   
        {
          path: 'shoppings',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/shopping'));
              cb(null, require('routes/shopping/'));
            }, 'shopping');
          },
        },
        {
<<<<<<< HEAD
          path: 'search',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/search'));
              cb(null, require('routes/search/'));
            }, 'search');
          },
        },
        {
          path: 'curriculum',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/curriculum'));
              cb(null, require('routes/curriculum/'));
            }, 'curriculum');
          },
        },
        {
          path: 'moreMessage',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/moreMessage'));
              cb(null, require('routes/moreMessage/'));
            }, 'moreMessage');
          },
        }, 
        {
          path: 'moreMessageItem',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/moreMessageItem'));
              cb(null, require('routes/moreMessageItem/'));
            }, 'moreMessageItem');
          },
        },  
        {
          path: 'signUp',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/signUp'));
              cb(null, require('routes/signUp/'));
            }, 'signUp');
          },
        },
        {
          path: 'commentList',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/commentList'));
              cb(null, require('routes/commentList/'));
            }, 'commentList');
          },
        },
        {
          path: 'courses',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/courses'));
              cb(null, require('routes/courses/'));
            }, 'courses');
          },
        },
        {
          path: 'timetable',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/timetable'));
              cb(null, require('routes/timetable/'));
            }, 'timetable');
          },
        },
        {
          path: 'enterOf',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/enterOf'));
              cb(null, require('routes/enterOf/'));
            }, 'enterOf');
          },
        },      
				{
          path: 'mien',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/mien'));
              cb(null, require('routes/mien/'));
            }, 'mien');
          },
        },
        {
          path: 'mienDetails',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/mienDetails'));
              cb(null, require('routes/mienDetails/'));
            }, 'mienDetails');
          },
        },
        {
          path: 'pay',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/pay'));
              cb(null, require('routes/pay/'));
            }, 'pay');
=======
          path: 'video',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/video'));
              cb(null, require('routes/video/'));
            }, 'video');
          },
        },
        {
          path: 'gradedetails',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/gradedetails'));
              cb(null, require('routes/gradedetails/'));
            }, 'gradedetails');
>>>>>>> c7fb6323691efa73fc999dd6ed2192f781e4544c
          },
        },
        {
          path: '*',
          getComponent (nextState, cb) {
            const { location: { pathname } } = nextState;
            if (pathname && /^\/(android).+?index\.html$/.exec(pathname)) {
              require.ensure([], (require) => {
                registerModel(app, require('models/dashboard'));
                cb(null, require('routes/dashboard/'));
              });
            }
          },
        },
      ],
    },
  ];

  return <Router history={history} routes={routes} />;
};

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
};

export default Routers;
