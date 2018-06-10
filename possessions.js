var possessions = {
    seeds: {
        amount: 0,
        a: 0
    },
    ants: {
        amount: 0,
        differentCostTypes: 1,
        firstCostType: 'seeds',
        firstCostAmount: 50,
        firstStartingCost: 50
    },
    builders: {
        amount: 0,
        differentCostTypes: 2,
        firstCostType: 'ants',
        firstCostAmount: 1,
        firstStartingCost: 1,
        secondCostType: 'seeds',
        secondCostAmount: 500,
        secondStartingCost: 500
    }
};

var population = 0;

function harvest(type, amount) {
    for (var x in possessions) {
        if (type == x) {
            possessions[x].amount = possessions[x].amount + amount;
            updatePossessions();
        }
    }
}

function buy(type) {
    for (var x in possessions) {
        if ((type == x) && (possessions[x].differentCostTypes == 1)) {
            var differentCostTypes = possessions[x].differentCostTypes;
            var firstCostType = possessions[x].firstCostType;
            var firstCostAmount = possessions[x].firstCostAmount;
            var firstStartingCost = possessions[x].firstStartingCost;
        }
        else if ((type == x) && (possessions[x].differentCostTypes == 2)) {
            var differentCostTypes = possessions[x].differentCostTypes;
            var firstCostType = possessions[x].firstCostType;
            var firstCostAmount = possessions[x].firstCostAmount;
            var firstStartingCost = possessions[x].firstStartingCost;
            var secondCostType = possessions[x].secondCostType;
            var secondCostAmount = possessions[x].secondCostAmount;
            var secondStartingCost = possessions[x].secondStartingCost;
        }
    }

    if (differentCostTypes == 1) {
    for (var x in possessions) {
        if (firstCostType == x) {
            var firstCostCurrentAmount = possessions[x].amount;
        }
    }
    }
    else if (differentCostTypes == 2) {
        for (var x in possessions) {
            if (firstCostType == x) {
                var firstCostCurrentAmount = possessions[x].amount;
            }
            else if (secondCostType == x) {
                var secondCostCurrentAmount = possessions[x].amount;
            }
        }
    }

    if ((differentCostTypes == 1) && (firstCostCurrentAmount >= firstCostAmount)) {
        for (var x in possessions) {
            if (firstCostType == x) {
                possessions[x].amount = possessions[x].amount - firstCostAmount;
                updatePossessions();
            }
        }
    }
    else if ((differentCostTypes == 2) && (firstCostCurrentAmount >= firstCostAmount) && (secondCostCurrentAmount >= secondCostAmount)) {
        for (var x in possessions) {
            if (firstCostType == x) {
                possessions[x].amount = possessions[x].amount - firstCostAmount;
                updatePossessions();
            }
            else if (secondCostType == x) {
                possessions[x].amount = possessions[x].amount - secondCostAmount;
                updatePossessions();
            }
        }
    }
    else return;

    for (var x in possessions) {
        if (type == x) {
            possessions[x].amount = possessions[x].amount + 1;
            updatePossessions();
        }
    }

    if (differentCostTypes == 1) {
        calculateCost(type, firstCostType, 1);
    }
    else if (differentCostTypes == 2) {
        calculateCost(type, firstCostType, 1);
        calculateCost(type, secondCostType, 2);
    }

}

function calculateCost(resultType, costType, number) {
    for (var x in possessions) {
        if ((resultType == x) && (number == 1)) {
            possessions[x].firstCostAmount = Math.floor(possessions[x].firstStartingCost * Math.pow(1.1, possessions[x].amount));
            updatePossessions();
        }
        else if ((resultType == x) && (number == 2)) {
            possessions[x].secondCostAmount = Math.floor(possessions[x].secondStartingCost * Math.pow(1.1, possessions[x].amount));
            updatePossessions();
        }
    }
}

function updatePossessions() {
    document.getElementById('seeds').innerHTML = Math.round(possessions.seeds.amount);

    document.getElementById('ants').innerHTML = possessions.ants.amount;
    document.getElementById('firstAntsCost').innerHTML = possessions.ants.firstCostAmount;

    document.getElementById('builders').innerHTML = possessions.builders.amount;
    document.getElementById('firstBuildersCost').innerHTML = possessions.builders.firstCostAmount;
    document.getElementById('secondBuildersCost').innerHTML = possessions.builders.secondCostAmount;

    population = possessions.ants.amount;
    document.getElementById('population').innerHTML = population;
}