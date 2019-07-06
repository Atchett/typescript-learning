
// 1 - not the best way to declare it
// declare var $: any;

// 2 - declare using declaration files something.d.ts

// 3 - install type definition using npm - 
// npm init
// run through setup of package.json file
// npm install --save-dev @types/jquery

$('button').click(function(){
	alert('botton clicked');
});