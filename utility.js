(function() {
    // 1. Create a container for our unblocked menu
    const menu = document.createElement('div');
    menu.id = 'unblocked-menu';
    
    // Style the menu to float cleanly on top of any webpage
    Object.assign(menu.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        width: '250px',
        backgroundColor: '#1e1e2e',
        color: '#cdd6f4',
        padding: '15px',
        borderRadius: '8px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
        zIndex: '999999',
        fontFamily: 'sans-serif',
        fontSize: '14px'
    });

    // 2. Add content and a close button
    menu.innerHTML = `
        <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-weight:bold;">
            <span>Utility Hub</span>
            <span id="close-hub" style="cursor:pointer; color:#f38ba8;">✕</span>
        </div>
        <hr style="border:0; border-top:1px solid #313244; margin-bottom:12px;">
        <button id="btn-about-blank" style="width:100%; padding:8px; margin-bottom:8px; border:0; background:#89b4fa; color:#11111b; border-radius:4px; cursor:pointer; font-weight:bold;">Open about:blank Tab</button>
        <button id="btn-edit-page" style="width:100%; padding:8px; border:0; background:#a6e3a1; color:#11111b; border-radius:4px; cursor:pointer; font-weight:bold;">Toggle Page Editing</button>
    `;

    document.body.appendChild(menu);

    // 3. Button Functionality
    // Close button logic
    document.getElementById('close-hub').onclick = () => menu.remove();

    // "about:blank" cloaking logic (opens a tab that network filters usually cannot track)
    document.getElementById('btn-about-blank').onclick = () => {
        const win = window.open();
        const iframe = win.document.createElement('iframe');
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        iframe.src = "https://google.com"; // Change to your target destination URL
        win.document.body.style.margin = "0";
        win.document.body.appendChild(iframe);
    };

    // Document edit logic (allows you to change text or delete annoying elements on a page)
    let editing = false;
    document.getElementById('btn-edit-page').onclick = (e) => {
        editing = !editing;
        document.designMode = editing ? 'on' : 'off';
        e.target.style.background = editing ? '#f9e2af' : '#a6e3a1';
        e.target.innerText = editing ? 'Stop Editing' : 'Toggle Page Editing';
    };
})();
