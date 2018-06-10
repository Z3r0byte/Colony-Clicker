var research = {
    builderProfession: {
        unlocked: false,
        requirementType: 'population',
        requirementAmount: 20
    },
    a: {
        a: 1,
        b: 1
    }
};

function research(type) {
    for (var x in research) {
        if ((type == x) && (research[x].unlocked == false)) {
            var requirementType = research[x].requirementType;
            var requirementAmount = research[x].requirementAmount;
        }
        else if (type == x) {
            return;
        }
    }

    if ((requirementType == 'population') && (population < requirementAmount)) {
        return;
    }

    for (var x in research) {
        if (type == x) {
            research[x].unlocked = true;
        }
    }
}

