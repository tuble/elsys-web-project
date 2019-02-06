var p4_0 = document.getElementById("p4_0");
var p4_1 = document.getElementById("p4_1");
var p4_2 = document.getElementById("p4_2");
var p4_3 = document.getElementById("p4_3");
var p4_4 = document.getElementById("p4_4");
var p4_5 = document.getElementById("p4_5");
var p4_6 = document.getElementById("p4_6");
var p4_7 = document.getElementById("p4_7");

p4_0.style.cursor = 'pointer';
p4_1.style.cursor = 'pointer';
p4_2.style.cursor = 'pointer';
p4_3.style.cursor = 'pointer';
p4_4.style.cursor = 'pointer';
p4_5.style.cursor = 'pointer';
p4_6.style.cursor = 'pointer';
p4_7.style.cursor = 'pointer';

p4_0.onclick = function() {
    if(p4[0])
    {
        p4[0] = 0;
        p4_0.classList.replace("clicked_box", "unclicked_box");
    }
    else
    {
        p4[0] = 1;
        p4_0.classList.replace("unclicked_box", "clicked_box");
    }
}

p4_1.onclick = function() {
    if(p4[1])
    {
        p4[1] = 0;
        p4_1.classList.replace("clicked_box", "unclicked_box");
    }
    else
    {
        p4[1] = 1;
        p4_1.classList.replace("unclicked_box", "clicked_box");
    }
}

p4_2.onclick = function() {
    if(p4[2])
    {
        p4[2] = 0;
        p4_2.classList.replace("clicked_box", "unclicked_box");
    }
    else
    {
        p4[2] = 1;
        p4_2.classList.replace("unclicked_box", "clicked_box");
    }
}

p4_3.onclick = function() {
    if(p4[3])
    {
        p4[3] = 0;
        p4_3.classList.replace("clicked_box", "unclicked_box");
    }
    else
    {
        p4[3] = 1;
        p4_3.classList.replace("unclicked_box", "clicked_box");
    }
}

p4_4.onclick = function() {
    if(p4[4])
    {
        p4[4] = 0;
        p4_4.classList.replace("clicked_box", "unclicked_box");
    }
    else
    {
        p4[4] = 1;
        p4_4.classList.replace("unclicked_box", "clicked_box");
    }
}

p4_5.onclick = function() {
    if(p4[5])
    {
        p4[5] = 0;
        p4_5.classList.replace("clicked_box", "unclicked_box");
    }
    else
    {
        p4[5] = 1;
        p4_5.classList.replace("unclicked_box", "clicked_box");
    }
}

p4_6.onclick = function() {
    if(p4[6])
    {
        p4[6] = 0;
        p4_6.classList.replace("clicked_box", "unclicked_box");
    }
    else
    {
        p4[6] = 1;
        p4_6.classList.replace("unclicked_box", "clicked_box");
    }
}

p4_7.onclick = function() {
    if(p4[7])
    {
        p4[7] = 0;
        p4_7.classList.replace("clicked_box", "unclicked_box");
    }
    else
    {
        p4[7] = 1;
        p4_7.classList.replace("unclicked_box", "clicked_box");
    }
}
