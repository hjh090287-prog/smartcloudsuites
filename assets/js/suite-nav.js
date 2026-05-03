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
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100px;
            background: rgba(10, 10, 15, 0);
            backdrop-filter: blur(0px);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0 40px;
            z-index: 9999;
            font-family: 'Inter', -apple-system, sans-serif;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            border-bottom: 1px solid rgba(255, 255, 255, 0);
        }

        /* SCROLLED STATE - Move to Top Left */
        #suite-global-nav.scrolled {
            height: 60px;
            background: rgba(10, 10, 15, 0.9);
            backdrop-filter: blur(20px);
            flex-direction: row;
            justify-content: space-between;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding: 0 30px;
        }

        .nav-brand {
            font-weight: 800;
            font-size: 1.8rem;
            color: #ffffff;
            text-decoration: none;
            letter-spacing: -1px;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            margin-bottom: 10px;
        }
        #suite-global-nav.scrolled .nav-brand {
            font-size: 1.1rem;
            margin-bottom: 0;
            letter-spacing: -0.5px;
        }
        .nav-brand span { color: #10b981; }
        
        .nav-links {
            display: flex;
            gap: 30px;
            transition: all 0.5s ease;
        }
        #suite-global-nav.scrolled .nav-links {
            gap: 20px;
        }
        .nav-links a {
            color: rgba(240, 240, 245, 0.6);
            text-decoration: none;
            font-size: 0.9rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: 0.3s;
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
            transition: 0.3s;
        }
        .nav-links a.active .dot {
            opacity: 1;
            box-shadow: 0 0 10px #6c5ce7;
        }

        /* Adjust page content to prevent overlap at top */
        body {
            padding-top: 100px !important;
        }
        
        @media (max-width: 600px) {
            #suite-global-nav { padding: 0 20px; height: 120px; }
            #suite-global-nav.scrolled { height: 60px; padding: 0 15px; }
            .nav-brand { font-size: 1.4rem; }
            #suite-global-nav.scrolled .nav-brand { font-size: 0.9rem; }
            .nav-links { gap: 15px; }
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

    // DYNAMIC SCROLL LOGIC
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            suiteNav.classList.add('scrolled');
        } else {
            suiteNav.classList.remove('scrolled');
        }
    });
})();
