
const quotes = [
    { text: "“We are what our thoughts have made us so take care about what you think.”", author: "Swami Vivekananda" },
    { text: "“The strength of the nation lies in the homes of its people.”", author: "Sarojini Naidu" },
    { text: "“Be the change you wish to see in the world.”", author: "Mahatma Gandhi" },
    { text: "“Faith and strength go hand in hand.”", author: "The Iron Man of India" },
    { text: "“You are your best friend if you do what you love.”", author: "Ratan Tata" },
    { text: "“Dreams are not what you see in sleep; they are the things that do not let you sleep.”", author: "Dr. APJ Abdul Kalam" }
];  

function AllQuates() {
    const RandomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[RandomIndex];
}

function Quotescreen() {
    const quotename = document.getElementById('quote');
    const authorname = document.getElementById('author');
    const randomQuotename = AllQuates();

    quotename.textContent = randomQuotename.text;
    authorname.textContent = `~ ${randomQuotename.author}`;
}

document.getElementById('new-quote').addEventListener('click', Quotescreen);


Quotescreen();
