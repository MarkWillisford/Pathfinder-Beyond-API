const mongoose = require('mongoose');

const charClassSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	classFeatures:{
		blurb:{
      type: String,
      required: true,
    },
		alignment:{
      type: String,
      required: true,
    },
		hd:{
      type: Number,
      required: true,
    },
		wealth:{
			number:{
        type: Number,
        required: true,
      },
			type:{
        type: Number,
        required: true,
      },
		},
		skills:{
      type: Number,
      required: true,
    },
		classSkills:[{
      type: String,
      required: true,
    }],
		bab:{
      type: String,
      required: true,
    },
		goodSaves:[{
      type: String,
      required: true,
    }],
		proficiency:[{
      type: String,
      required: true,
    }],
		table:{
      type: Array,
      required: true, 
    }
	}
}, {collection: "charClasses"})

module.exports = mongoose.model('CharClass', charClassSchema);


/* CharClasses.create("ranger", {
  "blurb":"Ranger are deft skirmishers, either in melee or at range, capable of skillfully dancing in and out of battle. Their abilities allow them to deal significant harm to specific types of foes, but their skills are valuable against all manner of enemies.",
  "alignment":"any",
  "hd": 10,
  "wealth":{
    "number":5,
    "type":6
  },
  "skills":6,
  "classSkills":[
    "climb",
    "craft",
    "handleAnimal",
    "heal",
    "intimidate",
    "knowledge (dungeoneering)",
    "knowledge (geography)",
    "knowledge (nature)",
    "perception",
    "profession",
    "ride",
    "spellcraft",
    "stealth",
    "survival",
    "swim"
  ],
  "bab":"full",
  "goodSaves":["fortitude", "reflex"],
  "proficiency":[ "simple weapons", "martial weapons", "light armor", "medium armor", "shields" ],
  "table":[
    ["level", "bab", "fort", "ref", "will", "special", "spells"],
    ["1", "1", "2", "0", "2", [{"name":"favored enemy", "type":"Ex", "description":["At 1st level, a ranger selects a creature type from the ranger favored enemies table. He gains a +2 bonus on Bluff, Knowledge, Perception, Sense Motive, and Survival checks against creatures of his selected type. Likewise, he gets a +2 bonus on weapon attack and damage rolls against them. A ranger may make Knowledge skill checks untrained when attempting to identify these creatures.", "At 5th level and every five levels thereafter (10th, 15th, and 20th level), the ranger may select an additional favored enemy. In addition, at each such interval, the bonus against any one favored enemy (including the one just selected, if so desired) increases by +2.", "If the ranger chooses humanoids or outsiders as a favored enemy, he must also choose an associated subtype, as indicated on the table below. (Note that there are other types of humanoid to choose from—those called out specifically on the table below are merely the most common.) If a specific creature falls into more than one category of favored enemy, the ranger’s bonuses do not stack; he simply uses whichever bonus is higher."]}, {"name":"track", "type":"Ex", "description":["A ranger adds half his level (minimum 1) to Survival skill checks made to follow tracks."]}, {"name":"wild empathy", "type":"Ex", "description":["A ranger can improve the initial attitude of an animal. This ability functions just like a Diplomacy check to improve the attitude of a person (see Using Skills). The ranger rolls 1d20 and adds his ranger level and his Charisma bonus to determine the wild empathy check result. The typical domestic animal has a starting attitude of indifferent, while wild animals are usually unfriendly.", "To use wild empathy, the ranger and the animal must be within 30 feet of one another under normal visibility conditions. Generally, influencing an animal in this way takes 1 minute, but, as with influencing people, it might take more or less time.", "The ranger can also use this ability to influence a magical beast with an Intelligence score of 1 or 2, but he takes a –4 penalty on the check."]}]],
    ["2", "1", "1", "0", "1", [{"name":"combat style feat", "type":"Ex", "description":["At 2nd level, a ranger must select one combat style to pursue. The ranger’s expertise manifests in the form of bonus feats at 2nd, 6th, 10th, 14th, and 18th level. He can choose feats from his selected combat style, even if he does not have the normal prerequisites.", "The benefits of the ranger’s chosen style feats apply only when he wears light, medium, or no armor. He loses all benefits of his combat style feats when wearing heavy armor. Once a ranger selects a combat style, it cannot be changed."]}]],
    ["3", "1", "0", "1", "0", [{"name":"endurance", "description":["A ranger gains Endurance as a bonus feat at 3rd level."]}, {"name":"favored terrain", "type":"Ex", "description":["At 3rd level, a ranger may select a type of terrain from Table: Ranger Favored Terrains. The ranger gains a +2 bonus on initiative checks and Knowledge (geography), Perception, Stealth, and Survival skill checks when he is in this terrain. A ranger traveling through his favored terrain normally leaves no trail and cannot be tracked (though he may leave a trail if he so chooses).", "At 8th level and every five levels thereafter, the ranger may select an additional favored terrain. In addition, at each such interval, the skill bonus and initiative bonus in any one favored terrain (including the one just selected, if so desired), increases by +2.", "If a specific terrain falls into more than one category of favored terrain, the ranger’s bonuses do not stack; he simply uses whichever bonus is higher."]}]],
    ["4", "1", "1", "0", "1", [{"name":"hunters bond", "type":"Ex", "description":["At 4th level, a ranger forms a bond with his hunting companions. This bond can take one of two forms. Once the form is chosen, it cannot be changed. The first is a bond to his companions. This bond allows him to spend a move action to grant half his favored enemy bonus against a single target of the appropriate type to all allies within 30 feet who can see or hear him. This bonus lasts for a number of rounds equal to the ranger’s Wisdom modifier (minimum 1). This bonus does not stack with any favored enemy bonuses possessed by his allies; they use whichever bonus is higher.", "The second option is to form a close bond with an animal companion. A ranger who selects an animal companion can choose from the following list: badger, bird, camel, cat (small), dire rat, dog, horse, pony, snake (viper or constrictor), or wolf. If the campaign takes place wholly or partly in an aquatic environment, the ranger may choose a shark instead. This animal is a loyal companion that accompanies the ranger on his adventures as appropriate for its kind. A ranger’s animal companion shares his favored enemy and favored terrain bonuses.", "This ability functions like the druid animal companion ability (which is part of the Nature Bond class feature), except that the ranger’s effective druid level is equal to his ranger level –3."]}, {"name":"spells", "description":["Beginning at 4th level, a ranger gains the ability to cast a small number of divine spells, which are drawn from the ranger spell list. A ranger must choose and prepare his spells in advance. To prepare or cast a spell, a ranger must have a Wisdom score equal to at least 10 + the spell level. The Difficulty Class for a saving throw against a ranger’s spell is 10 + the spell level + the ranger’s Wisdom modifier.", "Like other spellcasters, a ranger can cast only a certain number of spells of each spell level per day. His base daily spell allotment is given on Table: Ranger. In addition, he receives bonus spells per day if he has a high Wisdom score (see Table: Ability Modifiers and Bonus Spells). When Table: Ranger indicates that the ranger gets 0 spells per day of a given spell level, he gains only the bonus spells he would be entitled to based on his Wisdom score for that spell level.", "A ranger must spend 1 hour per day in quiet meditation to regain his daily allotment of spells. A ranger may prepare and cast any spell on the ranger spell list, provided that he can cast spells of that level, but he must choose which spells to prepare during his daily meditation.", "Through 3rd level, a ranger has no caster level. At 4th level and higher, his caster level is equal to his ranger level – 3."]}], {"1":0}],
    ["5", "1", "0", "0", "0", [{"name":"favored enemy", "type":"Ex", "description":["2nd"]}], {"1":1}],
    ["6", "1", "1", "1", "1", [{"name":"combat style feat", "description":[]}], {"1":1}],
    ["7", "1", "0", "0", "0", [{"name":"woodland stride", "type":"Ex", "description":["Starting at 7th level, a ranger may move through any sort of undergrowth (such as natural thorns, briars, overgrown areas, and similar terrain) at his normal speed and without taking damage or suffering any other impairment. Thorns, briars, and overgrown areas that are enchanted or magically manipulated to impede motion, however, still affect him."]}], {"1":1, "2":0}],
    ["8", "1", "1", "0", "1", [{"name":"swift tracker", "type":"Ex", "description":["Beginning at 8th level, a ranger can move at his normal speed while using Survival to follow tracks without taking the normal –5 penalty. He takes only a –10 penalty (instead of the normal –20) when moving at up to twice normal speed while tracking."]}, {"name":"favored terrain", "type":"Ex", "description":["2nd"]}], {"1":1, "2":1}],
    ["9", "1", "0", "1", "0", [{"name":"evasion", "type":"Ex", "description":["When he reaches 9th level, a ranger can avoid even magical and unusual attacks with great agility. If he makes a successful Reflex saving throw against an attack that normally deals half damage on a successful save, he instead takes no damage. Evasion can be used only if the ranger is wearing light armor, medium armor, or no armor. A helpless ranger does not gain the benefit of evasion."]}], {"1":2, "2":1}],
    ["10", "1", "1", "0", "1", [{"name":"favored enemy", "type":"Ex", "description":["2nd"]}, {"name":"combat style feat", "description":[]}], {"1":2, "2":1, "3":0}],
    ["11", "1", "0", "0", "0", [{"name":"quarry", "type":"Ex", "description":["At 11th level, a ranger can, as a standard action, denote one target within his line of sight as his quarry. Whenever he is following the tracks of his quarry, a ranger can take 10 on his Survival skill checks while moving at normal speed, without penalty. In addition, he receives a +2 insight bonus on attack rolls made against his quarry, and all critical threats are automatically confirmed. A ranger can have no more than one quarry at a time and the creature’s type must correspond to one of his favored enemy types. He can dismiss this effect at any time as a free action, but he cannot select a new quarry for 24 hours. If the ranger sees proof that his quarry is dead, he can select a new quarry after waiting 1 hour."]}], {"1":2, "2":1, "3":1}],
    ["12", "1", "1", "1", "1", [{"name":"camouflage", "type":"Ex", "description":["A ranger of 12th level or higher can use the Stealth skill to hide in any of his favored terrains, even if the terrain doesn’t grant cover or concealment."]}], {"1":2, "2":2, "3":1}],
    ["13", "1", "0", "0", "0", [{"name":"favored terrain", "type":"Ex", "description":["3rd"]}], {"1":3, "2":2, "3":1, "4":0}],
    ["14", "1", "1", "0", "1", [{"name":"combat style feat", "description":[]}], {"1":3, "2":2, "3":1, "4":1}],
    ["15", "1", "0", "1", "0", [{"name":"favored enemy", "type":"Ex", "description":["4th"]}], {"1":3, "2":2, "3":2, "4":1}],
    ["16", "1", "1", "0", "1", [{"name":"improved evasion", "type":"Ex", "description":["At 16th level, a ranger’s evasion improves. This ability works like evasion, except that while the ranger still takes no damage on a successful Reflex saving throw against attacks, he henceforth takes only half damage on a failed save. A helpless ranger does not gain the benefit of improved evasion."]}], {"1":3, "2":3, "3":2, "4":1}],
    ["17", "1", "0", "0", "0", [{"name":"hide in plain sight", "type":"Ex", "description":["While in any of his favored terrains, a ranger of 17th level or higher can use the Stealth skill even while being observed."]}], {"1":4, "2":3, "3":2, "4":1}],
    ["18", "1", "1", "1", "1", [{"name":"favored terrain", "type":"Ex", "description":["4th"]}, {"name":"combat style feat","description":[]}], {"1":4, "2":3, "3":2, "4":2}],
    ["19", "1", "0", "0", "0", [{"name":"improved quarry", "type":"Ex", "description":["At 19th level, the ranger’s ability to hunt his quarry improves. He can now select a quarry as a free action, and can now take 20 while using Survival to track his quarry, while moving at normal speed without penalty. His insight bonus to attack his quarry increases to +4. If his quarry is killed or dismissed, he can select a new one after 10 minutes have passed."]}], {"1":4, "2":3, "3":3, "4":2}],
    ["20", "1", "1", "0", "1", [{"name":"master hunter", "type":"Ex", "description":["A ranger of 20th level becomes a master hunter. He can always move at full speed while using Survival to follow tracks without penalty. He can, as a standard action, make a single attack against a favored enemy at his full attack bonus. If the attack hits, the target takes damage normally and must make a Fortitude save or die. The DC of this save is equal to 10 + 1/2 the ranger’s level + the ranger’s Wisdom modifier. A ranger can choose instead to deal an amount of nonlethal damage equal to the creature’s current hit points. A successful save negates this damage. A ranger can use this ability once per day against each favored enemy type he possesses, but not against the same creature more than once in a 24-hour period."]}, {"name":"favored enemy", "type":"Ex", "description":["5th"]}], {"1":4, "2":4, "3":3, "4":3}]
  ]
}); */