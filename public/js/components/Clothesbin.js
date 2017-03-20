import React, { PropTypes, Component } from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';

const style = {
  // height: '15rem',
  // width: '15rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'grey',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
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
    if (isActive) {
      backgroundColor = 'darkgreen';
    } else if (canDrop) {
      backgroundColor = 'darkkhaki';
    }

    let height = '15rem';
    let width = '15rem';
    let transform = 'matrix(0,0,0,0)';
    if (this.props.accepts=='top') {
      height = '30rem';
      width = '30rem';
      transform = 'matrix(0.98582, -0.16781, 0.16781, 0.98582, 0, 0)';
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