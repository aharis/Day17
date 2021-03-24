let foo = 12,
	boo = 45;

function main(foo, boo) {
	// Only change code below this line

	[foo = 12, boo = 45] = [45, 12];

	return { foo, boo };

	// Only change code below this line
}

console.log(main());
module.exports = main;
