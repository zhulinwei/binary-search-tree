function BinaryTree() {
	let root = null;
	function Node(key) {
		this.key = key;
		this.left = null;
		this.right = null;
	};
	function insertNode(node, newNode) {
		if (newNode.key < node.key) {
			if (node.left === null) node.left = newNode;
			else insertNode(node.left, newNode);
		} else {
			if (node.right === null) node.right = newNode;
			else insertNode(node.right, newNode);
		}
	};
	this.insert = function (key) {
		const newNode = new Node(key);
		if (root === null) root = newNode;
		else insertNode(root, newNode);
	};
	function removeNode(node, key) {
		if (node === null) {
			return null;
		}
		if (key < node.key) {
			node.left = removeNode(node.left, key);
			return node;
		} else if (key > node.key) {
			node.right = removeNode(node.right, key);
			return node;
		} else {
			if (node.left === null && node.right === null) {
				node = null;
				return node;
			}
		}
	};
	this.remove = function (key) {
		root = removeNode(root, key);
		console.log('删除叶结点后的二叉搜索树的格式如下：', root)
	};
};

const nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13];
const binaryTree = new BinaryTree();
nodes.forEach(node => binaryTree.insert(node));

// 删除叶结点
binaryTree.remove(1);

