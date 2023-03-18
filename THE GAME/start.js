const inquirer = require('inquirer');
const Trainer = require('../classes/trainer.js');
const {
	Charmander,
	Squirtle,
	Bulbasaur,
	Rattata,
} = require('../classes/pokemonSpecies');
const Battle = require('../classes/fight');

const charmander = new Charmander(44, 17);
const squirtle = new Squirtle(45, 16);
const bulbasaur = new Bulbasaur(46, 15);
const rattata = new Rattata(42, 15);

function playerOneBuilder(playerOneName) {
	const playerOne = new Trainer(playerOneName);
	return playerOne;
}

let playerOneMessage = [
	{
		message: 'Ok, player One, what is your name?',
		type: 'input',
		name: playerOneBuilder,
	},
];
console.log(`\n
          /###########                                     ###########          
################################################################################
#########                       #################                      *########
 #######                          (###########                           #######
  #####.                           ###########                           ###### 
    ####                           ###    ####                           ####   
    ####                          ###(     ####                          ####   
     ####                        ###*       ####                        ####    
      ####                     ####          *####                     ####     
       ####,                ######             #####*                #####      
         ######,      .########                  *#######,      .#######        
             ##############                           #############(            
                                                                                
                                                                                
                 *####/                                    #####                
                ############*                        #############              
               ##################                ##################             
               ####################################################             
               ####################################################             
               ####################################################             
               ###################################################/             
               ################.                  ################              
                ###########                            ###########              
\n\n\n`);

console.log(
	`Welcome to my Pokemon battle simulator - The Dapper Nerd \n -------`
);

inquirer.prompt(playerOneMessage).then((answers) => {
	console.log(answers);
	console.log(`Welcome ${answers.name}`);
});
