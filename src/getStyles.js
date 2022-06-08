const NODE_SIZE = 20;
const IMAGE_SIZE = 200;
const cors = 'https://www.svgrepo.com/show/4733/samples.svg';

export const getStyles = () => {
    return [
        {
            selector: 'edge',
            style: {
                'width': 2,
                'target-arrow-shape': 'triangle',
                'line-color': '#ffaaaa',
                'target-arrow-color': '#ffaaaa'
              }
        },
        {
            selector: "node",
            style: {
              "background-image": (node) => {
                const {type, bgColor} = node.data();
                
                switch(type) {
                  case 'jpg': {
                    return `https://dummyimage.com/${IMAGE_SIZE}x${IMAGE_SIZE}/${bgColor}/fff.jpg`; 
                  }
                  case 'png': {
                    return `https://dummyimage.com/${IMAGE_SIZE}x${IMAGE_SIZE}/${bgColor}/fff.png`;
                  }
                  case 'corrupted': {
                    return `https://placeholder.pics/svg/${IMAGE_SIZE}/${bgColor}`;
                  }
                  case 'cors': {
                    return cors;
                  }
                }
              },
              "background-width": "100%",
              "background-height": "100%",
              "background-repeat": "no-repeat",
              "background-position-x": 0,
              "background-position-y": 0,
              "background-opacity": 0,
              "background-clip": "none",
              "border-width": 0,
              "text-halign": "center",
              "text-valign": "bottom",
              width: NODE_SIZE,
              height: NODE_SIZE,
              "transition-property": "width height",
              "transition-duration": "0.2s",
              "transition-delay": 0,
              "transition-timing-function": "linear"
            }
          }
    ];
}