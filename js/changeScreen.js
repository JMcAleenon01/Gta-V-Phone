function changeScreen(x) {
    const title = document.getElementById("hoverTitle");
    if (x == 'email') {
        document.getElementById("home").style.display="none";
        document.getElementById("text").style.display="flex";
        title.innerHTML = 'Inbox';
    }

    if (x == 'texts') {
        document.getElementById("home").style.display="none";
        document.getElementById("text").style.display="flex";
        title.innerHTML = 'Texts';
    }

    if (x == 'contacts') {
        document.getElementById("home").style.display="none";
        document.getElementById("text").style.display="flex";
        title.innerHTML = 'Contacts';
    }

    if (x == 'quickJoin') {
        document.getElementById("home").style.display="none";
        document.getElementById("text").style.display="flex";
        title.innerHTML = 'Quick Join';
    }

    if (x == 'settings') {
        document.getElementById("home").style.display="none";
        document.getElementById("text").style.display="flex";
        title.innerHTML = 'Job Lists';
    }

    if (x == 'jobLists') {
        document.getElementById("home").style.display="none";
        document.getElementById("text").style.display="flex";
        title.innerHTML = 'Job Lists';
    }

    if (x == 'snapomatic') {
        document.getElementById("home").style.display="none";
        document.getElementById("text").style.display="flex";
        title.innerHTML = 'to be done';
    }

    if (x == 'internet') {
        document.getElementById("home").style.display="none";
        document.getElementById("text").style.display="flex";
        title.innerHTML = 'Internet';
    }

    if (x == 'securoServ') {
        document.getElementById("home").style.display="none";
        document.getElementById("text").style.display="flex";
        document.getElementById("text").style.backgroundColor="black";
        title.innerHTML = 'SecuroServ';
    }

    if (x =='exit') {
        document.getElementById("home").style.display="flex";
        document.getElementById("text").style.backgroundColor="white";
        document.getElementById("text").style.display="none";
        title.innerHTML = '';
    }
}