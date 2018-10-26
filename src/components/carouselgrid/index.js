import { Grid } from 'components';
import styles from './index.less';

const PrefixCls = 'carouselgrid';
const CarouselGrid = (props) => {
  return (
    <div className={styles[`${PrefixCls}`]}>
<<<<<<< HEAD
      <Grid data={props.datas} isCarousel onClick={(data,index) => {
      																								const param = {
																			                  ...data,
																			                };
																			                props.Click(param, props.dispatch);
      }} />
=======
      <Grid data={props.datas} isCarousel hasLine={props.hasLine} onClick={_el => console.log(_el)} />
>>>>>>> c7fb6323691efa73fc999dd6ed2192f781e4544c
    </div>
  );
};

CarouselGrid.defaultProps = {
  datas: [],
  hasLine:false
};
CarouselGrid.propTypes = {

};
export default CarouselGrid;
