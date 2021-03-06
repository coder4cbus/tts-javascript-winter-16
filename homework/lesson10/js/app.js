$(document).ready(function () {

	function login() {
		if ($('#login_input').val() === '' || $('#login_input').val() === $('#login_input').prop("defaultValue")) {
			alert('Please enter your username.');	
		} else {
			// get value
			var userNameLogin = $('#login_input').val();	
			// lookup value
			var usersPromise = getUserByName(userNameLogin);
			usersPromise
				// display users homepage if found
				.then(function(user) {
					displayHomePage(user);
					// console.log(userFound);
				})
				// display error if not found
				.catch(handleUsernameError);
		}
		console.log('login attempt= ' + userNameLogin);
	}

	// event handlers
	$('#login_btn').on("click", login);
	$('#login_input').on( "keypress", function(e) {	
		// returns which keyboard key or mouse button was pressed for the event
	  var key = e.which || e.keyCode;
	  if (key === 13) { // 13 is enter key
	    login();
	  } else { /* do nothing */ }
	});
});

function handleUsernameError(err){
  console.warn(err, 'User not found.');
  $('.login_error').html(err + ' Please login with your username.');
}

function handleUsersPostsError(err){
  console.warn(err, 'Posts not found.');
  $('.homepage_error').html(err);
}

function handleUsersAlbumsError(err){
  console.warn(err, 'Albums not found.');
  $('.homepage_error').html(err);  
}

function handlePostError(err){
  alert(err);
}

function handleCommentsError(err){
  alert(err);
}

function getUserByName(un) {
	return new Promise(function(resolve, reject){
		$.get('http://jsonplaceholder.typicode.com/users?username=' + un, function(users){
			if(users.length) {
			  resolve(users[0]);
			}
			else {
			  reject('User with name ' + un + ' not found.');
			}
	   });
	})
}

function getPostsByUser(usrId, usrNme) {
	return new Promise(function(resolve, reject){
		$.get('http://jsonplaceholder.typicode.com/posts?userId=' + usrId, function(posts){
			if(posts.length) {
			  resolve(posts);
			}
			else {
			  reject('Posts by user with the name ' + usrNme + ' cannot not be found.');
			}
	   });
	})
}

function getPost(pid) {
	return new Promise(function(resolve, reject){
		$.get('http://jsonplaceholder.typicode.com/posts?id=' + pid, function(post){
			if(post.length) {
			  resolve(post);
			}
			else {
			  reject('Post with the id ' + pid + ' cannot not be found.');
			}
	   });
	})
}

function getComments(postId) {
	return new Promise(function(resolve, reject){
		$.get('http://jsonplaceholder.typicode.com/comments?postId=' + postId, function(comments){
			if(comments.length) {
			  resolve(comments);
			}
			else {
			  reject('Comments with the postId ' + postId + ' cannot not be found.');
			}
	   });
	})
}

function getAlbumsByUser(usrId) {
	return new Promise(function(resolve, reject){
		$.get('http://jsonplaceholder.typicode.com/albums?userId=' + usrId, function(albums){
			if(albums.length) {
			  resolve(albums);
			}
			else {
			  reject('Albums cannot not be found.');
			}
	   });
	})
}

function displayHomePage(usr) {
	var userName = usr.name;
	var userId = usr.id;
	
	getPostsByUser(userId, userName)
		.then(function(posts) {
			displayUsersPosts(posts);			
			console.log(posts);
		})
		.catch(handleUsersPostsError);	

	getAlbumsByUser(userId)
		.then(function(albums) {
			displayUsersAlbums(albums);			
			console.log(albums);
		})
		.catch(handleUsersAlbumsError);

	$('.login_form').hide();
	$('.user_homepage').show();
	$('#user_welcome').html('Welcome, ' + userName);
	console.log('displayHomePage = ' + userName);
}

function displayUsersPosts(posts) {
	for (var i = 0; i < posts.length; i++) {
		var newPostTitle = $('<li><a class="post_link" data-postid='+posts[i].id+'>' + posts[i].title + '</a></li>');
		$('#post_titles').append(newPostTitle);		
		$('.post_link').bind( "click", handlePostClick);
	}
	console.log('displayUsersPosts = ' + posts);
}

function displayUsersAlbums(albums) {
	for (var i = 0; i < albums.length; i++) {
		var newAlbumTitle = $('<li>' + albums[i].title + '</li>');
		$('#user_albums').append(newAlbumTitle);		
	}
	console.log('displayUsersAlbums = ' + albums);
}

function displayPost(post) {
	$('.user_homepage').hide();
	$('.post_view').show();	
	$('#post_title').html("Post Title: " + post.title);	
	$('#post_text').html("Post Text: " + post.body);	
	console.log(post);
}

function displayComments(comments) {
	console.log('displayComments() comments= ' + comments);
}

function handlePostClick() {
	var postViewId = $(event.target).attr('data-postid');
	getPost(postViewId)
		.then(displayPost)
		.catch(handlePostError);	
	// getComments(postViewId)
	// 	.then(function(comments) {
	// 		displayComments(comments);			
	// 		console.log(comments);
	// 	})
	// 	.catch(handlePostError);			
	console.log('displayPostView postViewId = ' + postViewId);
}







// // This makes sure the document exists before your code tries to manipulate it.
// $(document).ready(function () {
// 	// Store references to elements to target
// 	var inputBox = $('#inputBox');
// 	var toDoList = $('#toDoList');
// 	var addNewItemBtn = $('#btn');

// 	// Bind an event handler to the "click" JavaScript event on our button
// 	addNewItemBtn.on("click", function () {
// 		// invoke function to add new item
// 		addNewItem();
// 	});

// 	// add functionality for 'enter' key, Bind an event handler to the "keypress" JavaScript event
// 	inputBox.on( "keypress", function(e) {	
// 		// returns which keyboard key or mouse button was pressed for the event
// 	  var key = e.which || e.keyCode;
// 	  if (key === 13) { // 13 is enter
// 	  	// invoke function to add new item
// 	    addNewItem();
// 	  } else {
// 	  	// do nothing
// 	  }
// 	});

// 	toDoList.on("click", function () {
// 		// store reference to item that is clicked
// 	  var itemRemove = $(event.target);
// 	  // store reference to parent of item that is clicked
// 	  var itemParent = itemRemove.parent();

// 	  // change the styling of the item that is clicked
// 	  itemRemove.css('textDecoration', 'line-through');

// 	  // check that the parent is not the entire list
// 	  if (itemParent.is('ul')) {
// 	  	// create a timer that wait 1 sec before removing the list item
// 			setTimeout(function(){ 
// 				itemRemove.remove();
// 			}, 1000); 
// 	  } else {
// 	  	// if item clicked is anchor tag, remove list item
// 			setTimeout(function(){ 
// 				itemParent.remove();
// 			}, 1000); 	
// 	  }
// 	});

// 	// function to add new item to the list
// 	function addNewItem() {
// 		if (inputBox.val() === '' || inputBox.val() === inputBox.prop("defaultValue")) {
// 			// notify user that value is empty
// 			alert('Please add a new item.');	
// 		} else {
// 			// create new element
// 			var newItem = $('<li></li>')
// 			// create element, add element to new element containing input value 
// 		  newItem.html('<a href="#">' + inputBox.val() +'</a>');
// 		  // add created item to entire list
// 		  toDoList.append(newItem);
// 		  // clear input value from input element
// 		  inputBox.val("");	
// 		}
// 	}
// });

















