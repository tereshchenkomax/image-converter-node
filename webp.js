const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

imagemin(['images/*.{jpg,jpeg,png}'], {
				destination: __dirname + '/images/converted/',
				plugins: [
								imageminWebp({
												quality: 60,
								})
				]
}).then(() => {
				console.log('Images optimized');
});
