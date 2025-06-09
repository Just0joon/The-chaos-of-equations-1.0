document.addEventListener('DOMContentLoaded', function () {
    const root = document.documentElement
    const input = '<input id="buy" value="Купить" type="button">'
    const br = '<br>'
    const p = '<p class="p">'
    const costP1 = '<p class="cost1">'
    const cP = '</p>'
    const h1 = '<h1 class="h1">'
    const h2 = '<h1 class="h2">'
    const h3 = '<h1 class="h3">'
    const h4 = '<h1 class="h4">'
    const h5 = '<h1 class="h5">'
    const h6 = '<h1 class="h6">'
    const cH1 = '</h1>'
    const count = '<p class="count" id="count">'
    const img = '<img src="xCoin.png" alt="error" class="costImg">'
    let mobile = false
    let product = 0
    let cash = parseInt(localStorage.getItem('cash'))
    let boost1 = parseInt(localStorage.getItem('boost1'))
    let boost2 = parseInt(localStorage.getItem('boost2'))
    let boost3 = parseInt(localStorage.getItem('boost3'))
    let boost4 = parseInt(localStorage.getItem('boost4'))
    let boost5 = parseInt(localStorage.getItem('boost5'))
    let boost6 = parseInt(localStorage.getItem('boost6'))


    if (window.innerWidth <= 768) {
			mobile = true
		}


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




    $('.a').click(function() {
        if (window.history.length > 1) {
            localStorage.setItem('cash', cash)
            localStorage.setItem('boost1', boost1)
            localStorage.setItem('boost2', boost2)
            localStorage.setItem('boost3', boost3)
            localStorage.setItem('boost4', boost4)
            localStorage.setItem('boost5', boost5)
            localStorage.setItem('boost6', boost6)
            window.history.go(-1)
            setTimeout(function() {
                location.reload()
            }, 1000)
        } else {
            localStorage.setItem('cash', cash)
            localStorage.setItem('boost1', boost1)
            localStorage.setItem('boost2', boost2)
            localStorage.setItem('boost3', boost3)
            localStorage.setItem('boost4', boost4)
            localStorage.setItem('boost5', boost5)
            localStorage.setItem('boost6', boost6)
            window.location = 'Equations Index.html'
            setTimeout(function() {
                location.reload()
            }, 1000)
        }
    })


    $('#i1').click(function() {
        product = 1
        cost = 10
        $('#block').html(
            h1 +
            'Билет удачи' +
            cH1 +
            br +
            p +
            'Испытай свою удачу. Можно использовать только если у тебя больше, чем -500 монет' +
            cP +
            '<input id="buy" value="Купить" type="button">' +
            count +
            boost1 +
            cP +
            costP1 +
            cost +
            cP +
            img
        )
    })


    $('#i2').click(function() {
        product = 2
        cost = 50
        $('#block').html(
            h2 +
            'Фишка 1.5' +
            cH1 +
            br +
            p +
            'Усиление, умножающее все получаемые монеты на 1.5 Время действия: ' +
            br +
            '2 минуты.' +
            cP +
            '<input id="buy" value="Купить" type="button">' +
            count +
            boost2 +
            cP +
            costP1 +
            cost +
            cP +
            img
        )
    })


    $('#i3').click(function() {
        product = 3
        cost = 125
        $('#block').html(
            h3 +
                'Парадокс #21' +
                cH1 +
                br +
                p +
                'Увеличивает время на таймере ' +
                br +
                '(5-13сек). Работает только в режиме спешки' +
                count +
                boost3 +
                cP +
                costP1 +
                cost +
                cP +
                img +
                input
        )
    })


    $('#i4').click(function() {
        product = 4
        cost = 250
        $('#block').html(
            h4 +
            'Комбо X' +
            cH1 +
            br +
            p +
            'Этот предмет увеличивает "макс. Комбо" до 15' +
            br +
            'Время действия: 2 минуты' +
            cP +
            count +
            boost4 +
            cP +
            costP1 +
            cost +
            cP +
            img +
            input
        )
    })


    $('#i5').click(function() {
        product = 5
        cost = 525
        $('#block').html(
            h5 +
            'Б. Шар' +
            cH1 +
            br +
            p +
            'Увеличивает прибыль от одного примера.' +
            br +
            'Множители:' +
            br +
            'от 10 до 50' +
            cP +
            count +
            boost5 +
            cP +
            costP1 +
            cost +
            cP +
            img +
            input
        )
    })


    $('#i6').click(function() {
        product = 6
        cost = 1750
        $('#block').html(
            h6 +
            '$% Глюк #!' +
            cH1 +
            br +
            p +
            'Случайным образом призывает 1 из 3 глюк-событий' +
            cP +
            count +
            boost6 +
            cP +
            costP1 +
            cost +
            cP +
            img +
            input
        )
    })


    $(document).on('click', '#buy', function() {
            if (cash >= cost) {
                if (product == 1) {
                    boost1 = boost1 + 1
                    localStorage.setItem('boost1', boost1)
                    $('#count').text(boost1)
                }
                if (product == 2) {
                    boost2 = boost2 + 1
                    localStorage.setItem('boost2', boost2)
                    $('#count').text(boost2)
                }
                if (product == 3) {
                    boost3 = boost3 + 1
                    localStorage.setItem('boost3', boost3)
                    $('#count').text(boost3)
                }

                if (product == 4) {
                    boost4 = boost4 + 1
                    localStorage.setItem('boost4', boost4)
                    $('#count').text(boost4)
                }

                if (product == 5) {
                    boost5 = boost5 + 1
                    localStorage.setItem('boost5', boost5)
                    $('#count').text(boost5)
                }

                if (product == 6) {
                    boost6 = boost6 + 1
                    localStorage.setItem('boost6', boost6)
                    $('#count').text(boost6)
                }

                cash = cash - cost
                localStorage.setItem('cash', cash)
                $('#cash').text(cash)
                fixCounter()
            }  else {
                let gb = 0
                let anim = setInterval(function() {
                        let rgb = 'rgb(255, ' + gb + ', ' + gb + ')'
                        gb = gb + 3
                        $('#cash').css('color', rgb)
                        if (gb > 255) {
                            gb = 255
                            $('#cash').css('color', rgb)
                            clearInterval(anim)
                        }
                }, 2)
            }
    })







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
    
    if (mobile) {
        fixCounterMobile()
    } else {
        fixCounter()
    }
})
