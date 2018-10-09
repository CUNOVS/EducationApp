import { Grid } from 'components';
import styles from './index.less';

const PrefixCls = 'carouselgrid';
const CarouselGrid = (props) => {
  return (
    <div className={styles[`${PrefixCls}`]}>
      <Grid data={props.datas} isCarousel onClick={_el => console.log(_el)} />
    </div>
  );
};

CarouselGrid.defaultProps = {
  datas: []
};
CarouselGrid.propTypes = {

};
export default CarouselGrid;
