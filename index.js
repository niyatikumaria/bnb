function loadContent(url) {
    fetch(url)
    .then(response => response.text())
    .then(html => {
        document.getElementById('content').innerHTML = html;
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
    })
    .catch(error => console.error('Error loading content:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const url = link.getAttribute('href');
            loadContent(url);
        });
    });
});

