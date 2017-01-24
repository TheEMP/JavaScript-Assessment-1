//1. Using dot and bracket notation modify the existing object values to replace the information with your own

var me = {
	'name': 'Jake Overall',
	'age': 29,
	'hair color': 'brown'
};
me.name = "Gunnar"
me["age"] = 19
//2. Iterate over the object to console.log the propery or key names. 

for (item in me) {
	console.log(item + me[item])
}