import React from "react";
import { DragSource } from 'react-dnd';

class ClosetPicker extends React.Component {
   constructor(props) {
      super(props);
   }

// dragStart(e)
//         {
//             //store the position of the mouse relativly to the image position
//             e.dataTransfer.setData("mouse_position_x",e.clientX - e.target.offsetLeft );
//             e.dataTransfer.setData("mouse_position_y",e.clientY - e.target.offsetTop  );
//             e.dataTransfer.setData("image_id",e.target.id);
//         }


dragStart (event) {

    event.dataTransfer.setData('text', event.target.id);
    
  }

preventDefault(event) {
    event.preventDefault();
}

// drop(e)
//         {

//             var canvas = document.getElementById('myCanvas');
//             var ctx = canvas.getContext('2d');
//             e.preventDefault();
//             var image = document.getElementById( e.dataTransfer.getData("image_id") );
//             var mouse_position_x = e.dataTransfer.getData("mouse_position_x");
//             var mouse_position_y = e.dataTransfer.getData("mouse_position_y");
//              image.addEventListener('load', drawImage);
//             // the image is drawn on the canvas at the position of the mouse when we lifted the mouse button
//             ctx.drawImage( image , e.clientX - canvas.offsetLeft - mouse_position_x , e.clientY - canvas.offsetTop - mouse_position_y );
//             console.log("image: ",image);
//             console.log(mouse_position_x,mouse_position_y);
//         }

//  convertCanvasToImage() {
//             var canvas = document.getElementById('myCanvas');
//             var image_src = canvas.toDataURL("png");
//             console.log(image_src);
         
// }

drop(event) {

    event.preventDefault();

    var data = event.dataTransfer.getData("text");
    var dropItem = document.getElementById(data);
    dropItem.className='dropped';
    event.target.appendChild(dropItem);
    event.target.classList.remove('bg');
   
}

handleClick(e) {
e.preventDefault();

}

// saveCanvas(e) {
//     e.preventDefault();
//     var canvas = document.getElementById('myCanvas');
//     var context = canvas.getContext('2d');
//     //  var dataURL = canvas.toDataURL();
//      var image_src = canvas.toDataURL("image/png");
//      window.open(image_src);
//      console.log(dataURL);
// }

   render() {
       
       let {dashboard, dispatch} = this.props;
      let {sideNavExpanded, onDisplay, closetItems} = dashboard;
      let clothesImages = Object.keys(closetItems).map((imgKey,index)=> {

          return <img id={imgKey} draggable="true" onDragStart={this.dragStart} key={imgKey} src={closetItems[imgKey].src}/>
      })

      return (
         <section className="container-fluid closet-container">
            <div className="col-md-6 closet-block">
      
                <div id='top-target' className="poly-top target bg" onDragOver={this.preventDefault} onDrop={this.drop}>        </div>
                <div id='bag-target' className="poly-bag target bg" onDragOver={this.preventDefault} onDrop={this.drop}>Bag</div>
                <div id='bottom-target' className="poly-bottom target bg" onDragOver={this.preventDefault} onDrop={this.drop}></div>
                <div id='shoes-target' className="poly-shoes target bg" onDragOver={this.preventDefault} onDrop={this.drop}>Shoes</div>
                <div id='accessory-target' className="poly-accessory target bg" onDragOver={this.preventDefault} onDrop={this.drop}>Accessory</div>
                <div id='prop-target' className="poly-prop target bg" onDragOver={this.preventDefault} onDrop={this.drop}>Prop</div>
 
                  {/*<div id="canvas-wrap">*/}
                        {/*<canvas id="myCanvas" onDragOver={this.preventDefault} onDrop={this.drop} width='400' height="600"></canvas>*/}
                {/*<div id="overlay" className="clothes-drop">*/}
                </div>
                {/*<button onClick={(e) => this.convertCanvasToImage(e)}>Click me</button>*/}
             <div className="col-md-6 closet-block">
                <div className="clothes-items">
                    <div className="closet-tabs-container">
                        <ul>
                            <li>Shoes</li>
                            <li>Shirts</li>
                            <li>Dresses</li>
                        </ul>
                        <div className="gallery">
                        {clothesImages}
                        </div>
                    </div>
                </div>

             </div>
         </section>
      )
   }
}


export default ClosetPicker;
