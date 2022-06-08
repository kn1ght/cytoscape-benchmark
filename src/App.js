import React from 'react';
import cytoscape from 'cytoscape';
import { generateElements } from './data';
import { useStyles } from './use-styles';

const MIN_ZOOM = 0.1;
const MAX_ZOOM = 1;

function App() {
  const container = React.useRef(null);
  const cy = React.useRef();
  const styles = useStyles();
  const [elements, setElements] = React.useState();

  React.useEffect(() => {
    generateElements(1).then((items) => {
      console.log(items);
      setElements(items);
    })
  }, []);

  React.useEffect(() => {
    if (elements) {
      cy.current = cytoscape({
        container: container.current,
        maxZoom: MAX_ZOOM,
        minZoom: MIN_ZOOM,
        zoom: MAX_ZOOM,
        autoungrabify: true,
        userZoomingEnabled: false,
        userPanningEnabled: false,
        boxSelectionEnabled: false,
        autounselectify: true,
        elements,
      });
    }

    return () => {
      cy.current?.destroy();
    };
  }, [elements]);

  React.useEffect(() => {
    if (styles) {
      cy.current?.style(styles);
    }
  }, [styles]);

  return (
    <div>
      <div id='cy-wrapper'>
        <div ref={container} id="cy" />
      </div>
    </div>
  );
}

export default App;
