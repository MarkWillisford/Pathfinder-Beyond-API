module.exports = (character) => {
  return `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>PDF Result Template</title>
      <link href="TEMPcharacterSheetpdf.css" rel="stylesheet" type="text/css" />
      <style>
  .flex-box {
    font-family: 'Helvetica Neue', 'Helvetica';
  }
  .playerCharacterInformation{
    background-color: yellow;
    position: relative;
  }
  .playerCharacterInformationData{
    border-bottom: 1px solid black;
    height: .148in /* .125in */;
    font-size: 12px
  }
  .playerCharacterInformationLabel{
    height: .074in /* .0625in */;
    font-size: 5px
  }
  .bold{
    font-weight: bold;
    border-bottom: 2px solid black;
  }
    .playerCharacterRows{
      height: .2222in /* .1875in */;
      width: 6in /* 5.0625in */;
    }
      .first{
        float: left;
        margin-right: .037in /* .03125in */;
      }
      .mid{
        margin-left: .037in /* .03125in */;
        margin-right: .037in /* .03125in */;
      }
      .last{
        margin-left: .037in /* .03125in */;
      }
      .playerCharacterDataWrapper{
        height: .2222in /* .1875in */;
        float: left;
      }
      .six{
        /* width: 5.0625in; */
        width: 6in;
      }
      .three{
        width: 2.96in /* 2.5 */;
      }
      .two{
        width: 1.9506in /* 1.64583in */;
      }
      .one{
        width: .9382in /* .7916in */;
      }
  .logo{
    width: 2.96in /* 2.5in */;
  }
  
  .bottom_aligner {
    display: inline-block;
    height: 100%;
    vertical-align: bottom;
    width: 0px;
  }
  .abilityScoresDiv{
    height: 1.629in/* 1.375in */;
    width: 3.034in; 
    border-top: 2px solid black;
    margin-top: .148in /* .125in */;
    /* float: left; */
    position: absolute;
  }
    .abilityDivLabelRow{
      height: .20in;
      margin-right: .074in;
      width: 2.96in; /* 2.96 - .12 (4*.03) = 2.84 / 8 = .355 */
      text-align: center;
      font-size: 5px;
    }
    .abilityDivRow{
      height: .215in /* .1875in */;
      margin-bottom: .03in;
      margin-right: .074in;
    }
    .abilityDivRowLast{
      height: .222in /* .1875in */;
      margin-right: .074in;
    }
    .abilityDiv_NameTotalMod{
      height: 100%;
      width: 1.42in;
      float: left;
    }
    .abilityDiv_input{
      height: 100%;
      width: .355in;
      float: left;
      margin-left: .03in;
    }
      .half{
        height: 100%;
        width: 50%;
        float: left;
      }
      .quarter{
        height: 100%;
        width: 25%;
        float: left;
      }
    .darkLabel{
      background-color: black;
      color: white;
      text-align: center;
    }
    .darkLabel>.dlAbr{
      height: .148in /* .125in */;
      font-weight: bold;
      font-size: 12px
    }
    .darkLabel>.dlLabel{
      height: .074in /* .0625in */;
      font-size: 5px    
    }
    .dataSquare{
      outline: 1px solid black;
      outline-offset: -1px;
    }
  .classRecorderHitPointsDiv{
    height: 1.5in;
    width: 5.966in; 
    /* float: left; */
    margin-top: .148in /* .125in */;
    border: 1px solid black;
    position: absolute;
    left: 3.11in; 
  }
    .classRecorderHitPointsDivLabel{
      height: .15in;
      width: 100%;
    }
      .hitPointLabel{
        height: .15in;
        width: 33.3%/* 1.9506in */;
        text-align: center;
        float: left;
        font-size: 12px;
      }
      .classRecorderLabel{
        height: .15in;
        width: 66.7%/* 4.0154in */;
        text-align: center;
        float: left;
        font-size: 12px;
      }
    .hitPointsDiv{
      height: 1.35in;
      width: 33.3%/* 1.9506in */;
      float: left;
    }
      .hitPointsDivLeft{
        height: 100%;
        width: 70%;
        float: left;
      }
        .currentHPDiv{
          height: .92467in;
          width: 100%;
        }
        .hitPointsTotals{
          text-align: right;
          font-weight: bold;
          font-size: 14px;
          line-height: .21267in;
          padding-right: .074in;
          float: right;
        }
        .favoredClass{
          font-size: 6px;
          line-height: .21267in;
          padding-left: .074in;
          float: left;
        }
      .hitPointsDivRight{
        height: 100%;
        width: 30%;
        float: left;
      }
    .classRecorderDiv{
      height: 1.35in;
      width: 66.7%;
      float: left;
    }
    .classRecorderHitPointsLabelRow{
      height: .074in;
      font-size: 5px;
      text-align: center;
    }
    .classRecorderTopRow{
      height: .28667in;
      font-size: 5px;
      text-align: center;
    }
    .classRecorderHitPointsRow{
      height: .21267in;
    }
    .classRecorderCol{
      height: .21267in;
      width: .30in;
      float: left;
    }
    .classRecorderWideCol{
      height: .21267in;
      width: 1.879322in;
      float: left;
    }
    .classRecorderTopCol{
      height: .28667in;
      width: .30in;
      font-size: 5px;
      text-align: center;    
      float: left;
    }
    .classRecorderTopWideCol{
      height: .28667in;
      width: 1.879322in;
      font-size: 5px;
      text-align: center;    
      float: left;
    }
    .classRecorderTotalsCol{
      height: .21267in;
      width: 2.179322in;
      float: left;
    }
  /* 1/4 = .25
  1/8 = .125
  1/16 = .0625 */
  /**************************/
  /*  Attacks and Defenses   *
  /**************************/
  
  .attacksAndDefenseDiv{
    /* background-color: blue; */
    height: 3.7in;
    width: 6in;
    position: absolute;
    top: 3in;
  }
  .contentTitle{
    height: .15in;
    width: 100%;
    font-size: 12px;
  }
  .attacksAndDefenseDivLabelRow{
    height: .15in;
    margin-right: .074in;
    width: 100%;
    text-align: center;
    font-size: 5px;
  }
  .attacksAndDefenseDivRow{
    height: .215in;
    margin-bottom: .03in;
    margin-right: .074in;
  }
  .plusTen{
    font-size: 16px;
    text-align: center;
    line-height: .215in;
  }
  .acSpacer{
    height: .215in;
    width: .6in;
    margin-bottom: .03in;
    margin-right: .025in;
    float: left;
  }
  .acSpacer>.label{
    height: .1075in;
    text-align: right;
    font-size: 5px;
  }
  .savesDiv, .attacksDiv{
    width: 3.42in;
  }
  .statNameTotal{
    height: 100%;
    width: 1.065in;
    float: left;
  }
  .attacksAndDefenseName{
    height: 100%;
    width: .71in;
    float: left;
  }
  .attacksAndDefenseTotal{
    height: 100%;
    width: .355in;
    float: left;
  }
  .attacksAndDefenseWide{
    height: 100%;
    width: 1.095in;
    margin-left: .03in;
    float: left;
  }
  .combatNotesDiv{
    height: 2.46in;
    width: 2.5in;
    position: absolute;
    top: 1.05in;
    left: 3.45in;
  }
  .verticalSpacer{
    height: .375in;
    width: 100%;
  }
  .linedRow{
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    height: .215in;
    width: 100%;
    border-bottom: 1px solid black;
  }
  .topLinedRow{
    border-top: 1px solid black;
  }
  
  /**************************/
  /*   FEATS AND FEATURES    *
  /**************************/
  .featsAndFeaturesDiv{
    /* background-color: red; */
    height: 3.7in;
    width: 6in;
    position: absolute;
    top: 6.7in;
  }
  .featsAndFeaturesLabelRow{
    height: .08in;
    width: 100%;
    text-align: center;
    font-size: 5px;/* 
    outline: 1px solid black;
    outline-offset: -1px; */
  }
  .featsAndFeaturesDivLeft, .featsAndFeaturesDivRight{
    height: 3.45in;
    width: 2.97in;
    float: left;
  }
  .featsAndFeaturesDivLeft{
    margin-right: .06in;
  }
  .featsAndFeaturesDivRight{
  }
      </style>
    </head>
    <body>
      <div class="flex-box">
        <div class="playerCharacterInformation">
          <div class="playerCharacterRows">
            <div class="three playerCharacterDataWrapper first">
              <div class="three playerCharacterInformationData bold">${character.preferences.name}</div>
              <div class="three playerCharacterInformationLabel">CHARACTER</div>            
            </div>
            <div class="three playerCharacterDataWrapper last">
              <div class="three playerCharacterInformationData bold">${character.preferences.name}</div>
              <div class="three playerCharacterInformationLabel">PLAYER</div>
            </div>
          </div>
          <div class="playerCharacterRows">
            <div class="two playerCharacterDataWrapper first">
              <div class="two playerCharacterInformationData">${character.preferences.name}</div>
              <div class="two playerCharacterInformationLabel">RACE & LA</div>
            </div>
            <div class="one playerCharacterDataWrapper mid">
              <div class="one playerCharacterInformationData">${character.preferences.name}</div>
              <div class="one playerCharacterInformationLabel">SIZE</div>
            </div>
            <div class="one playerCharacterDataWrapper mid">
              <div class="one playerCharacterInformationData">${character.preferences.name}</div>
              <div class="one playerCharacterInformationLabel">GENDER</div>
            </div>
            <div class="one playerCharacterDataWrapper mid">
              <div class="one playerCharacterInformationData">${character.preferences.name}</div>
              <div class="one playerCharacterInformationLabel">HEIGHT</div>
            </div>
            <div class="one playerCharacterDataWrapper last">
              <div class="one playerCharacterInformationData">${character.preferences.name}</div>
              <div class="one playerCharacterInformationLabel">WEIGHT</div>
            </div>
          </div>
          <div class="playerCharacterRows">
            <div class="one playerCharacterDataWrapper first">
              <div class="one playerCharacterInformationData">${character.preferences.name}</div>
              <div class="one playerCharacterInformationLabel">AGE</div>
            </div>
            <div class="one playerCharacterDataWrapper mid">
              <div class="one playerCharacterInformationData">${character.preferences.name}</div>
              <div class="one playerCharacterInformationLabel">ALIGNMENT</div>
            </div>
            <div class="two playerCharacterDataWrapper mid">
              <div class="two playerCharacterInformationData">${character.preferences.name}</div>
              <div class="two playerCharacterInformationLabel">DEITY</div>
            </div>
            <div class="two playerCharacterDataWrapper last">
              <div class="two playerCharacterInformationData">${character.preferences.name}</div>
              <div class="two playerCharacterInformationLabel">OCCUPATION</div>
            </div>
          </div>
          <div class="playerCharacterRows">
            <div class="six playerCharacterDataWrapper">
              <div class="six playerCharacterInformationData">${character.preferences.name}</div>
              <div class="six playerCharacterInformationLabel">LANGUAGES</div>
            </div>
          </div>
        </div>
        <div class="logo"></div>
        <div class="abilityScoresDiv">
          <div class="abilityDivLabelRow">
            <div class='abilityDiv_NameTotalMod'>
              <div class="half"><div class="bottom_aligner"></div>ABILITY NAME</div>
              <div class="quarter"><div class="bottom_aligner"></div>TOTAL</div>
              <div class="quarter"><div class="bottom_aligner"></div>MOD</div>
            </div>
            <div class='abilityDiv_input'><div class="bottom_aligner"></div>BASE</div>
            <div class='abilityDiv_input'><div class="bottom_aligner"></div>INHERENT</div>
            <div class='abilityDiv_input'><div class="bottom_aligner"></div>ENHANCE</div>
            <div class='abilityDiv_input'><div class="bottom_aligner"></div>MISC</div>
          </div>
          <div class="abilityDivRow">
            <div class='abilityDiv_NameTotalMod'>
              <div class="half darkLabel"><div class="dlAbr">STR</div><div class="dlLabel">STRENGTH</div></div>
              <div class="quarter dataSquare"></div>
              <div class="quarter dataSquare"></div>
            </div>
            <div class='abilityDiv_input dataSquare'></div>
            <div class='abilityDiv_input dataSquare'></div>
            <div class='abilityDiv_input dataSquare'></div>
            <div class='abilityDiv_input dataSquare'></div>
          </div>
          <div class="abilityDivRow">
            <div class='abilityDiv_NameTotalMod'>
              <div class="half darkLabel"><div class="dlAbr">DEX</div><div class="dlLabel">DEXTERITY</div></div>
              <div class="quarter dataSquare"></div>
              <div class="quarter dataSquare"></div>
            </div>
            <div class='abilityDiv_input dataSquare'></div>
            <div class='abilityDiv_input dataSquare'></div>
            <div class='abilityDiv_input dataSquare'></div>
            <div class='abilityDiv_input dataSquare'></div>
          </div>
          <div class="abilityDivRow">
            <div class='abilityDiv_NameTotalMod'>
              <div class="half darkLabel"><div class="dlAbr">CON</div><div class="dlLabel">CONSTITUTION</div></div>
              <div class="quarter dataSquare"></div>
              <div class="quarter dataSquare"></div>
            </div>
            <div class='abilityDiv_input dataSquare'></div>
            <div class='abilityDiv_input dataSquare'></div>
            <div class='abilityDiv_input dataSquare'></div>
            <div class='abilityDiv_input dataSquare'></div>
          </div>
          <div class="abilityDivRow">
            <div class='abilityDiv_NameTotalMod'>
              <div class="half darkLabel"><div class="dlAbr">INT</div><div class="dlLabel">INTELLIGENCE</div></div>
              <div class="quarter dataSquare"></div>
              <div class="quarter dataSquare"></div>
            </div>
            <div class='abilityDiv_input dataSquare'></div>
            <div class='abilityDiv_input dataSquare'></div>
            <div class='abilityDiv_input dataSquare'></div>
            <div class='abilityDiv_input dataSquare'></div>
          </div>
          <div class="abilityDivRow">
            <div class='abilityDiv_NameTotalMod'>
              <div class="half darkLabel"><div class="dlAbr">WIS</div><div class="dlLabel">WISDOM</div></div>
              <div class="quarter dataSquare"></div>
              <div class="quarter dataSquare"></div>
            </div>
            <div class='abilityDiv_input dataSquare'></div>
            <div class='abilityDiv_input dataSquare'></div>
            <div class='abilityDiv_input dataSquare'></div>
            <div class='abilityDiv_input dataSquare'></div>
          </div>
          <div class="abilityDivRowLast">
            <div class='abilityDiv_NameTotalMod'>
              <div class="half darkLabel"><div class="dlAbr">CHA</div><div class="dlLabel">CHARISMA</div></div>
              <div class="quarter dataSquare"></div>
              <div class="quarter dataSquare"></div>
            </div>
            <div class='abilityDiv_input dataSquare'></div>
            <div class='abilityDiv_input dataSquare'></div>
            <div class='abilityDiv_input dataSquare'></div>
            <div class='abilityDiv_input dataSquare'></div>
          </div>
        </div>
        <div class="classRecorderHitPointsDiv">
          <div class="classRecorderHitPointsDivLabel">
            <div class="hitPointLabel darkLabel">HIT POINTS</div>
            <div class="classRecorderLabel darkLabel">CLASS RECORDER</div>
          </div>
          <div class="hitPointsDiv">
            <div class="hitPointsDivLeft">
              <div class="currentHPDiv dataSquare">
                <div class="classRecorderHitPointsLabelRow">CURRENT HP</div>
              </div>
              <div class="classRecorderHitPointsRow dataSquare">
                <div class="classRecorderHitPointsLabelRow">TEMPORARY HP</div>
              </div>
              
              <div class="classRecorderHitPointsRow dataSquare"><div class="hitPointsTotals">TOTAL HP</div></div>            
            </div>
            <div class="hitPointsDivRight">
              <div class="classRecorderTopRow dataSquare">
                <div class="classRecorderHitPointsLabelRow">HP GAINED</div>
              </div>
              <div class="classRecorderHitPointsRow dataSquare"></div>
              <div class="classRecorderHitPointsRow dataSquare"></div>
              <div class="classRecorderHitPointsRow dataSquare"></div>
              <div class="classRecorderHitPointsRow dataSquare"></div>
              <div class="classRecorderHitPointsRow dataSquare"></div>
            </div>
          </div>
          <div class="classRecorderDiv">
            <div class="classRecorderTopRow dataSquare">
              <div class="classRecorderTopCol dataSquare"><div class="classRecorderHitPointsLabelRow">HD</div></div>
              <div class="classRecorderTopWideCol dataSquare"><div class="classRecorderHitPointsLabelRow">CLASS NAME</div></div>
              <div class="classRecorderTopCol dataSquare"><div class="classRecorderHitPointsLabelRow">BAB</div></div>
              <div class="classRecorderTopCol dataSquare"><div class="classRecorderHitPointsLabelRow">SKILLS</div></div>
              <div class="classRecorderTopCol dataSquare"><div class="classRecorderHitPointsLabelRow">FORT</div></div>
              <div class="classRecorderTopCol dataSquare"><div class="classRecorderHitPointsLabelRow">REF</div></div>
              <div class="classRecorderTopCol dataSquare"><div class="classRecorderHitPointsLabelRow">WILL</div></div>
              <div class="classRecorderTopCol dataSquare"><div class="classRecorderHitPointsLabelRow">LEVELS</div></div>
            </div>
            <div class="classRecorderHitPointsRow">
              <div class="classRecorderCol dataSquare"></div>
              <div class="classRecorderWideCol dataSquare"></div>
              <div class="classRecorderCol dataSquare"></div>
              <div class="classRecorderCol dataSquare"></div>
              <div class="classRecorderCol dataSquare"></div>
              <div class="classRecorderCol dataSquare"></div>
              <div class="classRecorderCol dataSquare"></div>
              <div class="classRecorderCol dataSquare"></div>
            </div>
            <div class="classRecorderHitPointsRow">
              <div class="classRecorderCol dataSquare"></div>
              <div class="classRecorderWideCol dataSquare"></div>
              <div class="classRecorderCol dataSquare"></div>
              <div class="classRecorderCol dataSquare"></div>
              <div class="classRecorderCol dataSquare"></div>
              <div class="classRecorderCol dataSquare"></div>
              <div class="classRecorderCol dataSquare"></div>
              <div class="classRecorderCol dataSquare"></div>
            </div>
            <div class="classRecorderHitPointsRow">
              <div class="classRecorderCol dataSquare"></div>
              <div class="classRecorderWideCol dataSquare"></div>
              <div class="classRecorderCol dataSquare"></div>
              <div class="classRecorderCol dataSquare"></div>
              <div class="classRecorderCol dataSquare"></div>
              <div class="classRecorderCol dataSquare"></div>
              <div class="classRecorderCol dataSquare"></div>
              <div class="classRecorderCol dataSquare"></div>
            </div>
            <div class="classRecorderHitPointsRow">
              <div class="classRecorderCol dataSquare"></div>
              <div class="classRecorderWideCol dataSquare"></div>
              <div class="classRecorderCol dataSquare"></div>
              <div class="classRecorderCol dataSquare"></div>
              <div class="classRecorderCol dataSquare"></div>
              <div class="classRecorderCol dataSquare"></div>
              <div class="classRecorderCol dataSquare"></div>
              <div class="classRecorderCol dataSquare"></div>
            </div>
            <div class="classRecorderHitPointsRow">
              <div class="classRecorderTotalsCol dataSquare">
                <div class="favoredClass">FAVORED CLASS</div>
                <div class="hitPointsTotals">TOTALS</div>
              </div>
              <div class="classRecorderCol dataSquare"></div>
              <div class="classRecorderCol dataSquare"></div>
              <div class="classRecorderCol dataSquare"></div>
              <div class="classRecorderCol dataSquare"></div>
              <div class="classRecorderCol dataSquare"></div>
              <div class="classRecorderCol dataSquare"></div>
            </div>
  
          </div>
        </div>
        <div class="attacksAndDefenseDiv">
          <div class="contentTitle darkLabel">ATTACKS AND DEFENSE</div>
          <div class="acDiv">
            <div class="attacksAndDefenseDivLabelRow">
              <div class='abilityDiv_NameTotalMod'>
                <div class="half"><div class="bottom_aligner"></div>ARMOR CLASS</div>
                <div class="quarter"><div class="bottom_aligner"></div>TOTAL</div>
                <div class="quarter"><div class="bottom_aligner"></div></div>
              </div>
              <div class='abilityDiv_input'><div class="bottom_aligner"></div>ARMOR</div>
              <div class='abilityDiv_input'><div class="bottom_aligner"></div>SHIELD</div>
              <div class='abilityDiv_input'><div class="bottom_aligner"></div>DEX</div>
              <div class='abilityDiv_input'><div class="bottom_aligner"></div>SIZE</div>
              <div class='abilityDiv_input'><div class="bottom_aligner"></div>DODGE</div>
              <div class='abilityDiv_input'><div class="bottom_aligner"></div>NATURAL</div>
              <div class='abilityDiv_input'><div class="bottom_aligner"></div>DEFLECT</div>
            </div>
            <div class="attacksAndDefenseDivRow">
              <div class='abilityDiv_NameTotalMod'>
                <div class="half darkLabel"><div class="dlAbr">AC</div><div class="dlLabel">ARMOR CLASS</div></div>
                <div class="quarter dataSquare"></div>
                <div class="quarter plusTen"> -10-</div>
              </div>
              <div class='abilityDiv_input dataSquare'></div>
              <div class='abilityDiv_input dataSquare'></div>
              <div class='abilityDiv_input dataSquare'></div>
              <div class='abilityDiv_input dataSquare'></div>
              <div class='abilityDiv_input dataSquare'></div>
              <div class='abilityDiv_input dataSquare'></div>
              <div class='abilityDiv_input dataSquare'></div>
              <div class='abilityDiv_input dataSquare'></div>
              <div class='abilityDiv_input dataSquare'></div>
              <div class='acSpacer'>
                <div class="label"><div class="bottom_aligner"></div>ARMOR</div><div class="label">PENALTY</div>
              </div>
              <div class='abilityDiv_input dataSquare'></div>
            </div>
            <div class="attacksAndDefenseDivRow">
              <div class='abilityDiv_NameTotalMod'>
                <div class="half darkLabel"><div class="dlAbr">TOUCH</div><div class="dlLabel">ARMOR CLASS</div></div>
                <div class="quarter dataSquare"></div>
                <div class="quarter plusTen"> -10-</div>
              </div>
              <div class='abilityDiv_input '></div>
              <div class='abilityDiv_input '></div>
              <div class='abilityDiv_input dataSquare'></div>
              <div class='abilityDiv_input dataSquare'></div>
              <div class='abilityDiv_input dataSquare'></div>
              <div class='abilityDiv_input '></div>
              <div class='abilityDiv_input dataSquare'></div>
              <div class='abilityDiv_input dataSquare'></div>
              <div class='abilityDiv_input dataSquare'></div>
              <div class='acSpacer'>
                <div class="label"><div class="bottom_aligner"></div>MAX</div><div class="label">DEX</div>
              </div>
              <div class='abilityDiv_input dataSquare'></div>
            </div>
            <div class="attacksAndDefenseDivRow">
              <div class='abilityDiv_NameTotalMod'>
                <div class="half darkLabel"><div class="dlAbr">FLAT-FOOT</div><div class="dlLabel">ARMOR CLASS</div></div>
                <div class="quarter dataSquare"></div>
                <div class="quarter plusTen"> -10-</div>
              </div>
              <div class='abilityDiv_input dataSquare'></div>
              <div class='abilityDiv_input dataSquare'></div>
              <div class='abilityDiv_input '></div>
              <div class='abilityDiv_input dataSquare'></div>
              <div class='abilityDiv_input '></div>
              <div class='abilityDiv_input dataSquare'></div>
              <div class='abilityDiv_input dataSquare'></div>
              <div class='abilityDiv_input dataSquare'></div>
              <div class='abilityDiv_input dataSquare'></div>
              <div class='acSpacer'>
                <div class="label"><div class="bottom_aligner"></div>SPELL</div><div class="label">FAILURE</div>
              </div>
              <div class='abilityDiv_input dataSquare'></div>
            </div>
          </div>
          <div class="savesDiv">
            <div class="attacksAndDefenseDivRow"></div> <!-- fix the extra rows -->
            <div class="attacksAndDefenseDivLabelRow">
              <div class='statNameTotal'>
                <div class="attacksAndDefenseName"><div class="bottom_aligner"></div>SAVING THROWS</div>
                <div class="attacksAndDefenseTotal"><div class="bottom_aligner"></div>TOTAL</div>
              </div>
              <div class="attacksAndDefenseWide"><div class="bottom_aligner"></div>CLASS BASE</div>
              <div class='abilityDiv_input'><div class="bottom_aligner"></div>ABILITY</div>
              <div class='abilityDiv_input'><div class="bottom_aligner"></div>ENHANCE</div>
            </div>
            <div class="attacksAndDefenseDivRow">
              <div class='statNameTotal'>
                <div class="attacksAndDefenseName darkLabel"><div class="dlAbr">FORT</div><div class="dlLabel">FORTITUDE</div></div>
                <div class="attacksAndDefenseTotal dataSquare"></div>
              </div>
              <div class="attacksAndDefenseWide dataSquare"><div class="bottom_aligner"></div></div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div></div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div></div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div></div>          
            </div>
            <div class="attacksAndDefenseDivRow">
              <div class='statNameTotal'>
                <div class="attacksAndDefenseName darkLabel"><div class="dlAbr">REF</div><div class="dlLabel">REFLEX</div></div>
                <div class="attacksAndDefenseTotal dataSquare"></div>
              </div>
              <div class="attacksAndDefenseWide dataSquare"><div class="bottom_aligner"></div></div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div></div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div></div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div></div>
            </div>
            <div class="attacksAndDefenseDivRow">
              <div class='statNameTotal'>
                <div class="attacksAndDefenseName darkLabel"><div class="dlAbr">WILL</div><div class="dlLabel">WILLPOWER</div></div>
                <div class="attacksAndDefenseTotal dataSquare"></div>
              </div>
              <div class="attacksAndDefenseWide dataSquare"><div class="bottom_aligner"></div></div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div></div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div></div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div></div>
            </div>
          </div>
          <div class="attacksDiv">
            <div class="attacksAndDefenseDivRow"></div><!-- fix the extra rows -->
            <div class="attacksAndDefenseDivLabelRow">
              <div class='statNameTotal'>
                <div class="attacksAndDefenseName"><div class="bottom_aligner"></div>ATTACK</div>
                <div class="attacksAndDefenseTotal"><div class="bottom_aligner"></div>TOTAL</div>
              </div>
              <div class="attacksAndDefenseWide"><div class="bottom_aligner"></div>BASE ATTACK BONUS</div>
              <div class='abilityDiv_input'><div class="bottom_aligner"></div>ABILITY</div>
              <div class='abilityDiv_input'><div class="bottom_aligner"></div>SIZE</div>
            </div>
            <div class="attacksAndDefenseDivRow">
              <div class='statNameTotal'>
                <div class="attacksAndDefenseName darkLabel"><div class="dlAbr">MELEE</div><div class="dlLabel">ATTACK MODIFIER</div></div>
                <div class="attacksAndDefenseTotal dataSquare"></div>
              </div>
              <div class="attacksAndDefenseWide dataSquare"><div class="bottom_aligner"></div></div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div></div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div></div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div></div>          
            </div>
            <div class="attacksAndDefenseDivRow">
              <div class='statNameTotal'>
                <div class="attacksAndDefenseName darkLabel"><div class="dlAbr">RANGED</div><div class="dlLabel">ATTACK MODIFIER</div></div>
                <div class="attacksAndDefenseTotal dataSquare"></div>
              </div>
              <div class="attacksAndDefenseWide dataSquare"><div class="bottom_aligner"></div></div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div></div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div></div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div></div>
            </div>
            <div class="attacksAndDefenseDivRow">
              <div class='statNameTotal'>
                <div class="attacksAndDefenseName darkLabel"><div class="dlAbr">CMB</div><div class="dlLabel">TO ATTACK</div></div>
                <div class="attacksAndDefenseTotal dataSquare"></div>
              </div>
              <div class="attacksAndDefenseWide dataSquare"><div class="bottom_aligner"></div></div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div></div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div></div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div></div>
            </div>
            <div class="attacksAndDefenseDivRow">
              <div class='abilityDiv_NameTotalMod'>
                <div class="attacksAndDefenseName darkLabel"><div class="dlAbr">CMD</div><div class="dlLabel">TO DEFEND</div></div>
                <div class="attacksAndDefenseTotal dataSquare"></div>
                <div class="attacksAndDefenseTotal plusTen"> -10-</div>
              </div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div></div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div></div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div></div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div></div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div></div>
            </div>
          </div>
          <div class="combatNotesDiv">
            <div class="verticalSpacer"></div>
            <div class="linedRow topLinedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
          </div>
        </div>
        <div class="featsAndFeaturesDiv">
          <div class="contentTitle darkLabel">FEATS AND FEATURES</div>
          <div class="featsAndFeaturesLabelRow"><div class="bottom_aligner"></div>CLASS FEATURES, RACIAL FEATURES, FEATS AND CHARACTER FEATURES</div>
          <div class="featsAndFeaturesDivLeft">
            <div class="linedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
          </div>
          <div class="featsAndFeaturesDivRight">
            <div class="linedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
            <div class="linedRow"></div>
          </div>
        </div>
  
  
  
  
  
      </div>
    </body>
  </html>
    `;
};