
const game = () => {
    let number = Math.floor(Math.random() * 98) + 2;

    const gameUser = () => {
        let numberUser = prompt('Угадай число от 1 до 100');
        if (numberUser === null) {
            alert("Игра окончена"); 
        } else {
            numberUser = +numberUser
        }

        if (isNaN(numberUser)) {
            alert ('Введи число!');
            gameUser();
        } else if (numberUser > number) {
            alert ('Загаданное число меньше');
            gameUser();
        } else if (numberUser < number) {
            alert ('Загаданное число больше');
            gameUser();
        } else if (numberUser == number) {
            alert ('Поздравляю, Вы угадали!!!');
        }
    };

    gameUser();
};

game();


