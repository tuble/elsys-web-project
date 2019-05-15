// < 3 KostadinKa

function squareOn(pattern, step) {
    pattern.graphic_pattern[step].classList.replace("unclicked_box", "clicked_box");
}

function squareOff(pattern, step) {
    pattern.graphic_pattern[step].classList.replace("clicked_box", "unclicked_box");
}

function changeState(pattern,step){
    if(pattern.logic_pattern[step]) {
        pattern.logic_pattern[step] = 0;
        squareOff(pattern, step);
    } else {
        pattern.logic_pattern[step] = 1;
        squareOn(pattern, step);
    }
}

// ROW 1
pattern1.graphic_pattern[0].style.cursor = 'pointer';
pattern1.graphic_pattern[1].style.cursor = 'pointer';
pattern1.graphic_pattern[2].style.cursor = 'pointer';
pattern1.graphic_pattern[3].style.cursor = 'pointer';
pattern1.graphic_pattern[4].style.cursor = 'pointer';
pattern1.graphic_pattern[5].style.cursor = 'pointer';
pattern1.graphic_pattern[6].style.cursor = 'pointer';
pattern1.graphic_pattern[7].style.cursor = 'pointer';
pattern1.graphic_pattern[8].style.cursor = 'pointer';
pattern1.graphic_pattern[9].style.cursor = 'pointer';
pattern1.graphic_pattern[10].style.cursor = 'pointer';
pattern1.graphic_pattern[11].style.cursor = 'pointer';
pattern1.graphic_pattern[12].style.cursor = 'pointer';
pattern1.graphic_pattern[13].style.cursor = 'pointer';
pattern1.graphic_pattern[14].style.cursor = 'pointer';
pattern1.graphic_pattern[15].style.cursor = 'pointer';

pattern1.graphic_pattern[0].onclick = function() {changeState(pattern1, 0)};
pattern1.graphic_pattern[1].onclick = function() {changeState(pattern1, 1)};
pattern1.graphic_pattern[2].onclick = function() {changeState(pattern1, 2)};
pattern1.graphic_pattern[3].onclick = function() {changeState(pattern1, 3)};
pattern1.graphic_pattern[4].onclick = function() {changeState(pattern1, 4)};
pattern1.graphic_pattern[5].onclick = function() {changeState(pattern1, 5)};
pattern1.graphic_pattern[6].onclick = function() {changeState(pattern1, 6)};
pattern1.graphic_pattern[7].onclick = function() {changeState(pattern1, 7)};
pattern1.graphic_pattern[8].onclick = function() {changeState(pattern1, 8)};
pattern1.graphic_pattern[9].onclick = function() {changeState(pattern1, 9)};
pattern1.graphic_pattern[10].onclick = function() {changeState(pattern1, 10)};
pattern1.graphic_pattern[11].onclick = function() {changeState(pattern1, 11)};
pattern1.graphic_pattern[12].onclick = function() {changeState(pattern1, 12)};
pattern1.graphic_pattern[13].onclick = function() {changeState(pattern1, 13)};
pattern1.graphic_pattern[14].onclick = function() {changeState(pattern1, 14)};
pattern1.graphic_pattern[15].onclick = function() {changeState(pattern1, 15)};


// ROW 2
pattern2.graphic_pattern[0].style.cursor = 'pointer';
pattern2.graphic_pattern[1].style.cursor = 'pointer';
pattern2.graphic_pattern[2].style.cursor = 'pointer';
pattern2.graphic_pattern[3].style.cursor = 'pointer';
pattern2.graphic_pattern[4].style.cursor = 'pointer';
pattern2.graphic_pattern[5].style.cursor = 'pointer';
pattern2.graphic_pattern[6].style.cursor = 'pointer';
pattern2.graphic_pattern[7].style.cursor = 'pointer';
pattern2.graphic_pattern[8].style.cursor = 'pointer';
pattern2.graphic_pattern[9].style.cursor = 'pointer';
pattern2.graphic_pattern[10].style.cursor = 'pointer';
pattern2.graphic_pattern[11].style.cursor = 'pointer';
pattern2.graphic_pattern[12].style.cursor = 'pointer';
pattern2.graphic_pattern[13].style.cursor = 'pointer';
pattern2.graphic_pattern[14].style.cursor = 'pointer';
pattern2.graphic_pattern[15].style.cursor = 'pointer';

pattern2.graphic_pattern[0].onclick = function() {changeState(pattern2, 0)};
pattern2.graphic_pattern[1].onclick = function() {changeState(pattern2, 1)};
pattern2.graphic_pattern[2].onclick = function() {changeState(pattern2, 2)};
pattern2.graphic_pattern[3].onclick = function() {changeState(pattern2, 3)};
pattern2.graphic_pattern[4].onclick = function() {changeState(pattern2, 4)};
pattern2.graphic_pattern[5].onclick = function() {changeState(pattern2, 5)};
pattern2.graphic_pattern[6].onclick = function() {changeState(pattern2, 6)};
pattern2.graphic_pattern[7].onclick = function() {changeState(pattern2, 7)};
pattern2.graphic_pattern[8].onclick = function() {changeState(pattern2, 8)};
pattern2.graphic_pattern[9].onclick = function() {changeState(pattern2, 9)};
pattern2.graphic_pattern[10].onclick = function() {changeState(pattern2, 10)};
pattern2.graphic_pattern[11].onclick = function() {changeState(pattern2, 11)};
pattern2.graphic_pattern[12].onclick = function() {changeState(pattern2, 12)};
pattern2.graphic_pattern[13].onclick = function() {changeState(pattern2, 13)};
pattern2.graphic_pattern[14].onclick = function() {changeState(pattern2, 14)};
pattern2.graphic_pattern[15].onclick = function() {changeState(pattern2, 15)};

// ROW 3
pattern3.graphic_pattern[0].style.cursor = 'pointer';
pattern3.graphic_pattern[1].style.cursor = 'pointer';
pattern3.graphic_pattern[2].style.cursor = 'pointer';
pattern3.graphic_pattern[3].style.cursor = 'pointer';
pattern3.graphic_pattern[4].style.cursor = 'pointer';
pattern3.graphic_pattern[5].style.cursor = 'pointer';
pattern3.graphic_pattern[6].style.cursor = 'pointer';
pattern3.graphic_pattern[7].style.cursor = 'pointer';
pattern3.graphic_pattern[8].style.cursor = 'pointer';
pattern3.graphic_pattern[9].style.cursor = 'pointer';
pattern3.graphic_pattern[10].style.cursor = 'pointer';
pattern3.graphic_pattern[11].style.cursor = 'pointer';
pattern3.graphic_pattern[12].style.cursor = 'pointer';
pattern3.graphic_pattern[13].style.cursor = 'pointer';
pattern3.graphic_pattern[14].style.cursor = 'pointer';
pattern3.graphic_pattern[15].style.cursor = 'pointer';

pattern3.graphic_pattern[0].onclick = function() {changeState(pattern3, 0)};
pattern3.graphic_pattern[1].onclick = function() {changeState(pattern3, 1)};
pattern3.graphic_pattern[2].onclick = function() {changeState(pattern3, 2)};
pattern3.graphic_pattern[3].onclick = function() {changeState(pattern3, 3)};
pattern3.graphic_pattern[4].onclick = function() {changeState(pattern3, 4)};
pattern3.graphic_pattern[5].onclick = function() {changeState(pattern3, 5)};
pattern3.graphic_pattern[6].onclick = function() {changeState(pattern3, 6)};
pattern3.graphic_pattern[7].onclick = function() {changeState(pattern3, 7)};
pattern3.graphic_pattern[8].onclick = function() {changeState(pattern3, 8)};
pattern3.graphic_pattern[9].onclick = function() {changeState(pattern3, 9)};
pattern3.graphic_pattern[10].onclick = function() {changeState(pattern3, 10)};
pattern3.graphic_pattern[11].onclick = function() {changeState(pattern3, 11)};
pattern3.graphic_pattern[12].onclick = function() {changeState(pattern3, 12)};
pattern3.graphic_pattern[13].onclick = function() {changeState(pattern3, 13)};
pattern3.graphic_pattern[14].onclick = function() {changeState(pattern3, 14)};
pattern3.graphic_pattern[15].onclick = function() {changeState(pattern3, 15)};

// ROW 4
pattern4.graphic_pattern[0].style.cursor = 'pointer';
pattern4.graphic_pattern[1].style.cursor = 'pointer';
pattern4.graphic_pattern[2].style.cursor = 'pointer';
pattern4.graphic_pattern[3].style.cursor = 'pointer';
pattern4.graphic_pattern[4].style.cursor = 'pointer';
pattern4.graphic_pattern[5].style.cursor = 'pointer';
pattern4.graphic_pattern[6].style.cursor = 'pointer';
pattern4.graphic_pattern[7].style.cursor = 'pointer';
pattern4.graphic_pattern[8].style.cursor = 'pointer';
pattern4.graphic_pattern[9].style.cursor = 'pointer';
pattern4.graphic_pattern[10].style.cursor = 'pointer';
pattern4.graphic_pattern[11].style.cursor = 'pointer';
pattern4.graphic_pattern[12].style.cursor = 'pointer';
pattern4.graphic_pattern[13].style.cursor = 'pointer';
pattern4.graphic_pattern[14].style.cursor = 'pointer';
pattern4.graphic_pattern[15].style.cursor = 'pointer';

pattern4.graphic_pattern[0].onclick = function() {changeState(pattern4, 0)};
pattern4.graphic_pattern[1].onclick = function() {changeState(pattern4, 1)};
pattern4.graphic_pattern[2].onclick = function() {changeState(pattern4, 2)};
pattern4.graphic_pattern[3].onclick = function() {changeState(pattern4, 3)};
pattern4.graphic_pattern[4].onclick = function() {changeState(pattern4, 4)};
pattern4.graphic_pattern[5].onclick = function() {changeState(pattern4, 5)};
pattern4.graphic_pattern[6].onclick = function() {changeState(pattern4, 6)};
pattern4.graphic_pattern[7].onclick = function() {changeState(pattern4, 7)};
pattern4.graphic_pattern[8].onclick = function() {changeState(pattern4, 8)};
pattern4.graphic_pattern[9].onclick = function() {changeState(pattern4, 9)};
pattern4.graphic_pattern[10].onclick = function() {changeState(pattern4, 10)};
pattern4.graphic_pattern[11].onclick = function() {changeState(pattern4, 11)};
pattern4.graphic_pattern[12].onclick = function() {changeState(pattern4, 12)};
pattern4.graphic_pattern[13].onclick = function() {changeState(pattern4, 13)};
pattern4.graphic_pattern[14].onclick = function() {changeState(pattern4, 14)};
pattern4.graphic_pattern[15].onclick = function() {changeState(pattern4, 15)};
