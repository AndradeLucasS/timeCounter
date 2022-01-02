let Countdown = {
    lastDay: new Date("January 1, 2023 00:00:00"),
    day: null,
    hour: null,
    minute: null,
    seconds: null,
    newTime: null,
    totalSeconds: null,
    dayHTML: document.getElementById("days"),
    hourHTML: document.getElementById("hours"),
    minuteHTML: document.getElementById("minutes"),
    secondHTML: document.getElementById("seconds"),
    whichisSecs: document.getElementById("whichisSecs"),
    whichisMins: document.getElementById("whichisMins"),
    whichisHours: document.getElementById("whichisHours"),
    anime: document.getElementById("anime"),
    youtube: document.getElementById("youtube"),
    lolgame: document.getElementById("lolGame"),
    sleep: document.getElementById("sleep"),
    wyacando: document.getElementById("wyacando"),
    curiosities: document.getElementById("curiosities"),
    nightmode: document.getElementById("nightmode"),

    state: {
        curiositiesState: false,
        nightmodeState: false,
    },

    startEngine(){
        this.wyacando.addEventListener("click", this.modalWyacando);
        this.nightmode.addEventListener("click", this.turnBlack);
        let dateVar = new Date();

        this.newTime = this.lastDay - dateVar;
        this.newDate = new Date(this.newTime);

        this.day = 365 - (Date.UTC(dateVar.getFullYear(), dateVar.getMonth(), dateVar.getDate()) - Date.UTC(dateVar.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
        this.hour = this.newDate.getUTCHours();
        this.minute = this.newDate.getUTCMinutes();
        this.seconds = this.newDate.getUTCSeconds();

        this.dayHTML.value = this.day;
        this.hourHTML.value = this.hour;
        this.minuteHTML.value = this.minute;
        this.secondHTML.value = this.seconds;

        this.totalSeconds = (this.seconds + this.minute*60 + this.hour*3600 + this.day*86400);
        this.totalMinutes = Math.floor(this.totalSeconds/60);
        this.totalHours = Math.floor(this.totalSeconds/3600);

        this.whichisSecs.textContent = "Which is a total of " + this.totalSeconds + " seconds";
        this.whichisMins.textContent = "Which is a total of " + this.totalMinutes + " minutes";
        this.whichisHours.textContent = "Which is a total of " + this.totalHours + " hours";

        this.anime.textContent = "You can watch " + Math.floor(this.totalMinutes/20) + " episodes of an 20 minutes anime";
        this.youtube.textContent = "You can watch " + Math.floor(this.totalMinutes/11,7) + " average length videos (11,7 min) of YouTube";
        this.lolgame.textContent = "You can play " + Math.floor(this.totalMinutes/27,5) + " League of Legends 27min 30sec games";
        this.sleep.textContent = "You can sleep " + Math.floor(this.totalHours/7) + " hours with 7 hours of sleep";
        },

    modalWyacando(){
        Countdown.state.curiositiesState = !Countdown.state.curiositiesState;
        if (Countdown.state.curiositiesState){
            Countdown.curiosities.style.display = "flex";
        }
        else {
            Countdown.curiosities.style.display = "none";
        }
    },

    turnBlack(){
        Countdown.state.nightmodeState = !Countdown.state.nightmodeState;

        if (Countdown.state.nightmodeState){
            document.body.style.filter = "invert(1)";
            document.body.style.backgroundColor = "black";
            Countdown.nightmode.textContent = "Disable Nightmode";
        }

        else{
            document.body.style.filter = "invert(0)";
            document.body.style.backgroundColor = "white";
            Countdown.nightmode.textContent = "Enable Nightmode";
        }
    }
}

setInterval(() => {
    Countdown.startEngine();
}, 1000);