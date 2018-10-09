const defaultTabBars = [{
  title: '首页',
  key: 1,
  icon: require('themes/images/ntabr/home.png'),
  selectedIcon: require('themes/images/ntabr/home-o.png'),
  route: '/',
}, {
  title: '分类',
  key: 2,
  icon: require('themes/images/ntabr/classify.png'),
  selectedIcon: require('themes/images/ntabr/classify-o.png'),
  route: '/classify',
}, {
  title: '学习空间',
  key: 3,
  icon: require('themes/images/ntabr/study.png'),
  selectedIcon: require('themes/images/ntabr/study-o.png'),
  route: '/studyBase',
}, {
  title: '开放大学',
  key: 4,
  icon: require('themes/images/ntabr/school.png'),
  selectedIcon: require('themes/images/ntabr/school-o.png'),
  route: '/school',
}, {
  title: '我的',
  key: 5,
  icon: require('themes/images/ntabr/mine.png'),
  selectedIcon: require('themes/images/ntabr/mine-o.png'),
  route: '/mine',
},
];


export default { defaultTabBars };
