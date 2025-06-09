document.addEventListener('DOMContentLoaded', function() {
    const root = document.documentElement
    const input = $('#answer')
    const audio1 = new Audio('Schematist - San Fran.mp3')
    const audio2 = new Audio('Purrple Cat - Flourish.mp3')
    const audio3 = new Audio('Purrple Cat - Bloom.mp3')
    const audio4 = new Audio('Le Gang - I Don’t Need U 2 Say Anything.mp3')
    const audio5 = new Audio('Ghostrifter - Subtle Break.mp3')
    const audio6 = new Audio('Ghostrifter - Morning Routine.mp3')
    const audio7 = new Audio('Ghostrifter - Hot Coffee.mp3')
    const audio8 = new Audio('BatchBug - Another Few Weeks.mp3')
    const audio9 = new Audio('Barradeen - you had me at hello.mp3')
    const audio10 = new Audio('Barradeen - walking together.mp3')
    const audio11 = new Audio('Barradeen - save my life again.mp3')
    const audio12 = new Audio('Barradeen - life with you.mp3')
    const audio13 = new Audio('Ethan Rebel - Fever Dream.mp3')
    const audio14 = new Audio('CARLA - Luvgut Lullaby.mp3')
    const audio15 = new Audio('Barradeen - emotional.mp3')
    const musicCollection =[audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9, audio10, audio11, audio12, audio13, audio14, audio15]
    let mobile = false
    let randomMusic = randomNumber(0, 14)
    let musicActive = false
    let comboMax = 3
    let cashY = new Decimal(675)
    let use1 = false
    let use2 = false
    let use4 = false
    let use5 = false
    let event1Use = false
    let event2Use = false
    let event3Use = false
    let multiplier = 1
    let multiplier2 = 0
    let difficulty = 0
    let interval = false
    let intervalEq = false
    let combo = 0
    let eqClass = 0


    let cash = parseInt(localStorage.getItem('cash'))
    let boost1 = parseInt(localStorage.getItem('boost1'))
    let boost2 = parseInt(localStorage.getItem('boost2'))
    let boost3 = parseInt(localStorage.getItem('boost3'))
    let boost4 = parseInt(localStorage.getItem('boost4'))
    let boost5 = parseInt(localStorage.getItem('boost5'))
    let boost6 = parseInt(localStorage.getItem('boost6'))

    if (Number.isNaN(cash)) {
        cash = 0
    }

    if (Number.isNaN(boost1)) {
        boost1 = 0
    }

    if (Number.isNaN(boost2)) {
        boost2 = 0
    }

    if (Number.isNaN(boost3)) {
        boost3 = 0
    }

    if (Number.isNaN(boost4)) {
        boost4 = 0
    }

    if (Number.isNaN(boost5)) {
        boost5 = 0
    }

    if (Number.isNaN(boost6)) {
        boost6 = 0
    }


    $('#cash').text(cash)
    $('#boost1Text').text(boost1)
    $('#boost2Text').text(boost2)
    $('#boost3Text').text(boost3)
    $('#boost4Text').text(boost4)
    $('#boost5Text').text(boost5)
    $('#boost6Text').text(boost6)




    if (window.innerWidth <= 768) {
        mobile = true
    }




    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === 'w' || event.key === 'ц') {
            checkAnswer()
        }

        if (event.key === 'Control' || event.key === 'q' || event.key === 'й') {
            selectClass()
        }

        
        if (event.key === 'Shift' || event.key === 'e' || event.key === 'у') {
            event.preventDefault()
            input.focus()
        }

        if (event.key === 'z' || event.key === 'я') {
            boost1Use()
        }

        if (event.key === 'x' || event.key === 'ч') {
            boost2Use()
        }

        if (event.key === 'c' || event.key === 'с') {
            boost3Use()
        }


        if (event.key === 'v' || event.key === 'м') {
            boost4Use()
        }


        if (event.key === 'b' || event.key === 'и') {
            boost5Use()
        }

        if (event.key === 'n' || event.key === 'т') {
            boost6Use()
        }
    })




    for (let i = 0; i < musicCollection.length; i++) {
        musicCollection[i].addEventListener('ended', musicActivate);
    }




    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function randomNotWholeNumber(min, max) {
        return Math.random() * (max - min + 1) + 1
    }

    function RoundingUp(number, fixed) {
        return number.toFixed(fixed)
    }




    function selectClass() {
        if (eqClass == 0) {
            alert("Выбери сложность")
        }
        if (eqClass == 1) {
            randomTheme1()
        }

        if (eqClass == 2) {
            randomTheme2()
        }

        if (eqClass == 3) {
            randomTheme3()
        }

        if (eqClass == 4) {
            randomTheme4()
        }

        if (eqClass == 5) {
            randomTheme5()
        }
    }




    function randomTheme1() {
        theme = randomNumber(1, 4)
        if(theme == 1) {
            minus1_1()
        }

        if(theme == 2) {
            minus1_2()
        }

        if (theme == 3) {
            plus1_1()
        }

        if (theme == 4) {
            plus1_2()
        }
        difficulty = 1
    }


    function randomTheme2() {
        theme = randomNumber(1, 4)
        if(theme == 1) {
            minus2_1()
        }

        if(theme == 2) {
            minus2_2()
        }

        if (theme == 3) {
            plus2_1()
        }

        if (theme == 4) {
            plus2_2()
        }
        difficulty = 2
    }


    function randomTheme3() {
        theme = randomNumber(1, 8)
        if(theme == 1) {
            minus3_1()
            difficulty = 3
        }

        if(theme == 2) {
            minus3_2()
            difficulty = 3
        }

        if (theme == 3) {
            plus3_1()
            difficulty = 3
        }

        if (theme == 4) {
            plus3_2()
            difficulty = 3
        }

        if(theme == 5) {
            multiplied3_1()
            difficulty = 5
        }

        if(theme == 6) {
            multiplied3_2()
            difficulty = 5
        }

        if (theme == 7) {
            divided3_1()
            difficulty = 5
        }

        if (theme == 8) {
            divided3_2()
            difficulty = 5
        }
    }


    function randomTheme4() {
        theme = randomNumber(1, 8)
        if(theme == 1) {
            minus4_1()
            difficulty = 4
        }

        if(theme == 2) {
            minus4_2()
            difficulty = 4
        }

        if (theme == 3) {
            plus4_1()
            difficulty = 4
        }

        if (theme == 4) {
            plus4_2()
            difficulty = 4
        }

        if(theme == 5) {
            multiplied4_1()
            difficulty = 7
        }

        if(theme == 6) {
            multiplied4_2()
            difficulty = 7
        }

        if (theme == 7) {
            divided4_1()
            difficulty = 7
        }

        if (theme == 8) {
            divided4_2()
            difficulty = 7
        }
    }


    function randomTheme5() {
        theme = randomNumber(1, 28)

        if(theme == 1) {
            multiplied5_1()
            difficulty = 9
        }

        if(theme == 2) {
            multiplied5_2()
            difficulty = 9
        }

        if (theme == 3) {
            divided5_1()
            difficulty = 9
        }

        if (theme == 4) {
            divided5_2()
            difficulty = 9
        }

        if (theme == 5) {
            minus_X_minus_5_1()
            difficulty = 12
        }

        if (theme == 5) {
            minus_X_minus_5_2()
            difficulty = 12
        }

        if (theme == 6) {
            minus_X_plus_5_1()
            difficulty = 12
        }

        if (theme == 7) {
            minus_X_plus_5_2()
            difficulty = 12
        }

        if (theme == 8) {
            minus_X_multi_5_1()
            difficulty = 14
        }

        if (theme == 9) {
            minus_X_multi_5_2()
            difficulty = 14
        }

        if (theme == 10) {
            minus_X_div_5_1()
            difficulty = 14
        }

        if (theme == 11) {
            minus_X_div_5_2()
            difficulty = 14
        }

        if (theme == 12) {
            plus_X_minus_5_1()
            difficulty = 12
        }

        if (theme == 13) {
            plus_X_minus_5_2()
            difficulty = 12
        }

        if (theme == 14) {
            plus_X_plus_5_1()
            difficulty = 12
        }

        if (theme == 14) {
            plus_X_plus_5_2()
            difficulty = 12
        }

        if (theme == 15) {
            plus_X_multi_5_1()
            difficulty = 14
        }

        if (theme == 16) {
            plus_X_multi_5_2()
            difficulty = 14
        }

        if (theme == 17) {
            plus_X_div_5_1()
            difficulty = 14
        }

        if (theme == 18) {
            plus_X_div_5_2()
            difficulty = 14
        }

        if (theme == 19) {
            decimalPlus1()
            difficulty = 14
        }

        if (theme == 20) {
            decimalPlus2()
            difficulty = 14
        }

        if (theme == 21) {
            decimalMinus1()
            difficulty = 15
        }

        if (theme == 22) {
            decimalMinus2()
            difficulty = 15
        }

        if (theme == 23) {
            decimalMulti1()
            difficulty = 18
        }

        if (theme == 24) {
            decimalMulti2()
            difficulty = 18
        }

        if (theme == 25) {
            decimalDiv1()
            difficulty = 19
        }

        if (theme == 26) {
            decimalDiv2()
            difficulty = 19
        }

        if (theme == 27) {
            combinationPlus()
            difficulty = 11
        }

        if (theme == 28) {
            combinationMinus()
            difficulty = 11
        }
    }




    function minus1_1() {
    c1 = randomNumber(1, 4)
    c2 = c1 + randomNumber(0, 5)
    c3 = c2 - c1
    answer = c2 - c3
    $("#eq").text(c2 + " - x = " + c3)
    }


    function minus1_2() {
        c1 = randomNumber(1, 4)
		c2 = c1 + randomNumber(0, 5)
		c3 = c2 - c1
		answer = c3 + c1
		$('#eq').text('x - ' + c1 + ' = ' + c3)
    }


    function plus1_1() {
        c1 = randomNumber(1, 5)
        c2 = randomNumber(1, 5)
        c3 = c1 + c2
        answer = c3 - c2
        $('#eq').text('x + ' + c2 + ' = ' + c3)
    }


    function plus1_2() {
        c1 = randomNumber(1, 5)
        c2 = randomNumber(1, 5)
        c3 = c1 + c2
        answer = c3 - c1
        $('#eq').text(c1 + ' + x = ' + c3)
    }




    function minus2_1() {
        c1 = randomNumber(1, 15)
        c2 = c1 + randomNumber(1, 15)
        c3 = c2 - c1
        answer = c2 - c3
        $("#eq").text(c2 + " - x = " + c3)
    }


    function minus2_2() {
        c1 = randomNumber(1, 15)
        c2 = c1 + randomNumber(1, 15)
        c3 = c2 - c1
        answer = c3 + c1
        $('#eq').text('x - ' + c1 + ' = ' + c3)
    }


    function plus2_1() {
        c1 = randomNumber(1, 18)
        c2 = randomNumber(1, 19)
        c3 = c1 + c2
        answer = c3 - c2
        $('#eq').text('x + ' + c2 + ' = ' + c3)
    }


    function plus2_2() {
        c1 = randomNumber(1, 18)
        c2 = randomNumber(1, 18)
        c3 = c1 + c2
        answer = c3 - c1
        $('#eq').text(c1 + ' + x = ' + c3)
    }




    function minus3_1() {
        c1 = randomNumber(16, 32)
        c2 = c1 + randomNumber(16, 32)
        c3 = c2 - c1
        answer = c2 - c3
        $("#eq").text(c2 + " - x = " + c3)
    }


    function minus3_2() {
        c1 = randomNumber(16, 32)
        c2 = c1 + randomNumber(16, 32)
        c3 = c2 - c1
        answer = c3 + c1
        $('#eq').text('x - ' + c1 + ' = ' + c3)
    }


    function plus3_1() {
        c1 = randomNumber(17, 35)
        c2 = randomNumber(17, 35)
        c3 = c1 + c2
        answer = c3 - c2
        $('#eq').text('x + ' + c2 + ' = ' + c3)
    }


    function plus3_2() {
        c1 = randomNumber(17, 35)
        c2 = randomNumber(17, 35)
        c3 = c1 + c2
        answer = c3 - c1
        $('#eq').text(c1 + ' + x = ' + c3)
    }


    function multiplied3_1() {
        c1 = randomNumber(3, 9)
        c2 = randomNumber(3, 9)
        c3 = c1 * c2
        answer = c3 / c2
        $('#eq').text('x * ' + c2 + ' = ' + c3)
    }


    function multiplied3_2() {
        c1 = randomNumber(3, 9)
        c2 = randomNumber(3, 9)
        c3 = c1 * c2
        answer = c3 / c1
        $('#eq').text(c1 + ' * x = ' + c3)
    }


    function divided3_1() {
        cc1 = randomNumber(3, 9)
        cc2 = randomNumber(3, 9)
        c1 = cc1 * cc2
        c2 = cc1
        c3 = c1 / c2
        answer = c3 * c2
        $('#eq').text('x : ' + c2 + ' = ' + c3)
    }


    function divided3_2() {
        cc1 = randomNumber(3, 9)
        cc2 = randomNumber(3, 9)
        c1 = cc1 * cc2
        c2 = cc1
        c3 = c1 / c2
        answer = c1 / c3
        $('#eq').text(c1 + ' : x = ' + c3)
    }




    function minus4_1() {
        c1 = randomNumber(42, 100)
        c2 = c1 + randomNumber(42, 87)
        c3 = c2 - c1
        answer = c2 - c3
        $("#eq").text(c2 + " - x = " + c3)
    }


    function minus4_2() {
        c1 = randomNumber(42, 100)
        c2 = c1 + randomNumber(42, 87)
        c3 = c2 - c1
        answer = c3 + c1
        $('#eq').text('x - ' + c1 + ' = ' + c3)
    }


    function plus4_1() {
        c1 = randomNumber(45, 92)
        c2 = randomNumber(45, 92)
        c3 = c1 + c2
        answer = c3 - c2
        $('#eq').text('x + ' + c2 + ' = ' + c3)
    }


    function plus4_2() {
        c1 = randomNumber(45, 92)
        c2 = randomNumber(45, 92)
        c3 = c1 + c2
        answer = c3 - c1
        $('#eq').text(c1 + ' + x = ' + c3)
    }


    function multiplied4_1() {
        c1 = randomNumber(8, 17)
        c2 = randomNumber(8, 17)
        c3 = c1 * c2
        answer = c3 / c2
        $('#eq').text('x * ' + c2 + ' = ' + c3)
    }


    function multiplied4_2() {
        c1 = randomNumber(8, 17)
        c2 = randomNumber(8, 17)
        c3 = c1 * c2
        answer = c3 / c1
        $('#eq').text(c1 + ' * x = ' + c3)
    }


    function divided4_1() {
        cc1 = randomNumber(8, 17)
        cc2 = randomNumber(8, 17)
        c1 = cc1 * cc2
        c2 = cc1
        c3 = c1 / c2
        answer = c3 * c2
        $('#eq').text('x : ' + c2 + ' = ' + c3)
    }


    function divided4_2() {
        cc1 = randomNumber(8, 17)
        cc2 = randomNumber(8, 17)
        c1 = cc1 * cc2
        c2 = cc1
        c3 = c1 / c2
        answer = c1 / c3
        $('#eq').text(c1 + ' : x = ' + c3)
    }




    function multiplied5_1() {
        c1 = randomNumber(17, 42)
        c2 = randomNumber(17, 42)
        c3 = c1 * c2
        answer = c3 / c2
        $('#eq').text('x * ' + c2 + ' = ' + c3)
    }


    function multiplied5_2() {
        c1 = randomNumber(17, 42)
        c2 = randomNumber(17, 42)
        c3 = c1 * c2
        answer = c3 / c1
        $('#eq').text(c1 + ' * x = ' + c3)
    }


    function divided5_1() {
        cc1 = randomNumber(17, 42)
        cc2 = randomNumber(17, 42)
        c1 = cc1 * cc2
        c2 = cc1
        c3 = c1 / c2
        answer = c3 * c2
        $('#eq').text('x : ' + c2 + ' = ' + c3)
    }


    function divided5_2() {
        cc1 = randomNumber(17, 42)
        cc2 = randomNumber(17, 42)
        c1 = cc1 * cc2
        c2 = cc1
        c3 = c1 / c2
        answer = c1 / c3
        $('#eq').text(c1 + ' : x = ' + c3)
    }


    function minus_X_minus_5_1() {
        c1 = randomNumber(245, 320)
        c2 = randomNumber(60, 119)
        cc1 = c1 - randomNumber(60, 72)
        cc2 = c1 - cc1
        c3 = cc1 - cc2 - c2
        answer = cc1
        $('#eq').text('(x - ' + cc2 + ') - ' + c2 + ' = ' + c3)
    }


    function minus_X_minus_5_2() {
        c1 = randomNumber(245, 320)
        c2 = randomNumber(60, 119)
        cc1 = c1 - randomNumber(60, 72)
        cc2 = c1 - cc1
        c3 = cc1 - cc2 - c2
        answer = cc2
        $('#eq').text('(' + cc1 + ' - x) - ' + c2 + ' = ' + c3)
    }


    function minus_X_plus_5_1() {
        c1 = randomNumber(245, 320)
        c2 = randomNumber(60, 119)
        cc1 = c1 - randomNumber(60, 72)
        cc2 = c1 - cc1
        c3 = cc1 - cc2 + c2
        answer = cc1
        $('#eq').text('(x - ' + cc2 + ') + ' + c2 + ' = ' + c3)
    }


    function minus_X_plus_5_2() {
        c1 = randomNumber(245, 320)
        c2 = randomNumber(60, 119)
        cc1 = c1 - randomNumber(60, 72)
        cc2 = c1 - cc1
        c3 = cc1 - cc2 + c2
        answer = cc2
        $('#eq').text('(' + cc1 + ' - x) + ' + c2 + ' = ' + c3)
    }


    function minus_X_multi_5_1() {
        c1 = randomNumber(160, 235)
        c2 = randomNumber(17, 32)
        cc1 = c1 - randomNumber(60, 72)
        cc2 = c1 - cc1
        c3 = (cc1 - cc2) * c2
        answer = cc1
        $('#eq').text('(x - ' + cc2 + ') * ' + c2 + ' = ' + c3)
    }


    function minus_X_multi_5_2() {
        c1 = randomNumber(160, 235)
        c2 = randomNumber(17, 32)
        cc1 = c1 - randomNumber(60, 72)
        cc2 = c1 - cc1
        c3 = (cc1 - cc2) * c2
        answer = cc2
        $('#eq').text('(' + cc1 + ' - x) * ' + c2 + ' = ' + c3)
    }


    function minus_X_div_5_1() {
        let ccc1 = randomNumber(17, 32);
        let ccc2 = randomNumber(17, 32);
        let c1 = ccc1 * ccc2;
        let c1min = c1 + 25;
        let c1max = c1min * 2;
        let cc1 = randomNumber(c1min, c1max);
        let cc2 = cc1 - c1;
        let c3 = c1 / ccc1;
        answer = cc1
        $('#eq').text('(x - ' + cc2 + ') : ' + ccc1 + ' = ' + c3);
    }


    function minus_X_div_5_2() {
        let ccc1 = randomNumber(17, 32);
        let ccc2 = randomNumber(17, 32);
        let c1 = ccc1 * ccc2;
        let c1min = c1 + 25;
        let c1max = c1min * 2;
        let cc1 = randomNumber(c1min, c1max);
        let cc2 = cc1 - c1;
        let c3 = c1 / ccc1;
        answer = cc2
        $('#eq').text('(' + cc1 +' - x) : ' + ccc1 + ' = ' + c3);
    }


    function plus_X_minus_5_1() {
        c1 = randomNumber(245, 320)
        c2 = randomNumber(60, 119)
        c3 = c1 - c2
        cc1 = c1 - randomNumber(80, 180)
        cc2 = c1 - cc1
        answer = cc1
        $("#eq").text('(x + ' + cc2 + ') - ' + c2 + ' = ' + c3)
    }


    function plus_X_minus_5_2() {
        c1 = randomNumber(245, 320)
        c2 = randomNumber(60, 119)
        c3 = c1 - c2
        cc1 = c1 - randomNumber(80, 180)
        cc2 = c1 - cc1
        answer = cc2
        $("#eq").text('(' + cc1 + ' + x) - ' + c2 + ' = ' + c3)
    }


    function plus_X_plus_5_1() {
        cc1 = randomNumber(120, 175)
        cc2 = randomNumber(120, 175)
        c1 = cc1 + cc2
        c2 = randomNumber(135, 190)
        c3 = c1 + c2
        answer = cc1
        $('#eq').text('(x + ' + cc2 + ') + ' + c2 + ' = ' + c3)
    }


    function plus_X_plus_5_2() {
        cc1 = randomNumber(120, 175)
        cc2 = randomNumber(120, 175)
        c1 = cc1 + cc2
        c2 = randomNumber(135, 190)
        c3 = c1 + c2
        answer = cc2
        $('#eq').text('(' + cc1 + ' + x) + ' + c2 + ' = ' + c3)
    }


    function plus_X_multi_5_1() {
        cc1 = randomNumber(60, 110)
        cc2 = randomNumber(60, 110)
        c1 = cc2 + cc1
        c2 = randomNumber(20, 45)
        c3 = c1 * c2
        answer = cc1
        $('#eq').text('(x + ' + cc2 + ') * ' + c2 + ' = ' + c3)
    }


    function plus_X_multi_5_2() {
        cc1 = randomNumber(60, 110)
        cc2 = randomNumber(60, 110)
        c1 = cc2 + cc1
        c2 = randomNumber(20, 45)
        c3 = c1 * c2
        answer = cc2
        $('#eq').text('(' + cc1 + ' + x) * ' + c2 + ' = ' + c3)
    }


    function plus_X_div_5_1() {
        c3 = randomNumber(20, 45)
        c2 = randomNumber(20, 45)
        c1 = c2 * c3
        cc1 = c1 - (c2 + randomNumber(100, 500))
        cc2 = c1 - cc1
        answer = cc1
        $('#eq').text('(x + ' + cc2 + ') : ' + c2 + ' = ' + c3)
    }


    function plus_X_div_5_2() {
        c3 = randomNumber(20, 45)
        c2 = randomNumber(20, 45)
        c1 = c2 * c3
        cc1 = c1 - (c2 + randomNumber(100, 500))
        cc2 = c1 - cc1
        answer = cc2
        $('#eq').text('(' + cc1 + ' + x) : ' + c2 + ' = ' + c3)
    }


    function decimalPlus1() {
        random = randomNumber(2, 4)
        c1 = parseFloat(RoundingUp(randomNotWholeNumber(10, 100), random))
        c2 = parseFloat(RoundingUp(randomNotWholeNumber(10, 100), random))
        cs3 = c1 + c2
        c3 = parseFloat(RoundingUp(cs3, random))
        answer = c1
        $('#eq').text('x + ' + c2 + ' = ' + c3)
    }


    function decimalPlus2() {
        random = randomNumber(2, 3)
        c1 = parseFloat(RoundingUp(randomNotWholeNumber(10, 100), random))
        c2 = parseFloat(RoundingUp(randomNotWholeNumber(10, 100), random))
        cs3 = c1 + c2
        c3 = parseFloat(RoundingUp(cs3, random))
        answer = c2
        $('#eq').text(c1 + ' + x = ' + c3)
    }


    function decimalMinus1() {
        random = randomNumber(2, 3)
        c3 = parseFloat(RoundingUp(randomNotWholeNumber(10, 100), random))
        c2 = parseFloat(RoundingUp(randomNotWholeNumber(10, 100), random))
        c1 = parseFloat(RoundingUp(c3 + c2, random))
        answer = c1
        $('#eq').text('x - ' + c2 + ' = ' + c3)
    }


    function decimalMinus2() {
        random = randomNumber(2, 3)
        c3 = parseFloat(RoundingUp(randomNotWholeNumber(10, 100), random))
        c2 = parseFloat(RoundingUp(randomNotWholeNumber(10, 100), random))
        c1 = parseFloat(RoundingUp(c3 + c2, random))
        answer = c2
        $('#eq').text(c1 + ' - x = ' + c3)
    }


    function decimalMulti1() {
        random = randomNumber(1, 2)
        cs1 = parseFloat(RoundingUp(randomNotWholeNumber(10, 40), randomNumber(0, 2)))
        cs2 = parseFloat(RoundingUp(randomNotWholeNumber(10, 40), random))
        c1 = new Decimal(cs1)
        c2 = new Decimal(cs2)
        c3 = c1.mul(c2)
        answer = c1
        eq = 'x * ' + c2 + ' = ' + c3
        $('#eq').text(eq)
    }


    function decimalMulti2() {
        random = randomNumber(1, 2)
        cs1 = parseFloat(RoundingUp(randomNotWholeNumber(10, 40), randomNumber(0, 2)))
        cs2 = parseFloat(RoundingUp(randomNotWholeNumber(10, 40), random))
        c1 = new Decimal(cs1)
        c2 = new Decimal(cs2)
        c3 = c1.mul(c2)
        answer = c2
        eq = c1 + ' * x = ' + c3
        $('#eq').text(eq)
    }


    function decimalDiv1() {
        random = randomNumber(1, 2)
        cs3 = parseFloat(RoundingUp(randomNotWholeNumber(10, 40), randomNumber(0, 2)))
        cs2 = parseFloat(RoundingUp(randomNotWholeNumber(10, 40), random))
        c3 = new Decimal(cs3)
        c2 = new Decimal(cs2)
        c1 = c3.mul(c2)
        answer = c1
        eq = 'x : ' + c2 + ' = ' + c3
        $('#eq').text(eq)
    }


    function decimalDiv2() {
        random = randomNumber(1, 2)
        cs3 = parseFloat(RoundingUp(randomNotWholeNumber(10, 40), randomNumber(0, 2)))
        cs2 = parseFloat(RoundingUp(randomNotWholeNumber(10, 40), random))
        c3 = new Decimal(cs3)
        c2 = new Decimal(cs2)
        c1 = c3.mul(c2)
        answer = c2
        eq = c1 + ' : x = ' + c3
        $('#eq').text(eq)
    }


    function combinationPlus() {
        csx = parseFloat(RoundingUp(randomNotWholeNumber(1, 10), 1))
        cs1 = parseFloat(RoundingUp(randomNotWholeNumber(5, 25), 1))
        cs2 = parseFloat(RoundingUp(randomNotWholeNumber(5, 25), 1))
        cx = new Decimal(csx)
        c1 = new Decimal(cs1)
        c2 = new Decimal(cs2)
        c3c1 = c1.add(c2)
        c3 = c3c1.mul(cx)
        answer = cx
        $('#eq').text(c1 + 'x' + ' + ' + c2 + 'x' + ' = ' + c3)
    }


    function combinationMinus() {
        random = new Decimal(parseFloat(RoundingUp(randomNotWholeNumber(5, 25), 1)))
        csx = new Decimal(parseFloat(RoundingUp(randomNotWholeNumber(1, 10), 1)))
        cs2 = new Decimal(parseFloat(RoundingUp(randomNotWholeNumber(5, 25), 1)))
        cs1 = new Decimal(parseFloat(cs2.add(random))) 
        cx = new Decimal(csx)
        c1 = new Decimal(cs1)
        c2 = new Decimal(cs2)
        c3c1 = c1.sub(c2)
        c3 = c3c1.mul(cx)
        answer = cx
        $('#eq').text(c1 + 'x' + ' - ' + c2 + 'x' + ' = ' + c3)
    }



    function checkAnswer() {
        let playerAnswer = $('#answer').val()
        use5 = false
        event2Use = false
        if (intervalEq == false) {
        if(playerAnswer == answer) {
            giveCash()
            setTimeout(function() {
                $('#multiplier2').fadeOut(150)
                multiplier2 = 0
            }, 1)
            $('#cash').text(cash)
            combo++
            $("#combo").text(combo)
            rb = 0
            
            greenFunction = setInterval(function() {
                    let rgb = "rgb(" + rb + ', 255, ' + rb + ')' 
                    $("#eq").css('color', rgb)
                    rb = rb + 3
                    intervalEq = true

                    if(rb > 255) {
                        clearInterval(greenFunction)
                        selectClass()
                        intervalEq = false
                    }
                }, 1)
        } else {
            $('#multiplier2').fadeOut(150)
            multiplier2 = 0
            combo = 0
            $("#combo").text(combo)
            rg = 0

            redFunction = setInterval(function() {
                    let rgb = "rgb(255, " + rg + ', ' + rg + ')' 
                    $("#eq").css('color', rgb)
                    rg = rg + 3
                    intervalEq = true

                    if(rg > 255) {
                        clearInterval(redFunction)
                        selectClass()
                        intervalEq = false
                    }
                }, 1)}
    }
    comboColor()
    fixCounter()
    localStorage.setItem('cash', cash)
}


    function giveCash() {
			if (combo <= comboMax) {
				cash = cash + Math.round(difficulty * multiplier + difficulty * multiplier2) + combo
			} else {
				cash =
					cash + Math.round(difficulty * multiplier + difficulty * multiplier2) + comboMax
			}
		}


    function tryYourLuck() {
        if (event3Use == false) {
            random = randomNumber(1, 1000)
            if (random < 16) {
                cashLuck = -1000
            }
            if (random > 15 && random < 151) {
                cashLuck = -100
            }
            if (random > 150 && random < 451) {
                cashLuck = -10
            }
            if (random > 450 && random < 851) {
                cashLuck = 0
            }
            if (random > 850 && random < 951) {
                cashLuck = 10
            }
            if (random > 950 && random < 996) {
                cashLuck = 100
            }
            if (random > 995) {
                cashLuck = 1000
            }
        } else {
            random = randomNumber(1, 100)
            if (random < 31) {
                cashLuck = 0
            } else if (random < 56) {
                cashLuck = 10
            } else if (random < 81) {
                cashLuck = 100
            } else if (random < 96) {
                cashLuck = 1000
            } else {
                cashLuck = 2500
            }
        }

        cash += cashLuck
        drawCashLuck()
        localStorage.setItem('cash', cash)
        $('#cash').text(cash)
        fixCounter()
    }


    function drawCashLuck() {
        opacity = new Decimal(1.0)
        if (cashLuck > 0) {
            $('#body2').html('<p id="flyText">' + '+' + cashLuck + '</p>')
        } else {
            $('#body2').html('<p id="flyText">' + cashLuck + '</p>')
        }
        animCash = setInterval(function() {
            cashY = cashY.add(0.2)
            cashPx = cashY + 'px'
            opacity = opacity.sub(0.02)
            root.style.setProperty('--bottom', cashPx)
            root.style.setProperty('--opacity', opacity)
            if (opacity < 0.001 || cashY > 684.9) {
                clearInterval(animCash)
                $('#body2').html('')
                root.style.setProperty('--bottom', cashPx)
                root.style.setProperty('--opacity', opacity)
                cashY = new Decimal(675)
                opacity = new Decimal(1.0)
                use1 = false
            }
        }, 10)
    }


    $("#start").click(function() {
        selectClass()
    })


    $("#class1").click(function() {
        eqClass = 1
    })


    $("#class2").click(function() {
        eqClass = 2
    })


    $("#class3").click(function() {
        eqClass = 3
    })


    $("#class4").click(function() {
        eqClass = 4
    })


    $("#class5").click(function() {
        eqClass = 5
    })


    $('#haste').click(function() {
        localStorage.setItem('cash', cash)
        localStorage.setItem('boost1', boost1)
        localStorage.setItem('boost2', boost2)
        localStorage.setItem('boost3', boost3)
        window.location.href = 'Haste Index.html'
    })


    $('#questions').click(function() {
        window.location.href = 'Questions Index.html'
    })


    $("#check").click(function() {
        checkAnswer()
    })


    $('.gridInp').click(function() {
        if (interval == false) {
            blueAnim(this)
        }
    })


    $('#music').click(selectOffOrOn)


    $('.a1').click(boost1Use)


    $('.a2').click(boost2Use)


    $('.a3').click(boost3Use)


    $('.a4').click(boost4Use)


    $('.a5').click(boost5Use)


    $('.a6').click(boost6Use)


    $('.a').click(function() {
        localStorage.setItem('cash', cash)
        localStorage.setItem('boost1', boost1)
        localStorage.setItem('boost2', boost2)
        localStorage.setItem('boost3', boost3)
        localStorage.setItem('boost4', boost4)
        localStorage.setItem('boost5', boost5)
        localStorage.setItem('boost6', boost6)
        window.location.href = 'Shop Index.html'
        setTimeout(function() {
            location.reload()
        }, 1000)
    })




    function blueAnim(element) {
        let rg = 150
        interval = true
        greenInterval = setInterval(function() {
        let rgb = 'rgb(' + rg + ', ' + rg + ', 255)' 
        $(element).css('color', rgb)
        rg = rg + 3

        if(rg >= 255) {
            clearInterval(greenInterval)
            interval = false
            }
        }, 25)
    }

    function comboColor() {
        if (event1Use == false) {
            if (combo == 0) {
                color = '#fff3e0'
            }
            if (combo == 1) {
                color = 'rgb(255, 226, 213)'
            }
            if (combo == 2) {
                color = 'rgb(255, 211, 191)'
            }
            if (combo > 3 && combo < 6) {
                color = 'rgb(255, 199, 173)'
            }
            if (combo > 5 && combo < 10) {
                color = 'rgb(255, 182, 148)'
            }
            if (combo > 9 && combo < 15) {
                color = 'rgb(255, 164, 121)'
            }
            if (combo > 14 && color < 35) {
                color = 'rgb(255, 88, 73)'
            }
            if (combo > 34) {
                color = 'rgb(255, 0, 0)'
            }
        } else {
            color = 'rgb(248, 185, 255)'
        }
        root.style.setProperty('--main-color', color)
    }

    function fixCounter() {
        if (cash < -999) {
            minWidth = '148px'
            indent = '134px'
        } else if (cash < -99 && cash > -1000) {
            minWidth = '132px'
            indent = '118px'
        } else if (cash < -9 && cash > -100) {
            minWidth = '116px'
            indent = '102px'
        } else if (cash < 10 && cash > -1) {
            minWidth = '100px'
            indent = '86px'
        } else if (cash > 9 && cash < 100) {
            minWidth = '116px'
            indent = '102px'
        } else if (cash > 99 && cash < 1000) {
            minWidth = '132px'
            indent = '118px'
        } else if (cash > 999 && cash < 10000) {
            minWidth = '148px'
            indent = '134px'
        } else if (cash > 9999 && cash < 100000) {
            minWidth = '164px'
            indent = '150px'
        } else if (cash > 99999 && cash < 1000000) {
            minWidth = '180px'
            indent = '166px'
        } else if (cash > 999999 && cash < 10000000) {
            minWidth = '196px'
            indent = ' 182px'
        } else {
            minWidth = '215px'
            indent = '200px'
        }


        root.style.setProperty('--min-width', minWidth)
        root.style.setProperty('--xCoinLeft', indent)
    }

    function fixCounterMobile() {
        if (cash < -999) {
            minWidth = '148px'
            indent = '105px'
        } else if (cash < -99 && cash > -1000) {
            minWidth = '120px'
            indent = '85px'
        } else if (cash < -9 && cash > -100) { 
            minWidth = '100px'
            indent = '65px'
        } else if (cash < 10 && cash > -1) {
            minWidth = '80px'
            indent = '40px'
        } else if (cash > 9 && cash < 100) {
            minWidth = '100px'
            indent = '55px'
        } else if (cash > 99 && cash < 1000) {
            minWidth = '120px'
            indent = '85px'
        } else if (cash > 999 && cash < 10000) {
            minWidth = '148px'
            indent = '105px'
        } else if (cash > 9999 && cash < 100000) {
            minWidth = '154px'
            indent = '110px'
        } else if (cash > 99999 && cash < 1000000) {
            minWidth = '180px'
            indent = '130px'
        } else if (cash > 999999 && cash < 10000000) {
            minWidth = '196px'
            indent = ' 150px'
        } else {
            minWidth = '205px'
            indent = '165px'
        }


        root.style.setProperty('--min-width', minWidth)
        root.style.setProperty('--xCoinLeft', indent)
    }




    function boost1Use() {
        if (use1 == false && boost1 > 0 && cash >= -500) {
            setTimeout(use1 = true, 1)
            boost1 = boost1 - 1
            localStorage.setItem('boost1', boost1)
            tryYourLuck()
            $('#boost1Text').text(boost1)
        } else {
            if (event3Use == false && use1 == true && boost1 <= 0 && cash < -500) {
                gb = 0
                let anim = setInterval(function () {
                    gb = gb + 1
                    rgb = 'rgb(34, ' + gb + ', ' + gb + ')'
                    $('#item1').css('background', rgb)
                    if (gb > 34) {
                        gb = 34
                        $('#item1').css('background', rgb)
                        clearInterval(anim)
                    }
                }, 15)
            } else if (event3Use == true && use1 == true && boost1 <= 0 && cash < -500) {
                g = 0
                let anim = setInterval(function () {
                    g = g + 1
                    rgb = 'rgb(68, ' + g + ', ' + '34' + ')'
                    $('#item1').css('background', rgb)
                    if (g > 68) {
                        g = 68
                        $('#item1').css('background', rgb)
                        clearInterval(anim)
                    }
                }, 15)
            }
        }
    }


    function boost2Use() {
        if (use2 == false && boost2 > 0) {
            use2 = true
            multiplier = 1.5
            boost2 = boost2 - 1
            localStorage.setItem('boost2', boost2)
            $('#boost2Text').text(boost2)
            sec = 59
            min = 1
            $('#box').html(
                '<img src="x 1.5.png" alt="error" class="img boost1ImgTimer">' +
                '<p class="timer">' +
                '1' +
                'мин ' +
                '59' +
                'сек' +
                '</p>'
            )
            let timer = setInterval(function () {
                sec = sec - 1
                if (sec < 0) {
                    sec = 59
                    min = min - 1
                }
                if (min < 0) {
                    min = 0
                    sec = 0
                    clearInterval(timer)
                    window.setTimeout(function() {
                        $('.boost1ImgTimer').remove()
                        $('.timer').remove()
                    }, 100)
                    use2 = false
                }
                $('#box').html(
                    '<img src="x 1.5.png" alt="error" class="img boost1ImgTimer">' +
                        '<p class="timer">' +
                        min +
                        'мин ' +
                        sec +
                        'сек' +
                        '</p>'
                )
            }, 1000)
        } else {
            gb = 0
            let anim = setInterval(function () {
                gb = gb + 1
                rgb = 'rgb(34, ' + gb + ', ' + gb + ')'
                $('#item2').css('background', rgb)
                if (gb > 34) {
                    gb = 34
                    $('#item2').css('background', rgb)
                    clearInterval(anim)
                }
            }, 15)
        }
    }


    function boost3Use() {
        gb = 0
        let anim = setInterval(function () {
            gb = gb + 1
            rgb = 'rgb(34, ' + gb + ', ' + gb + ')'
            $('#item3').css('background', rgb)
            if (gb > 34) {
                gb = 34
                $('#item3').css('background', rgb)
                clearInterval(anim)
            }
        }, 15)
    }


    function boost4Use() {
        if (use4 == false && event1Use == false && boost4 > 0) {
            comboMax = 15
            use4 = true
            boost4 = boost4 - 1
            localStorage.setItem('boost4', boost4)
            $('#boost4Text').text(boost4)
            sec2 = 59
            min2 = 1
            $('#box2').html(
                '<img src="Combo Boost.png" alt="error" class="img boost2ImgTimer">' +
                '<p class="timer2">' +
                '1' +
                'мин ' +
                '59' +
                'сек' +
                '</p>'
            )
            let timer = setInterval(function () {
                sec2 = sec2 - 1
                if (sec2 < 0) {
                    sec2 = 59
                    min2 = min2 - 1
                }
                if (min2 < 0) {
                    min2 = 0
                    sec2 = 0
                    clearInterval(timer)
                    window.setTimeout(function() {
                        $('.boost2ImgTimer').remove()
                        $('.timer2').remove()
                    }, 100)
                    comboMax = 3
                    use4 = false
                }
                $('#box2').html(
                    '<img src="Combo Boost.png" alt="error" class="img boost2ImgTimer">' +
                        '<p class="timer2">' +
                        min2 +
                        'мин ' +
                        sec2 +
                        'сек' +
                        '</p>'
                )
            }, 1000)
        } else {
            gb = 0
            let anim = setInterval(function () {
                gb = gb + 1
                rgb = 'rgb(34, ' + gb + ', ' + gb + ')'
                $('#item4').css('background', rgb)
                if (gb > 34) {
                    gb = 34
                    $('#item4').css('background', rgb)
                    clearInterval(anim)
                }
            }, 15)
        }
    }


    function boost5Use() {
        if (use5 == false && boost5 > 0 && event2Use == false) {
            root.style.setProperty('--multiplier2Color1', '#eeeeee')
            root.style.setProperty('--multiplier2Color2', '#ffffff')
            use5 = true
            boost5 = boost5 - 1
            localStorage.setItem('boost5', boost5)
            $('#boost5Text').text(boost5)
            multiplier2 = randomNumber(10, 50)
            $('#multiplier2').text('x' + multiplier2)
            $('#multiplier2').fadeIn(150)
        } else {
            gb = 0
            let anim = setInterval(function () {
                gb = gb + 1
                rgb = 'rgb(34, ' + gb + ', ' + gb + ')'
                $('#item5').css('background', rgb)
                if (gb > 34) {
                    gb = 34
                    $('#item5').css('background', rgb)
                    clearInterval(anim)
                }
            }, 15)
        }
    }


    function boost6Use() {
        if (boost6 > 0 && event1Use == false && event2Use == false && event3Use == false && use5 == false && use4 == false) {
            boost6--
            localStorage.setItem('boost6', boost6)
            $('#boost6Text').text(boost6)
            randomEvent = randomNumber(1, 3)
            if (randomEvent == 1) {
                glitchEvent1()
            }

            if (randomEvent == 2) {
                glitchEvent2()
            }

            if (randomEvent == 3) {
                glitchEvent3()
            }
        } else {
            gb = 0
            let anim = setInterval(function () {
                gb = gb + 1
                rgb = 'rgb(34, ' + gb + ', ' + gb + ')'
                $('#item6').css('background', rgb)
                if (gb > 34) {
                    gb = 34
                    $('#item6').css('background', rgb)
                    clearInterval(anim)
                }
            }, 15)
        }
    }




    function glitchEvent1() {
        event1Use = true
        combo += 100
        $('#combo').text(combo)
        comboMax = Infinity
        comboColor()
        setTimeout(() => {
            if (combo - 100 > 0) {
                combo -= 100
            } else {
                combo = 0
            }
            $('#combo').text(combo)
            comboMax = 3
            event1Use = false
            setTimeout(() => {
                comboColor()
            }, 1)
        }, 30000)
    }


    function glitchEvent2() {
        event2Use = true
        multiplier2 = randomNumber(50, 130)
        $('#multiplier2').text('x' + multiplier2)
        $('#multiplier2').fadeIn(150)
        root.style.setProperty('--multiplier2Color1', '#eeccee')
        root.style.setProperty('--multiplier2Color2', '#ffaaff')
    }


    function glitchEvent3() {
        event3Use = true
        root.style.setProperty('--item1Color', '#444422')
        setTimeout(function() {
            event3Use = false
            root.style.setProperty('--item1Color', '#222222')
        }, 40000)
    }





    function musicActivate() {
        randomMusic += 1
        if (randomMusic > 15) {
            randomMusic = 1
        }
        console.log(randomMusic)
        musicCollection[randomMusic - 1].play()

        if (randomMusic == 1) {
            $('#creatorAndName').text('Schematist - San Fran')
        }

        if (randomMusic == 2) {
            $('#creatorAndName').text('Purrple Cat - Flourish')
        }

        if (randomMusic == 3) {
            $('#creatorAndName').text('Purrple Cat - Bloom')
        }

        if (randomMusic == 4) {
            $('#creatorAndName').text('Le Gang - I Don’t Need U 2 Say Anything')
        }

        if (randomMusic == 5) {
            $('#creatorAndName').text('Ghostrifter - Subtle Break')
        }

        if (randomMusic == 6) {
            $('#creatorAndName').text('Ghostrifter - Morning Routine')
        }

        if (randomMusic == 7) {
            $('#creatorAndName').text('Ghostrifter - Hot Coffee')
        }

        if (randomMusic == 8) {
            $('#creatorAndName').text('BatchBug - Another Few Weeks')
        }

        if (randomMusic == 9) {
            $('#creatorAndName').text('Barradeen - you had me at hello')
        }

        if (randomMusic == 10) {
            $('#creatorAndName').text('Barradeen - walking together')
        }

        if (randomMusic == 11) {
            $('#creatorAndName').text('Barradeen - save my life again')
        }

        if (randomMusic == 12) {
            $('#creatorAndName').text('Barradeen - life with you')
        }

        if (randomMusic == 13) {
            $('#creatorAndName').text('Ethan Rebel - Fever Dream')
        }

        if (randomMusic == 14) {
            $('#creatorAndName').text('CARLA - Luvgut Lullaby')
        }

        if (randomMusic == 15) {
            $('#creatorAndName').text('Barradeen - emotional')
        }
    }


    function musicTurnOff() {
        musicCollection[randomMusic - 1].pause()
        musicCollection[randomMusic - 1].currentTime = 0

        $('#creatorAndName').text('')
    }


    function selectOffOrOn() {
        if (musicActive == false) {
            musicActive = true
            musicActivate()
        } else {
            musicActive = false
            musicTurnOff()
        }
    }



if (mobile) {
    fixCounterMobile()
} else {
    fixCounter()
}
})