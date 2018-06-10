var currentTab = 'colony';

function changeTab(tab) {
    if (tab == currentTab) {
        return;
    }

    currentTab = tab;

    if (tab == 'colony') {
        document.getElementById('colony').style.display = 'block';
        document.getElementById('colonyButton').classList.add('buttonDisabled');
        document.getElementById('colonyButton').classList.remove('button');

        document.getElementById('trainingCamp').style.display = 'none';
        document.getElementById('trainingCampButton').classList.add('button');
        document.getElementById('trainingCampButton').classList.remove('buttonDisabled');

        document.getElementById('research').style.display = 'none';
        document.getElementById('researchButton').classList.add('button');
        document.getElementById('researchButton').classList.remove('buttonDisabled');
    }
    else if (tab == 'trainingCamp') {
        document.getElementById('colony').style.display = 'none';
        document.getElementById('colonyButton').classList.add('button');
        document.getElementById('colonyButton').classList.remove('buttonDisabled');

        document.getElementById('trainingCamp').style.display = 'block';
        document.getElementById('trainingCampButton').classList.add('buttonDisabled');
        document.getElementById('trainingCampButton').classList.remove('button');

        document.getElementById('research').style.display = 'none';
        document.getElementById('researchButton').classList.add('button');
        document.getElementById('researchButton').classList.remove('buttonDisabled');
    }
    else if (tab == 'research') {
        document.getElementById('colony').style.display = 'none';
        document.getElementById('colonyButton').classList.add('button');
        document.getElementById('colonyButton').classList.remove('buttonDisabled');

        document.getElementById('trainingCamp').style.display = 'none';
        document.getElementById('trainingCampButton').classList.add('button');
        document.getElementById('trainingCampButton').classList.remove('buttonDisabled');

        document.getElementById('research').style.display = 'block';
        document.getElementById('researchButton').classList.add('buttonDisabled');
        document.getElementById('researchButton').classList.remove('button');
    }
}

window.setInterval(function() {
    harvest('seeds', (possessions.ants.amount / 100));
    disableButton();
}, 10);