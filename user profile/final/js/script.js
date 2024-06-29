let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}

// ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////


const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Variable to store user's message
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="fa-solid fa-robot"></span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; // return chat <li> element
}

const generateResponse = (userMessage) => {
    let botMessage = "";
    if (userMessage.includes("hi") || userMessage.includes("hello")) {
        botMessage = "Hello! How can I assist you with your learning today?";
    } else if (userMessage.includes("help with geometry")) {
        botMessage = "Sure, what specifically do you need help with in geometry?";
    } else if (userMessage.includes("explain pythagoras theorem")) {
        botMessage = "The Pythagorean Theorem states that in a right triangle, the square of the length of the hypotenuse is equal to the sum of the squares of the lengths of the other two sides.";
    } else if (userMessage.includes("history of rome")) {
        botMessage = "The history of Rome is vast, but it famously begins with its founding by Romulus and Remus in 753 BC and spans through the rise and fall of the Roman Empire.";
    } else if (userMessage.includes("who was cleopatra")) {
        botMessage = "Cleopatra was the last active ruler of the Ptolemaic Kingdom of Egypt. She is known for her intelligence, political acumen, and romantic relationships with Julius Caesar and Mark Antony.";
    } else if (userMessage.includes("photosynthesis")) {
        botMessage = "Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods from carbon dioxide and water. Photosynthesis in plants generally involves the green pigment chlorophyll and generates oxygen as a byproduct.";
    } else if (userMessage.includes("mitosis")) {
        botMessage = "Mitosis is a process where a single cell divides into two identical daughter cells (cell division). It's crucial for growth, repair, and reproduction in organisms.";
    } else if (userMessage.includes("einstein's theory")) {
        botMessage = "Einstein's theory of relativity actually includes both his Special and General theories. Special relativity introduced the famous equation E=mc², and general relativity explains gravity as a warping of space-time by mass.";
    } else if (userMessage.includes("integral calculus")) {
        botMessage = "Integral calculus is a part of mathematics that deals with integrals, especially the methods of determining indefinite integrals and applying them to solve problems involving areas, volumes, and lengths.";
    } else if (userMessage.includes("study tips")) {
        botMessage = "Make sure to review your notes regularly, practice past papers, and don't hesitate to ask for help when needed. Breaks and a balanced study plan are also crucial!";
    } else if (userMessage.includes("french revolution")) {
        botMessage = "The French Revolution was a period of radical social and political upheaval in France that lasted from 1789 until 1799, and led to the rise of Napoleon Bonaparte.";
    } else if (userMessage.includes("atomic structure")) {
        botMessage = "An atom consists of a nucleus containing neutrons and protons, with electrons orbiting this nucleus. This structure is fundamental to understanding chemical and physical properties of matter.";
    } else if (userMessage.includes("quadratic equation")) {
        botMessage = "A quadratic equation is a second-degree polynomial equation in a single variable x, with a formula ax² + bx + c = 0 where a, b, and c are constants.";
    } else if (userMessage.includes("climate change")) {
        botMessage = "Climate change refers to significant changes in global temperatures and weather patterns over time. Today it is largely driven by human activities, particularly fossil fuel burning which increases greenhouse gas levels in the earth's atmosphere.";
    } else if (userMessage.includes("golden ratio")) {
        botMessage = "The golden ratio is a special number approximately equal to 1.618. It appears frequently in geometry, art, architecture, and nature.";
    } else if (userMessage.includes("world war ii")) {
        botMessage = "World War II was a global war that lasted from 1939 to 1945, involving most of the world’s nations. It was the most widespread war in history and directly involved more than 100 million people from over 30 countries.";
    } else if (userMessage.includes("evolution theory")) {
        botMessage = "The theory of evolution by natural selection, first formulated in Darwin's book 'On the Origin of Species' in 1859, is the process by which organisms change over time as a result of changes in heritable physical or behavioral traits.";
    } else if (userMessage.includes("plate tectonics")) {
        botMessage = "Plate tectonics is a scientific theory that describes the large-scale motion of Earth's lithosphere. This theory explains the features and movements of the Earth's surface in the present and the past.";
    } else if (userMessage.includes("nervous system")) {
        botMessage = "The nervous system is the part of an animal's body that coordinates its actions and transmits signals to and from different parts of its body. It's essentially the body's electrical wiring.";
    } else if (userMessage.includes("molecular biology")) {
        botMessage = "Molecular biology is the branch of biology that concerns the molecular basis of biological activity, focusing on the interactions between the various systems of a cell, including the interactions between DNA, RNA, and protein synthesis and learning how these interactions are regulated.";
    } else {
        botMessage = "I'm not sure how to help with that. Can you try asking something else?";
    }


    // Remove the thinking message after a delay
    setTimeout(() => {
        const incomingChatLi = createChatLi(botMessage, "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
    }, 2000); // Wait for 2 seconds before showing the response
}

const handleChat = () => {
    userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
    if (!userMessage) return;

    // Clear the input textarea and set its height to default
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Append the user's message to the chatbox
    const outgoingChatLi = createChatLi(userMessage, "outgoing");
    chatbox.appendChild(outgoingChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);

    // Display "Thinking..." message temporarily
    const thinkingChatLi = createChatLi("Thinking...", "incoming");
    chatbox.appendChild(thinkingChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        // Remove the thinking message before displaying the actual response
        chatbox.removeChild(thinkingChatLi);
        generateResponse(userMessage);
    }, 1500); // Thinking message shows for 1.5 seconds
}

chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    // If Enter key is pressed without Shift key and the window 
    // width is greater than 800px, handle the chat
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
