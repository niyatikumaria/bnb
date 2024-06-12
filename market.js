document.addEventListener("DOMContentLoaded", function() {
    const chats = document.querySelectorAll('.chat');
    chats.forEach(chat => {
        chat.addEventListener('click', function() {
            chats.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            const chatName = this.textContent;
            const chatBody = document.querySelector('.chat-body');
            chatBody.textContent = `Display information about ${chatName}`;
        });
    });
});
