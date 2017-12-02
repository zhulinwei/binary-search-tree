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
	function searchNode(node, key) {
		if (node === null) {
			return false;
		}
		if (key < node.key) return searchNode(node.left, key);
		else if (key > node.key) return searchNode(node.right, key);
		else return true;
	};
	this.search = function (key) {
		return searchNode(root, key);
	};
};

const nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13];
const binaryTree =  new BinaryTree();
nodes.forEach(node => binaryTree.insert(node));

// 查找指定值
console.log(binaryTree.search(14) ? 'key 14 is found' : 'key 14 is not found');
console.log(binaryTree.search(15) ? 'key 15 is found' : 'key 15 is not found');
