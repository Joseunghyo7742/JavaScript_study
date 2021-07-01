const quotes= [
    {quote:"Tomorrow hopes we have learned something from yesterday.",
    author:"John Wayne"
    },
    {quote:"To acquire knowledge, one must study; but to acquire wisdom, one must observe.",
    author:"Marilyn vos Savant"
    },
    {quote:"Work and acquire, and thou hast chained the wheel of Chance.",
    author:"Ralph Waldo Emerson"
    },
    {quote:"Opportunities are never lost. The other fellow takes those you miss.",
    author:"Unknown"
    },
    {quote:"Luck is the residue of design.",
    author:"Branch Rickey"
    },
    {quote:"I like to say that 'normal' is the cruelest insult of them all, and at least I never get that.",
    author:"Cruella"
    },
    {quote:"Indolence is a delightful but distressing state; we must be doing something to be happy.",
    author:"Mahatma Gandhi"
    },
    {quote:"Wheresoever you go, go with all your heart.",
    author:"Confucius"
    },
    {quote:"The biggest adventure you can ever take is to live the life of your dreams.",
    author:"Oprah Winfrey"
    },
    {quote:"Don't be afraid your life will end; be afraid that it will never begin.",
    author:"Grace Hansen"
    },
    {quote:"There are no great people in this world, only great challenges which ordinary people rise to meet.",
    author:"William Frederick Halsey, Jr."
    },
    {quote:"Never bend your head. Hold it high. Look the world straight in the eye.",
    author:"Helen Keller"
    },
    {quote:"You have to have confidence in your ability, and then be tough enough to follow through.",
    author:"Rosalynn Carter"
    },
];
const quote = document.querySelector("#quote span:first-child");
const author= document.querySelector("#quote span:last-child");

const todaysQuote= quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText= todaysQuote.quote;
author.innerText=todaysQuote.author;