var slideshow = {
	photoList: ["farm", "woods", "lake"],
	currentPhotoIndex: 0,
	nextPhoto: function() {
		if (this.currentPhotoIndex < this.photoList.length-1)  {
			this.currentPhotoIndex += 1;
			this.photoList[this.currentPhotoIndex];
			console.log(this.photoList[this.currentPhotoIndex]);
		} else {
			console.log("End of slideshow!");
		}
	}
	prevPhoto: function() {
		if (this.currentPhotoIndex < this.photoList.length-1)  {
			this.currentPhotoIndex -= 1;
			this.photoList[this.currentPhotoIndex];
			console.log(this.photoList[this.currentPhotoIndex]);
		} else {
			console.log("End of slideshow!");
		}
	}
}

slideshow.nextPhoto();



