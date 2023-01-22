var numby = 0;

function functionPerevirka() {
    let valueOfInpPassword = [];
    let valueOfInpEm = [];
    let valueOfInpNam = [];
    valueOfInpPassword = Array.from($('#passwordInp').val())
    valueOfInpEm = Array.from($('#emailInp').val())
    valueOfInpNam = Array.from($('#nameInp').val())
    if (valueOfInpPassword.length <= 7 || valueOfInpEm.length == '' || valueOfInpNam == '') {
        $('#passwordInp').css("border", "2px solid rgba(255, 0, 0 , 1)")
        $('#emailInp').css("border", "2px solid rgba(255, 0, 0 , 1)")
        $('#nameInp').css("border", "2px solid rgba(255, 0, 0 , 1)")
        $('#sendForm').mousemove(function () {
            // $('#sendForm').css('left', Math.floor(Math.random()*10) + '%')
            let numb = Math.floor(Math.random() * 2)
            if (numb == 1) {
                $('#sendForm').css('margin-left', '70%')
                numby = 70
            } else {
                $('#sendForm').css('margin-left', '-70%')
                numby = 70
            }

        })
    } else {
        $('#passwordInp').css("border", "2px solid rgb(89, 119, 255)")
        $('#emailInp').css("border", "2px solid rgb(89, 119, 255)")
        $('#nameInp').css("border", "2px solid rgb(89, 119, 255)")
        $('#sendForm').css('display', 'flex')
        $('#sendForm').css('background-color', 'rgb(0, 130, 11)')
        $('#sendForm').mousemove(function () {
            $('#sendForm').css('display', 'flex')
            $('#sendForm').css('margin-left', numby + '%')
        })
    }
}



$('#sendForm').mousemove(function () {
    let valueOfInp = [];
    let valueOfInpE = [];
    let valueOfInpN = [];
    valueOfInpE = Array.from($('#emailInp').val())
    valueOfInpN = Array.from($('#nameInp').val())
    valueOfInp = Array.from($('#passwordInp').val())
    if (valueOfInp.length <= 7 || valueOfInpE.length == '' || valueOfInpN == '') {
        $('#passwordInp').css("border", "2px solid rgba(255, 0, 0 , 1)")
        $('#nameInp').css("border", "2px solid rgba(255, 0, 0 , 1)")
        $('#emailInp').css("border", "2px solid rgba(255, 0, 0 , 1)")
        // $('#sendForm').css('left', Math.floor(Math.random()*10) + '%')
        let numb = Math.floor(Math.random() * 2)
        if (numb == 1) {
            $('#sendForm').css('margin-left', '70%')
            numby = 70
        } else {
            $('#sendForm').css('margin-left', '-70%')
            numby = 70
        }
    }
})
