// 给一个树形结构的数据，要求根据id找到数据
// 百度二面

function findTreeNode(tree, id) {
    for(const node of tree) {
        if (node.id === id) {
            return node;
        }

        if(node.children){
            const res = findTreeNode(node.children, id);
            if(res) return res;
        }
    }
    return null;
}

function findTreeNode2(head, id) {
    if(!head) return null
    if(head.id === id) return head;
    return findTreeNode2(head.left, id) || findTreeNode2(head.right, id);
}