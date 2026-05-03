(function() {
    const suiteNav = document.createElement('div');
    suiteNav.id = 'global-suite-nav';
    
    const path = window.location.pathname;
    let rootPath = './';
    if (path.includes('/finance/') || path.includes('/fun/') || path.includes('/creative/')) {
        rootPath = '../../';
        if (path.split('/').filter(Boolean).length === 2) { 
             rootPath = '../';
        }
    }

    const styles = `
        #global-suite-nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 44px;
            background: #050508;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 24px;
            z-index: 10000;
            font-family: 'Plus Jakarta Sans', sans-serif;
            backdrop-filter: blur(8px);
        }
        #global-suite-nav a {
            color: rgba(255,255,255,0.5);
            text-decoration: none;
            font-size: 11px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            display: flex;
            align-items: center;
            gap: 6px;
            transition: 0.2s;
        }
        #global-suite-nav a:hover { color: #fff; }
        #global-suite-nav a.active { color: #0ea5e9; }
        #global-suite-nav .dot {
            width: 5px; height: 5px; border-radius: 50%; background: currentColor;
        }
        @media (max-width: 600px) {
            #global-suite-nav { gap: 12px; }
            #global-suite-nav a { font-size: 10px; letter-spacing: 1px; }
        }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    suiteNav.innerHTML = `
        <a href="${rootPath}index.html" class="${path.endsWith('index.html') && !path.includes('/finance/') && !path.includes('/fun/') && !path.includes('/creative/') ? 'active' : ''}">
            <div class="dot"></div> Hub
        </a>
        <a href="${rootPath}finance/index.html" class="${path.includes('/finance/') ? 'active' : ''}">
            <div class="dot"></div> Finance
        </a>
        <a href="${rootPath}fun/index.html" class="${path.includes('/fun/') ? 'active' : ''}">
            <div class="dot"></div> Fun
        </a>
        <a href="${rootPath}creative/index.html" class="${path.includes('/creative/') ? 'active' : ''}">
            <div class="dot" style="background: #8b5cf6;"></div> Creative
        </a>
    `;

    document.body.appendChild(suiteNav);
})();
