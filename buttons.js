function disableButton() {
    // Colony
    if (possessions.seeds.amount >= possessions.ants.firstCostAmount) {
        document.getElementById('buyAnts').classList.add('bigButton');
        document.getElementById('buyAnts').classList.remove('bigButtonDisabled');
    }
    else {
        document.getElementById('buyAnts').classList.add('bigButtonDisabled');
        document.getElementById('buyAnts').classList.remove('bigButton');
    }



    // Training Camp
   // if ((possessions.ants.amount >= possessions.builders.costAmount) && (possessions.seeds.amount >= possessions))



    // Research
    if ((population >= research.builderProfession.requirementAmount) && (research.builderProfession.unlocked == false)) {
        document.getElementById('researchBuilderProfession').classList.add('bigButton');
        document.getElementById('researchBuilderProfession').classList.remove('bigButtonDisabled');
    }
    else {
        document.getElementById('researchBuilderProfession').classList.add('bigButtonDisabled');
        document.getElementById('researchBuilderProfession').classList.remove('bigButton');
    }
}

