/* INST0019 - 2021/22
 *
 * Supplied JavaScript code for assessment 2
 *
 * Santa Claus checking (and making) his list
 */



/*
 * start up - run as soon as we load the javascript file
 */

// an array for the children
var children = new Array();

// an array for types of gift
var gifts = new Array();

/*
 * constructor function for child Object
 *
 * This should not be changed
 */
function Child (cName, cBehave, cGift) {
    this.name = cName;
    this.behave = cBehave;
    this.gift = cGift;
	this.randomGift = childRandomGift; // a function we will use to allocate a random gift
}

// add an initial gifts to the array, matching the default <option> in the HTML page
gifts[0]="nothing";


// YOU CAN ADD ADDITIONAL GLOBAL VARIABLES IF YOU WISH, BUT SHOULD REMEMBER THAT THE CODE MUST
// WORK WITH THE SUPPLIED HTML FILE

/*
 * end of start section
 */

/* buildGiftList
 *
 * this should be run whenever we modify the gift list
 *
 * This should not be changed
 */
function buildGiftList() {

	// get the menu in the form
	var giftMenu = document.getElementById("giftMenu");

	var output = "";

	// add an option for each gift; generate a unique id in case we need it
	for (var i=0;i < gifts.length; i++) {
		output += "<option id=giftlist" + i + " value=" + i + ">" + gifts[i] + "</option>";
	}

	// replaces whatever is currently in the menu with an updated set of options
	giftMenu.innerHTML = output;
}


/*
 * listGifts()
 *
 * should update the page HTML to show a list of types of available gift
 *
 * the format/appearance of that list is up to the student
 */ 
function listGifts() {

	var output = "";
	// ADD CODE HERE TO CREATE A LIST OF GIFTS THAT SANTA CLAUS CAN GIVE
	// THIS SHOULD BE BASED ON THE ARRAY 'gifts'; YOU SHOULD UPDATE THE STRING 'output'

	for(var i = 0;i < gifts.length; i++){
		output += '<p>' + gifts[i] + '<p>'
	}

	// display the output
	document.getElementById("outputDiv").innerHTML = output;
	
}



/*
 * addChild()
 *
 * This should add a new entry to the array 'children'
 *
 * That entry should be created using 'new Child()'; you will need to supply parameters defining the child's name, behaviour and gift type
 */
function addChild() {

	// ADD CODE HERE TO ADD NEW CHILD TO THE END OF THE ARRAY 'children'
	//
	// YOU WILL NEED TO READ VALUES FROM THE FORM ELEMENTS 'childName', 'behaveMenu' AND 'giftMenu'
	var newIndex = children.length;
	var cName = document.getElementById('childName').value.trim();
	
	var childbehave = document.getElementById('behaveMenu');
	var cBehave =  childbehave.options[childbehave.selectedIndex].value;
	
	var childgift = document.getElementById('giftMenu');
	var cGift = childgift.options[childgift.selectedIndex].value;
	
	children[newIndex] = new Child(cName, cBehave, cGift);

	
	return;
}

/* addGift()
 *
 * This is used to add a new gift of the 'gifts' array
 *
 * It may display a status message to confirm that the gift has been added
 *
 * It is not expected to return a value
 */
// add a new gift
function addGift() {
	// ADD CODE HERE TO ADD A NEW GIFT
	// THIS SHOULD READ A VALUE FROM THE FORM ELEMENT 'giftName'
	//var newIndex = gifts.length;
	var output = "";
	var giftName = document.getElementById("giftName").value.trim();

	gifts[gifts.length] = document.getElementById('giftName').value.trim();
	// rebuild the list of gifts after a new gift is added
	buildGiftList();
	output = '<p>Added new gift: ' + giftName + '<p>'
	document.getElementById("outputDiv").innerHTML = output;

	return;
}

/* listAll()
 * 
 * list all children, whether they have been naughty or nice, and the gift that they will receive
 *
 * The appearance of the list can be chosen by the student, but should work by updating 'outputDiv'
 */
function listAll() {

	var output = '<strong><tr><td><b>&nbsp;Child&nbsp;</b></td><td><b>&nbsp;Naughty or nice?&nbsp;</b></td><td><b>&nbsp;Gift&nbsp;</b></td></tr>\n</strong>';
	// ADD CODE HERE TO GENERATE A LIST OF ALL CHILDREN, SHOWING WHETHER NAUGHTY OR NICE, 
	// AND THE GIFT THAT THEY WILL RECEIVE
	if(children.length == 0){
		output += '<p>' + 'There is no children in the list' + '<p>'
	}else{
		for(i = 0; i < children.length; i ++){
			output += '<p><tr><td>&nbsp;' + children[i].name + '&nbsp;</td><td>&nbsp;' + children[i].behave + 
			'&nbsp;</td><td>&nbsp;' + gifts[children[i].gift]
			+ '&nbsp;</td></tr>\n<p>';
			
		}
	}	// update the output
	document.getElementById("outputDiv").innerHTML = output;
		
	return;
	

}


/* listNice()
 * 
 * list all children for whom behaviour is 'nice', and the gift that they will receive
 *
 * The appearance of the list can be chosen by the student, but should work by updating 'outputDiv'
 */
function listNice() {

	var output = '<strong>'+'Child&nbsp;&nbsp;&nbsp;&nbsp;Gift' + '</strong>';
	// ADD CODE HERE TO GENERATE A LIST OF NICE CHILDREN,  
	// AND THE GIFT THAT THEY WILL RECEIVE
	for(i = 0; i < children.length; i ++){
		if(children[i].behave == 'nice'){
			output += '<p>' + children[i].name + "&nbsp;&nbsp;&nbsp;&nbsp;" + gifts[children[i].gift];
		}
	}	
	// update the output
	document.getElementById("outputDiv").innerHTML = output;
	return;
}

/* listNaughty()
 * 
 * list all children for whom behaviour is 'naughty', and the gift that they will receive (we are
 * not mean; naughty children will get a gift from Santa as well as nice children!)
 *
 * The appearance of the list can be chosen by the student, but should work by updating 'outputDiv'
 */
function listNaughty() {
	var output = '<strong>'+'Child&nbsp;&nbsp;&nbsp;&nbsp;Gift' + '</strong>';
	// ADD CODE HERE TO GENERATE A LIST OF NICE CHILDREN,  
	// AND THE GIFT THAT THEY WILL RECEIVE
	for(i = 0; i < children.length; i ++){
		if(children[i].behave == 'naughty'){
			output += '<p>' + children[i].name + "&nbsp;&nbsp;&nbsp;&nbsp;" + gifts[children[i].gift];
		}
	}	

	
	
	// update the output
	document.getElementById("outputDiv").innerHTML = output;
	return;
}

// he's checking the list twice!
// this function is another way to see who's naughty or nice

/* listChildren()
 *
 * this should be called (see HTML page) with the argument 'naughty' or 'nice'
 *
 * this should display a list of naughty or nice children, dependent on the argument used to call the function
 *
 * The appearance of the list(s) can be chosen by the student; it can be the same format as used by 
 * listNice() and listNaughty(), or can be different
 *
 * There are a variety of ways that the children array can be filtered; the method does not need to replicate
 * that used in listNice() or listNaughty()
 *
 * This function does not need to be implemented for the basic requirements of the task
 */
function listChildren(behaviour) {
	
	var output = "<strong>Child&nbsp;&nbsp;&nbsp;&nbsp;Gift</strong>";
	
	if(behaviour == 'naughty'){
		var i = 0;
		while(i< children.length){
			if(children[i].behave == behaviour){
				output += '<p>' + children[i].name + "&nbsp;&nbsp;&nbsp;&nbsp;" + gifts[children[i].gift];
			}
			i++;
		}
	}else if(behaviour == 'nice'){
		var i = 0;
		while(i< children.length){
			if(children[i].behave == behaviour){
				output += '<p>' + children[i].name + "&nbsp;&nbsp;&nbsp;&nbsp;" + gifts[children[i].gift];
			}
			i++;	
	    }
	}
	// ADD CODE HERE TO GENERATE A LIST OF NAUGHTY/NICE CHILDREN,  
	// AND THE GIFT THAT THEY WILL RECEIVE

	document.getElementById("outputDiv").innerHTML = output;
	return;
}

/*
 * randomGifts()
 *
 * This should loop through all children, and call the randomGift() method (see below) for each child
 * using (child_object).randomGift()
 *
 * (child_object).randomGift() will return a number which is the index value (in the array 'gifts') of the new gift
 * it is up to the student whether they want to impose any 'rules' about what sort of gift each child will be allocated
 *
 * if you wish to report any sort of status summary, you should update outputDiv
 *
 * This function does not need to be implemented for the basic requirements of the task
 */

function randomGifts() {
	var output = "";
	const min = 1;
	var max = gifts.length - 1;
	// ADD CODE HERE TO LOOP THROUGH THE 'children' ARRAY AND ASSIGN EACH CHILD A RANDOM GIFT
	var childRandomGift;
	for (i = 0; i < children.length; i ++){
		childRandomGift = Math.floor(Math.random() * (max - min + 1)) + min;
		while(childRandomGift == children[i].gift){
			childRandomGift = Math.floor(Math.random() * (max - min + 1)) + min;
		}
		children[i].randomGift = childRandomGift;
		
		//output += '<p>' + children[i].name + "&nbsp;&nbsp;&nbsp;&nbsp;" + gifts[children[i].randomGift];
	}
	
	var hh = "";
	var gg = "";
	if(children.length > 1){
		hh = "have";
		gg = "gifts";
	}else{
		hh = "has";
		gg = "gift";
	}
	output = '<p>' + 'Gifts have been re-allocated.' + "&nbsp;"+Number(children.length) +"&nbsp;"+ 'children' + "&nbsp;"+hh + "&nbsp;"+ 'got new gifts.'+'</p>'
	document.getElementById("outputDiv").innerHTML = output;
	return;
}


function childRandomGift(){
	
}