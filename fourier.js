// From: https://en.wikipedia.org/wiki/Discrete_Fourier_transform

function fourierT(data) {
  //alert("fourierT");
  let N = data.length;
  
  let fourier = [];

  // for every frequency...
  for (let k = 0; k < N; k++) {
    
    let re = 0;
    let im = 0;
  
    for (let n = 0; n < N; n++) {
    
     let test = data[n] * Math.cos((6.28318530717958647693 * k * n) / N);
    // alert(test);
      re = re +  data[n] * Math.cos((6.28318530717958647693 * k * n) / N);
     // alert(re);
      im -= data[n] * Math.sin((6.28318530717958647693 * k * n) / N);
    }
    //alert("Test");
    // Average contribution at this frequency
    re = re / N;
    im = im / N;
    fourier[k] = {
      re: re,
      im: im,
      freq: k,
      amp: Math.sqrt(re * re + im * im),
      phase: Math.atan2(im, re)
    };
  }
  //alert(fourier);
  return fourier;
}
