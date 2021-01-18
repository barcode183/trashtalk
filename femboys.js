UI.AddCheckbox(["Misc.", "Helpers", "Sound"], "Kill Spam")

var sayWhat = ["nice antiaim dude", "refund the death", "hitting p", "you paid for that?", "get rekt", "ahahaaa", "idk if u know but it's mouse1 to shoot", "I must have chosen easy bots by accident", "you sell?", "mad cuz bad", "nice fucking paste", "cool hack", "lmfao", "need help with refund?"];

function getRandomArrayElement(arr){
    var min = 0;
    var max = (arr.length - 1);
    var randIndex = Math.floor(Math.random() * (max - min)) + min;
    return arr[randIndex];
}

function onPlayerDeath() {
    if (!UI.GetValue(["Misc.","Helpers","Sound","Kill Spam"])) return;

    attacker = Event.GetInt("attacker");
    attacker_index = Entity.GetEntityFromUserID(attacker);
    attacker_name = Entity.GetName(attacker_index);
    attacker_me = Entity.IsLocalPlayer(attacker_index);

    if (attacker_me) {
        Global.ExecuteCommand("say " + getRandomArrayElement(sayWhat));
    }
}


Global.RegisterCallback("player_death", "onPlayerDeath");
