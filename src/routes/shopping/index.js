/* WKC
由搜索栏旁的购物车按钮转跳 */
import React from 'react';
import Nav from 'components/nav';
import { routerRedux } from 'dva/router';
import Shopp from 'components/shopping';
import { Checkbox, Icon } from 'components';
import { getLocalIcon, arrSum } from 'utils';
import { connect } from 'dva';
import styles from './index.less';

const CheckboxItem = Checkbox.CheckboxItem,
  PrefixCls = 'shopping';

class Shopping extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { title, dataList, currentSelect = [], totalPrice } = this.props.shopping,
      getSumArr = (arr) => {
        let newArr = [];
        arr && arr.map((data) => {
          newArr.push(data.price);
        });
        return newArr || [];
      },
      handleClick = (key) => {
        let newSelect = [],
          index = -1;
        if ((index = currentSelect.indexOf(key)) !== -1) {
          newSelect = [...currentSelect.slice(0, index), ...currentSelect.slice(index + 1)];
        } else {
          newSelect = [...currentSelect, key];
        }
        this.props.dispatch({
          type: `${PrefixCls}/updateState`,
          payload: {
            currentSelect: newSelect,
            totalPrice: arrSum(getSumArr(newSelect)),
          },
        });
      },
      handlerPayClick = () => {
        this.props.dispatch(routerRedux.push({
          pathname: 'pay',
          payload: {},
        }));
      };

    const shoppingRow = (data) => {
      const { title, img, price, id } = data;
      return (
        <CheckboxItem wrap checked={currentSelect.includes(data)} onClick={handleClick.bind(this, data)}>
          <div className={styles[`${PrefixCls}-item`]}>
            <div className={styles[`${PrefixCls}-item-image`]}><img src={img} alt="" /></div>
            <div className={styles[`${PrefixCls}-item-info`]}>
              <div className={styles[`${PrefixCls}-item-info-title`]}>{title}</div>
              <div className={styles[`${PrefixCls}-item-info-price`]}>
                <span><Icon type={getLocalIcon('/components/rmb.svg')} size='xs' /></span>
                <span>{price}</span>
              </div>
            </div>
          </div>
        </CheckboxItem>
      );
    };
    return (
      <div>
        <Nav title={title} dispatch={this.props.dispatch} />
        <div className={styles[`${PrefixCls}-container`]}>
          {
            cnIsArray(dataList) && dataList.map((data, i) => {
              {
                return shoppingRow(data);
              }
            })
          }
        </div>
        {/*<Shopp />*/}
        <div className={styles[`${PrefixCls}-position`]}>
          <div className={styles[`${PrefixCls}-footer`]}>
            <div className={styles[`${PrefixCls}-footer-price`]}>{`合计：￥${totalPrice}`}</div>
            <div className={styles[`${PrefixCls}-footer-btn`]} onClick={handlerPayClick}>去结算</div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(({ shopping }) => ({
  shopping,
}))(Shopping);
