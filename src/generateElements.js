const getRandomColor = () => "000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

const getNode = (unhealthy) => {
    const bgColor = getRandomColor();
    const random = Math.random();
    let type;

    if (unhealthy) {
        if (random < 0.25) {
            type = 'jpg';
        } else if (random < 0.5) {
            type = 'png'; 
        } else if (random < 0.75) {
            type = 'corrupted';
        } else {
            type = 'cors';
        }
    } else {
        if (random < 0.5) {
            type = 'jpg';
        } else {
            type = 'png';
        }
    }

    return {data: {
        id: Math.random().toString() + Date.now(),
        bgColor,
        type,
    }};
}

const generateNodes = (quantity, unhealthy) => {
    const nodes = [];

    for (let i = 0; i < quantity; i++) {
        nodes.push(getNode(unhealthy));
    }

    return nodes;
};

const generateEdge = (source, target) => {
    return ({data: {
        source,
        target
    }});
}

const generateEdges = (nodes) => {
    return nodes.reduce((edges, node, i) => {
        if (nodes[i + 1]) {
            const edge = generateEdge(node.data.id, nodes[i + 1].data.id);
            return edges.concat(edge);
        }
    
        return edges;
    }, []);
}

export const generateElements = (quantity, unhealthy) => {
    const nodes = generateNodes(quantity, unhealthy);
    const edges = generateEdges(nodes);

    return {nodes, edges};
}
