// box arr

const box = [{
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo pariatur inventore ab qui optio, quia cumque, at consequatur esse ad quibusdam doloribus,',
        author: 'James Kell',
    },
    {
        text: 'sunt exercitationem ipsa sapiente consequuntur est ut nostrum. Dolorem, ipsam? Sed repudiandae repellat saepe accusantium!',
        author: 'Key Born',
    },
    {
        text: ' recusandae, nobis temporibus perferendis debitis quaerat facere enim obcaecati explicabo voluptatum sit similique',
        author: 'Will Bond',
    },
    {
        text: 'explicabo voluptatum sit similique facilis ipsa quis alias officia ea repudiandae. Pariatur, minima ullam, ducimus nam voluptate iure dolorem labore',
        author: 'Samuel Lord',
    },
    {
        text: 'doloremque saepe delectus libero ex est eaque aliquam ipsa aspernatur nisi placeat. Et dignissimos',
        author: 'jim  Kerry',
    },
    {
        text: '  laudantium cumque rerum beatae est eius omnis, ratione doloribus?',
        author: 'Kerry Jim',
    },
]

//veriables
const btn = document.getElementById('myBtn')
const text = document.getElementById('myText')
const author = document.getElementById('myAuthor')

//events
btn.addEventListener('click', changeContent)

//function
function changeContent() {
    let random = Math.floor(Math.random() * box.length)
    text.textContent = box[random].text
    author.textContent = box[random].author
}