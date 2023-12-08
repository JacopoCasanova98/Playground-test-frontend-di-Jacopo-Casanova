document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab-button');
    const loaderContainer = document.querySelector('.loader-container');
    const content = document.getElementById('content-tab');
    let activeTab = null;

    async function loadTabContent(tab) {
        loaderContainer.style.display = 'flex';

        if (tab !== activeTab) {
            if (activeTab) {
                activeTab.innerHTML = activeTab.textContent.replace('˄', '').replace('v', '') + ' ˄';
                activeTab.classList.remove('active-tab');
            }
            
            const originalText = tab.textContent.replace('˄', '').replace('v', '');
            tab.innerHTML = originalText + ' v';
            activeTab = tab;
            activeTab.classList.add('active-tab');
            
            tabs.forEach(t => {
                if (t !== activeTab) {
                    t.innerHTML = t.textContent.replace('˄', '').replace('v', '') + ' ˄';
                    t.classList.remove('active-tab');
                }
            });

            try {
                content.innerHTML = '';
                
                const response = await fetch(`./src/ajax/${tab.id}.json`);
                const data = await response.json();
                await new Promise(resolve => setTimeout(resolve, 1000));
                content.innerHTML = data.item.content.map(paragraph => `<p>${paragraph}</p>`).join('');
            } catch (error) {
                console.error('Errore nella chiamata AJAX:', error);
            } finally {
                loaderContainer.style.display = 'none';
            }
        } else {
            loaderContainer.style.display = 'none';
        }
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            loadTabContent(tab);
        });
    });
    loadTabContent(tabs[0]);
});
