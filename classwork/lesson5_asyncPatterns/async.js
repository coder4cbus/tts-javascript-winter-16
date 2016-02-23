
var slideshow = {
	photoList: ["farm", "woods", "lake"],
	currentPhotoIndex: 0,
	nextPhoto: function() {
		if (this.currentPhotoIndex < this.photoList.length-1)  {
			this.currentPhotoIndex++;
			this.photoList[this.currentPhotoIndex];
			console.log(this.photoList[this.currentPhotoIndex]);
		} else {
			console.log("End of slideshow!");
		}
	},
	prevPhoto: function() {
		if (this.currentPhotoIndex >= 1)  {
			this.currentPhotoIndex--;
			this.photoList[this.currentPhotoIndex];
			console.log(this.photoList[this.currentPhotoIndex]);
		} else {
			console.log("Begin slideshow!");
		}
	},
	getCurrentPhoto: function() {
		return console.log("Current photo is " + (this.photoList[this.currentPhotoIndex]));
	},
	
	play: function() {
		var self = this;
		setInterval(function() {
			self.nextPhoto();
		}, 2000)		
	},
	pause: function() {
		clearInterval(play);
	}
}

	
// var 	pause: function() {
// 		var self = this;
// 		clearInterval(self.play);
// 		console.log("paused");
// 	}


// slideshow.nextPhoto();
// slideshow.getCurrentPhoto();
// slideshow.prevPhoto();

// var play = setInterval(function() {
// 	// next photo
// 	slideshow.nextPhoto();
// }, 2000);
slideshow.play();
slideshow.pause();
// console.log(play);
