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
  
  .abilityScoresDiv{
    height: 1.629in/* 1.375in */;
    width: 3.034in; 
    border-top: 2px solid black;
    margin-top: .148in /* .125in */;
    float: left;
  }
    .abilityDivLabelRow{
      height: .20in;
      margin-right: .074in;
      width: 2.96in; /* 2.96 - .12 (4*.03) = 2.84 / 8 = .355 */ 
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
      font-size: 12px;
    }
    .dataSquare{    
      outline: 1px solid black;
      outline-offset: -1px;
    }
  .classRecorderHitPointsDiv{
    height: 1.5in;
    width: 5.966in; 
    float: left;
    margin-top: .148in /* .125in */;
    border: 1px solid black;
  }
    .classRecorderHitPointsDivLabel{
      height: .15in;
      width: 100%;
    }
      .hitPointLabel{
        width: 33.3%/* 1.9506in */;
        text-align: center;
        float: left;
      }
      .classRecorderLabel{
        width: 66.7%/* 4.0154in */;
        text-align: center;
        float: left;
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
              <div class="half"></div>
              <div class="quarter"></div>
              <div class="quarter"></div>
            </div>
            <div class='abilityDiv_input'></div>
            <div class='abilityDiv_input'></div>
            <div class='abilityDiv_input'></div>
            <div class='abilityDiv_input'></div>
          </div>
          <div class="abilityDivRow">
            <div class='abilityDiv_NameTotalMod'>
              <div class="half darkLabel"></div>
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
              <div class="half darkLabel"></div>
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
              <div class="half darkLabel"></div>
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
              <div class="half darkLabel"></div>
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
              <div class="half darkLabel"></div>
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
              <div class="half darkLabel"></div>
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
              
              <div class="classRecorderHitPointsRow hitPointsTotals dataSquare">TOTAL HP</div>            
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
          <div class="classRecorderDiv"></div>
        </div>
      </div>
    </body>
  </html>
    `;
};