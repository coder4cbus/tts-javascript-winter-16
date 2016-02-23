function User() {}

User.prototype = {
	name: 'string',
	addressstring: 'string',
	city: '',
	state: 'string',
	zipcode: 'string',
	avatar: 'imageURL',
	getProfileUpdate: function(a, b, c, d, e, f) {
		this.name = a;
		this.addressstring = b;
		this.city = c; 
		this.state = d;
		this.zipcode = e;
		this.avatar = f;
	}	
}

var userProfile = new User();

// var updateProfile = Object.assign({}, userProfile, {
//     name: 'Jimmy',
//     addressstring: '300 Hawthorne Lane',
// 		city: 'Charlotte',
// 		state: 'NC',
// 		zipcode: '28204',
// 		avatar: 'http://placehold.it/200x200',    
// });

// console.log(updateProfile);
// console.log(userProfile.getProfileUpdate('Mary', '300 Hawthorne Lane', 'Charlotte', 'NC', '28204', 'http://placehold.it/200x200'));

function updateProfile() {
	userProfile.getProfileUpdate('Jimmy', '300 Hawthorne Lane', 'Charlotte', 'NC', '28204', 'http://placehold.it/200x200')
	console.log(userProfile);
}

updateProfile();