(function() {
    const suiteNav = document.createElement('div');
    suiteNav.id = 'global-suite-nav';
    
    const path = window.location.pathname;
    let rootPath = './';
    if (path.includes('/finance/') || path.includes('/fun/') || path.includes('/creative/')) {
        rootPath = '../../';
    }

    const styles = `
        #global-suite-nav {
            background: #050508;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            padding: 8px 0;
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 0.75rem;
            font-weight: 700;
            display: flex;
            justify-content: center;
            gap: 24px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        #global-suite-nav a {
            color: rgba(255,255,255,0.4);
            text-decoration: none;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            gap: 6px;
        }
        #global-suite-nav a:hover { color: #fff; }
        #global-suite-nav a.active { color: #0ea5e9; }
        #global-suite-nav .dot {
            width: 4px; height: 4px; border-radius: 50%; background: currentColor;
        }
        @media (max-width: 600px) {
            #global-suite-nav { gap: 12px; font-size: 0.65rem; padding: 6px 8px; }
        }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    suiteNav.innerHTML = `
        <a href="${rootPath}index.html" class="${!path.includes('/finance/') && !path.includes('/fun/') && !path.includes('/creative/') ? 'active' : ''}">
            <div class="dot"></div> Hub
        </a>
        <a href="${rootPath}finance/index.html" class="${path.includes('/finance/') ? 'active' : ''}">
            <div class="dot"></div> Finance
        </a>
        <a href="${rootPath}fun/index.html" class="${path.includes('/fun/') ? 'active' : ''}">
            <div class="dot"></div> Fun & Viral
        </a>
        <a href="${rootPath}creative/index.html" class="${path.includes('/creative/') ? 'active' : ''}">
            <div class="dot" style="background: #8b5cf6;"></div> Creative
        </a>
    `;

    document.body.insertBefore(suiteNav, document.body.firstChild);
})();
