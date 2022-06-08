const NODE_SIZE = 20;

const getRandomColor = () => "000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

const getNode = () => {
    const bgColor = getRandomColor();
    const random = Math.random();
    let type;

    if (random < 0.25) {
        type = 'jpg';
    } else if (random < 0.5) {
        type = 'png';
    } else if (random < 0.75) {
        type = 'corrupted';
    } else {
        type = 'cors';
    }

    return {data: {
        id: Math.random().toString() + Date.now(),
        bgColor,
        type,
    }};
}

const generateNodes = (quantity) => {
    const nodes = [];

    for (let i = 0; i < quantity; i++) {
        nodes.push(getNode());
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
    }, [])
}

export const generateElements = (quantity) => {
    const nodes = generateNodes(quantity);
    const edges = generateEdges(nodes);

    return {nodes, edges};
}
