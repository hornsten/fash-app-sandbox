import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';

const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
};

const imageSource = {
  beginDrag(props) {
    return {
      id: props.id,
      src: props.src
    };
  },
  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      window.alert( // eslint-disable-line no-alert
        `You dropped ${item.id} into ${dropResult.name}!`,
      );
    }
  },
};

@DragSource(ItemTypes.IMAGE, imageSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))

export default class Image extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  };

  render() {
    const { isDragging, connectDragSource } = this.props;
    const { id } = this.props;
    const { src } = this.props;
    const opacity = isDragging ? 0.4 : 1;

    return (
      connectDragSource(
        <div style={{ ...style, opacity }}>
          { id }
        </div>,
      )
    );
  }
}
