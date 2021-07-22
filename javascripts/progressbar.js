var
    article = document.getElementsByClassName('post')[0],
    events  = ['resize', 'scroll'],
    progressHeight;

function updateProgress(percentage) {
    var progress = Math.round(percentage * 100) + '%';
    document.getElementById('progress-indicator').style.width = progress;
}

function setSizes() {
    progressHeight = article.offsetHeight - window.innerHeight;
}

function calculateProgress() {
    var top  = this.pageYOffset || document.documentElement.scrollTop;
    return Math.max(0, Math.min(1, top / progressHeight));
}

function handleEvent() {
    setSizes();
    updateProgress(calculateProgress());
}

window.onload = function(e){
    handleEvent();
    for (var i = 0; i < events.length; i++) {
        window.addEventListener(events[i], handleEvent, false);
    }
}
