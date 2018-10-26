import { Grid } from 'components';
import styles from './index.less';

const PrefixCls = 'carouselgrid';
const CarouselGrid = (props) => {
  return (
    <div className={styles[`${PrefixCls}`]}>
      <Grid data={props.datas} isCarousel onClick={(data,index) => {
      																								const param = {
																			                  ...data,
																			                };
																			                props.Click(param, props.dispatch);
      }} />
    </div>
  );
};

CarouselGrid.defaultProps = {
  datas: []
};
CarouselGrid.propTypes = {

};
export default CarouselGrid;
