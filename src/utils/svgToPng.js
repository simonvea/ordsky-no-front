import { select } from 'd3-selection';

export const downloadAsPng = (xml) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.height = 500;
  canvas.width = 500;
  // If you want a non transparent background for the wordCloud;
  // ctx.fillStyle = 'white';
  // ctx.fillRect(0, 0, canvas.width, canvas.height);

  const img = new Image();
  img.onload = () => {
    ctx.drawImage(img, 0, 0);
    const url = canvas.toDataURL();
    downloadOrdsky(url);
  };

  img.src = xml;
};

function downloadOrdsky(url) {
  const event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  });

  const a = document.createElement('a');
  a.setAttribute('download', 'ordsky.png');
  a.setAttribute('href', url);
  a.setAttribute('target', '_blank');
  a.dispatchEvent(event);
}


export function svgDataURL(svg) {
  const svgAsXML = (new XMLSerializer()).serializeToString(svg);
  return `data:image/svg+xml,${encodeURIComponent(svgAsXML)}`;
}

export function createCloud(cloud) {
  const div = document.createElement('div');

  select(div).append('svg')
    .attr('width', 500) // layout.size()[0]
    .attr('height', 500) // layout.size()[1]
    .append('g')
    .attr('transform', `translate(${500 / 2},${500 / 2})`)
    .selectAll('text')
    .data(cloud)
    .enter()
    .append('text')
    .style('font-size', d => `${d.size}px`)
    .style('font-family', 'Impact')
    .style('fill', d => d.fill)
    .attr('text-anchor', 'middle')
    .attr('transform', d => `translate(${[d.x, d.y]})rotate(${d.rotate})`)
    .text(d => d.text);

  return div.firstChild;
}
