function filterQuestions() {
    const input = document.getElementById('search')
    const filter = input.value.toLowerCase()
    const questions = document.querySelectorAll('.question')


    questions.forEach(question => {
        const text = question.textContent || question.innerText
        if (text.toLowerCase().includes(filter)) {
            question.style.display = ''
        } else {
            question.style.display = 'none'
        }
    })
}

document.addEventListener('DOMContentLoaded', function () {
    const h1 = '<h1 id="h1">'
    const cH1 = '</h1>'
    const p = '<p>'
    const cP = '</p>'
    const br = '<br>'
    const ul = '<ul>'
    const cUl = '</ul>'
    const ol = '<ol>'
    const cOl = '</ol>'
    const li = '<li>'
    const cLi = '</li>'
    const a1 = '<a href="https://www.youtube.com/@ncsmusic4653">данного канала</a>'
    const a2 = '<a href="https://www.youtube.com/playlist?list=PLnL4Q4Gcs6-00Plpa8zwp8sleETZSeyv_" class="bottomRightA">Плейлист, музыку из которого я брал</a>'



    $('.a').click(function() {
        if (window.history.length > 1) {
        window.history.go(-1)
        } else {
            window.location = 'Equations Index.html'
        }
    })


    $('#questionCash').click(function() {
        $('#info').html(
            h1 + 
            'Как считается зарплата?' + 
            cH1 +
            br + 
            p + 
            'Твоя получаемая прибыль в классике исчисляется по формуле w + round(d * m1 + d * m2) + c,' +
            ' где w = твое количество монет; d = сложность; m1 = множитель от фишек (изначально он равен 1); m2 = множитель от "Б. шара" или 2-ого глюк-события;' + 
            'c = комбо, если оно меньше 4 ' + 
            '(при использовании предмета "комбо X" число увеличивается),' + 
            ' а иначе c приравнивается 3.' + 
            cP + 
            br + 
            p + 
            'В режиме спешки такая же формула, но добавляется компонент t, который равен невидимому комбо, которое делится на 10 и округляется до большего.' +
            'То есть t = floor(c / 10). ' +
            br +
            'Формула: w + round(d * m) + c + floor(t / 10)' +
            cP)
    })


    $('#questionComboX').click(function() {
        $('#info').html(
            h1 +
            'Как работает "Комбо X"?' +
            cH1 +
            br +
            p +
            'Предмет "Комбо X" увеличивает максимальное добавление от комбо до 15 (изначально максимальное добавление равно 3).' +
            cP
        )
    })


    $('#questionChance').click(function() {
        $('#info').html(
            h1 +
            'Какие шансы у "Билета удачи"? ' +
            cH1 +
            br +
            p +
            '-1000 — 1,5%' +
            br +
            '-100 — 13,5%' + 
            br +
            '-10 — 30%' +
            br + 
            '0 — 40%' +
            br +
            '+10 — 10%' +
            br +
            '+100 — 4,5%' +
            br +
            '+1000 — 0,5%' +
            cP
        )
    })


    $('#questionHaste').click(function() {
        $('#info').html(
            h1 +
            'Как работает спешка?' +
            cH1 +
            br +
            p +
            'В режиме спешки при старте у тебя есть 30 секунд. Каждый правильный ответ добавляет на таймер 2 секунды, ' +
            'а каждый неправильный отнимает 2 секунды.' +
            'У режима спешки есть уникальный предмет "Парадокс #21", который добавляет к таймеру от 5 до 13 секунд.' +
            'Максимальное время, которое может быть на таймере — 60 секунд.' +
            cP
        )
    })


    $('#questionKeys').click(function() {
        $('#info').html(
            h1 +
            'Какие есть горячие клавиши? ' +
            cH1 +
            br +
            p +
            'w / Enter — проверить ответ' +
            br +
            'e / Shift — фокус на поле для ввода' + 
            br +
            'q / Ctrl — начать' +
            br + 
            'z — Буст 1' +
            br +
            'x — Буст 2' +
            br +
            'c — Буст 3' +
            br +
            'v — Буст 4' +
            br +
            'b — Буст 5' +
            br +
            'n — Буст 6' +
            cP
        )
    })


    $('#questionExample').click(function() {
        $('#info').html(
            h1 +
            'Какие сложности у примеров' +
            cH1 +
            br +
            p +
            '1 класс {' +
            br +
            'Все примеры - 1' +
            br +
            '}' +
            br +
            br +
            '2 класс {' +
            br +
            'Все примеры - 2' +
            br +
            '}' +
            br +
            br +
            '3 класс {' +
            br +
            'Вычитание и сложение - 3' +
            br +
            'Деление и умножение - 5' +
            br +
            '}' +
            br +
            br +
            '4 класс {' +
            br +
            'Вычитание и сложение - 4' +
            br +
            'Деление и умножение - 7' +
            br +
            '}' +
            br +
            br +
            '5 класс {' +
            br +
            'Деление и умножение - 9' +
            br +
            '"(x + или - _) + или - _"  - 12' +
            br +
            '"(x * или : _) * или : _"  - 14' +
            br +
            "Сложение десятичных дробей - 14" +
            br +
            "Вычитание десятичных дробей - 15" +
            br +
            "Умножение десятичных дробей - 18" +
            br +
            "Деление десятичных дробей - 19" +
            br +
            'Сочетательные уравнения - 11' +
            br +
            '}' +
            cP
        ) 
    })


    $('#questionGlitch').click(function() {
        $('#info').html(
            h1 +
            'Как работает "$% Глюк #!"?' +
            cH1 +
            br +
            p +
            'Предмет "$% Глюк #!" выбирает 1 из 3 глюк-событий имеющих слабый баланс в экономике.' +
            br +
            br +
            'Событие 1:' +
            br +
            'Максимальное комбо повышается до бесконечности на 30 сек и твое комбо увеличивается на 100. ' +
            'После окончания события твое комбо уменьшается на 100, но только если ты его не терял и максимальное комбо уменьшается до 3.' +
            br +
            br +
            'Событие 2:' +
            br +
            'Задает один моментальный множитель от 50 до 130' +
            br +
            br +
            'Событие 3:' +
            br +
            'Увеличиваются шансы выпадения хорошей прибыли в "Билете удачи":' +
            br +
            '0 — 30%' +
            br +
            '+10 — 25%' +
            br +
            '+100 — 25%' +
            br +
            '+1000 — 15%' +
            br +
            '+2500 — 5%' +
            cP
        ) 
    })

    $('#questionMusic').click(function() {
        $('#info').html(
            h1 +
            'Какая музыка на сайте?' +
            cH1 +
            br +
            p +
            'На сайте присутствует музыка стиля Lo-Fi, взятая с ' +
            a1 +
            br +
            'Список использованной музыки:' +
            ol +
            li + "Schematist - San Fran" + cLi +
            li + "Purrple Cat - Flourish" + cLi +
            li + "Purrple Cat - Bloom" + cLi +
            li + "Le Gang - I Don’t Need U 2 Say Anything" + cLi +
            li + "Ghostrifter - Subtle Break" + cLi +
            li + "Ghostrifter - Morning Routine" + cLi +
            li + "Ghostrifter - Hot Coffee" + cLi +
            li + "BatchBug - Another Few Weeks" + cLi +
            li + "Barradeen - you had me at hello" + cLi +
            li + "Barradeen - walking together" + cLi +
            li + "Barradeen - save my life again" + cLi +
            li + "Barradeen - life with you" + cLi +
            li + "Ethan Rebel - Fever Dream" + cLi +
            li + "CARLA - Luvgut Lullaby" + cLi +
            li + "Barradeen - emotional" + cLi +
            cOl +
            br +
            a2 +
            cP
        )
    })
})
