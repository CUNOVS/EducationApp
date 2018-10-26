import { Grid } from 'components';
import styles from './index.less';

const PrefixCls = 'carouselgrid';
const CarouselGrid = (props) => {
  return (
    <div className={styles[`${PrefixCls}`]}>
      <Grid data={props.datas} isCarousel hasLine={props.hasLine} onClick={(data,index) => {
      																								const param = {
																			                  ...data,
																			                };
																			                props.handleClick(param, props.dispatch);
      }} />
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
