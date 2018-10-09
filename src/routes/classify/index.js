import { connect } from 'dva';
import Nav from 'components/nav';
import { Modal, Tabs, WhiteSpace, List, Icon, Layout, SearchBar } from 'components';
import ClassifyItem from 'components/classify';
import { handleBuildingClick, getLocalIcon } from 'utils';
import styles from './index.less';


const PrefixCls = 'classify', 
  Item = List.Item, 
  Brief = Item.Brief;

function Classify ({ location, dispatch, classify }) {
  const { name = '分类' } = location.query,
    { items, tabs, listData } = classify;
  const { BaseLine } = Layout;

  const getList = (listData) => {
    return (<List className={styles[`${PrefixCls}-list`]}>
      {
        listData && listData.map((data, i) => {
          return (<Item
            thumb={data.image}
            multipleLine
            wrap
            onClick={handleBuildingClick.bind(null, dispatch)}
          >
            <span> {data.title}</span>
            <div className={styles[`${PrefixCls}-list-info`]}>
              <div className={styles[`${PrefixCls}-list-info-box`]}>
                <span><Icon type={getLocalIcon('/components/rmb.svg')} size="xxs" /></span>
                <span>{data.price}</span>
              </div>
              <div className={styles[`${PrefixCls}-list-info-box`]}>
                <span><Icon type={getLocalIcon('/components/people.svg')} size="xxs" /></span>
                <span>{data.people}</span>
              </div>
            </div>
          </Item>);
        })
      }
    </List>);
  };
  return (
    <div>
      <div className={styles[`${PrefixCls}-searchbox`]}>
        <SearchBar placeholder="搜索" maxLength={8} />
      </div>
      <div className={styles[`${PrefixCls}-content`]}>
        <div className={styles[`${PrefixCls}-title`]}>分类</div>
        <div className={styles[`${PrefixCls}-container`]}>
          {
            items && items.map((data, i) => {
              console.log(data);
              return <ClassifyItem key={i} items={data} />;
            })
          }
        </div>
      </div>

      <div className={styles[`${PrefixCls}-order`]}>
        <div className={styles[`${PrefixCls}-title`]} style={{ marginLeft: '10px' }}>子分类</div>
        <Tabs tabs={tabs} initialPage={2} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />}>
          {getList(listData)}
        </Tabs>
        <BaseLine />
      </div>

    </div>
  );
}

export default connect(({ loading, classify }) => ({
  loading,
  classify,
}))(Classify);
