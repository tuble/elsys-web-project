var p3_0 = document.getElementById("p3_0");
var p3_1 = document.getElementById("p3_1");
var p3_2 = document.getElementById("p3_2");
var p3_3 = document.getElementById("p3_3");
var p3_4 = document.getElementById("p3_4");
var p3_5 = document.getElementById("p3_5");
var p3_6 = document.getElementById("p3_6");
var p3_7 = document.getElementById("p3_7");

p3_0.style.cursor = 'pointer';
p3_1.style.cursor = 'pointer';
p3_2.style.cursor = 'pointer';
p3_3.style.cursor = 'pointer';
p3_4.style.cursor = 'pointer';
p3_5.style.cursor = 'pointer';
p3_6.style.cursor = 'pointer';
p3_7.style.cursor = 'pointer';

p3_0.onclick = function() {
    if(p3[0])
    {
        p3[0] = 0;
        p3_0.classList.replace("clicked_box", "unclicked_box");
    }
    else
    {
        p3[0] = 1;
        p3_0.classList.replace("unclicked_box", "clicked_box");
    }
}

p3_1.onclick = function() {
    if(p3[1])
    {
        p3[1] = 0;
        p3_1.classList.replace("clicked_box", "unclicked_box");
    }
    else
    {
        p3[1] = 1;
        p3_1.classList.replace("unclicked_box", "clicked_box");
    }
}

p3_2.onclick = function() {
    if(p3[2])
    {
        p3[2] = 0;
        p3_2.classList.replace("clicked_box", "unclicked_box");
    }
    else
    {
        p3[2] = 1;
        p3_2.classList.replace("unclicked_box", "clicked_box");
    }
}

p3_3.onclick = function() {
    if(p3[3])
    {
        p3[3] = 0;
        p3_3.classList.replace("clicked_box", "unclicked_box");
    }
    else
    {
        p3[3] = 1;
        p3_3.classList.replace("unclicked_box", "clicked_box");
    }
}

p3_4.onclick = function() {
    if(p3[4])
    {
        p3[4] = 0;
        p3_4.classList.replace("clicked_box", "unclicked_box");
    }
    else
    {
        p3[4] = 1;
        p3_4.classList.replace("unclicked_box", "clicked_box");
    }
}

p3_5.onclick = function() {
    if(p3[5])
    {
        p3[5] = 0;
        p3_5.classList.replace("clicked_box", "unclicked_box");
    }
    else
    {
        p3[5] = 1;
        p3_5.classList.replace("unclicked_box", "clicked_box");
    }
}

p3_6.onclick = function() {
    if(p3[6])
    {
        p3[6] = 0;
        p3_6.classList.replace("clicked_box", "unclicked_box");
    }
    else
    {
        p3[6] = 1;
        p3_6.classList.replace("unclicked_box", "clicked_box");
    }
}

p3_7.onclick = function() {
    if(p3[7])
    {
        p3[7] = 0;
        p3_7.classList.replace("clicked_box", "unclicked_box");
    }
    else
    {
        p3[7] = 1;
        p3_7.classList.replace("unclicked_box", "clicked_box");
    }
}
