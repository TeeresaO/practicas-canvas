const seriesResistance = (arr) => {
    let a = 0;

    for (let i = 0; i < arr.length; i++) {

      a += arr[i];

    };

    if (a === 1) {
      return a + " ohm";
    } else {
    return a + " ohms";
    }

  };
  console.log(seriesResistance([1, 5, 6, 3]));
  console.log(seriesResistance([16, 3.5, 6]));
  console.log(seriesResistance([0.5, 0.5]));
  console.log(seriesResistance([0, 0]));
  console.log(seriesResistance([16, -4, -6]));

  
