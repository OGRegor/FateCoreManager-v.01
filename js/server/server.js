Meteor.startup(function () {
    // code to run on server at startup
    Meteor.publish('charData', function() {
      var currentUserId = this.userId;
      return charData.find({createdBy: currentUserId});
    });
    Meteor.publish('gameData', function() {
      var currentUserId = this.userId;
      return gameData.find({createdBy: currentUserId});
    });
    Meteor.publish('', function(charName) {
      return charData.find({name: charName});
    });
});

Meteor.methods({
  'insertCharDataCore': function(currentUserId, charName, charRefresh , charDescription , charHighConceptAspect, charTroubleAspect , charAspect1 , charAspect2 , charAspect3 , charSuperbSkill1 , charSuperbSkill2 , charSuperbSkill3 , charSuperbSkill4 , charSuperbSkill5 , charGreatSkill1 , charGreatSkill2 , charGreatSkill3 , charGreatSkill4 , charGreatSkill5 , charGoodSkill1 , charGoodSkill2 , charGoodSkill3 , charGoodSkill4 , charGoodSkill5 , charFairSkill1 , charFairSkill2 , charFairSkill3 , charFairSkill4 , charFairSkill5 , charAvgSkill1 , charAvgSkill2 , charAvgSkill3 , charAvgSkill4 , charAvgSkill5 , charExtras , charStunts , charMildCon1 , charMildCon2 , charModCon , charSevCon){
    var currentUserIdVar = currentUserId,
        charNameVar = charName,
        charRefreshVar = charRefresh,
        charDescriptionVar = charDescription,
        charHighConceptAspectVar = charHighConceptAspect,
        charTroubleAspectVar = charTroubleAspect,
        charAspect1Var = charAspect1,
        charAspect2Var = charAspect2,
        charAspect3Var = charAspect3,
        charSuperbSkill1Var = charSuperbSkill1,
        charSuperbSkill2Var = charSuperbSkill2,
        charSuperbSkill3Var = charSuperbSkill3,
        charSuperbSkill4Var = charSuperbSkill4,
        charSuperbSkill5Var = charSuperbSkill5,
        charGreatSkill1Var = charGreatSkill1,
        charGreatSkill2Var = charGreatSkill2,
        charGreatSkill3Var = charGreatSkill3,
        charGreatSkill4Var = charGreatSkill4,
        charGreatSkill5Var = charGreatSkill5,
        charGoodSkill1Var = charGoodSkill1,
        charGoodSkill2Var = charGoodSkill2,
        charGoodSkill3Var = charGoodSkill3,
        charGoodSkill4Var = charGoodSkill4,
        charGoodSkill5Var = charGoodSkill5,
        charFairSkill1Var = charFairSkill1,
        charFairSkill2Var = charFairSkill2,
        charFairSkill3Var = charFairSkill3,
        charFairSkill4Var = charFairSkill4,
        charFairSkill5Var = charFairSkill5,
        charAvgSkill1Var = charAvgSkill1,
        charAvgSkill2Var = charAvgSkill2,
        charAvgSkill3Var = charAvgSkill3,
        charAvgSkill4Var = charAvgSkill4,
        charAvgSkill5Var = charAvgSkill5,
        charExtrasVar = charExtras,
        charStuntsVar = charStunts,
        charMildCon1Var = charMildCon1,
        charMildCon2Var = charMildCon2,
        charModConVar = charModCon,
        charSevConVar = charSevCon;
    charData.insert({
      createdBy: currentUserId,
      name:charNameVar,
      refresh:charRefreshVar,
      description:charDescriptionVar,
      highConceptAspect:charHighConceptAspectVar,
      troubleAspect:charTroubleAspectVar,
      aspect1:charAspect1Var,
      aspect2:charAspect2Var,
      aspect3:charAspect3Var,
      superbSkill1:charSuperbSkill1Var,
      superbSkill2:charSuperbSkill2Var,
      superbSkill3:charSuperbSkill3Var,
      superbSkill4:charSuperbSkill4Var,
      superbSkill5:charSuperbSkill5Var,
      greatSkill1:charGreatSkill1Var,
      greatSkill2:charGreatSkill2Var,
      greatSkill3:charGreatSkill3Var,
      greatSkill4:charGreatSkill4Var,
      greatSkill5:charGreatSkill5Var,
      goodSkill1:charGoodSkill1Var,
      goodSkill2:charGoodSkill2Var,
      goodSkill3:charGoodSkill3Var,
      goodSkill4:charGoodSkill4Var,
      goodSkill5:charGoodSkill5Var,
      fairSkill1:charFairSkill1Var,
      fairSkill2:charFairSkill2Var,
      fairSkill3:charFairSkill3Var,
      fairSkill4:charFairSkill4Var,
      fairSkill5:charFairSkill5Var,
      avgSkill1:charAvgSkill1Var,
      avgSkill2:charAvgSkill2Var,
      avgSkill3:charAvgSkill3Var,
      avgSkill4:charAvgSkill4Var,
      avgSkill5:charAvgSkill5Var,
      extras:charExtrasVar,
      stunts:charStuntsVar,
      mildCon1:charMildCon1Var,
      mildCon2:charMildCon2Var,
      modCon:charModConVar,
      sevCon:charSevConVar,
    });
  },
  
  'insertGameDataCore': function(currentUserId, gameTypeVar,  gameNameVar,  gameSettingVar, gameCurrentIssue1Var, gameCurrentIssue2Var, gameImpendingIssue1Var, gameImpendingIssue2Var, gameFaceName1Var, gameFaceIssue1Var,  gameNumberOfAspectsVar, gameNumberOfPhasesVar,  gameSkillCapVar,  gamePyramidOrColumnVar, gameNumberOfColumnsVar, gameRefreshRateVar, gameInitialStuntsVar, gameTypeOfStressTracksVar,  gameDefaultStressBoxesVar,  gameDefaultConsequenceSlotsVar, gameStuntsAndExtrasVar) {
    var currentUserId = Meteor.userId(),
        gameType = gameTypeVar,
        gameName = gameNameVar,
        gameSetting = gameSettingVar,
        gameCurrentIssue1 = gameCurrentIssue1Var,
        gameCurrentIssue2 = gameCurrentIssue2Var,
        gameImpendingIssue1 = gameImpendingIssue1Var,
        gameImpendingIssue2 = gameImpendingIssue2Var,
        gameFaceName1 = gameFaceName1Var,
        gameFaceIssue1 = gameFaceIssue1Var,
        gameNumberOfAspects = gameNumberOfAspectsVar,
        gameNumberOfPhases = gameNumberOfPhasesVar,
        gameSkillCap = gameSkillCapVar,
        gamePyraOrColumn = gamePyramidOrColumnVar,
        gameNumberOfColumns = gameNumberOfColumnsVar,
        gameRefreshRate = gameRefreshRateVar,
        gameInitialStunts = gameInitialStuntsVar,
        gameTypeOfStressTracks = gameTypeOfStressTracksVar,
        gameDefaultStressBoxes = gameDefaultStressBoxesVar,
        gameDefaultConsequenceSlots = gameDefaultConsequenceSlotsVar,
        gameStuntsAndExtras = gameStuntsAndExtrasVar;
    gameData.insert({
      createdBy: currentUserId,
      players: [currentUserId],
      gm:currentUserId,
      gameName:gameName,
      gameType:gameType,
      setting:gameSetting,
      currentIssue1:gameCurrentIssue1,
      currentIssue2:gameCurrentIssue2,
      impendingIssue1:gameImpendingIssue1,
      impendingIssue2:gameImpendingIssue2,
      faceOrPlace1:{
        name:gameFaceName1,
        issueAspect:gameFaceIssue1,
      },
      // dials
      numOfAspects:gameNumberOfAspects,
      numOfPhases:gameNumberOfPhases,
      skillCap:gameSkillCap,
      pyraOrColumn:gamePyraOrColumn,
      numColumns:gameNumberOfColumns,
      refreshRate:gameRefreshRate,
      initStunts:gameInitialStunts,
      typeStressTracks:gameTypeOfStressTracks,
      defaultStressBoxes:gameDefaultStressBoxes,
      defaultConsequenceSlots:gameDefaultConsequenceSlots,
      stuntsAndExtras: gameStuntsAndExtras,
      });
  },
  
  'insertGameDataAccel': function(currentUserId, gameTypeVar,  gameNameVar,  gameSettingVar, gameCurrentIssue1Var, gameCurrentIssue2Var, gameImpendingIssue1Var, gameImpendingIssue2Var, gameFaceName1Var, gameFaceIssue1Var,  gameNumberOfAspectsVar, gameNumberOfPhasesVar, gamePyramidOrColumnVar, gameNumberOfColumnsVar, gameRefreshRateVar, gameTypeOfStressTracksVar,  gameDefaultStressBoxesVar,  gameDefaultConsequenceSlotsVar, gameStuntsAndExtrasVar) {
    var currentUserId = Meteor.userId(),
        gameType = gameTypeVar,
        gameName = gameNameVar,
        gameSetting = gameSettingVar,
        gameCurrentIssue1 = gameCurrentIssue1Var,
        gameCurrentIssue2 = gameCurrentIssue2Var,
        gameImpendingIssue1 = gameImpendingIssue1Var,
        gameImpendingIssue2 = gameImpendingIssue2Var,
        gameFaceName1 = gameFaceName1Var,
        gameFaceIssue1 = gameFaceIssue1Var,
        gameNumberOfAspects = gameNumberOfAspectsVar,
        gameNumberOfPhases = gameNumberOfPhasesVar,
        gamePyraOrColumn = gamePyramidOrColumnVar,
        gameNumberOfColumns = gameNumberOfColumnsVar,
        gameRefreshRate = gameRefreshRateVar,
        gameTypeOfStressTracks = gameTypeOfStressTracksVar,
        gameDefaultStressBoxes = gameDefaultStressBoxesVar,
        gameDefaultConsequenceSlots = gameDefaultConsequenceSlotsVar,
        gameStuntsAndExtras = gameStuntsAndExtrasVar;
    gameData.insert({
      createdBy: currentUserId,
      players: [currentUserId],
      gm:currentUserId,
      gameName:gameName,
      gameType:gameType,
      setting:gameSetting,
      currentIssue1:gameCurrentIssue1,
      currentIssue2:gameCurrentIssue2,
      impendingIssue1:gameImpendingIssue1,
      impendingIssue2:gameImpendingIssue2,
      faceOrPlace1:{
        name:gameFaceName1,
        issueAspect:gameFaceIssue1,
      },
      // dials
      numOfAspects:gameNumberOfAspects,
      numOfPhases:gameNumberOfPhases,
      skillCap:gameSkillCap,
      pyraOrColumn:gamePyraOrColumn,
      numColumns:gameNumberOfColumns,
      refreshRate:gameRefreshRate,
      initStunts:gameInitialStunts,
      typeStressTracks:gameTypeOfStressTracks,
      defaultStressBoxes:gameDefaultStressBoxes,
      defaultConsequenceSlots:gameDefaultConsequenceSlots,
      stuntsAndExtras: gameStuntsAndExtras,
      });
  },
});