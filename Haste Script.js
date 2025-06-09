document.addEventListener('DOMContentLoaded', function () {
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
    let cashY = new Decimal(665)
    let timerActive = false
    let use1 = false
    let use2 = false
    let use3 = false
    let use4 = false
    let use5 = false
    let event1Use = false
    let event2Use = false
    let event3Use = false
    let minWidth = '116px'
    let indent = '102px'
    let combo = 0
    let multiplier = 1
    let multiplier2 = 0
    let comboTimer = 0
    let interval = false
    let intervalEq = false
    let eqClass = 0
    let difficulty = 0
    let comboMax = 3


    if (window.innerWidth <= 768) {
        mobile = true
    }


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
    })




    for (let i = 0; i < musicCollection.length; i++) {
        musicCollection[i].addEventListener('ended', musicActivate);
    }





    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
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




    function checkAnswer() {
        let playerAnswer = $('#answer').val()
        use5 = false
        event2Use = false
        if (intervalEq == false) {
        if(playerAnswer == answer) {
            if (mobile) {
                width = width.add(new Decimal(2).mul(4.5))
                sec = sec.add(new Decimal(2))
            } else {
            width = width.add(new Decimal(2).mul(9))
            sec = sec.add(new Decimal(2))
            }
            comboTimer = comboTimer + 1
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
                    rb = rb + 6
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
            if (mobile) {
                width = width.sub(4.5 * 2)
                sec = sec.sub(2)
            } else {
                width = width.sub(9 * 2)
                sec = sec.sub(2)
            }
            combo = 0
            $("#combo").text(combo)
            rg = 0

            redFunction = setInterval(function() {
                    let rgb = "rgb(255, " + rg + ', ' + rg + ')' 
                    $("#eq").css('color', rgb)
                    rg = rg + 6
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
        cash = cash + Math.round(difficulty * multiplier + difficulty * multiplier2) + combo + Math.floor(comboTimer / 10)
        } else {
        cash = cash + Math.round(difficulty * multiplier + difficulty * multiplier2)  + comboMax + Math.floor(comboTimer / 10)
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
        use1 = true
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
                cashY = new Decimal(665)
                opacity = new Decimal(1.0)
                use1 = false
            }
        }, 10)
    }


    $("#start").click(function() {
        if(mobile) {
            selectClass()
            startTimerMobile()
        } else {
        selectClass()
        startTimer()
        }
    })


    $('#check').click(checkAnswer)


    $("#class1").click(function() {
        eqClass = 1
    })


    $("#class2").click(function() {
        eqClass = 2
    })


    $("#class3").click(function() {
        eqClass = 3
    })


    $('#classic').click(function() {
        localStorage.setItem('cash', cash)
        localStorage.setItem('boost1', boost1)
        localStorage.setItem('boost2', boost2)
        localStorage.setItem('boost3', boost3)
        window.location.href = 'Equations Index.html'
    })


    $('.gridInp').click(function() {
        if (interval == false) {
        blueAnim(this)
        }
    })


    $('#questions').click(function() {
        window.location.href = 'Questions Index.html'
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
            if (event3Use == false && use1 == true || boost1 <= 0 || cash < -500) {
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
            } else if (event3Use == true && use1 == true || boost1 <= 0 || cash < -500) {
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
        if (boost3 > 0 && timerActive == true && use3 == false) {
            use3 = true
            let random = randomNumber(5, 13)
            opacityTime = new Decimal(1.0)
            y = new Decimal(677.5)
            $('body').append('<p class="flyTimeBonus">' + '+' + random + 's' + '</p>')
            boost3 = boost3 - 1
            $('#boost3Text').text(boost3)
            width = width.add(random * 9)
            sec = sec.add(random)
            let drawFlyTime = setInterval(function() {
                y = y.add(0.2)
                yPx = y + 'px'
                opacityTime = opacityTime.sub(0.015)
                root.style.setProperty('--bottomTime', yPx)
                root.style.setProperty('--timeOpacity', opacityTime)
                if (opacityTime < 0.001) {
                    $('.flyTimeBonus').remove()
                    clearInterval(drawFlyTime)
                    $('#body2').html('')
                    root.style.setProperty('--bottomTime', yPx)
                    root.style.setProperty('--timeOpacity', opacityTime)
                    y = new Decimal(677.5)
                    opacity = new Decimal(1.0)
                    use3 = false
                }   
            }, 10)
        }
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
        if (use5 == false && event2Use == false && boost5 > 0) {
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
            randomEvent = randomNumber(3, 3)
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





    function startTimer() {
        if (eqClass != 0) {
            if (timerActive == false) {
                timerActive = true
                $('#body').html(
                    '<div id="timerBox"><p id="timerCounter">30s</p><div id="line1"></div><div id="line2"></div></div>'
                )
                sec = new Decimal(30)
                width = new Decimal(270)
                sub = new Decimal(0.9)
                let drawWidth = setInterval(function() {
                    width = width.sub(sub)
                    let widthPx = width + 'px'
                    root.style.setProperty('--line-width', widthPx)
                    if (width < 0) {
                        clearInterval(drawWidth)
                        clearInterval(secCounter)
                        $('#eq').text('-----')
                        eqClass = 0
                        comboTimer = 0
                        timerActive = false
                        $('#body').html('')
                    }
                }, 100)

                let secCounter = setInterval(function() {
                    sec = sec.sub(0.1)
                    $('#timerCounter').text(sec + 's')
                }, 100)
            }
        }
    }

    function startTimerMobile() {
        if (eqClass != 0) {
            if (timerActive == false) {
                timerActive = true
                $('#body').html(
                    '<div id="timerBox"><p id="timerCounter">30s</p><div id="line1"></div><div id="line2"></div></div>'
                )
                sec = new Decimal(30)
                width = new Decimal(135)
                sub = new Decimal(0.45)
                let drawWidth = setInterval(function () {
                    width = width.sub(sub)
                    let widthPx = width + 'px'
                    root.style.setProperty('--line-width', widthPx)
                    if (width < 0) {
                        clearInterval(drawWidth)
                        clearInterval(secCounter)
                        $('#eq').text('-----')
                        eqClass = 0
                        comboTimer = 0
                        timerActive = false
                        $('#body').html('')
                    }
                }, 100)

                let secCounter = setInterval(function () {
                    sec = sec.sub(0.1)
                    $('#timerCounter').text(sec + 's')
                }, 100)
            }
        }
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
