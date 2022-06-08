const NODE_SIZE = 20;

const getRandomColor = () => "000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

const getNode = (bgColor) => {
    return new Promise((res, rej) => {
        const img = new Image();
        img.onload = function() {
            res({data: {
                id: Math.random().toString() + Date.now(),
                bgColor,
                img
            }});
        }
        img.onerror = function(e) {
            rej(e);
        }
        img.src = `https://dummyimage.com/${NODE_SIZE}x${NODE_SIZE}/${bgColor}/fff.jpg`;
    })
}

const generateNodes = (quantity) => {
    const promises = [];

    for (let i = 0; i < quantity; i++) {
        const bgColor = getRandomColor();
        promises.push(getNode(bgColor));
    }

    return promises;
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

export const generateElements = async (quantity) => {
    const nodes = await Promise.all(generateNodes(quantity));
    const edges = generateEdges(nodes);

    return {nodes, edges};
}
