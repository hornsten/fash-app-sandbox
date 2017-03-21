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
      className='target poly-top text-center';
  } else if (this.props.accepts=='bottom,dress') {
      className='target poly-bottom text-center';
  } else if (this.props.accepts=='accessory,flair') {
      className='target poly-flair text-center'
  } else if (this.props.accepts=='shoes') {
      className='target poly-shoes text-center';
  } else if (this.props.accepts=='bag') {
     className='target poly-bag text-center';
  }
    
    return connectDropTarget(

      <div style={{ backgroundColor, opacity }} className={className}>
        <div className={lastDroppedItem ? "hide-elm" : ''}>
        {isActive ?
          'Release to drop' :
          `${accepts.join(', ')}`
        }
        </div>
        {lastDroppedItem &&
          <img style={{height:'100%',width:'auto'}} src={lastDroppedItem.src}></img>
        }
      </div>,
    );

  }
}