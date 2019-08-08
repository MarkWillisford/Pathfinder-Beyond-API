module.exports = (character) => {
  let sizeMod = character.race ? 
    (character.race.standardRacialTraits.base.size === "small" ? 1 : 0) :
    0;

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
      text-align: center;
      font-size: 12px;
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
      /* font-size: 5px; */
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
      /* font-size: 5px; */
      text-align: center;    
      float: left;
    }
    .classRecorderTopWideCol{
      height: .28667in;
      width: 1.879322in;
      /* font-size: 5px; */
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
  
  /**************************/
  /*         SKILLS          *
  /**************************/
  .skillsDiv{
    height: 5.25in;
    width: 3in;
    position: absolute;
    top: 2.75in;
    left: 6.1in;
  }
  .skillsTable{  
    border-collapse: collapse;
  }
  .skillsRow{
    height: .165in;
    width: 100%;
  }
  .gray{
    background-color: lightgrey;
  }
  .skillsName{
    width: 1.15in; 
    font-size: 8px;
  }
  .skillsNameCbx{
    /* Smaller-sized Checkboxes */
    -ms-transform: scale(.75); /* IE */
    -moz-transform: scale(.75); /* FF */
    -webkit-transform: scale(.75); /* Safari and Chrome */
    -o-transform: scale(.75); /* Opera */
    transform: scale(.75);
    margin: 0;
    padding: 0;
  }
  .skillsNameCbx{
    height: 9.6px;
    width: 9.6px;
    border: 1px solid black;
  }
  .skillsAbilityName{
    width: .125in;
    font-size: 8px;
    text-align: right;
  }
  .skillsBox{
    width: .23in;
    outline: 1px solid black;
    outline-offset: -1px;
    text-align: center;
    font-size: 11px;
  }
  .skillsBoxLabel{
    width: .23in;
  }
  .skillsDetailsRows{
    height: .16;
    width: 100%;
    text-align: center;  
    font-size: 5px;
    vertical-align: middle;
  }
  
  /**************************/
  /*         EXTRAS          *
  /**************************/
  .experienceAndExtrasDiv{
    height: 1.87in;
    width: 3in;
    position: absolute;
    top: 8.55in;
    left: 6.1in;
  }
  .experienceAndExtrasRow{
    height: .202in;
    width: 100%;
    margin-bottom: .03in;
    margin-right: .074in;
  }
  .resistanceLabel{
    height: .08;
    width: 100%;
    font-size: 5px;
    padding-top:3px;
    padding-left:3px; 
  }
  .extrasNameTotal{
    height: 100%;
    width: 1.4in; 
    float: left;
  }
  .extrasName{
    height: 100%;
    width: 1in; 
    float: left;
  }
  .extrasTotal{
    height: 100%;
    width: .4in; 
    float: left;
  }
  .extrasTotalLong{
    height: 100%;
    width: 2in; 
    float: left;
  }
  .experienceAndExtrasData{
    height: 100%;
    width: 1.565in;
    margin-left: .03in;
    float: left;
    text-align: center;
  }
  .heavyDataSquare{
    outline: 2px solid black;
    outline-offset: -2px;
    text-align: center;
  }
  .extrasData{
    height: 100%;
    width: .313in;
    float: left;
  }
  .experienceDiv{
    height: .128in;
    width: 100%;
    font-size: 7px;
    text-align: center;
  }
  .xpSpeedLabel{
    height: 100%;
    width: 33%;
    float: left;
  }
  
  
  .proficienciesDiv{
    height: .5in;
    width: 3in;
    position: absolute;
    top: 10.45in;
    left: 6.1in;
  }
  .proficienciesDivLabel{
    height: .08;
    width: 100%;
    text-align: center;
    font-size: 7px;
  }
  .proficienciesRowWrap{
    height: .42in;
    width: 100%;
    outline: 2px solid black;
    outline-offset: -2px;
  }
  .proficienciesRow{
    height: .21in;
    width: 100%;
  }
  
  
  .armorDiv{
    height: .5in;
    width: 6in;
    position: absolute;
    top: 10.45in;
  }
  .armorName{
    height: 100%;
    width: 3.03in;
    float: left;
  }
  .armorData{
    height: 100%;
    width: .37125in;
    float: left;
  }
  .armorRowWrap{
    height: .42in;
    width: 100%;
    outline: 2px solid black;
    outline-offset: -2px;
  }
  .armorRow{
    height: .21in;
    width: 100%;
  }
  
  
  .weaponsDiv{
    height: 1.13in;
    width: 9in;
    position: absolute;
    top: 11.05in;
  }
  .weaponsLong, .damage{
    float: left;
  }
  .weaponsLong{
    height: 100%;
    width: 1.45in;
  }
  .weaponsAttacks{
    height: 100%;
    width: .29in;
    float: left;
  }
  .damage{
    height: 100%;
    width: 1.21in;
  }
  .weaponsWrap{
    height: 1.05in;
    width: 100%;
    outline: 2px solid black;
    outline-offset: -2px;
  }
  .weaponsRow{
    height: .21in;
    width: 100%;
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
              <div class="three playerCharacterInformationData bold"></div>
              <div class="three playerCharacterInformationLabel">PLAYER</div>
            </div>
          </div>
          <div class="playerCharacterRows">
            <div class="two playerCharacterDataWrapper first">
              <div class="two playerCharacterInformationData">${character.race.name}</div>
              <div class="two playerCharacterInformationLabel">RACE & LA</div>
            </div>
            <div class="one playerCharacterDataWrapper mid">
              <div class="one playerCharacterInformationData">${character.race.standardRacialTraits.base.size}</div>
              <div class="one playerCharacterInformationLabel">SIZE</div>
            </div>
            <div class="one playerCharacterDataWrapper mid">
              <div class="one playerCharacterInformationData">${character.details.gender ? character.details.gender : ""}</div>
              <div class="one playerCharacterInformationLabel">GENDER</div>
            </div>
            <div class="one playerCharacterDataWrapper mid">
              <div class="one playerCharacterInformationData"></div>
              <div class="one playerCharacterInformationLabel">HEIGHT</div>
            </div>
            <div class="one playerCharacterDataWrapper last">
              <div class="one playerCharacterInformationData"></div>
              <div class="one playerCharacterInformationLabel">WEIGHT</div>
            </div>
          </div>
          <div class="playerCharacterRows">
            <div class="one playerCharacterDataWrapper first">
              <div class="one playerCharacterInformationData">${character.details.age ? character.details.age : ""}</div>
              <div class="one playerCharacterInformationLabel">AGE</div>
            </div>
            <div class="one playerCharacterDataWrapper mid">
              <div class="one playerCharacterInformationData">${character.details.alignment ? character.details.alignement : ""}</div>
              <div class="one playerCharacterInformationLabel">ALIGNMENT</div>
            </div>
            <div class="two playerCharacterDataWrapper mid">
              <div class="two playerCharacterInformationData">${character.details.deity ? character.details.deity : ""}</div>
              <div class="two playerCharacterInformationLabel">DEITY</div>
            </div>
            <div class="two playerCharacterDataWrapper last">
              <div class="two playerCharacterInformationData"></div>
              <div class="two playerCharacterInformationLabel">OCCUPATION</div>
            </div>
          </div>
          <div class="playerCharacterRows">
            <div class="six playerCharacterDataWrapper">
              <div class="six playerCharacterInformationData">Common</div>
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
              <div class="quarter dataSquare">${findStatisticTotalByName("strength", character.characterStats)}</div>
              <div class="quarter dataSquare">${findStatisticModByName("strength", character.characterStats)}</div>
            </div>
            <div class='abilityDiv_input dataSquare'>${findBonusByStatisticAndBonusType("strength", "base", character.characterStats)}</div>
            <div class='abilityDiv_input dataSquare'></div>
            <div class='abilityDiv_input dataSquare'></div>
            <div class='abilityDiv_input dataSquare'>${findBonusByStatisticAndBonusType("strength", "racial", character.characterStats)}</div>
          </div>
          <div class="abilityDivRow">
            <div class='abilityDiv_NameTotalMod'>
              <div class="half darkLabel"><div class="dlAbr">DEX</div><div class="dlLabel">DEXTERITY</div></div>
              <div class="quarter dataSquare">${findStatisticTotalByName("dexterity", character.characterStats)}</div>
              <div class="quarter dataSquare">${findStatisticModByName("dexterity", character.characterStats)}</div>
            </div>
            <div class='abilityDiv_input dataSquare'>${findBonusByStatisticAndBonusType("dexterity", "base", character.characterStats)}</div>
            <div class='abilityDiv_input dataSquare'></div>
            <div class='abilityDiv_input dataSquare'></div>
            <div class='abilityDiv_input dataSquare'>${findBonusByStatisticAndBonusType("dexterity", "racial", character.characterStats)}</div>
          </div>
          <div class="abilityDivRow">
            <div class='abilityDiv_NameTotalMod'>
              <div class="half darkLabel"><div class="dlAbr">CON</div><div class="dlLabel">CONSTITUTION</div></div>
              <div class="quarter dataSquare">${findStatisticTotalByName("constitution", character.characterStats)}</div>
              <div class="quarter dataSquare">${findStatisticModByName("constitution", character.characterStats)}</div>
            </div>
            <div class='abilityDiv_input dataSquare'>${findBonusByStatisticAndBonusType("constitution", "base", character.characterStats)}</div>
            <div class='abilityDiv_input dataSquare'></div>
            <div class='abilityDiv_input dataSquare'></div>
            <div class='abilityDiv_input dataSquare'>${findBonusByStatisticAndBonusType("constitution", "racial", character.characterStats)}</div>
          </div>
          <div class="abilityDivRow">
            <div class='abilityDiv_NameTotalMod'>
              <div class="half darkLabel"><div class="dlAbr">INT</div><div class="dlLabel">INTELLIGENCE</div></div>
              <div class="quarter dataSquare">${findStatisticTotalByName("intelligence", character.characterStats)}</div>
              <div class="quarter dataSquare">${findStatisticModByName("intelligence", character.characterStats)}</div>
            </div>
            <div class='abilityDiv_input dataSquare'>${findBonusByStatisticAndBonusType("intelligence", "base", character.characterStats)}</div>
            <div class='abilityDiv_input dataSquare'></div>
            <div class='abilityDiv_input dataSquare'></div>
            <div class='abilityDiv_input dataSquare'>${findBonusByStatisticAndBonusType("intelligence", "racial", character.characterStats)}</div>
          </div>
          <div class="abilityDivRow">
            <div class='abilityDiv_NameTotalMod'>
              <div class="half darkLabel"><div class="dlAbr">WIS</div><div class="dlLabel">WISDOM</div></div>
              <div class="quarter dataSquare">${findStatisticTotalByName("wisdom", character.characterStats)}</div>
              <div class="quarter dataSquare">${findStatisticModByName("wisdom", character.characterStats)}</div>
            </div>
            <div class='abilityDiv_input dataSquare'>${findBonusByStatisticAndBonusType("wisdom", "base", character.characterStats)}</div>
            <div class='abilityDiv_input dataSquare'></div>
            <div class='abilityDiv_input dataSquare'></div>
            <div class='abilityDiv_input dataSquare'>${findBonusByStatisticAndBonusType("wisdom", "racial", character.characterStats)}</div>
          </div>
          <div class="abilityDivRowLast">
            <div class='abilityDiv_NameTotalMod'>
              <div class="half darkLabel"><div class="dlAbr">CHA</div><div class="dlLabel">CHARISMA</div></div>
              <div class="quarter dataSquare">${findStatisticTotalByName("charisma", character.characterStats)}</div>
              <div class="quarter dataSquare">${findStatisticModByName("charisma", character.characterStats)}</div>
            </div>
            <div class='abilityDiv_input dataSquare'>${findBonusByStatisticAndBonusType("charisma", "base", character.characterStats)}</div>
            <div class='abilityDiv_input dataSquare'></div>
            <div class='abilityDiv_input dataSquare'></div>
            <div class='abilityDiv_input dataSquare'>${findBonusByStatisticAndBonusType("charisma", "racial", character.characterStats)}</div>
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
                ${character.charClass.classFeatures.hd + 
                  findStatisticModByName("constitution", character.characterStats)}
              </div>
              <div class="classRecorderHitPointsRow dataSquare"></div>
              <div class="classRecorderHitPointsRow dataSquare"></div>
              <div class="classRecorderHitPointsRow dataSquare"></div>
              <div class="classRecorderHitPointsRow dataSquare"></div>
              <div class="classRecorderHitPointsRow dataSquare">
                ${character.charClass.classFeatures.hd + 
                  findStatisticModByName("constitution", character.characterStats)}
              </div>
            </div>
          </div>
          <div class="classRecorderDiv">
            <div class="classRecorderTopRow dataSquare">
              <div class="classRecorderTopCol dataSquare"><div class="classRecorderHitPointsLabelRow">HD</div>d${character.charClass.classFeatures.hd}</div>
              <div class="classRecorderTopWideCol dataSquare"><div class="classRecorderHitPointsLabelRow">CLASS NAME</div>${character.charClass.name}</div>
              <div class="classRecorderTopCol dataSquare"><div class="classRecorderHitPointsLabelRow">BAB</div>${findStatisticTotalByName("bab", character.characterStats)}</div>
              <div class="classRecorderTopCol dataSquare"><div class="classRecorderHitPointsLabelRow">SKILLS</div>${character.charClass.classFeatures.skills}</div>
              <div class="classRecorderTopCol dataSquare"><div class="classRecorderHitPointsLabelRow">FORT</div>${findBonusByStatisticAndBonusType("fort", "untyped", character.characterStats)}</div>
              <div class="classRecorderTopCol dataSquare"><div class="classRecorderHitPointsLabelRow">REF</div>${findBonusByStatisticAndBonusType("ref", "untyped", character.characterStats)}</div>
              <div class="classRecorderTopCol dataSquare"><div class="classRecorderHitPointsLabelRow">WILL</div>${findBonusByStatisticAndBonusType("will", "untyped", character.characterStats)}</div>
              <div class="classRecorderTopCol dataSquare"><div class="classRecorderHitPointsLabelRow">LEVELS</div>1</div>
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
              <div class="classRecorderCol dataSquare">${findStatisticTotalByName("bab", character.characterStats)}</div>
              <div class="classRecorderCol dataSquare">${character.charClass.classFeatures.skills}</div>
              <div class="classRecorderCol dataSquare">${findBonusByStatisticAndBonusType("fort", "untyped", character.characterStats)}</div>
              <div class="classRecorderCol dataSquare">${findBonusByStatisticAndBonusType("ref", "untyped", character.characterStats)}</div>
              <div class="classRecorderCol dataSquare">${findBonusByStatisticAndBonusType("will", "untyped", character.characterStats)}</div>
              <div class="classRecorderCol dataSquare">1</div>
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
                <div class="quarter dataSquare">${getAC(["armor","shield","dodge","naturalArmor","deflection"], true, sizeMod, character.characterStats)}</div>
                <div class="quarter plusTen"> -10-</div>
              </div>
              <div class='abilityDiv_input dataSquare'>${findBonusByStatisticAndBonusType("armorClass", "armor", character.characterStats)}</div>
              <div class='abilityDiv_input dataSquare'>${findBonusByStatisticAndBonusType("armorClass", "shield", character.characterStats)}</div>
              <div class='abilityDiv_input dataSquare'>${findStatisticModByName("dexterity", character.characterStats)}</div>
              <div class='abilityDiv_input dataSquare'>${sizeMod}</div>
              <div class='abilityDiv_input dataSquare'>${findBonusByStatisticAndBonusType("armorClass", "dodge", character.characterStats)}</div>
              <div class='abilityDiv_input dataSquare'>${findBonusByStatisticAndBonusType("armorClass", "naturalArmor", character.characterStats)}</div>
              <div class='abilityDiv_input dataSquare'>${findBonusByStatisticAndBonusType("armorClass", "deflection", character.characterStats)}</div>
              <div class='abilityDiv_input dataSquare'></div>
              <div class='abilityDiv_input dataSquare'></div>
              <div class='acSpacer'>
                <div class="label"><div class="bottom_aligner"></div>ARMOR</div><div class="label">PENALTY</div>
              </div>
              <div class='abilityDiv_input dataSquare'>${character.gear.armor[0] ? character.gear.armor[0].armorCheckPenalty : ""}</div>
            </div>
            <div class="attacksAndDefenseDivRow">
              <div class='abilityDiv_NameTotalMod'>
                <div class="half darkLabel"><div class="dlAbr">TOUCH</div><div class="dlLabel">ARMOR CLASS</div></div>
                <div class="quarter dataSquare">${getAC(["dodge","deflection"], true, sizeMod, character.characterStats)}</div>
                <div class="quarter plusTen"> -10-</div>
              </div>
              <div class='abilityDiv_input '></div>
              <div class='abilityDiv_input '></div>
              <div class='abilityDiv_input dataSquare'>${findStatisticModByName("dexterity", character.characterStats)}</div>
              <div class='abilityDiv_input dataSquare'>${sizeMod}</div>
              <div class='abilityDiv_input dataSquare'>${findBonusByStatisticAndBonusType("armorClass", "dodge", character.characterStats)}</div>
              <div class='abilityDiv_input '></div>
              <div class='abilityDiv_input dataSquare'>${findBonusByStatisticAndBonusType("armorClass", "deflection", character.characterStats)}</div>
              <div class='abilityDiv_input dataSquare'></div>
              <div class='abilityDiv_input dataSquare'></div>
              <div class='acSpacer'>
                <div class="label"><div class="bottom_aligner"></div>MAX</div><div class="label">DEX</div>
              </div>
              <div class='abilityDiv_input dataSquare'>${character.gear.armor[0] ? character.gear.armor[0].maxDexBonus : ""}</div>
            </div>
            <div class="attacksAndDefenseDivRow">
              <div class='abilityDiv_NameTotalMod'>
                <div class="half darkLabel"><div class="dlAbr">FLAT-FOOT</div><div class="dlLabel">ARMOR CLASS</div></div>
                <div class="quarter dataSquare">${getAC(["armor","shield","naturalArmor","deflection"], false, sizeMod, character.characterStats)}</div>
                <div class="quarter plusTen"> -10-</div>
              </div>
              <div class='abilityDiv_input dataSquare'>${findBonusByStatisticAndBonusType("armorClass", "armor", character.characterStats)}</div>
              <div class='abilityDiv_input dataSquare'>${findBonusByStatisticAndBonusType("armorClass", "shield", character.characterStats)}</div>
              <div class='abilityDiv_input '></div>
              <div class='abilityDiv_input dataSquare'>${sizeMod}</div>
              <div class='abilityDiv_input '></div>
              <div class='abilityDiv_input dataSquare'>${findBonusByStatisticAndBonusType("armorClass", "naturalArmor", character.characterStats)}</div>
              <div class='abilityDiv_input dataSquare'>${findBonusByStatisticAndBonusType("armorClass", "deflection", character.characterStats)}</div>
              <div class='abilityDiv_input dataSquare'></div>
              <div class='abilityDiv_input dataSquare'></div>
              <div class='acSpacer'>
                <div class="label"><div class="bottom_aligner"></div>SPELL</div><div class="label">FAILURE</div>
              </div>
              <div class='abilityDiv_input dataSquare'>${character.gear.armor[0] ? character.gear.armor[0].arcaneSpellFailureChance : ""}%</div>
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
                <div class="attacksAndDefenseTotal dataSquare">${findBonusByStatisticAndBonusType("fort", "untyped", character.characterStats)+
                  findStatisticModByName("constitution", character.characterStats)}</div>
              </div>
              <div class="attacksAndDefenseWide dataSquare"><div class="bottom_aligner"></div>${findBonusByStatisticAndBonusType("fort", "untyped", character.characterStats)}</div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div></div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div>${findStatisticModByName("constitution", character.characterStats)}</div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div></div>          
            </div>
            <div class="attacksAndDefenseDivRow">
              <div class='statNameTotal'>
                <div class="attacksAndDefenseName darkLabel"><div class="dlAbr">REF</div><div class="dlLabel">REFLEX</div></div>
                <div class="attacksAndDefenseTotal dataSquare">${findBonusByStatisticAndBonusType("ref", "untyped", character.characterStats)+
                  findStatisticModByName("dexterity", character.characterStats)}</div>
              </div>
              <div class="attacksAndDefenseWide dataSquare"><div class="bottom_aligner"></div>${findBonusByStatisticAndBonusType("ref", "untyped", character.characterStats)}</div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div></div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div>${findStatisticModByName("dexterity", character.characterStats)}</div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div></div>
            </div>
            <div class="attacksAndDefenseDivRow">
              <div class='statNameTotal'>
                <div class="attacksAndDefenseName darkLabel"><div class="dlAbr">WILL</div><div class="dlLabel">WILLPOWER</div></div>
                <div class="attacksAndDefenseTotal dataSquare">${findBonusByStatisticAndBonusType("will", "untyped", character.characterStats) +
                  findStatisticModByName("wisdom", character.characterStats)}</div>
              </div>
              <div class="attacksAndDefenseWide dataSquare"><div class="bottom_aligner"></div>${findBonusByStatisticAndBonusType("will", "untyped", character.characterStats)}</div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div></div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div>${findStatisticModByName("wisdom", character.characterStats)}</div>
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
                <div class="attacksAndDefenseTotal dataSquare">
                ${ findStatisticTotalByName("bab", character.characterStats) +
                  findStatisticModByName("strength", character.characterStats) + 
                  sizeMod}</div>
              </div>
              <div class="attacksAndDefenseWide dataSquare"><div class="bottom_aligner"></div>${findStatisticTotalByName("bab", character.characterStats)}</div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div>${findStatisticModByName("strength", character.characterStats)}</div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div>${sizeMod}</div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div></div>          
            </div>
            <div class="attacksAndDefenseDivRow">
              <div class='statNameTotal'>
                <div class="attacksAndDefenseName darkLabel"><div class="dlAbr">RANGED</div><div class="dlLabel">ATTACK MODIFIER</div></div>
                <div class="attacksAndDefenseTotal dataSquare">
                ${ findStatisticTotalByName("bab", character.characterStats) +
                  findStatisticModByName("dexterity", character.characterStats) +
                  sizeMod}</div>
              </div>
              <div class="attacksAndDefenseWide dataSquare"><div class="bottom_aligner"></div>${findStatisticTotalByName("bab", character.characterStats)}</div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div>${findStatisticModByName("dexterity", character.characterStats)}</div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div>${sizeMod}</div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div></div>
            </div>
            <div class="attacksAndDefenseDivRow">
              <div class='statNameTotal'>
                <div class="attacksAndDefenseName darkLabel"><div class="dlAbr">CMB</div><div class="dlLabel">TO ATTACK</div></div>
                <div class="attacksAndDefenseTotal dataSquare">
                ${ findStatisticTotalByName("bab", character.characterStats) +
                  findStatisticModByName("strength", character.characterStats) + 
                  - sizeMod}</div>
              </div>
              <div class="attacksAndDefenseWide dataSquare"><div class="bottom_aligner"></div>${findStatisticTotalByName("bab", character.characterStats)}</div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div>${findStatisticModByName("strength", character.characterStats)}</div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div>${-sizeMod}</div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div></div>
            </div>
            <div class="attacksAndDefenseDivRow">
              <div class='abilityDiv_NameTotalMod'>
                <div class="attacksAndDefenseName darkLabel"><div class="dlAbr">CMD</div><div class="dlLabel">TO DEFEND</div></div>
                <div class="attacksAndDefenseTotal dataSquare">
                  ${ findStatisticTotalByName("bab", character.characterStats) +
                    findStatisticModByName("strength", character.characterStats) + 
                    findStatisticModByName("dexterity", character.characterStats) +
                    - sizeMod + 10 }
                </div>
                <div class="attacksAndDefenseTotal plusTen"> -10-</div>
              </div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div>${findStatisticTotalByName("bab", character.characterStats)}</div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div>${findStatisticModByName("strength", character.characterStats)}</div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div>${findStatisticModByName("dexterity", character.characterStats)}</div>
              <div class='abilityDiv_input dataSquare'><div class="bottom_aligner"></div>${-sizeMod}</div>
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
        <div class="skillsDiv">
          <div class="contentTitle darkLabel">SKILLS</div>        
          <table class="skillsTable">
            <tr class="featsAndFeaturesLabelRow">
              <td class="skillsNameCbxDiv">CLASS</td>
              <td class="skillsName"></td>
              <td class="skillsAbilityName"></td> 
              <td class="skillsBoxLabel">TOTAL</td>
              <td class="skillsBoxLabel">RANKS</td>
              <td class="skillsBoxLabel">ABILITY</td>
              <td class="skillsBoxLabel">TRAINED</td>
              <td class="skillsBoxLabel"></td>
              <td class="skillsBoxLabel"></td>
            </tr>
            <tr class="skillsRow">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName">ACROBATICS *</td>
              <td class="skillsAbilityName">DEX</td> 
              <td class="skillsBox">${getSum("acrobatics", "dexterity", "ranks", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findBonusByStatisticAndBonusType("acrobatics", "ranks", character.characterStats)}</td>
              <td class="skillsBox">${findStatisticModByName("dexterity", character.characterStats)}</td>
              <td class="skillsBox">${ClassSkillBonus("acrobatics", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findSkillsBonuses("acrobatics", character.characterStats)}</td>
              <td class="skillsBox"></td>
            </tr>
            <tr class="skillsRow gray">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName">APPRAISE</td>
              <td class="skillsAbilityName">INT</td> 
              <td class="skillsBox">${getSum("appraise", "intelligence", "ranks", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findBonusByStatisticAndBonusType("appraise", "ranks", character.characterStats)}</td>
              <td class="skillsBox">${findStatisticModByName("intelligence", character.characterStats)}</td>
              <td class="skillsBox">${ClassSkillBonus("appraise", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findSkillsBonuses("appraise", character.characterStats)}</td>
              <td class="skillsBox"></td>
            </tr>
            <tr class="skillsRow">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName">BLUFF</td>
              <td class="skillsAbilityName">CHA</td> 
              <td class="skillsBox">${getSum("bluff", "charisma", "ranks", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findBonusByStatisticAndBonusType("bluff", "ranks", character.characterStats)}</td>
              <td class="skillsBox">${findStatisticModByName("charisma", character.characterStats)}</td>
              <td class="skillsBox">${ClassSkillBonus("bluff", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findSkillsBonuses("bluff", character.characterStats)}</td>
              <td class="skillsBox"></td>
            </tr>
            <tr class="skillsRow gray">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName">CLIMB *</td>
              <td class="skillsAbilityName">STR</td> 
              <td class="skillsBox">${getSum("climb", "strength", "ranks", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findBonusByStatisticAndBonusType("climb", "ranks", character.characterStats)}</td>
              <td class="skillsBox">${findStatisticModByName("strength", character.characterStats)}</td>
              <td class="skillsBox">${ClassSkillBonus("climb", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findSkillsBonuses("climb", character.characterStats)}</td>
              <td class="skillsBox"></td>
            </tr>
            <tr class="skillsRow">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName">CRAFT: </td>
              <td class="skillsAbilityName">INT</td> 
              <td class="skillsBox">${getSum("craft", "intelligence", "ranks", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findBonusByStatisticAndBonusType("craft", "ranks", character.characterStats)}</td>
              <td class="skillsBox">${findStatisticModByName("intelligence", character.characterStats)}</td>
              <td class="skillsBox">${ClassSkillBonus("craft", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findSkillsBonuses("craft", character.characterStats)}</td>
              <td class="skillsBox"></td>
            </tr>
            <tr class="skillsRow gray">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName">CRAFT:</td>
              <td class="skillsAbilityName">INT</td> 
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
            </tr>
            <tr class="skillsRow">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName">DIPLOMACY</td>
              <td class="skillsAbilityName">CHA</td> 
              <td class="skillsBox">${getSum("diplomacy", "charisma", "ranks", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findBonusByStatisticAndBonusType("diplomacy", "ranks", character.characterStats)}</td>
              <td class="skillsBox">${findStatisticModByName("charisma", character.characterStats)}</td>
              <td class="skillsBox">${ClassSkillBonus("diplomacy", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findSkillsBonuses("diplomacy", character.characterStats)}</td>
              <td class="skillsBox"></td>
            </tr>
            <tr class="skillsRow gray">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName">DISABLE DEVICE *</td>
              <td class="skillsAbilityName">DEX</td> 
              <td class="skillsBox">${findBonusByStatisticAndBonusType("disableDevice", "ranks", character.characterStats) ?
                getSum("disableDevice", "dexterity", "ranks", character.characterStats, character.charClass) : ""}</td>
              <td class="skillsBox">${findBonusByStatisticAndBonusType("disableDevice", "ranks", character.characterStats)}</td>
              <td class="skillsBox">${findBonusByStatisticAndBonusType("disableDevice", "ranks", character.characterStats) ?
                findStatisticModByName("dexterity",character.characterStats) : 
                ""}</td>
              <td class="skillsBox">${ClassSkillBonus("disableDevice", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findSkillsBonuses("disableDevice", character.characterStats)}</td>
              <td class="skillsBox"></td>
            </tr>
            <tr class="skillsRow">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName">DISGUISE</td>
              <td class="skillsAbilityName">CHA</td> 
              <td class="skillsBox">${getSum("disguise", "charisma", "ranks", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findBonusByStatisticAndBonusType("disguise", "ranks", character.characterStats)}</td>
              <td class="skillsBox">${findStatisticModByName("charisma", character.characterStats)}</td>
              <td class="skillsBox">${ClassSkillBonus("disguise", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findSkillsBonuses("disguise", character.characterStats)}</td>
              <td class="skillsBox"></td>
            </tr>
            <tr class="skillsRow gray">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName">ESCAPE ARTIST *</td>
              <td class="skillsAbilityName">DEX</td> 
              <td class="skillsBox">${getSum("escapeArtist", "dexterity", "ranks", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findBonusByStatisticAndBonusType("escapeArtist", "ranks", character.characterStats)}</td>
              <td class="skillsBox">${findStatisticModByName("dexterity", character.characterStats)}</td>
              <td class="skillsBox">${ClassSkillBonus("escapeArtist", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findSkillsBonuses("escapeArtist", character.characterStats)}</td>
              <td class="skillsBox"></td>
            </tr>
            <tr class="skillsRow">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName">FLY *</td>
              <td class="skillsAbilityName">DEX</td> 
              <td class="skillsBox">${getSum("fly", "dexterity", "ranks", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findBonusByStatisticAndBonusType("fly", "ranks", character.characterStats)}</td>
              <td class="skillsBox">${findStatisticModByName("dexterity", character.characterStats)}</td>
              <td class="skillsBox">${ClassSkillBonus("fly", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findSkillsBonuses("fly", character.characterStats)}</td>
              <td class="skillsBox"></td>
            </tr>
            <tr class="skillsRow gray">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName">HANDLE ANIMAL</td>
              <td class="skillsAbilityName">CHA</td> 
              <td class="skillsBox">${findBonusByStatisticAndBonusType("handleAnimal", "ranks", character.characterStats) ? 
                getSum("handleAnimal", "charisma", "ranks", character.characterStats, character.charClass) : ""}</td>
              <td class="skillsBox">${findBonusByStatisticAndBonusType("handleAnimal", "ranks", character.characterStats)}</td>
              <td class="skillsBox">${findBonusByStatisticAndBonusType("handleAnimal", "ranks", character.characterStats) ? 
                findStatisticModByName("charisma", character.characterStats):""}</td>
              <td class="skillsBox">${ClassSkillBonus("handleAnimal", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findSkillsBonuses("handleAnimal", character.characterStats)}</td>
              <td class="skillsBox"></td>
            </tr>
            <tr class="skillsRow">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName">HEAL</td>
              <td class="skillsAbilityName">WIS</td> 
              <td class="skillsBox">${getSum("heal", "wisdom", "ranks", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findBonusByStatisticAndBonusType("heal", "ranks", character.characterStats)}</td>
              <td class="skillsBox">${findStatisticModByName("wisdom", character.characterStats)}</td>
              <td class="skillsBox">${ClassSkillBonus("heal", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findSkillsBonuses("heal", character.characterStats)}</td>
              <td class="skillsBox"></td>
            </tr>
            <tr class="skillsRow gray">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName">INTIMIDATE</td>
              <td class="skillsAbilityName">CHA</td> 
              <td class="skillsBox">${getSum("intimidate", "charisma", "ranks", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findBonusByStatisticAndBonusType("intimidate", "ranks", character.characterStats)}</td>
              <td class="skillsBox">${findStatisticModByName("charisma", character.characterStats)}</td>
              <td class="skillsBox">${ClassSkillBonus("intimidate", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findSkillsBonuses("intimidate", character.characterStats)}</td>
              <td class="skillsBox"></td>
            </tr>
            <tr class="skillsRow">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName">KN:</td>
              <td class="skillsAbilityName">INT</td> 
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
            </tr>
            <tr class="skillsRow gray">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName">KN:</td>
              <td class="skillsAbilityName">INT</td> 
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
            </tr>
            <tr class="skillsRow">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName">KN:</td>
              <td class="skillsAbilityName">INT</td> 
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
            </tr>
            <tr class="skillsRow gray">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName">KN:</td>
              <td class="skillsAbilityName">INT</td> 
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
            </tr>
            <tr class="skillsRow">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName">KN:</td>
              <td class="skillsAbilityName">INT</td> 
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
            </tr>
            <tr class="skillsRow gray">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName">KN:</td>
              <td class="skillsAbilityName">INT</td> 
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
            </tr>
            <tr class="skillsRow">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName">LINGUISTICS</td>
              <td class="skillsAbilityName">INT</td> 
              <td class="skillsBox">${findBonusByStatisticAndBonusType("linquistics", "ranks", character.characterStats) ?
                getSum("linguistics", "intelligence", "ranks", character.characterStats, character.charClass) : ""}</td>
              <td class="skillsBox">${findBonusByStatisticAndBonusType("linquistics", "ranks", character.characterStats)}</td>
              <td class="skillsBox">${findBonusByStatisticAndBonusType("linquistics", "ranks", character.characterStats) ?
                findStatisticModByName("intelligence", character.characterStats):""}</td>
              <td class="skillsBox">${ClassSkillBonus("linguistics", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findSkillsBonuses("linguistics", character.characterStats)}</td>
              <td class="skillsBox"></td>
            </tr>
            <tr class="skillsRow gray">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName">PERCEPTION</td>
              <td class="skillsAbilityName">WIS</td> 
              <td class="skillsBox">${getSum("perception", "wisdom", "ranks", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findBonusByStatisticAndBonusType("perception", "ranks", character.characterStats)}</td>
              <td class="skillsBox">${findStatisticModByName("wisdom", character.characterStats)}</td>
              <td class="skillsBox">${ClassSkillBonus("perception", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findSkillsBonuses("perception", character.characterStats)}</td>
              <td class="skillsBox"></td>
            </tr>
            <tr class="skillsRow">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName">PERFORM</td>
              <td class="skillsAbilityName">CHA</td> 
              <td class="skillsBox">${getSum("perform", "charisma", "ranks", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findBonusByStatisticAndBonusType("perform", "ranks", character.characterStats)}</td>
              <td class="skillsBox">${findStatisticModByName("charisma", character.characterStats)}</td>
              <td class="skillsBox">${ClassSkillBonus("perform", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findSkillsBonuses("perform", character.characterStats)}</td>
              <td class="skillsBox"></td>
            </tr>
            <tr class="skillsRow gray">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName">PROFESSION</td>
              <td class="skillsAbilityName">WIS</td> 
              <td class="skillsBox">${findBonusByStatisticAndBonusType("profession", "ranks", character.characterStats) ?
                getSum("profession", "wisdom", "ranks", character.characterStats, character.charClass) : ""}</td>
              <td class="skillsBox">${findBonusByStatisticAndBonusType("profession", "ranks", character.characterStats)}</td>
              <td class="skillsBox">${findBonusByStatisticAndBonusType("profession", "ranks", character.characterStats) ?
                findStatisticModByName("wisdom",character.characterStats):""}</td>
              <td class="skillsBox">${ClassSkillBonus("profession", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findSkillsBonuses("profession", character.characterStats)}</td>
              <td class="skillsBox"></td>
            </tr>
            <tr class="skillsRow">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName">RIDE *</td>
              <td class="skillsAbilityName">DEX</td> 
              <td class="skillsBox">${getSum("ride", "dexterity", "ranks", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findBonusByStatisticAndBonusType("ride", "ranks", character.characterStats)}</td>
              <td class="skillsBox">${findStatisticModByName("dexterity", character.characterStats)}</td>
              <td class="skillsBox">${ClassSkillBonus("ride", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findSkillsBonuses("ride", character.characterStats)}</td>
              <td class="skillsBox"></td>
            </tr>
            <tr class="skillsRow gray">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName">SENSE MOTIVE</td>
              <td class="skillsAbilityName">WIS</td> 
              <td class="skillsBox">${getSum("senseMotive", "wisdom", "ranks", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findBonusByStatisticAndBonusType("senseMotive", "ranks", character.characterStats)}</td>
              <td class="skillsBox">${findStatisticModByName("wisdom", character.characterStats)}</td>
              <td class="skillsBox">${ClassSkillBonus("senseMotive", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findSkillsBonuses("senseMotive", character.characterStats)}</td>
              <td class="skillsBox"></td>
            </tr>
            <tr class="skillsRow">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName">SLIGHT OF HAND *</td>
              <td class="skillsAbilityName">DEX</td> 
              <td class="skillsBox">${findBonusByStatisticAndBonusType("sleightOfHand", "ranks", character.characterStats) ?
              getSum("sleightOfHand", "dexterity", "ranks", character.characterStats, character.charClass) : ""}</td>
              <td class="skillsBox">${findBonusByStatisticAndBonusType("sleightOfHand", "ranks", character.characterStats)}</td>
              <td class="skillsBox">${findBonusByStatisticAndBonusType("sleightOfHand", "ranks", character.characterStats) ?
                findStatisticModByName("dexterity", character.characterStats):""}</td>
              <td class="skillsBox">${ClassSkillBonus("sleightOfHand", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findSkillsBonuses("sleightOfHand", character.characterStats)}</td>
              <td class="skillsBox"></td>
            </tr>
            <tr class="skillsRow gray">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName">SPELLCRAFT</td>
              <td class="skillsAbilityName">INT</td> 
              <td class="skillsBox">${findBonusByStatisticAndBonusType("spellcraft", "ranks", character.characterStats) ?
                getSum("spellcraft", "intelligence", "ranks", character.characterStats, character.charClass) : ""}</td>
              <td class="skillsBox">${findBonusByStatisticAndBonusType("spellcraft", "ranks", character.characterStats)}</td>
              <td class="skillsBox">${findBonusByStatisticAndBonusType("spellcraft", "ranks", character.characterStats) ?
                findStatisticModByName("intelligence", character.characterStats):""}</td>
              <td class="skillsBox">${ClassSkillBonus("spellcraft", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findSkillsBonuses("spellcraft", character.characterStats)}</td>
              <td class="skillsBox"></td>
            </tr>
            <tr class="skillsRow">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName">STEALTH *</td>
              <td class="skillsAbilityName">DEX</td> 
              <td class="skillsBox">${getSum("stealth", "dexterity", "ranks", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findBonusByStatisticAndBonusType("stealth", "ranks", character.characterStats)}</td>
              <td class="skillsBox">${findStatisticModByName("dexterity", character.characterStats)}</td>
              <td class="skillsBox">${ClassSkillBonus("stealth", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findSkillsBonuses("stealth", character.characterStats)}</td>
              <td class="skillsBox"></td>
            </tr>
            <tr class="skillsRow gray">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName">SURVIVAL</td>
              <td class="skillsAbilityName">WIS</td> 
              <td class="skillsBox">${getSum("survival", "wisdom", "ranks", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findBonusByStatisticAndBonusType("survival", "ranks", character.characterStats)}</td>
              <td class="skillsBox">${findStatisticModByName("wisdom", character.characterStats)}</td>
              <td class="skillsBox">${ClassSkillBonus("survival", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findSkillsBonuses("survival", character.characterStats)}</td>
              <td class="skillsBox"></td>
            </tr>
            <tr class="skillsRow">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName">SWIM *</td>
              <td class="skillsAbilityName">STR</td> 
              <td class="skillsBox">${getSum("swim", "strength", "ranks", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findBonusByStatisticAndBonusType("swim", "ranks", character.characterStats)}</td>
              <td class="skillsBox">${findStatisticModByName("strength", character.characterStats)}</td>
              <td class="skillsBox">${ClassSkillBonus("swim", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findSkillsBonuses("swim", character.characterStats)}</td>
              <td class="skillsBox"></td>
            </tr>
            <tr class="skillsRow gray">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName">USE MAGIC DEVICE</td>
              <td class="skillsAbilityName">CHA</td> 
              <td class="skillsBox">${findBonusByStatisticAndBonusType("useMagicDevice", "ranks", character.characterStats) ?
                getSum("useMagicDevice", "charisma", "ranks", character.characterStats, character.charClass) : ""}</td>
              <td class="skillsBox">${findBonusByStatisticAndBonusType("useMagicDevice", "ranks", character.characterStats)}</td>
              <td class="skillsBox">${findBonusByStatisticAndBonusType("useMagicDevice", "ranks", character.characterStats) ?
                findStatisticModByName("charisma", character.characterStats):""}</td>
              <td class="skillsBox">${ClassSkillBonus("useMagicDevice", character.characterStats, character.charClass)}</td>
              <td class="skillsBox">${findSkillsBonuses("useMagicDevice", character.characterStats)}</td>
              <td class="skillsBox"></td>
            </tr>
            <!-- <tr class="skillsRow">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName"></td>
              <td class="skillsAbilityName"></td> 
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
            </tr> -->
            <!-- <tr class="skillsRow gray">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName"></td>
              <td class="skillsAbilityName"></td> 
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
            </tr> -->
            <!-- <tr class="skillsRow">
              <td class="skillsNameCbxDiv"><div class="skillsNameCbx"></div></td>
              <td class="skillsName"></td>
              <td class="skillsAbilityName"></td> 
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
              <td class="skillsBox"></td>
            </tr> -->
          </table>
          <div class="skillsDetailsRows">MARK A <div class="skillsNameCbx" style="display:inline-block"></div> TO SHOW A CLASS SKILL. CLASS SKILLS WITH RANKS GAIN A +3 TRAINED BONUS. SKILLS MARKED WITH A * ARE APPLIED ARMOR CHECK PENALTIES</div>
        </div>
  
  
  
  
  
        <div class="experienceAndExtrasDiv">
          <div class="experienceAndExtrasRow">
            <div class="extrasNameTotal">
              <div class="experienceDiv">EXPERIENCE</div>
              <div class="featsAndFeaturesLabelRow">
                <div class="xpSpeedLabel">SLOW</div>
                <div class="xpSpeedLabel">MEDIUM</div>
                <div class="xpSpeedLabel">FAST</div>
              </div>
            </div>
            <div class="experienceAndExtrasData dataSquare">/</div>
          </div>
          <div class="experienceAndExtrasRow">
            <div class='extrasNameTotal'>
              <div class="extrasName darkLabel"><div class="dlAbr">INIT</div><div class="dlLabel">INITIATIVE</div></div>
              <div class="extrasTotal dataSquare">${getSum("initiative", "dexterity", "ranks", character.characterStats, character.charClass)}</div>
            </div>
            <div class="experienceAndExtrasData dataSquare">
              <div class="extrasData dataSquare">
                <div class="featsAndFeaturesLabelRow">SPEED</div>
              </div>
              <div class="extrasData dataSquare">
                <div class="featsAndFeaturesLabelRow">FLY</div></div>
              <div class="extrasData dataSquare">
                <div class="featsAndFeaturesLabelRow">SWIM</div></div>
              <div class="extrasData dataSquare">
                <div class="featsAndFeaturesLabelRow">CLIMB</div></div>
              <div class="extrasData dataSquare"></div>
            </div>
          </div>
          <div class="experienceAndExtrasRow">
            <div class="extrasName darkLabel"><div class="dlAbr">DR</div><div class="dlLabel">DAMAGE REDUCTION</div></div>
            <div class="extrasTotalLong dataSquare"></div>
          </div>
          <div class="experienceAndExtrasRow">
            <div class='extrasNameTotal'>
              <div class="extrasName darkLabel"><div class="dlAbr">SR</div><div class="dlLabel">SPELL RESISTANCE</div></div>
              <div class="extrasTotal dataSquare"></div>
            </div>
            <div class="experienceAndExtrasData dataSquare"></div>
          </div>
          <div class="experienceAndExtrasRow">
            <div class='extrasNameTotal'>
              <div class="extrasName darkLabel"><div class="dlAbr">AP</div><div class="dlLabel">ACTION POINTS</div></div>
              <div class="extrasTotal dataSquare"></div>
            </div>
            <div class="experienceAndExtrasData dataSquare"></div>
          </div>
          <div class="experienceAndExtrasRow">
            <div class='extrasNameTotal'>
              <div class="extrasName heavyDataSquare"><div class="dlAbr"></div><div class="dlLabel"></div></div>
              <div class="extrasTotal dataSquare"></div>
            </div>
            <div class="experienceAndExtrasData dataSquare"></div>
          </div>
          <div class="experienceAndExtrasRow dataSquare">
            <div class="resistanceLabel">RESISTANCES</div>
          </div>
          <div class="experienceAndExtrasRow dataSquare">          
            <div class="resistanceLabel">RESISTANCES</div>
          </div>
        </div>
        <div class="armorDiv">
          <div class="featsAndFeaturesLabelRow">
            <div class="armorName ">ARMOR & SHIELD</div>
            <div class="armorData ">ENHANCE</div>
            <div class="armorData ">AC BONUS</div>
            <div class="armorData ">MAX DEX</div>
            <div class="armorData ">PENALTY</div>
            <div class="armorData ">SPELL FAIL</div>
            <div class="armorData ">TYPE</div>
            <div class="armorData ">SIZE</div>
            <div class="armorData ">MATERIAL</div>
          </div>
          <div class="armorRowWrap">
            <div class="armorRow">
              <div class="armorName dataSquare">${character.gear.armor[0] ? character.gear.armor[0].name : ""}</div>
              <div class="armorData dataSquare"></div>
              <div class="armorData dataSquare">${character.gear.armor[0] ? character.gear.armor[0].bonus.armor : ""}</div>
              <div class="armorData dataSquare">${character.gear.armor[0] ? character.gear.armor[0].maxDexBonus : ""}</div>
              <div class="armorData dataSquare">${character.gear.armor[0] ? character.gear.armor[0].armorCheckPenalty : ""}</div>
              <div class="armorData dataSquare">${character.gear.armor[0] ? character.gear.armor[0].arcaneSpellFailureChance : ""}</div>
              <div class="armorData dataSquare">${character.gear.armor[0] ? character.gear.armor[0].use.split(" ")[0] : ""}</div>
              <div class="armorData dataSquare">${character.gear.armor[0] ? character.gear.armor[0].weight + " lbs" : ""}</div>
              <div class="armorData dataSquare"></div></div>
            <div class="armorRow">
              <div class="armorName dataSquare">${character.gear.armor[1] ? character.gear.armor[1].name : ""}</div>
              <div class="armorData dataSquare"></div>
              <div class="armorData dataSquare">${character.gear.armor[1] ? character.gear.armor[1].bonus.armor : ""}</div>
              <div class="armorData dataSquare">${character.gear.armor[1] ? character.gear.armor[1].maxDexBonus : ""}</div>
              <div class="armorData dataSquare">${character.gear.armor[1] ? character.gear.armor[1].armorCheckPenalty : ""}</div>
              <div class="armorData dataSquare">${character.gear.armor[1] ? character.gear.armor[1].arcaneSpellFailureChance : ""}</div>
              <div class="armorData dataSquare">${character.gear.armor[1] ? character.gear.armor[1].use : ""}</div>
              <div class="armorData dataSquare">${character.gear.armor[1] ? character.gear.armor[1].weight + " lbs" : ""}</div>
              <div class="armorData dataSquare"></div></div>
          </div>
        </div>
        <div class="proficienciesDiv">
          <div class="proficienciesDivLabel">PROFICIENCIES</div>
          <div class="proficienciesRowWrap">
            <div class="proficienciesRow dataSquare"></div>
            <div class="proficienciesRow dataSquare"></div>
          </div>
        </div>
        <div class="weaponsDiv">        
          <div class="featsAndFeaturesLabelRow">
            <div class="armorName">WEAPONS AND ATTACKS</div>
            <div class="armorData ">ENHANCE</div>
            <div class="weaponsLong ">
              <div class="weaponsAttacks">1ST</div>
              <div class="weaponsAttacks">2ND</div>
              <div class="weaponsAttacks">3RD</div>
              <div class="weaponsAttacks">4TH</div>
              <div class="weaponsAttacks">5TH</div>
            </div>
            <div class="damage ">DAMAGE</div>
            <div class="armorData ">CRIT</div>
            <div class="armorData ">RANGE</div>
            <div class="armorData ">SIZE</div>
            <div class="armorData ">TYPE</div>
            <div class="weaponsLong ">NOTES</div>
          </div>
          <div class="weaponsWrap">
            <div class="weaponsRow">
              <div class="armorName dataSquare">${character.gear.weapon[0] ? character.gear.weapon[0].name : ""}</div>
              <div class="armorData dataSquare"></div>
              <div class="weaponsLong dataSquare">${"+" + (findStatisticTotalByName("bab", character.characterStats) +
                findStatisticModByName("strength", character.characterStats) + 
                sizeMod)}
              </div>
              <div class="damage dataSquare">${character.gear.weapon[0] ? ( sizeMod === 0 ? 
                character.gear.weapon[0].dmgM[0] + ("+" + ( findStatisticModByName("strength", character.characterStats)) ) : 
                character.gear.weapon[0].dmgS[0] + ("+" + ( findStatisticModByName("strength", character.characterStats)) )) : ""}</div>
              <div class="armorData dataSquare" style="font-size:8px;">${character.gear.weapon[0] ? character.gear.weapon[0].critical : ""}</div>
              <div class="armorData dataSquare">${character.gear.weapon[0] ? character.gear.weapon[0].range : ""}</div>
              <div class="armorData dataSquare"></div>
              <div class="armorData dataSquare">${character.gear.weapon[0] ? character.gear.weapon[0].type : ""}</div>
              <div class="weaponsLong dataSquare"></div>
            </div>
            <div class="weaponsRow">
              <div class="armorName dataSquare">${character.gear.weapon[1] ? character.gear.weapon[1].name : ""}</div>
              <div class="armorData dataSquare"></div>
              <div class="weaponsLong dataSquare"></div>
              <div class="damage dataSquare">${character.gear.weapon[1] ? ( sizeMod === 0 ? 
                character.gear.weapon[1].dmgM[0] + ("+" + ( findStatisticModByName("strength", character.characterStats)) ) : 
                character.gear.weapon[1].dmgS[0] + ("+" + ( findStatisticModByName("strength", character.characterStats)) )) : ""}</div>
                <div class="armorData dataSquare" style="font-size:8px;">${character.gear.weapon[1] ? character.gear.weapon[1].critical : ""}</div>
                <div class="armorData dataSquare">${character.gear.weapon[1] ? character.gear.weapon[1].range : ""}</div>
                <div class="armorData dataSquare"></div>
                <div class="armorData dataSquare">${character.gear.weapon[1] ? character.gear.weapon[1].type : ""}</div>
                <div class="weaponsLong dataSquare"></div>
            </div>
            <div class="weaponsRow">
              <div class="armorName dataSquare">${character.gear.weapon[2] ? character.gear.weapon[2].name : ""}</div>
              <div class="armorData dataSquare"></div>
              <div class="weaponsLong dataSquare"></div>
              <div class="damage dataSquare">${character.gear.weapon[2] ? ( sizeMod === 0 ? 
                character.gear.weapon[2].dmgM[0] + ("+" + ( findStatisticModByName("strength", character.characterStats)) ) : 
                character.gear.weapon[2].dmgS[0] + ("+" + ( findStatisticModByName("strength", character.characterStats)) )) : ""}</div>
                <div class="armorData dataSquare" style="font-size:8px;">${character.gear.weapon[2] ? character.gear.weapon[2].critical : ""}</div>
                <div class="armorData dataSquare">${character.gear.weapon[2] ? character.gear.weapon[2].range : ""}</div>
                <div class="armorData dataSquare"></div>
                <div class="armorData dataSquare">${character.gear.weapon[2] ? character.gear.weapon[2].type : ""}</div>
                <div class="weaponsLong dataSquare"></div>
            </div>
            <div class="weaponsRow">
              <div class="armorName dataSquare">${character.gear.weapon[3] ? character.gear.weapon[3].name : ""}</div>
              <div class="armorData dataSquare"></div>
              <div class="weaponsLong dataSquare"></div>
              <div class="damage dataSquare">${character.gear.weapon[3] ? ( sizeMod === 0 ? 
                character.gear.weapon[3].dmgM[0] + ("+" + ( findStatisticModByName("strength", character.characterStats)) ) : 
                character.gear.weapon[3].dmgS[0] + ("+" + ( findStatisticModByName("strength", character.characterStats)) )) : ""}</div>
                <div class="armorData dataSquare" style="font-size:8px;">${character.gear.weapon[3] ? character.gear.weapon[3].critical : ""}</div>
                <div class="armorData dataSquare">${character.gear.weapon[3] ? character.gear.weapon[3].range : ""}</div>
                <div class="armorData dataSquare"></div>
                <div class="armorData dataSquare">${character.gear.weapon[3] ? character.gear.weapon[3].type : ""}</div>
                <div class="weaponsLong dataSquare"></div>
            </div>
            <div class="weaponsRow">
              <div class="armorName dataSquare">${character.gear.weapon[4] ? character.gear.weapon[4].name : ""}</div>
              <div class="armorData dataSquare"></div>
              <div class="weaponsLong dataSquare"></div>
              <div class="damage dataSquare">${character.gear.weapon[4] ? ( sizeMod === 0 ? 
                character.gear.weapon[4].dmgM[0] + ("+" + ( findStatisticModByName("strength", character.characterStats)) ) : 
                character.gear.weapon[4].dmgS[0] + ("+" + ( findStatisticModByName("strength", character.characterStats)) )) : ""}</div>
                <div class="armorData dataSquare" style="font-size:8px;">${character.gear.weapon[4] ? character.gear.weapon[4].critical : ""}</div>
                <div class="armorData dataSquare">${character.gear.weapon[4] ? character.gear.weapon[4].range : ""}</div>
                <div class="armorData dataSquare"></div>
                <div class="armorData dataSquare">${character.gear.weapon[4] ? character.gear.weapon[4].type : ""}</div>
                <div class="weaponsLong dataSquare"></div>
            </div>
          </div>
        </div>
  
  
  
  
      </div>
    </body>
  </html>
    `;
};

function findStatisticTotalByName(name, characterStats){
  for(let i=0;i<characterStats.length;i++){
    if(characterStats[i].name === name){
      return characterStats[i].sum.total;
    }
  }
}
function findStatisticModByName(name, characterStats){
  for(let i=0;i<characterStats.length;i++){
    if(characterStats[i].name === name){
      return Math.floor((characterStats[i].sum.total - 10)/2);
    }
  }
}
function findBonusByStatisticAndBonusType(name, type, characterStats){
  for(let i=0;i<characterStats.length;i++){
    if(characterStats[i].name === name){
      for(let j=0; j<characterStats[i].sum.bonuses.length; j++){
        if(characterStats[i].sum.bonuses[j].type === type){
          return characterStats[i].sum.bonuses[j].amount
        }
      }
    }
  }
  return "";
}
function findSkillsBonuses(skill, characterStats){
  let num = 0;
  for(let i=0;i<characterStats.length;i++){
    if(characterStats[i].name === skill){
      for(let j=0; j<characterStats[i].sum.bonuses.length; j++){
        if(characterStats[i].sum.bonuses[j].type !== "ranks"){
          num += characterStats[i].sum.bonuses[j].amount
        }
      }
    }
  }
  if(num !== 0){
    return num
  }
  return "";
}
function ClassSkillBonus(skill, characterStats, charClass){
  // if this is a class skill, 
  if(charClass.classFeatures.classSkills.includes(skill)){
    // check if we have any ranks in it
    for(let i=0;i<characterStats.length;i++){
      if(characterStats[i].name === skill){
        for(let j=0; j<characterStats[i].sum.bonuses.length; j++){
          // if we do, return a +3,
          if(characterStats[i].sum.bonuses[j].type === "ranks"){
            return 3;
          }
        }
      }
    }
  }
  // failing all of the above, return an empty string
  return "";
}
function getSum(skill, ability, bonus, characterStats, charClass){
  let sum = 0;
  const racial = findBonusByStatisticAndBonusType(skill, bonus, characterStats);
  const mod = findStatisticModByName(ability, characterStats);
  const trained = ClassSkillBonus(skill, characterStats, charClass);
  const others = findSkillsBonuses(skill, characterStats);

  if(typeof racial === 'number'){
    sum += racial;
  }
  if(typeof mod === 'number'){
    sum += mod;
  }
  if(typeof trained === 'number'){
    sum += trained;
  }
  if(typeof others === 'number'){
    sum += others;
  }
  return sum;
}
function getAC(bonuses, dex, size, characterStats){
  sum = size + 10;
  for(let i=0;i<bonuses.length;i++){
    let num = findBonusByStatisticAndBonusType("armorClass", bonuses[i], characterStats);
    if(typeof num === 'number'){
      sum += num;
    }
  }
  if(dex){
    sum += findStatisticModByName("dexterity", characterStats);
  }
  return sum;
}