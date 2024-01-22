import * as playersProfile from "./players_profile.js";
import * as gameCharacters from "./game_characters.js";
import * as battleChallenge from "./battle_challenge_update.js";



//{"method":"create_profile","name":"0xreadyPlayer1","avatarURI":"X7sdsa8ycn"}
function createProfile(name, owner, avatarURI){
  console.log("creating profile....");
  const createdProfile = playersProfile.createPlayer( name,  owner, avatarURI);
  console.log("created profile is:", createdProfile);
}

//{"method":"get_profile", "user": "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"}
function getProfile(owner){
  let userProfile = playersProfile.getProfile(owner);
  console.log("getting  profile....");
  console.log("player profile: " + JSON.stringify(userProfile)); 
}

//{"method":"create_team","char1": 1,"char2": 8, "char3": 5}
function createTeam(owner, char1, char2, char3){
  console.log("creating team...");
  let characters = gameCharacters.createTeam(
    owner,
    gameCharacters.resolveCharacters(parseInt(char1, 10)),
    gameCharacters.resolveCharacters(parseInt(char2, 10)),
    gameCharacters.resolveCharacters(parseInt(char3, 10))
  ); 

  console.log("Purchased Characters are:" + characters);
  let player = playersProfile.findPlayer(playersProfile.allPlayers, owner);
  console.log("players profile after purchase is:" + player);

}

//{"method": "create_duel", "selectedCharacters": [2, 1, 3]}
function createDuel(owner, characters){
  console.log("creating a duel.....");
  let newDuel = battleChallenge.createDuel(owner, characters);
  console.log("New duel created, duel data is:" + JSON.stringify(newDuel))
}

//{"method": "join_duel", "dielId": 1 , "selectedCharacters": [4, 5, 6]}
function joinDuel(duelId, owner, characters){
  console.log("Joining an existing duel....");
  let bothWarriors = battleChallenge.joinDuel(duelId, owner, characters);
  console.log("Join successfully, competing characters are: " + JSON.stringify(bothWarriors));

  // emit a notice of the duel data
  let duelData = battleChallenge.displayDuelInfo(duelId);
  console.log("Duel data is: " + JSON.stringify(duelData));
}

//duelID, playerAddress, strategy
function chooseStrategy(duelID, owner, strategy){
  console.log("Selcting Strategy.....")
  let userStrategy = battleChallenge.setStrategy(duelID, owner, strategy)
  console.log("Strategy Created Succesfully..." + JSON.stringify(userStrategy))

}

function getDuelInfo(duelID){
  console.log("Getting duel ...")
  let duelInfo = battleChallenge.displayDuelInfo(duelID)
  console.log("Duel info:...", duelInfo )
}

function fight(duelID){
  console.log("fighting...")
  let fightee =  battleChallenge.fight(duelID);
  console.log("fighting...", fightee)
}















createProfile( "0xreadyPlayer1", "0x12896191de42EF8388f2892Ab76b9a728189260A", "X7sdsa8ycn");
createProfile( "0xreadyPlayer2", "0x311350f1c7Ba0F1749572Cc8A948Dd7f9aF1f42a", "X7sdsa8ycn");
createTeam("0x12896191de42EF8388f2892Ab76b9a728189260A", 1, 8, 5)
createTeam("0x311350f1c7Ba0F1749572Cc8A948Dd7f9aF1f42a", 5, 1, 8)

getProfile("0x12896191de42EF8388f2892Ab76b9a728189260A")

createDuel("0x12896191de42EF8388f2892Ab76b9a728189260A", [1, 2, 3])

joinDuel(1,"0x311350f1c7Ba0F1749572Cc8A948Dd7f9aF1f42a",[4, 5, 6] )

chooseStrategy(1, "0x12896191de42EF8388f2892Ab76b9a728189260A", 1)

chooseStrategy(1, "0x311350f1c7Ba0F1749572Cc8A948Dd7f9aF1f42a", 3)

getDuelInfo(1)

fight(1)

getDuelInfo(1)