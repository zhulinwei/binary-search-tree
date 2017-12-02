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
	function breadTraverse(node, callback) {
		if (node !== null) {
			var list = [];
			list.push(node);
			while(list.length !== 0) {
				node = list.shift();
				callback(node.key);
				if (node.left) list.push(node.left);
				if (node.right) list.push(node.right);
			}
		}
	};
	this.breadTraverse = function (callback) {
		breadTraverse(root, callback);
	};
};

const nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13];
const binaryTree =  new BinaryTree();
nodes.forEach(node => binaryTree.insert(node));

// 层序遍历
binaryTree.breadTraverse(key => console.log(key));