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
  
  let bmiMetricCalculate = () => {
    height = ((heightFt * 12) + heightIn) * 2.54;
    weight = weight * 0.454;
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
    showResult();
    bmiSelector();
  });
  sexChange();
};

imperialCalculation();
metricCalculation();
showOneInputField();
