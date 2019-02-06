var p1_0 = document.getElementById("p1_0");
var p1_1 = document.getElementById("p1_1");
var p1_2 = document.getElementById("p1_2");
var p1_3 = document.getElementById("p1_3");
var p1_4 = document.getElementById("p1_4");
var p1_5 = document.getElementById("p1_5");
var p1_6 = document.getElementById("p1_6");
var p1_7 = document.getElementById("p1_7");

p1_0.style.cursor = 'pointer';
p1_1.style.cursor = 'pointer';
p1_2.style.cursor = 'pointer';
p1_3.style.cursor = 'pointer';
p1_4.style.cursor = 'pointer';
p1_5.style.cursor = 'pointer';
p1_6.style.cursor = 'pointer';
p1_7.style.cursor = 'pointer';

p1_0.onclick = function() {
    if(p1[0])
    {
        p1[0] = 0;
        p1_0.classList.replace("clicked_box", "unclicked_box");
    }
    else
    {
        p1[0] = 1;
        p1_0.classList.replace("unclicked_box", "clicked_box");
    }
}

p1_1.onclick = function() {
    if(p1[1])
    {
        p1[1] = 0;
        p1_1.classList.replace("clicked_box", "unclicked_box");
    }
    else
    {
        p1[1] = 1;
        p1_1.classList.replace("unclicked_box", "clicked_box");
    }
}

p1_2.onclick = function() {
    if(p1[2])
    {
        p1[2] = 0;
        p1_2.classList.replace("clicked_box", "unclicked_box");
    }
    else
    {
        p1[2] = 1;
        p1_2.classList.replace("unclicked_box", "clicked_box");
    }
}

p1_3.onclick = function() {
    if(p1[3])
    {
        p1[3] = 0;
        p1_3.classList.replace("clicked_box", "unclicked_box");
    }
    else
    {
        p1[3] = 1;
        p1_3.classList.replace("unclicked_box", "clicked_box");
    }
}

p1_4.onclick = function() {
    if(p1[4])
    {
        p1[4] = 0;
        p1_4.classList.replace("clicked_box", "unclicked_box");
    }
    else
    {
        p1[4] = 1;
        p1_4.classList.replace("unclicked_box", "clicked_box");
    }
}

p1_5.onclick = function() {
    if(p1[5])
    {
        p1[5] = 0;
        p1_5.classList.replace("clicked_box", "unclicked_box");
    }
    else
    {
        p1[5] = 1;
        p1_5.classList.replace("unclicked_box", "clicked_box");
    }
}

p1_6.onclick = function() {
    if(p1[6])
    {
        p1[6] = 0;
        p1_6.classList.replace("clicked_box", "unclicked_box");
    }
    else
    {
        p1[6] = 1;
        p1_6.classList.replace("unclicked_box", "clicked_box");
    }
}

p1_7.onclick = function() {
    if(p1[7])
    {
        p1[7] = 0;
        p1_7.classList.replace("clicked_box", "unclicked_box");
    }
    else
    {
        p1[7] = 1;
        p1_7.classList.replace("unclicked_box", "clicked_box");
    }
}