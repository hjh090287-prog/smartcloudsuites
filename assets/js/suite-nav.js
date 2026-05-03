(function() {
    // Create the navigation element
    const suiteNav = document.createElement('div');
    suiteNav.id = 'global-suite-nav';
    
    // Determine path depth
    const path = window.location.pathname;
    let rootPath = './';
    if (path.includes('/finance/') || path.includes('/fun/') || path.includes('/creative/')) {
        rootPath = '../../';
    }

    // Modern Styles
    const styles = `
        #global-suite-nav {
            background: #050508;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            padding: 8px 0;
            font-size: 0.75rem;
            font-weight: 700;
            display: flex;
            justify-content: center;
            gap: 24px;
            text-transform: uppercase;
            letter-spacing: 1px;
            position: sticky;
            top: 0;
            z-index: 1000;
        }
        #global-suite-nav a {
            color: rgba(255,255,255,0.4);
            text-decoration: none;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            gap: 6px;
        }
        #global-suite-nav a:hover {
            color: #fff;
        }
        #global-suite-nav a.active {
            color: var(--primary, #0ea5e9);
        }
        #global-suite-nav .dot {
            width: 4px; height: 4px; border-radius: 50%; background: currentColor;
        }
        @media (max-width: 600px) {
            #global-suite-nav { gap: 12px; font-size: 0.65rem; }
        }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    // HTML Content
    suiteNav.innerHTML = `
        <a href="${rootPath}index.html" class="${path.endsWith('index.html') && !path.includes('/') ? 'active' : ''}">
            <div class="dot"></div> Hub
        </a>
        <a href="${rootPath}finance/salary/index.html" class="${path.includes('/finance/') ? 'active' : ''}">
            <div class="dot"></div> Finance
        </a>
        <a href="${rootPath}fun/decision-wheel/index.html" class="${path.includes('/fun/') ? 'active' : ''}">
            <div class="dot"></div> Viral & Fun
        </a>
        <a href="${rootPath}creative/image-compressor/index.html" class="${path.includes('/creative/') ? 'active' : ''}">
            <div class="dot" style="background: #8b5cf6;"></div> Creative
        </a>
    `;

    // Inject as the first item in body
    document.body.insertBefore(suiteNav, document.body.firstChild);
})();
