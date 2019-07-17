
const element = document.createElement('div');
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

const makePng = () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const svg = document.querySelector('#cloud > svg');
  const xml = new XMLSerializer().serializeToString(svg);
  const data = "data:image/svg+xml," + encodeURIComponent(xml);
  const img = new Image();
  img.onload = () => {
    ctx.drawImage(img, 0, 0);
    const png = canvas.toDataURL('image/png');
    const pngI = new Image();
    pngI.src = png;
    const cloudElement = document.querySelector('#png');
    cloudElement.appendChild(pngI);
  };

  img.src = data;
  const cloudElement = document.querySelector('#png');
  cloudElement.appendChild(img);
};


function svgDataURL(svg) {
  const svgAsXML = (new XMLSerializer()).serializeToString(svg);
  return "data:image/svg+xml," + encodeURIComponent(svgAsXML);
}

function appendCloud(cloud, element) {
  // removes previous cloud
  if (element.firstChild) { element.removeChild(element.firstChild); }

  select(element).append('svg')
    .attr('width', 500) // layout.size()[0]
    .attr('height', 500) // layout.size()[1]
    .append('g')
    .attr('transform', 'translate(' + 500 / 2 + ',' + 500 / 2 + ')')
    .selectAll('text')
    .data(cloud)
    .enter()
    .append('text')
    .style('font-size', d => d.size + 'px')
    .style('font-family', 'Impact')
    .style('fill', d => d.fill)
    .attr('text-anchor', 'middle')
    .attr('transform', d => 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')')
    .text(d => d.text);
}


function svgString2Image( svgString, width, height, format, callback ) {
	var format = format ? format : 'png';

	var imgsrc = 'data:image/svg+xml;base64,'+ btoa( unescape( encodeURIComponent( svgString ) ) ); // Convert SVG string to data URL

	var canvas = document.createElement("canvas");
	var context = canvas.getContext("2d");

	canvas.width = width;
	canvas.height = height;

	var image = new Image();
	image.onload = function() {
		context.clearRect ( 0, 0, width, height );
		context.drawImage(image, 0, 0, width, height);

		canvas.toBlob( function(blob) {
			var filesize = Math.round( blob.length/1024 ) + ' KB';
			if ( callback ) callback( blob, filesize );
		});

		
	};

	image.src = imgsrc;
}