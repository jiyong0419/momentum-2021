const quotes = [
    {
        quote:"매일 행복할 수는 없지만, 행복한 일들은 매일 있어",
        author:"애니메이션 - 곰돌이 푸中"
    },
    {
        quote:"이 작은 씨앗 안에 저렇게 큰 나무가 될 수 있는 모든게 있단다. 단지 시간이 조금 필요할 뿐이야",
        author:"애니메이션 - 벅스라이프中"
    },
    {
        quote:"난 절대 뒤를 돌아보지 않아. 그것은 지금으로부터 혼란을 줄 뿐이야",
        author:"애니메이션 - 인크래더블中"
    },
    {
        quote:"성공은 공짜로 주어지는게 아니야. 목표를 위해 무엇이든 할 수 있어야해",
        author:"애니메이션 - 코코中"
    },
    {
        quote:"과거는 상관없어. 아프긴 하겠지만 둘 중 하나야. 도망치던가, 극복하던가",
        author:"애니메이션 - 라이언킹中"
    },
    {
        quote:"매일, 매분, 매초 인생을 바꿀 수 있는 기회가 있어",
        author:"애니메이션 - 덤보中"
    },
    {
        quote:"얼마나 멀리 갈 수 있는지는 당신에게 달려있죠. 해보지 않는다면 절대 알 수 없을 거예요",
        author:"애니메이션 - 아서왕의 검中"
    },
    {
        quote:"네가 할 줄 아는것만 한다면, 넌 절대 지금보다 나아지지 못해",
        author:"애니메이션 - 쿵푸펜더中"
    },
    {
        quote:"힘내! 인생은 한 순간에 바뀌기도 하는 거니까",
        author:"애니메이션 - 신데렐라中"
    },
    {
        quote:"오늘은 당신의 남은 인생이 시작되는 첫째날입니다",
        author:"영화 - 비포선라이즈中"
    }
]
const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")
function quoteAuthor(){
    // const random = parseInt(Math.random()*10);
    // const random = Math.floor(Math.random()*quotes.length)
    // quote.innerText = `${quotes[random].quote}`
    // author.innerText = `${quotes[random].author}`
    const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
    quote.innerText = todaysQuote.quote;
    author.innerText = todaysQuote.author;
}
quoteAuthor();
setInterval(quoteAuthor,60000)

