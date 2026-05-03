(function() {
    const suiteNav = document.createElement('div');
    suiteNav.id = 'global-suite-nav';
    
    const path = window.location.pathname;
    let rootPath = './';
    if (path.includes('/finance/') || path.includes('/fun/') || path.includes('/creative/') || path.includes('/dev/')) {
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
            z-index: 100000;
            font-family: 'Plus Jakarta Sans', sans-serif;
        }
        body {
            padding-top: 44px !important;
            margin: 0 !important;
            overflow-x: hidden !important;
        }
        /* Lock background decorative elements */
        .bg-glow, .bg-grid {
            position: fixed !important;
            left: 0 !important;
            top: 44px !important;
            width: 100% !important;
            height: calc(100vh - 44px) !important;
            z-index: -1 !important;
        }
        body > header {
            position: sticky;
            top: 44px !important;
            z-index: 9999;
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
        <a href="${rootPath}index.html" class="${path.endsWith('index.html') && !path.includes('/finance/') && !path.includes('/fun/') && !path.includes('/creative/') && !path.includes('/dev/') ? 'active' : ''}">
            <div class="dot"></div> Hub
        </a>
        <a href="${rootPath}finance/index.html" class="${path.includes('/finance/') ? 'active' : ''}">
            <div class="dot"></div> Finance Hub
        </a>
        <!-- AdSense Audit: Temporarily Hiding Other Categories -->
        <!--
        <a href="${rootPath}dev/index.html">Dev</a>
        <a href="${rootPath}fun/index.html">Fun</a>
        <a href="${rootPath}creative/index.html">Creative</a>
        -->
    `;

    document.body.prepend(suiteNav);
})();
