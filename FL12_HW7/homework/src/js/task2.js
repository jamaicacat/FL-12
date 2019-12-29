let randomPocketNumber, pickedPocket,
    minNumber = 0, maxNumber = 8, 
    leftAttemptsNumber, maxAttemptsNumber = 3,
    currentPrize = 0, totalPrize,
    level = 0, levelStep = 4, prizeCoefficient = 0, prizeStep = 2,
    playerWon = false, possiblePrize;
let prizesInfo = {
    max: 100,
    average: 50,
    min: 25
};
const firstAttempt = 1, secondAttempt = 2;

while (confirm('Do you want to play a game?')) {
        
        totalPrize = 0;
        randomPocketNumber = Math.floor(Math.random() * (maxNumber + 1));
        for (let i = 1; i <= maxAttemptsNumber; i++) {
            if (!playerWon) {
                if (i === firstAttempt) {
                    possiblePrize = prizesInfo.max;
                } else if (i === secondAttempt) {
                    possiblePrize = prizesInfo.average;
                } else {
                    possiblePrize = prizesInfo.min;
                }
                leftAttemptsNumber = maxAttemptsNumber - i;
                pickedPocket = +prompt(
`Choose a roulette pocket number from ${minNumber} to ${maxNumber}\n
Attempts left: ${leftAttemptsNumber}\n
Total Prize: ${totalPrize}$\n
Possible prize on current attempt: ${possiblePrize}$\n`);
                if (pickedPocket === randomPocketNumber) {
                    switch (i) {
                        case firstAttempt:
                            currentPrize = prizesInfo.max;
                            totalPrize += currentPrize;
                            playerWon = true;
                            break;
                        case secondAttempt:
                            currentPrize = prizesInfo.average;
                            totalPrize += currentPrize;
                            playerWon = true;
                            break;
                        default:
                            currentPrize = prizesInfo.min;
                            totalPrize += currentPrize;
                            playerWon = true;
                            break; 
                    }
                }
            }
        }
        if (playerWon) {
            while(confirm(`Congratulations, you won! Your prize is: ${totalPrize}$. Do you want to continue?`)) {
                playerWon = false;
                prizeCoefficient += prizeStep;
                maxNumber += levelStep;
                randomPocketNumber = Math.floor(Math.random() * maxNumber);
                for (let i = 1; i < maxAttemptsNumber; i++) {
                    if (!playerWon) {
                        if (i === firstAttempt) {
                            possiblePrize = prizesInfo.max * prizeCoefficient;
                        } else if (i === secondAttempt) {
                            possiblePrize = prizesInfo.average * prizeCoefficient;
                        } else {
                            possiblePrize = prizesInfo.min * prizeCoefficient;
                        }
                        leftAttemptsNumber = maxAttemptsNumber - i;
                        pickedPocket = +prompt(
`Choose a roulette pocket number from ${minNumber} to ${maxNumber}\n
Attempts left: ${leftAttemptsNumber}\n
Total Prize: ${totalPrize}$\n
Possible prize on current attempt: ${possiblePrize}$\n`);
                        if (pickedPocket === randomPocketNumber) {
                            switch (i) {
                                case firstAttempt:
                                    currentPrize = prizesInfo.max * prizeCoefficient;
                                    totalPrize += currentPrize;
                                    playerWon = true;
                                    break;
                                case secondAttempt:
                                    currentPrize = prizesInfo.average * prizeCoefficient;
                                    totalPrize += currentPrize;
                                    playerWon = true;
                                    break;
                                default:
                                    currentPrize = prizesInfo.min * prizeCoefficient;
                                    totalPrize += currentPrize;
                                    playerWon = true;
                                    break; 
                            }
                        } else if (i === maxAttemptsNumber) {
                            confirm(`Thank you for your participation. Your prize is: ${totalPrize} $`);
                        }
                    }
                }
            }
        }
        confirm(`Thank you for your participation. Your prize is: ${totalPrize} $`);
} 

alert('You did not become a billionaire, but can');
