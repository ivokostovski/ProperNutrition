// *** BMI CALCULATOR ***

// Selector

let showOneInputField = () => {
  $("#bmi-btn-metric").change(() => {
    if ($("#bmi-metric").hasClass("d-none")) {
      //if metric input hidden
      $("#bmi-metric").removeClass("d-none"); //showes the metric input
      $("#bmi-imperial").toggleClass("d-none"); //hides the imperial input
    } else if (!$("#bmi-metric").hasClass("d-none")) {
      //if metric input shown
    } //do nothing
  });

  $("#bmi-btn-imperial").change(() => {
    if ($("#bmi-imperial").hasClass("d-none")) {
      //if Imperial input hidden
      $("#bmi-imperial").removeClass("d-none"); //showes the Imperial input
      $("#bmi-metric").toggleClass("d-none"); //hides the Metric input
    } else if (!$("#bmi-imperial").hasClass("d-none")) {
      //if Imperial input shown
    } //do nothing
  });
};

// Calculation - metric

let metricCalculation = () => {
  let age, sex, height, weight, result, goodToGo, ageEmpty, heightEmpty, weightEmpty;

  goodToGo = false;
  ageEmpty = true;
  weightEmpty = true;
  heightEmpty = true;

  let showResult = () => {
    if (!ageEmpty && !weightEmpty && !heightEmpty) {
      goodToGo = true;
    } else {
      goodToGo = false;
    }

    if (goodToGo) {
      bmiMetricCalculate();
    } else {
      //do nothing
    }
  }
  
  let bmiMetricCalculate = () => {
    let input = (weight / Math.pow(height, 2) * 10000);
    result = (input * 100) / 100;
    $("#bmi-metric-result").val(result.toFixed(2));
  };

  let sexChange = () => {
    $("#bmi-metric-female").change(() => {
      if ($("#bmi-metric-female:checked")) {
        console.log("female ch");
        sex = $("#bmi-metric-female");
      } else {
        console.log("male ch");
        sex = $("#bmi-metric-male");
      }
    });
    $("#bmi-metric-male").change(() => {
      if ($("#bmi-metric-male:checked")) {
        console.log("male ch");
        sex = $("#bmi-metric-female");
      } else {
        console.log("female ch");
        sex = $("#bmi-metric-male");
      }
    });
  };

  let bmiSelector = () => {
    $('#bmi-1').removeClass("font-weight-bold");
    $('#bmi-2').removeClass("font-weight-bold");
    $('#bmi-3').removeClass("font-weight-bold");
    $('#bmi-4').removeClass("font-weight-bold");
    $('#bmi-5').removeClass("font-weight-bold");
    $('#bmi-6').removeClass("font-weight-bold");
    $('#bmi-7').removeClass("font-weight-bold");
    $('#bmi-8').removeClass("font-weight-bold");
    if (result < 16) {
      $('#bmi-1').addClass("font-weight-bold")
    } else if (result >= 16 && result < 17) {
      $('#bmi-2').addClass("font-weight-bold")
    } else if (result >= 17 && result < 18.5) {
      $('#bmi-3').addClass("font-weight-bold")
    } else if (result >= 18.5 && result < 25) {
      $('#bmi-4').addClass("font-weight-bold")
    } else if (result >= 25 && result < 30) {
      $('#bmi-5').addClass("font-weight-bold")
    } else if (result >= 30 && result < 35) {
      $('#bmi-6').addClass("font-weight-bold")
    } else if (result >= 35 && result < 40) {
      $('#bmi-7').addClass("font-weight-bold")
    } else if (result >= 40) {
      $('#bmi-8').addClass("font-weight-bold")
    };
  };

  // Validations
  //age validation
  let validation = () => {
    if (age >= 2 && age <= 117) {
      ageEmpty = false;
    } else {
      alert("Age can't be lower than 2 and higher than 117");
    }

    //height validation
    if (height >= 54 && height <= 251) {
      heightEmpty = false;
    } else {
      alert("Height can't be lower than 54cm and higher than 251cm");
    }

    //weight validation
    if (weight >= 26 && weight <= 368) {
      weightEmpty = false;
    } else {
      alert("Weight can't be lower than 26kg and higher than 368kg");
    }
  };

  $("#bmi-metric-calc").on("click", e => {
    e.preventDefault();
    age = $("#bmi-metric-age").val();
    height = $("#bmi-metric-height").val();
    weight = $("#bmi-metric-weight").val();
    validation();
    showResult();
    bmiSelector();
  });
  sexChange();
};

// Calculation - imperial

let imperialCalculation = () => {
  let age, sex, height, heightFt, heightIn, weight, result, goodToGo, ageEmpty, heightEmpty, weightEmpty;

  goodToGo = false;
  ageEmpty = true;
  weightEmpty = true;
  heightEmpty = true;

  let showResult = () => {
    if (!ageEmpty && !weightEmpty && !heightEmpty) {
      goodToGo = true;
    } else {
      goodToGo = false;
    }

    if (goodToGo) {
      bmiMetricCalculate();
    } else {
      //do nothing
    }
  }

  let imperialToMetric = () => {
    let ftToInches = parseInt(heightFt) * 12 + parseInt(heightIn);
    console.log(ftToInches);
    height = ftToInches * 2.54;
    weight = weight * 0.454;
    console.log("height:" + height);
    console.log("weight:" + weight);
  }
  
  let bmiMetricCalculate = () => {
    let input = (weight / Math.pow(height, 2) * 10000);
    result = (input * 100) / 100;
    $("#bmi-imperial-result").val(result.toFixed(2));
  };

  let sexChange = () => {
    $("#bmi-imperial-female").change(() => {
      if ($("#bmi-metric-female:checked")) {
        console.log("female ch");
        sex = $("#bmi-imperial-female");
      } else {
        console.log("male ch");
        sex = $("#bmi-imperial-male");
      }
    });
    $("#bmi-imperial-male").change(() => {
      if ($("#bmi-imperial-male:checked")) {
        console.log("male ch");
        sex = $("#bmi-imperial-female");
      } else {
        console.log("female ch");
        sex = $("#bmi-imperial-male");
      }
    });
  };

  let bmiSelector = () => {
    $('#bmi-1').removeClass("font-weight-bold");
    $('#bmi-2').removeClass("font-weight-bold");
    $('#bmi-3').removeClass("font-weight-bold");
    $('#bmi-4').removeClass("font-weight-bold");
    $('#bmi-5').removeClass("font-weight-bold");
    $('#bmi-6').removeClass("font-weight-bold");
    $('#bmi-7').removeClass("font-weight-bold");
    $('#bmi-8').removeClass("font-weight-bold");
    if (result < 16) {
      $('#bmi-1').addClass("font-weight-bold")
    } else if (result >= 16 && result < 17) {
      $('#bmi-2').addClass("font-weight-bold")
    } else if (result >= 17 && result < 18.5) {
      $('#bmi-3').addClass("font-weight-bold")
    } else if (result >= 18.5 && result < 25) {
      $('#bmi-4').addClass("font-weight-bold")
    } else if (result >= 25 && result < 30) {
      $('#bmi-5').addClass("font-weight-bold")
    } else if (result >= 30 && result < 35) {
      $('#bmi-6').addClass("font-weight-bold")
    } else if (result >= 35 && result < 40) {
      $('#bmi-7').addClass("font-weight-bold")
    } else if (result >= 40) {
      $('#bmi-8').addClass("font-weight-bold")
    };
  };

  // Validations
  //age validation
  let validation = () => {
    if (age >= 2 && age <= 117) {
      ageEmpty = false;
    } else {
      alert("Age can't be lower than 2 and higher than 117");
    }

    //height validation
    if (height >= 54 && height <= 251) {
      heightEmpty = false;
    } else {
      alert("Height can't be lower than 1 feet 9.2 inches and higher than 8 feet and 2.8 inches");
    }

    //weight validation
    if (weight >= 26 && weight <= 368) {
      weightEmpty = false;
    } else {
      alert("Weight can't be lower than 57.3pl and higher than 811.3lb");
    }
  };

  $("#bmi-imperial-calc").on("click", e => {
    e.preventDefault();
    age = $("#bmi-imperial-age").val();
    heightFt = $("#bmi-imperial-height-ft").val();
    heightIn = $("#bmi-imperial-height-in").val();
    weight = $("#bmi-imperial-weight").val();
    imperialToMetric();
    validation();
    showResult();
    bmiSelector();
  });
  sexChange();
};

// *** SEMAPHORE ***

// Selector

let showOneInputFieldSemaphore = () => {
  $("#semaphore-food").change(() => {
    if ($("#semaphore-food-form").hasClass("d-none")) {
      //if metric input hidden
      $("#semaphore-food-form").removeClass("d-none"); //showes the metric input
      $("#semaphore-drinks-form").toggleClass("d-none"); //hides the imperial input
    } else if (!$("#semaphore-food-form").hasClass("d-none")) {
      //if metric input shown
    } //do nothing
  });

  $("#semaphore-drinks").change(() => {
    if ($("#semaphore-drinks-form").hasClass("d-none")) {
      //if Imperial input hidden
      $("#semaphore-drinks-form").removeClass("d-none"); //showes the Imperial input
      $("#semaphore-food-form").toggleClass("d-none"); //hides the Metric input
    } else if (!$("#semaphore-drinks-form").hasClass("d-none")) {
      //if Imperial input shown
    } //do nothing
  });
};

// Calculation - food

let semaphoreFoodCalc = () => {
  let fat, saturated, sugar, salt, natrium, fiber, green, yellow, red, fatImg, saturatedImg, sugarImg, saltImg, fiberImg;

  fat = $('#semaphore-fat').val("");
  saturated = $('#semaphore-saturated').val("");
  sugar = $('#semaphore-sugar').val("");
  fibre = $('#semaphore-fiber').val("");
  grayApples = 'img/all-apples-s.png';
  green = 'img/apples-green-s.png';
  yellow = 'img/apples-yellow-s.png';
  red = 'img/apples-red-s.png';
  fatImg = $('#food-img-fat');
  saturatedImg = $('#food-img-saturated');
  sugarImg = $('#food-img-sugar');
  saltImg = $('#food-img-salt');
  fiberImg = $('#food-img-fiber');

  let grayAppleEverywhere = () => {
    fatImg.attr('src', grayApples);
    saturatedImg.attr('src', grayApples);
    sugarImg.attr('src', grayApples);
    saltImg.attr('src', grayApples);
    fiberImg.attr('src', grayApples);
  }
  
  let natriumOrSalt = () => {
    if ($("#semaphore-natrium-or-salt").val(1)) {
      console.log('salt');
      salt = $('#semaphore-salt').val("");
    } else if ($("#semaphore-natrium-or-salt").val(2)) {
      console.log('natrium');
      natrium = $('#semaphore-salt').val("");
    }
  };

  $('#semaphore-fat').keyup(() => {
    fat = $('#semaphore-fat').val();
    if (fat === 0) {
      fatImg.attr('src', grayApples);
    } else if (fat > 0 && fat < 3) {
      fatImg.attr('src', green);
    } else if (fat >= 3 && fat < 20) {
      fatImg.attr('src', yellow);
    } else if (fat >= 20) {
      fatImg.attr('src', red);
    }
  });

  $('#semaphore-saturated').keyup(() => {
    saturated = $('#semaphore-saturated').val();
    if (saturated === 0) {
      saturatedImg.attr('src', grayApples);
    } else if (saturated > 0 && saturated < 3) {
      saturatedImg.attr('src', green);
    } else if (saturated >= 3 && saturated < 20) {
      saturatedImg.attr('src', yellow);
    } else if (saturated >= 20) {
      saturatedImg.attr('src', red);
    }
  })

  $('#semaphore-sugar').keyup(() => {
    sugar = $('#semaphore-sugar').val();
    if (sugar === 0) {
      sugarImg.attr('src', grayApples);
    } else if (sugar > 0 && sugar < 3) {
      sugarImg.attr('src', green);
    } else if (sugar >= 3 && sugar < 20) {
      sugarImg.attr('src', yellow);
    } else if (sugar >= 20) {
      sugarImg.attr('src', red);
    }
  })

  $('#semaphore-salt').keyup(() => {
    salt = $('#semaphore-salt').val();
    if (salt === 0) {
      saltImg.attr('src', grayApples);
    } else if (salt > 0 && salt < 3) {
      saltImg.attr('src', green);
    } else if (salt >= 3 && salt < 20) {
      saltImg.attr('src', yellow);
    } else if (salt >= 20) {
      saltImg.attr('src', red);
    }
  })

  $('#semaphore-salt').keyup(() => {
    natrium = $('#semaphore-salt').val();
    if (natrium === 0) {
      saltImg.attr('src', grayApples);
    } else if (natrium > 0 && natrium < 3) {
      saltImg.attr('src', green);
    } else if (natrium >= 3 && natrium < 20) {
      saltImg.attr('src', yellow);
    } else if (natrium >= 20) {
      saltImg.attr('src', red);
    }
  })

  $('#semaphore-fiber').keyup(() => {
    fiber = $('#semaphore-fiber').val();
    if (fiber === 0) {
      fiberImg.attr('src', grayApples);
    } else if (fiber > 0 && fiber < 3) {
      fiberImg.attr('src', green);
    } else if (fiber >= 3 && fiber < 20) {
      fiberImg.attr('src', yellow);
    } else if (fiber >= 20) {
      fiberImg.attr('src', red);
    }
  })
  
  grayAppleEverywhere();
  natriumOrSalt();
};

//BMI
imperialCalculation();
metricCalculation();
showOneInputField();

//Semaphore
showOneInputFieldSemaphore();
semaphoreFoodCalc();