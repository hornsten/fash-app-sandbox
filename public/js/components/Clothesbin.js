import React, { PropTypes, Component } from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';

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
    
    let backgroundColor = 'transparent';
    let opacity = '1';
    if (isActive) {
      backgroundColor = 'darkgreen';
    } else if (canDrop) {
      backgroundColor = 'darkkhaki';
    } 

  let className = '';
    if (this.props.accepts=='top') {
      className='target poly-top';
  } else if (this.props.accepts=='bottom,dress') {
      className='target poly-bottom';
  } else if (this.props.accepts=='accessory,flair') {
      className='target poly-flair'
  } else if (this.props.accepts=='shoes') {
      className='target poly-shoes';
  } else if (this.props.accepts=='bag') {
     className='target poly-bag';
  }
    
    return connectDropTarget(

      <div style={{ backgroundColor, opacity }} className={className}>
        {isActive ?
          'Release to drop' :
          `${accepts.join(', ')}`
        }
        {lastDroppedItem &&
          <img style={{height:'100%',width:'auto'}} src={lastDroppedItem.src}></img>
        }
      </div>,
    );
  }
}