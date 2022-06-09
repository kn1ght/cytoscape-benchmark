import cytoscape from 'cytoscape';
import { generateElements } from './generateElements';
import { getStyles } from './getStyles';
import './style.css';

const MIN_ZOOM = 0.1;
const MAX_ZOOM = 1;

function main() {
    const elements = generateElements(1500);
    const container = document.getElementById('cy');

    const cy = cytoscape({
        container,
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
    
    const styles = getStyles();
    
    cy.style(styles);
}

main();
