// *** BMI CALCULATOR ***

//tooltips

$('.bmi-underweight').tooltip();
$('.bmi-normal').tooltip();
$('.bmi-overweight').tooltip();
$('.bmi-obese').tooltip();

// Selector

let bmiShowOneInputField = () => {
  $("#bmi-btn-metric").change(() => {
    if ($("#bmi-metric").hasClass("d-none")) {
      //if metric input hidden
      $("#bmi-metric").removeClass("d-none"); //showes the metric input
      $("#bmi-imperial").toggleClass("d-none"); //hides the imperial input
    } else if (!$("#bmi-metric").hasClass("d-none")) {
      //if metric input already shown
    } //do nothing
  });

  $("#bmi-btn-imperial").change(() => {
    if ($("#bmi-imperial").hasClass("d-none")) {
      //if Imperial input hidden
      $("#bmi-imperial").removeClass("d-none"); //showes the Imperial input
      $("#bmi-metric").toggleClass("d-none"); //hides the Metric input
    } else if (!$("#bmi-imperial").hasClass("d-none")) {
      //if Imperial input alredy shown
    } //do nothing
  });
};

// Calculation - metric

let bmiMetricCalculation = () => {
  let age, sex, height, weight, result, goodToGo, ageEmpty, heightEmpty, weightEmpty, activity, bmr, calories, breakfastP, lunchP, dinnerP, proteinP, fatP, carbsP, bc, bf, bp, bt, lc, lf, lp, lt, dc, df, dp, dt, tc, tf, tp, tt, carbs, fat, protein, breakfast, lunch, dinner;

  goodToGo = false;
  ageEmpty = true;
  weightEmpty = true;
  heightEmpty = true;
  sex = "male";
  breakfastP = 0.3;
  lunchP = 0.4;
  dinnerP = 0.3;
  carbsP = 0.6;
  fatP = 0.275;
  proteinP = 0.125;

  let showResult = () => {
    if (!ageEmpty && !weightEmpty && !heightEmpty) {
      goodToGo = true;
    } else {
      goodToGo = false;
    }

    if (goodToGo) {
      bmiMetricCalculate();
      bmrMetricCalculate();
      populateTable();
    } else {
      //do nothing
    }
  }
  
  //BMI Result
  let bmiMetricCalculate = () => {
    let input = (weight / Math.pow(height, 2) * 10000);
    result = (input * 100) / 100;
    $("#bmi-metric-result").val(result.toFixed(2));
  };

  //BMR Result
  let bmrMetricCalculate = () => {
    if (sex === "male") {
      bmr = (10 * parseInt(weight)) + (6.25 * parseInt(height)) - (5 * parseInt(age)) + 5;
    } else if (sex === "female") {
      bmr = (10 * parseInt(weight)) + (6.25 * parseInt(height)) - (5 * parseInt(age)) - 161;
    };
    activity = parseInt($('#activity-metric option:selected').val());
    switch (activity) {
      case 1:  
      calories = bmr * 1.2;
        break;
      case 2:
      calories = bmr * 1.375;
        break;
      case 3:
      calories = bmr * 1.55;
        break;
      case 4:
      calories = bmr * 1.725;
        break;
      case 5:
      calories = bmr * 1.9;
        break;
    };
    $("#bmr-metric-result").val(calories.toFixed(0));
  };

  //Populate table
  let populateTable = () => {
    carbs = calories * carbsP;
    protein = calories * proteinP;
    fat = calories * fatP;

    bc = carbs * breakfastP;
    bf = fat * breakfastP;
    bp = protein * breakfastP;
    bt = bc + bf + bp;

    lc = carbs * lunchP;
    lf = fat * lunchP;
    lp = protein * lunchP;
    lt = lc + lf + lp;

    dc = carbs * dinnerP;
    df = fat * dinnerP;
    dp = protein * dinnerP;
    dt = dc + df + dp;

    tc = bc + lc + dc;
    tf = bf + lf + df;
    tp = bp + lp + dp;
    tt = tc + tf + tp;

  $('#bc').html(bc.toFixed(0));
  $('#bf').html(bf.toFixed(0));
  $('#bp').html(bp.toFixed(0));
  $('#bt').html(bt.toFixed(0));
  $('#lc').html(lc.toFixed(0));
  $('#lf').html(lf.toFixed(0));
  $('#lp').html(lp.toFixed(0));
  $('#lt').html(lt.toFixed(0));
  $('#dc').html(dc.toFixed(0));
  $('#df').html(df.toFixed(0));
  $('#dp').html(dp.toFixed(0));
  $('#dt').html(dt.toFixed(0));
  $('#tc').html(tc.toFixed(0));
  $('#tf').html(tf.toFixed(0));
  $('#tp').html(tp.toFixed(0));
  $('#tt').html(tt.toFixed(0));
  };

  //Sex selector
  let sexChange = () => {
    $("#bmi-metric-female").change(() => {
      if ($("#bmi-metric-female:checked")) {
        sex = "female";
        console.log(sex)
      } else {
        sex = "male";
        console.log(sex)
      }
    });
    $("#bmi-metric-male").change(() => {
      if ($("#bmi-metric-male:checked")) {
        sex = "male";
        console.log(sex)
      } else {
        sex = "female";
        console.log(sex)
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

let bmiImperialCalculation = () => {
  let age, sex, height, heightFt, heightIn, weight, result, goodToGo, ageEmpty, heightEmpty, weightEmpty, activity, bmr, calories, breakfastP, lunchP, dinnerP, proteinP, fatP, carbsP, bc, bf, bp, bt, lc, lf, lp, lt, dc, df, dp, dt, tc, tf, tp, tt, carbs, fat, protein, breakfast, lunch, dinner;

  goodToGo = false;
  ageEmpty = true;
  weightEmpty = true;
  heightEmpty = true;
  sex = "male";
  breakfastP = 0.3;
  lunchP = 0.4;
  dinnerP = 0.3;
  carbsP = 0.6;
  fatP = 0.275;
  proteinP = 0.125;

  let showResult = () => {
    if (!ageEmpty && !weightEmpty && !heightEmpty) {
      goodToGo = true;
    } else {
      goodToGo = false;
    }

    if (goodToGo) {
      bmiImperialCalculate();
      bmrImperialCalculate();
      populateTable();
    } else {
      //do nothing
    }
  }

  let imperialToMetric = () => {
    let ftToInches = parseInt(heightFt) * 12 + parseInt(heightIn);
    console.log(ftToInches);
    height = ftToInches * 2.54;
    weight = weight * 0.454;
  }
  
  //BMI Result
  let bmiImperialCalculate = () => {
    let input = (weight / Math.pow(height, 2) * 10000);
    result = (input * 100) / 100;
    $("#bmi-imperial-result").val(result.toFixed(2));
  };

  //BMR Result
  let bmrImperialCalculate = () => {
    if (sex === "male") {
      bmr = (10 * parseInt(weight)) + (6.25 * parseInt(height)) - (5 * parseInt(age)) + 5;
    } else if (sex === "female") {
      bmr = (10 * parseInt(weight)) + (6.25 * parseInt(height)) - (5 * parseInt(age)) - 161;
    };
    activity = parseInt($('#activity-imperial option:selected').val());
    switch (activity) {
      case 1:  
      calories = bmr * 1.2;
        break;
      case 2:
      calories = bmr * 1.375;
        break;
      case 3:
      calories = bmr * 1.55;
        break;
      case 4:
      calories = bmr * 1.725;
        break;
      case 5:
      calories = bmr * 1.9;
        break;
    };
    $("#bmr-imperial-result").val(calories.toFixed(0));
  };


  let populateTable = () => {
    carbs = calories * carbsP;
    protein = calories * proteinP;
    fat = calories * fatP;

    bc = carbs * breakfastP;
    bf = fat * breakfastP;
    bp = protein * breakfastP;
    bt = bc + bf + bp;

    lc = carbs * lunchP;
    lf = fat * lunchP;
    lp = protein * lunchP;
    lt = lc + lf + lp;

    dc = carbs * dinnerP;
    df = fat * dinnerP;
    dp = protein * dinnerP;
    dt = dc + df + dp;

    tc = bc + lc + dc;
    tf = bf + lf + df;
    tp = bp + lp + dp;
    tt = tc + tf + tp;

  $('#bc').html(bc.toFixed(0));
  $('#bf').html(bf.toFixed(0));
  $('#bp').html(bp.toFixed(0));
  $('#bt').html(bt.toFixed(0));
  $('#lc').html(lc.toFixed(0));
  $('#lf').html(lf.toFixed(0));
  $('#lp').html(lp.toFixed(0));
  $('#lt').html(lt.toFixed(0));
  $('#dc').html(dc.toFixed(0));
  $('#df').html(df.toFixed(0));
  $('#dp').html(dp.toFixed(0));
  $('#dt').html(dt.toFixed(0));
  $('#tc').html(tc.toFixed(0));
  $('#tf').html(tf.toFixed(0));
  $('#tp').html(tp.toFixed(0));
  $('#tt').html(tt.toFixed(0));
  };

  let sexChange = () => {
    $("#bmi-imperial-female").change(() => {
      if ($("#bmi-imperial-female:checked")) {
        sex = "female";
        console.log(sex)
      } else {
        sex = "male";
        console.log(sex)
      }
    });
    $("#bmi-imperial-male").change(() => {
      if ($("#bmi-imperial-male:checked")) {
        sex = "male";
        console.log(sex)
      } else {
        sex = "female";
        console.log(sex)
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


// *** BODY FAT CALCULATOR

let bfShowOneInputField = () => {
  $("#radio-bodyfat-m").change(() => {
    if ($("#bodyfat-m").hasClass("d-none")) {
      //if metric input hidden
      $("#bodyfat-m").removeClass("d-none"); //showes the metric input
      $("#bodyfat-i").toggleClass("d-none"); //hides the imperial input
    } else if (!$("#bodyfat-m").hasClass("d-none")) {
      //if metric input already shown
    } //do nothing
  });

  $("#radio-bodyfat-i").change(() => {
    if ($("#bodyfat-i").hasClass("d-none")) {
      //if Imperial input hidden
      $("#bodyfat-i").removeClass("d-none"); //showes the Imperial input
      $("#bodyfat-m").toggleClass("d-none"); //hides the Metric input
    } else if (!$("#bodyfat-i").hasClass("d-none")) {
      //if Imperial input alredy shown
    } //do nothing
  });
};

// BF Metric calc

let bfMetricCalculation = () => {
    let age, sex, wrist, waist, hip, forearm, weight, leanBodyMass, factor1, factor2, factor3, factor4, factor5, bodyFatWeight, bodyFatPercentage, bfCategory, idealBf, bfToLoose, goodToGo;
    goodToGo = false;
    sex = "male";

    let bfMetricResult = () => {
      if (sex === "male") {
        factor1 = (weight * 1.082) + 94.42;
        factor2 = waist * 4.15;
        leanBodyMass = factor1 - factor2;
        bodyFatWeight = weight - leanBodyMass;
        bodyFatPercentage = (bodyFatWeight * 100) / weight;

        //Body Fat category calculation for Male
        if (bodyFatPercentage <= 5) {
          bfCategory = "Essential Fat";
        } else if (bodyFatPercentage >= 6 && bodyFatPercentage <= 13) {
          bfCategory = "Athlete";
        } else if (bodyFatPercentage >= 14 && bodyFatPercentage <= 17) {
          bfCategory = "Fitness";
        } else if (bodyFatPercentage >= 18 && bodyFatPercentage <= 25) {
          bfCategory = "Acceptable";
        } else if (bodyFatPercentage >= 26) {
          bfCategory = "Obese";
        } else {
          //none left
        }

        //Ideal Body Fat Calculation
        if (age <= 25) {
          idealBf = 8.5;
        } else if (age >= 26 && age <= 29 ) {
          idealBf = 10.5
        } else if (age >= 30 && age <= 34 ) {
          idealBf = 12.7
        } else if (age >= 35 && age <= 39 ) {
          idealBf = 13.7
        } else if (age >= 40 && age <= 44 ) {
          idealBf = 15.3
        } else if (age >= 45 && age <= 49 ) {
          idealBf = 16.4
        } else if (age >= 50 && age <= 54 ) {
          idealBf = 18.9
        } else if (age >= 55) {
          idealBf = 20.9
        } else {
          //none left
        }
        
        //Body fat to loose calculation
        bfToLoose = bodyFatWeight - idealBf;
        
        if (bfToLoose <= 0) {
          bfToLoose = "/";
        } else {
          bfToLoose = (bfToLoose * 0.453592).toFixed(1) + " kg";
        };
        
        // Body fat calculation for Female

      } else if (sex === "female") {
        factor1 = (weight * 0.732) + 8.987;
        factor2 = wrist / 3.140;
        factor3 = waist * 0.157;
        factor4 = hip * 0.249;
        factor5 = forearm * 0.434;
        leanBodyMass = factor1 + factor2 - factor3 - factor4 + factor5;
        bodyFatWeight = weight - leanBodyMass;
        bodyFatPercentage = (bodyFatWeight * 100) / weight;
        
        //Body Fat category calculation for Female
        if (bodyFatPercentage <= 13) {
          bfCategory = "Essential Fat";
        } else if (bodyFatPercentage >= 14 && bodyFatPercentage <= 20) {
          bfCategory = "Athlete";
        } else if (bodyFatPercentage >= 21 && bodyFatPercentage <= 24) {
          bfCategory = "Fitness";
        } else if (bodyFatPercentage >= 25 && bodyFatPercentage <= 31) {
          bfCategory = "Acceptable";
        } else if (bodyFatPercentage >= 32) {
          bfCategory = "Obese";
        } else {
          //none left
        }

        //Ideal Body Fat Calculation
        if (age <= 25) {
          idealBf = 17.7;
        } else if (age >= 26 && age <= 29 ) {
          idealBf = 18.4;
        } else if (age >= 30 && age <= 34 ) {
          idealBf = 19.3;
        } else if (age >= 35 && age <= 39 ) {
          idealBf = 21.5;
        } else if (age >= 40 && age <= 44 ) {
          idealBf = 22.2;
        } else if (age >= 45 && age <= 49 ) {
          idealBf = 22.9;
        } else if (age >= 50 && age <= 54 ) {
          idealBf = 25.2;
        } else if (age >= 55) {
          idealBf = 26.3;
        } else {
          //none left
        }
        
        //Body fat to loose calculation
        bfToLoose = bodyFatWeight - idealBf;
        
        if (bfToLoose <= 0) {
          bfToLoose = "/";
        } else {
          bfToLoose = (bfToLoose * 0.453592).toFixed(1) + " kg";
        };

      } else {
        //not possible
      }
    }

  //Sex selector
  let sexChange = () => {
    $("#bodyfat-m-female").change(() => {
      if ($("#bmi-metric-female:checked")) {
        sex = "female";
        console.log(sex)
      } else {
        sex = "male";
        console.log(sex)
      }
    });
    $("#bodyfat-m-male").change(() => {
      if ($("#bmi-metric-male:checked")) {
        sex = "male";
        console.log(sex)
      } else {
        sex = "female";
        console.log(sex)
      }
    });
  };

  let populateTable = () => {
    $('#bf-result-percentage').html(bodyFatPercentage.toFixed(0) + "%");
    $('#bf-result-category').html(bfCategory);
    $('#bf-result-bf-mass').html((bodyFatWeight * 0.453592).toFixed(1) + " kg");
    $('#bf-result-lean-mass').html((leanBodyMass * 0.453592).toFixed(1) + " kg");
    $('#bf-result-ideal-bf').html(idealBf.toFixed(0) + "%");
    $('#bf-result-to-loose').html(bfToLoose);
  };

  $("#bodyfat-m-calc").on("click", e => {
    e.preventDefault();
    age = parseInt($("#bodyfat-m-age").val());
    wrist = (parseInt($("#bodyfat-m-wrist").val()) * 0.393701);
    waist = (parseInt($("#bodyfat-m-waist").val()) * 0.393701);
    hip = (parseInt($("#bodyfat-m-hip").val()) * 0.393701);
    forearm = (parseInt($("#bodyfat-m-forearm").val()) * 0.393701);
    weight = (parseInt($("#bodyfat-m-weight").val()) * 2.20462);
    bfMetricResult();
    populateTable();
    //validation();
    //showResult();
    //bmiSelector();
  });

  sexChange();
}

// BF Imperial calc

let bfImperialCalculation = () => {
  let age, sex, wrist, waist, hip, forearm, weight, leanBodyMass, factor1, factor2, factor3, factor4, factor5, bodyFatWeight, bodyFatPercentage, bfCategory, idealBf, bfToLoose, goodToGo;
  goodToGo = false;
  sex = "male";

  let bfImperialResult = () => {
    if (sex === "male") {
      factor1 = (weight * 1.082) + 94.42;
      factor2 = waist * 4.15;
      leanBodyMass = factor1 - factor2;
      bodyFatWeight = weight - leanBodyMass;
      bodyFatPercentage = (bodyFatWeight * 100) / weight;

      //Body Fat category calculation for Male
      if (bodyFatPercentage <= 5) {
        bfCategory = "Essential Fat";
      } else if (bodyFatPercentage >= 6 && bodyFatPercentage <= 13) {
        bfCategory = "Athlete";
      } else if (bodyFatPercentage >= 14 && bodyFatPercentage <= 17) {
        bfCategory = "Fitness";
      } else if (bodyFatPercentage >= 18 && bodyFatPercentage <= 25) {
        bfCategory = "Acceptable";
      } else if (bodyFatPercentage >= 26) {
        bfCategory = "Obese";
      } else {
        //none left
      }

      //Ideal Body Fat Calculation
      if (age <= 25) {
        idealBf = 8.5;
      } else if (age >= 26 && age <= 29 ) {
        idealBf = 10.5
      } else if (age >= 30 && age <= 34 ) {
        idealBf = 12.7
      } else if (age >= 35 && age <= 39 ) {
        idealBf = 13.7
      } else if (age >= 40 && age <= 44 ) {
        idealBf = 15.3
      } else if (age >= 45 && age <= 49 ) {
        idealBf = 16.4
      } else if (age >= 50 && age <= 54 ) {
        idealBf = 18.9
      } else if (age >= 55) {
        idealBf = 20.9
      } else {
        //none left
      }
      
      //Body fat to loose calculation
      bfToLoose = bodyFatWeight - idealBf;
      
      if (bfToLoose <= 0) {
        bfToLoose = "/";
      } else {
        bfToLoose = bfToLoose.toFixed(1) + " lb";
      };
      
      // Body fat calculation for Female

    } else if (sex === "female") {
      factor1 = (weight * 0.732) + 8.987;
      factor2 = wrist / 3.140;
      factor3 = waist * 0.157;
      factor4 = hip * 0.249;
      factor5 = forearm * 0.434;
      leanBodyMass = factor1 + factor2 - factor3 - factor4 + factor5;
      bodyFatWeight = weight - leanBodyMass;
      bodyFatPercentage = (bodyFatWeight * 100) / weight;
      
      //Body Fat category calculation for Female
      if (bodyFatPercentage <= 13) {
        bfCategory = "Essential Fat";
      } else if (bodyFatPercentage >= 14 && bodyFatPercentage <= 20) {
        bfCategory = "Athlete";
      } else if (bodyFatPercentage >= 21 && bodyFatPercentage <= 24) {
        bfCategory = "Fitness";
      } else if (bodyFatPercentage >= 25 && bodyFatPercentage <= 31) {
        bfCategory = "Acceptable";
      } else if (bodyFatPercentage >= 32) {
        bfCategory = "Obese";
      } else {
        //none left
      }

      //Ideal Body Fat Calculation
      if (age <= 25) {
        idealBf = 17.7;
      } else if (age >= 26 && age <= 29 ) {
        idealBf = 18.4;
      } else if (age >= 30 && age <= 34 ) {
        idealBf = 19.3;
      } else if (age >= 35 && age <= 39 ) {
        idealBf = 21.5;
      } else if (age >= 40 && age <= 44 ) {
        idealBf = 22.2;
      } else if (age >= 45 && age <= 49 ) {
        idealBf = 22.9;
      } else if (age >= 50 && age <= 54 ) {
        idealBf = 25.2;
      } else if (age >= 55) {
        idealBf = 26.3;
      } else {
        //none left
      }
      
      //Body fat to loose calculation
      bfToLoose = bodyFatWeight - idealBf;
      
      if (bfToLoose <= 0) {
        bfToLoose = "/";
      } else {
        bfToLoose = bfToLoose.toFixed(1) + " lb";
      };

    } else {
      //not possible
    }
  }

//Sex selector
let sexChange = () => {
  $("#bodyfat-i-female").change(() => {
    if ($("#bodyfat-i-female:checked")) {
      sex = "female";
    } else {
      sex = "male";
    }
  });
  $("#bodyfat-i-male").change(() => {
    if ($("#bodyfat-i-male:checked")) {
      sex = "male";
    } else {
      sex = "female";
    }
  });
};

let populateTable = () => {
  $('#bf-result-percentage').html(bodyFatPercentage.toFixed(0) + "%");
  $('#bf-result-category').html(bfCategory);
  $('#bf-result-bf-mass').html(bodyFatWeight.toFixed(1) + "lb");
  $('#bf-result-lean-mass').html(leanBodyMass.toFixed(1) + "lb");
  $('#bf-result-ideal-bf').html(idealBf.toFixed(0) + "%");
  $('#bf-result-to-loose').html(bfToLoose);
};

$("#bodyfat-i-calc").on("click", e => {
  e.preventDefault();
  age = parseInt($("#bodyfat-i-age").val());
  wrist = parseInt($("#bodyfat-i-wrist").val());
  waist = parseInt($("#bodyfat-i-waist").val());
  hip = parseInt($("#bodyfat-i-hip").val());
  forearm = parseInt($("#bodyfat-i-forearm").val());
  weight = parseInt($("#bodyfat-i-weight").val());
  bfImperialResult();
  populateTable();
  //validation();
  //showResult();
  //bmiSelector();
});

sexChange();
}

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
  grayApplesR = 'img/all-apples-sr.png';
  greenR = 'img/apples-green-sr.png';
  yellowR = 'img/apples-yellow-sr.png';
  redR = 'img/apples-red-sr.png';
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
    fiberImg.attr('src', grayApplesR);
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
    } else {
      fatImg.attr('src', grayApples);
    } 
  });

  $('#semaphore-saturated').keyup(() => {
    saturated = $('#semaphore-saturated').val();
    if (saturated === 0) {
      saturatedImg.attr('src', grayApples);
    } else if (saturated > 0 && saturated < 1) {
      saturatedImg.attr('src', green);
    } else if (saturated >= 1 && saturated < 5) {
      saturatedImg.attr('src', yellow);
    } else if (saturated >= 5) {
      saturatedImg.attr('src', red);
    } else {
      saturatedImg.attr('src', grayApples);
    } 
  })

  $('#semaphore-sugar').keyup(() => {
    sugar = $('#semaphore-sugar').val();
    if (sugar === 0) {
      sugarImg.attr('src', grayApples);
    } else if (sugar > 0 && sugar < 5) {
      sugarImg.attr('src', green);
    } else if (sugar >= 5 && sugar < 15) {
      sugarImg.attr('src', yellow);
    } else if (sugar >= 15) {
      sugarImg.attr('src', red);
    } else {
      sugarImg.attr('src', grayApples);
    } 
  })

  $('#semaphore-salt').keyup(() => {
    salt = $('#semaphore-salt').val();
    if (salt === 0) {
      saltImg.attr('src', grayApples);
    } else if (salt > 0 && salt < 0.3) {
      saltImg.attr('src', green);
    } else if (salt >= 0.3 && salt < 1.5) {
      saltImg.attr('src', yellow);
    } else if (salt >= 1.5) {
      saltImg.attr('src', red);
    } else {
      saltImg.attr('src', grayApples);
    }
  })

  $('#semaphore-salt').keyup(() => {
    natrium = $('#semaphore-salt').val();
    if (natrium === 0) {
      saltImg.attr('src', grayApples);
    } else if (natrium > 0 && natrium < 0.3) {
      saltImg.attr('src', green);
    } else if (natrium >= 0.3 && natrium < 1.5) {
      saltImg.attr('src', yellow);
    } else if (natrium >= 1.5) {
      saltImg.attr('src', red);
    } else {
      saltImg.attr('src', grayApples);
    }
  })

  $('#semaphore-fiber').keyup(() => {
    fiber = $('#semaphore-fiber').val();
    if (fiber === 0) {
      fiberImg.attr('src', grayApplesR);
    } else if (fiber > 0 && fiber < 3) {
      fiberImg.attr('src', redR);
    } else if (fiber >= 3 && fiber < 6) {
      fiberImg.attr('src', yellowR);
    } else if (fiber >= 6) {
      fiberImg.attr('src', greenR);
    } else {
      fiberImg.attr('src', grayApplesR);
    }
  })
  
  grayAppleEverywhere();
  natriumOrSalt();
};

let semaphoreDrinksCalc = () => {
  let fat, saturated, sugar, salt, natrium, fiber, green, yellow, red, fatImg, saturatedImg, sugarImg, saltImg;

  fat = $('#semaphore-drinks-fat').val("");
  saturated = $('#semaphore-drinks-saturated').val("");
  sugar = $('#semaphore-drinks-sugar').val("");
  grayApples = 'img/all-apples-s.png';
  green = 'img/apples-green-s.png';
  yellow = 'img/apples-yellow-s.png';
  red = 'img/apples-red-s.png';
  fatImg = $('#drinks-img-fat');
  saturatedImg = $('#drinks-img-saturated');
  sugarImg = $('#drinks-img-sugar');
  saltImg = $('#drinks-img-salt');

  let grayAppleEverywhere = () => {
    fatImg.attr('src', grayApples);
    saturatedImg.attr('src', grayApples);
    sugarImg.attr('src', grayApples);
    saltImg.attr('src', grayApples);
  }
  
  let natriumOrSalt = () => {
    if ($("#semaphore-drinks-natrium-or-salt").val(1)) {
      salt = $('#semaphore-drinks-salt').val("");
    } else if ($("#semaphore-drinks-natrium-or-salt").val(2)) {
      natrium = $('#semaphore-drinks-salt').val("");
    }
  };

  $('#semaphore-drinks-fat').keyup(() => {
    fat = $('#semaphore-drinks-fat').val();
    if (fat === 0) {
      fatImg.attr('src', grayApples);
    } else if (fat > 0 && fat < 1.5) {
      fatImg.attr('src', green);
    } else if (fat >= 1.5 && fat < 10) {
      fatImg.attr('src', yellow);
    } else if (fat >= 10) {
      fatImg.attr('src', red);
    } else {
      fatImg.attr('src', grayApples);
    } 
  });

  $('#semaphore-drinks-saturated').keyup(() => {
    saturated = $('#semaphore-drinks-saturated').val();
    if (saturated === 0) {
      saturatedImg.attr('src', grayApples);
    } else if (saturated > 0 && saturated < 0.75) {
      saturatedImg.attr('src', green);
    } else if (saturated >= 0.75 && saturated < 2.5) {
      saturatedImg.attr('src', yellow);
    } else if (saturated >= 2.5) {
      saturatedImg.attr('src', red);
    } else {
      saturatedImg.attr('src', grayApples);
    } 
  })

  $('#semaphore-drinks-sugar').keyup(() => {
    sugar = $('#semaphore-drinks-sugar').val();
    if (sugar === 0) {
      sugarImg.attr('src', grayApples);
    } else if (sugar > 0 && sugar < 2.5) {
      sugarImg.attr('src', green);
    } else if (sugar >= 2.5 && sugar < 6.3) {
      sugarImg.attr('src', yellow);
    } else if (sugar >= 6.3) {
      sugarImg.attr('src', red);
    } else {
      sugarImg.attr('src', grayApples);
    } 
  })
  
  $('#semaphore-drinks-salt').keyup(() => {
    salt = $('#semaphore-drinks-salt').val();
    if (salt === 0) {
      saltImg.attr('src', grayApples);
    } else if (salt > 0 && salt < 0.3) {
      saltImg.attr('src', green);
    } else if (salt >= 0.3 && salt < 1.5) {
      saltImg.attr('src', yellow);
    } else if (salt >= 1.5) {
      saltImg.attr('src', red);
    } else {
      saltImg.attr('src', grayApples);
    }
  })

  $('#semaphore-drinks-salt').keyup(() => {
    natrium = $('#semaphore-drinks-salt').val();
    if (natrium === 0) {
      saltImg.attr('src', grayApples);
    } else if (natrium > 0 && natrium < 0.3) {
      saltImg.attr('src', green);
    } else if (natrium >= 0.3 && natrium < 1.5) {
      saltImg.attr('src', yellow);
    } else if (natrium >= 1.5) {
      saltImg.attr('src', red);
    } else {
      saltImg.attr('src', grayApples);
    }
  })
  
  grayAppleEverywhere();
  natriumOrSalt();
};

//BMI
bmiImperialCalculation();
bmiMetricCalculation();
bmiShowOneInputField();

//Body Fat
bfShowOneInputField();
bfMetricCalculation();
bfImperialCalculation();

//Semaphore
showOneInputFieldSemaphore();
semaphoreFoodCalc();
semaphoreDrinksCalc();