document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // Allow default behavior for non-internal links or #
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Simple sticky header effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(2, 12, 27, 0.95)';
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
        } else {
            header.style.background = 'rgba(2, 12, 27, 0.8)';
            header.style.boxShadow = 'none';
        }
    });

    // Export function to global scope
    window.toggleChatbot = toggleChatbot;
});

function toggleChatbot() {
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotBubble = document.querySelector('.chatbot-bubble');
    
    if (chatbotWindow.style.display === 'flex') {
        chatbotWindow.style.display = 'none';
        chatbotBubble.style.display = 'block';
    } else {
        chatbotWindow.style.display = 'flex';
        chatbotBubble.style.display = 'none';
    }
}
