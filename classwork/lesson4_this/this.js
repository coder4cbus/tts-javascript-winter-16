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
	}
}

slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.getCurrentPhoto();
slideshow.getCurrentPhoto();
slideshow.getCurrentPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.getCurrentPhoto();


