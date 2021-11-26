
function roundPicturesLayout(images) {

  const amountImg = images.length;

  
  const angleBetween = (2 * Math.PI) / amountImg;

  
  const angleBigger = angleBetween * 1.2;
  const angleSmaller = ((2 * Math.PI) - (angleBigger * 2)) / (amountImg - 2);

  
  let absoluteAngle = -Math.PI / 2;

  const distFromCenter = 175;
  const distUnits = '%';

  // Index para agregar imgs 
  
  let index = 0;

  images.forEach(img => {
    
    distribute(img, distFromCenter, distUnits, absoluteAngle);
    img.dataset.angle = absoluteAngle;
    img.dataset.index = index++;
    absoluteAngle += angleBetween;
    // Mouse enter 
    img.addEventListener('mouseenter', function () {
      if (img.dataset.roundLayout === "false")
        return;
      const currentTransform = img.style.transform;
      img.style.transform = currentTransform.replace(/scale\(.+\)/, 'scale(1.5)');
      let imgElemIndex = img.dataset.index;
      let startAngle = Number(img.dataset.angle);
      for (let i = 0; i < amountImg; i++) {
        if (i === 1) {
          startAngle += angleBigger;
          distribute(images.item(imgElemIndex >= amountImg ? imgElemIndex - amountImg : imgElemIndex), distFromCenter, distUnits, startAngle);
        } else if (i > 1) {
          startAngle += angleSmaller;
          distribute(images.item(imgElemIndex >= amountImg ? imgElemIndex - amountImg : imgElemIndex), distFromCenter, distUnits, startAngle);
        }
        imgElemIndex++;
      }
    });
    // Mouse leave 
    img.addEventListener('mouseleave', function () {
      if (img.dataset.roundLayout === "false")
        return;
      const currentTransform = img.style.transform;
      img.style.transform = currentTransform.replace(/scale\(.+\)/, 'scale(1.0)');
      images.forEach(img => {
        distribute(img, distFromCenter, distUnits, img.dataset.angle);
      });
    });
  });

}


function distribute(element, dFromCenter, dUnits, angle) {
  const X = Math.cos(angle) * dFromCenter;
  const Y = Math.sin(angle) * dFromCenter;
  element.style.transform = `translate(${X}${dUnits},${Y}${dUnits}) scale(1.0)`;
}