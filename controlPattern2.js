var p2_0 = document.getElementById("p2_0");
var p2_1 = document.getElementById("p2_1");
var p2_2 = document.getElementById("p2_2");
var p2_3 = document.getElementById("p2_3");
var p2_4 = document.getElementById("p2_4");
var p2_5 = document.getElementById("p2_5");
var p2_6 = document.getElementById("p2_6");
var p2_7 = document.getElementById("p2_7");

p2_0.style.cursor = 'pointer';
p2_1.style.cursor = 'pointer';
p2_2.style.cursor = 'pointer';
p2_3.style.cursor = 'pointer';
p2_4.style.cursor = 'pointer';
p2_5.style.cursor = 'pointer';
p2_6.style.cursor = 'pointer';
p2_7.style.cursor = 'pointer';

p2_0.onclick = function() {
    if(p2[0])
    {
        p2[0] = 0;
        p2_0.classList.replace("clicked_box", "unclicked_box");
    }
    else
    {
        p2[0] = 1;
        p2_0.classList.replace("unclicked_box", "clicked_box");
    }
}

p2_1.onclick = function() {
    if(p2[1])
    {
        p2[1] = 0;
        p2_1.classList.replace("clicked_box", "unclicked_box");
    }
    else
    {
        p2[1] = 1;
        p2_1.classList.replace("unclicked_box", "clicked_box");
    }
}

p2_2.onclick = function() {
    if(p2[2])
    {
        p2[2] = 0;
        p2_2.classList.replace("clicked_box", "unclicked_box");
    }
    else
    {
        p2[2] = 1;
        p2_2.classList.replace("unclicked_box", "clicked_box");
    }
}

p2_3.onclick = function() {
    if(p2[3])
    {
        p2[3] = 0;
        p2_3.classList.replace("clicked_box", "unclicked_box");
    }
    else
    {
        p2[3] = 1;
        p2_3.classList.replace("unclicked_box", "clicked_box");
    }
}

p2_4.onclick = function() {
    if(p2[4])
    {
        p2[4] = 0;
        p2_4.classList.replace("clicked_box", "unclicked_box");
    }
    else
    {
        p2[4] = 1;
        p2_4.classList.replace("unclicked_box", "clicked_box");
    }
}

p2_5.onclick = function() {
    if(p2[5])
    {
        p2[5] = 0;
        p2_5.classList.replace("clicked_box", "unclicked_box");
    }
    else
    {
        p2[5] = 1;
        p2_5.classList.replace("unclicked_box", "clicked_box");
    }
}

p2_6.onclick = function() {
    if(p2[6])
    {
        p2[6] = 0;
        p2_6.classList.replace("clicked_box", "unclicked_box");
    }
    else
    {
        p2[6] = 1;
        p2_6.classList.replace("unclicked_box", "clicked_box");
    }
}

p2_7.onclick = function() {
    if(p2[7])
    {
        p2[7] = 0;
        p2_7.classList.replace("clicked_box", "unclicked_box");
    }
    else
    {
        p2[7] = 1;
        p2_7.classList.replace("unclicked_box", "clicked_box");
    }
}
