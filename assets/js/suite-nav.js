(function() {
    const suiteNav = document.createElement('div');
    suiteNav.id = 'suite-global-nav';
    
    const path = window.location.pathname;
    let rootPath = './';
    if (path.includes('/finance/') || path.includes('/fun/') || path.includes('/creative/') || path.includes('/dev/')) {
        rootPath = '../../';
        if (path.split('/').filter(Boolean).length === 2) { 
             rootPath = '../';
        }
    }

    const styles = `
        #suite-global-nav {
            position: sticky;
            top: 0;
            width: 100%;
            height: 60px;
            background: rgba(10, 10, 15, 0.85);
            backdrop-filter: blur(16px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 40px;
            z-index: 9999;
            font-family: 'Inter', -apple-system, sans-serif;
        }
        .nav-brand {
            font-weight: 800;
            font-size: 1.1rem;
            color: #ffffff;
            text-decoration: none;
            letter-spacing: -0.5px;
        }
        .nav-brand span { color: #10b981; }
        
        .nav-links {
            display: flex;
            gap: 24px;
        }
        .nav-links a {
            color: rgba(240, 240, 245, 0.6);
            text-decoration: none;
            font-size: 0.85rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: 0.2s;
        }
        .nav-links a:hover, .nav-links a.active {
            color: #ffffff;
        }
        .nav-links .dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #6c5ce7;
            opacity: 0.5;
        }
        .nav-links a.active .dot {
            opacity: 1;
            box-shadow: 0 0 10px #6c5ce7;
        }
        
        @media (max-width: 600px) {
            #suite-global-nav { padding: 0 20px; }
            .nav-brand { font-size: 0.9rem; }
            .nav-links { gap: 16px; }
        }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    suiteNav.innerHTML = `
        <a href="${rootPath}index.html" class="nav-brand">
            Smart<span>Cloud</span> Suites
        </a>
        <div class="nav-links">
            <a href="${rootPath}index.html" class="${path.endsWith('index.html') && !path.includes('/finance/') ? 'active' : ''}">
                <div class="dot"></div> Hub
            </a>
            <a href="${rootPath}finance/index.html" class="${path.includes('/finance/') ? 'active' : ''}">
                <div class="dot"></div> Finance Hub
            </a>
            /* AdSense Audit: Temporarily Disabled Categories
            <a href="${rootPath}dev/index.html">Dev</a>
            <a href="${rootPath}fun/index.html">Fun</a>
            <a href="${rootPath}creative/index.html">Creative</a>
            */
        </div>
    `;

    document.body.prepend(suiteNav);
})();
