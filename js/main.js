let Countdown = {
    lastDay: new Date("January 1, 2023 00:00:00"),
    day: null,
    hour: null,
    minute: null,
    seconds: null,
    newTime: null,
    dayHTML: document.getElementById("days"),
    hourHTML: document.getElementById("hours"),
    minuteHTML: document.getElementById("minutes"),
    secondHTML: document.getElementById("seconds"),

    startEngine(){
        let dateVar = new Date();

        this.newTime = this.lastDay - dateVar;
        this.newDate = new Date(this.newTime);

        this.day = 365 - (Date.UTC(dateVar.getFullYear(), dateVar.getMonth(), dateVar.getDate()) - Date.UTC(dateVar.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
        this.hour = this.newDate.getUTCHours();
        this.minute = this.newDate.getUTCMinutes();
        this.seconds = this.newDate.getUTCSeconds();

        this.dayHTML.textContent = this.day;
        this.hourHTML.textContent = this.hour;
        this.minuteHTML.textContent = this.minute;
        this.secondHTML.textContent = this.seconds;
    },
}

setInterval(() => {
    Countdown.startEngine()
}, 1000);