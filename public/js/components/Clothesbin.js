import React, { PropTypes, Component } from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';

const style = {
  marginRight: '0.1rem',
  marginBottom: '0.1rem',
  color: 'grey',
  padding: '0',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
  overflow: 'hidden',
};

const clothesbinTarget = {
  drop(props, monitor) {
    props.onDrop(monitor.getItem());
  },
};

@DropTarget(props => props.accepts, clothesbinTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))
export default class Clothesbin extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
    accepts: PropTypes.arrayOf(PropTypes.string).isRequired,
    lastDroppedItem: PropTypes.object,
    onDrop: PropTypes.func.isRequired,
  };

  render() {
   
    const { accepts, isOver, canDrop, connectDropTarget, lastDroppedItem } = this.props;
    const isActive = isOver && canDrop;
    
    let backgroundColor = '#eee';
    let opacity = '.5';
    if (isActive) {
      backgroundColor = 'darkgreen';
      opacity = '1';
    } else if (canDrop) {
      backgroundColor = 'darkkhaki';
      opacity = '1';
    }

    let height = '15rem';
    let width = '15rem';
    let transform = 'matrix(0,0,0,0)';
    if (this.props.accepts=='top') {
      height = '30rem';
      width = '25rem';
      transform = 'matrix(0.98582, -0.16781, 0.16781, 0.98582, 0, 0)';
    } else if (this.props.accepts=='bottom,dress') {
      height = '40rem';
      width = '20rem';
      transform = 'matrix(0.99978, -0.02083, 0.02083, 0.99978, 0, 0)';
    } else if (this.props.accepts=='accessory,flair') {
      height = '10rem';
      width = '10rem';
      transform = 'matrix(0.90439, 0.42666, -0.42666, 0.90439, 0, 0)';
    }

    return connectDropTarget(

      <div style={{ ...style, backgroundColor,height,width,transform }}>
        {isActive ?
          'Release to drop' :
          `${accepts.join(', ')}`
        }
        {lastDroppedItem &&
          <img style={{height:'100%'}} src={lastDroppedItem.src}></img>
        }
      </div>,
    );
  }
}