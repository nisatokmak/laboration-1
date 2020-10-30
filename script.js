function playGame() {

    var enterTheApartment = confirm ('You come home from a party and as soon as you open your apartment door, a giant monster is running towards you! Click OK if you want to be a hero and beat the monster. Otherwise leave the apartment by clicking cancel.');
    if (enterTheApartment== true) {
        //Enter the apartment
        alert('So brave! Now, in order to slay this monster we need a gun and of course an ammo box. Since you came home drunk you have no clue where you put them. Click OK to go to game rules.');
        alert('You have 3 rooms to choose between. One room has the ammo box and one another room has the gun. You hid them in two different rooms. Click OK to learn more about the rooms.');
        alert("Each room has 3 different possible locations where the items might be. If you can't find the items after passing 3 rooms, the monster throws you out from the window.");
        
        
        if (roomChoice === 'bedroom') {
            
            var locationChoice= prompt('There are 3 different locations in the bedroom which are: under the bed, wardrobe, dresser. Which one do you choose?');
            if (locationChoice == 'under the bed' || 'wardrobe');
                const choice2 = prompt('There was no item to be found there.The monster is approaching! You must move to the next room! Which room do you choose? Kitchen or living room?');
                if (choice2 == 'kitchen'){
                    prompt('There are 3 different locations in the kitchen which are: cupboard, storage cabin, oven. Which one do you choose?');
                    if (locationChoice=='cupboard'|| 'storage cabin' || 'oven'){
                        const goOn= confirm('There was no item to be found there.The monster is approaching! You must move to the next room! '); // Living room is left
                        if (goOn == true) {
                            prompt('There are 3 different locations in the living room which are: under the couch, behind the TV, bookcase. Which one do you choose?');
                            if (locationChoice == 'under the couch' || 'behind the TV') {
                                confirm(playAgain);
                                if(playAgain == true){
                                    playGame();
                                }else {
                                    alert("Goodbye coward!");
                                }
                            }else if (locationChoice == 'bookcase'){
                                const ammoFound= alert('A box of ammo was found!');
                                alert(ammoFound);
                                prompt('Which room do you want to go to next? Kitchen or living room?')
                                if (roomChoice== 'kitchen') {
                                    prompt('There are 3 different locations in the kitchen which are: cupboard, storage cabin, oven. Which one do you choose?');
                                    if (locationChoice== 'cupboard'|| 'storage cabin' || 'oven') {
                                        confirm(playAgain);
                                        if(playAgain == true){
                                        playGame();
                                        }else {
                                        alert("Goodbye coward!");
                                        }
                                    }
                                } else if (locationChoice == 'living room'){
                                    prompt('There are 3 different locations in the living room which are: under the couch, behind the TV, bookcase. Which one do you choose?');
                                    if (locationChoice = 'under the couch' || 'behind the TV' ){
                                        confirm(playAgain);
                                        if(playAgain == true){
                                        playGame();
                                        }else {
                                        alert("Goodbye coward!");
                                        }
                                    } else if (locationChoice == 'bookcase') {
                                        const ammoFound= alert('A box of ammo was found!');
                                        alert(ammoFound);
                                    }
                                }else {
                                    alert('Choose a valid location!');
                                }  
                            }else {
                                alert('Choose a valid location!');
                            }
                        }else{
                            alert('Goodbye coward!');
                        }
                    }else {
                        alert('Choose a valid location!');
                    }
                }else if (choice2== 'living room') {
                    prompt('There are 3 different locations in the living room which are: under the couch, behind the TV, bookcase. Which one do you choose?');
                    if (locationChoice == 'under the couch' || 'behind the TV') {
                        const goOn= confirm('There was no item to be found there.The monster is approaching! You must move to the next room! ');
                        if (goOn == true) {
                            prompt('There are 3 different locations in the bedroom which are: under the bed, warderobe, drawer. Which one do you choose?');
                            if (locationChoice == 'under the bed' || 'warderobe') {
                                if(playAgain == true){
                                    playGame();
                                }else {
                                    alert("Goodbye coward!");
                                }
                            }else if (locationChoice == 'drawer'){
                                const ammoFound= alert('A box of ammo was found!');
                                alert(ammoFound);
                            }else {
                                alert('Choose a valid location!');
                            }
                        }else{
                            alert('Goodbye coward!');
                        }
                        
                    }
                }
            } else if (locationChoice== 'dresser') {
                const gunFound = alert('A gun was found!');
                alert(gunFound);
            } else {
                alert('Choose a valid location!');
            }
        }else if (roomChoice == 'kitchen') {
            prompt('There are 3 different locations in the kitchen which are: cupboard, storage cabin, oven. Which one do you choose?');
            if (locationChoice == 'cupboard'|| 'storage cabin' || 'oven') {
                const choice2 = prompt('There was no item to be found there.The monster is approaching! You must move to the next room! Which room do you choose? Bedroom or living room?');
                if (choice2 == 'living room') {
                    prompt('There are 3 different locations in the living room which are: under the couch, behind the TV, bookcase. Which one do you choose?');
                    if (locationChoice == 'under the couch' || 'behind the TV') {
                        const goOn= confirm('There was no item to be found there.The monster is approaching! You must move to the next room! '); 
                        if (goOn == true) {
                            prompt('There are 3 different locations in the bedroom which are: under the bed, warderobe, drawer. Which one do you choose?');
                            if (locationChoice == 'under the bed' || 'warderobe') {
                                if(playAgain == true){
                                    playGame();
                                }else {
                                    alert("Goodbye coward!");
                                }
                            }else if (locationChoice == 'drawer'){
                                const ammoFound= alert('A box of ammo was found!');
                                alert(ammoFound);
                            }else {
                                alert('Choose a valid location!');
                            }
                        } else {
                            alert('Goodbye coward!');
                        }
                    }
                }else if (choice2 == 'bedroom') {
                    prompt('There are 3 different locations in the bedroom which are: under the bed, warderobe, drawer. Which one do you choose?');
                            if (locationChoice == 'under the bed' || 'warderobe') {
                                if(playAgain == true){
                                    playGame();
                                }else {
                                    alert("Goodbye coward!");
                                }
                            }else if (locationChoice == 'drawer'){
                                const ammoFound= alert('A box of ammo was found!');
                                alert(ammoFound);
                            }else {
                                alert('Choose a valid location!');
                            }
                } else {
                    alert('Choose a valid room!');
                }
            }else {
                alert ('Choose a valid location!');
            }
        } else if (roomChoice == 'living room') {
            prompt('There are 3 different locations in the living room which are: under the couch, behind the TV, bookcase. Which one do you choose?');
            if (locationChoice == 'under the couch' || 'behind the TV') {
                confirm(playAgain);
                if(playAgain == true){
                    playGame();
                }else {
                    alert("Goodbye coward!");
                }
            }else if (locationChoice == 'bookcase'){
                const ammoFound= alert('A box of ammo was found!');
                alert(ammoFound);
            } else {
                alert('Choose a valid location!');
            }   
        } else {
            alert('Choose a valid room!'); 
        } 
        
        
    } else {
        // we chose not to enter the apartment
        alert('You missed what was waiting for you!');
        var playAgain = confirm("You ran out of options! Dou you want to try again?");
        if(playAgain == true){
            playGame();
        }else {
            alert("Goodbye coward!");
        }
    }
    
    if (gunFound==true && ammoFound == true){
        alert('Congratulations! You slayed the monster!');
    }else if (gunFound !=true || ammoFound !=true){
        alert ('Oh no! The monster threw you from the window!');
    }
}

playGame();
                                

            
            
            
            
            
            


