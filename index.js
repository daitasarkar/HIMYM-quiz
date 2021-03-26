var chalk=require("chalk");
var readlineSync=require("readline-sync");

var userName=readlineSync.question(chalk.yellow("What is your name "));
console.log(chalk.blue("Hello "+ userName+ " Welcome to HIMYM quiz!!!"))

var score=0;
function play(ques,ans)
{
var userAnswer=readlineSync.question(chalk.yellow(ques));
if(userAnswer.toUpperCase()===ans.toUpperCase())
  {
    console.log(chalk.blue("correct answer"))
    score++;
    console.log(chalk.green("current score: "+score))
  }
else
  {
    console.log(chalk.red("wrong answer"))
    score--;
    console.log(chalk.green("current score: "+score))
  }
  if(score===3)
    console.log("............................LEVEL 2............................")
  
  if(score===5)
    console.log("............................LEVEL 3............................")

  if(score===7)
    console.log("............................LEVEL 4............................")
  
}

var highestScore=[{
  name:"Robin",
  hscore:10
},
{
  name:"Ted",
  hscore:8
},
{
  name:"Barney",
  hscore:6
},
{
  name:"Lily",
  hscore:5
}];

var questionlist=[{
  question:"What’s the name of the bar where the friends hang out?",
  answer:"MacLaren's Pub"
},
{
  question:"Which company did Ted, Marshall and Barney all work for at one point?",
  answer:"Goliath National Bank"
},
{
  question:"What’s the name of the gang’s most familiar bartender?",
  answer:"Carl"
},
{
  question:"What instrument does Ted steal for Robin?",
  answer:"French horn"
},
{
  question:"Before Ted Tracy, which girl left him at the alter?",
  answer:"Stella"
},
{
  question:"What is Robin’s full legal name?",
  answer:"Robin Charles Scherbatsky"
},
{
  question:"What is the name of Robin’s pop star alter ego?",
  answer:"Robin Sparkles"
},
{
  question:"What’s the name of Lily and Marshall’s first son?",
  answer:"Marvin"
},
{ question:"Which character had a stripper doppelganger?",
  answer:"Lily"
},
{ question:"What color was Tracy’s umbrella?",
  answer:"Yellow"
},
];
console.log("............................LEVEL 1............................")
for(var i=0;i<questionlist.length;i++)
{
  play(questionlist[i].question,questionlist[i].answer)
}
console.log("........................GAME OVER..............................")

console.log(chalk.blue.bold("your final score is "+ score));

console.log(".......................HIGH SCORES.............................")

for(var i=0;i<highestScore.length;i++)
{
  console.log("Name: "+highestScore[i].name+" \tScore:  "+highestScore[i].hscore);
}

for(var i=0;i<highestScore.length;i++)
{
  if(score >= highestScore[i].hscore)
  {
    console.log("Congrats . You have beat the highest score. Send a screenshot so that your name can be inserted into the highest scores list!!!")
    break;
  }
}