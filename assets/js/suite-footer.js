document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('footer');
    if (!footer || footer.getAttribute('data-static') === 'true') return;

    // Determine path depth
    const path = window.location.pathname;
    let dotDots = '';
    if (path.includes('/finance/') || path.includes('/fun/') || path.includes('/creative/')) {
        dotDots = '../../';
        if (path.split('/').filter(Boolean).length === 2) { // It's a branch index like /finance/
             dotDots = '../';
        }
    }

    const currentYear = new Date().getFullYear();

    footer.innerHTML = `
        <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 60px 24px; border-top: 1px solid rgba(255,255,255,0.08);">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px; text-align: left;">
                <div>
                    <div style="font-weight: 900; font-size: 1.25rem; margin-bottom: 16px; color: white;">Smart<span>Cloud</span> Suites</div>
                    <p style="font-size: 0.85rem; color: rgba(240,240,245,0.45); line-height: 1.6;">A global ecosystem of high-performance utility tools. Engineered for precision and 100% data privacy.</p>
                </div>
                <div>
                    <h4 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 20px; color: white;">Suites</h4>
                    <ul style="list-style: none; padding: 0; font-size: 0.85rem;">
                        <li style="margin-bottom: 10px;"><a href="${dotDots}finance/index.html" style="color: rgba(240,240,245,0.45); text-decoration: none;">Finance Intelligence</a></li>
                        <li style="margin-bottom: 10px;"><a href="${dotDots}fun/index.html" style="color: rgba(240,240,245,0.45); text-decoration: none;">Viral & Fun Hub</a></li>
                        <li style="margin-bottom: 10px;"><a href="${dotDots}creative/index.html" style="color: rgba(240,240,245,0.45); text-decoration: none;">Creative Studio</a></li>
                    </ul>
                </div>
                <div>
                    <h4 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 20px; color: white;">Support</h4>
                    <ul style="list-style: none; padding: 0; font-size: 0.85rem;">
                        <li style="margin-bottom: 10px;"><a href="${dotDots}about.html" style="color: rgba(240,240,245,0.45); text-decoration: none;">Our Philosophy</a></li>
                        <li style="margin-bottom: 10px;"><a href="${dotDots}contact.html" style="color: rgba(240,240,245,0.45); text-decoration: none;">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h4 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 20px; color: white;">Legal</h4>
                    <ul style="list-style: none; padding: 0; font-size: 0.85rem;">
                        <li style="margin-bottom: 10px;"><a href="${dotDots}privacy.html" style="color: rgba(240,240,245,0.45); text-decoration: none;">Privacy Policy</a></li>
                        <li style="margin-bottom: 10px;"><a href="${dotDots}terms.html" style="color: rgba(240,240,245,0.45); text-decoration: none;">Terms of Service</a></li>
                        <li style="margin-bottom: 10px;"><a href="${dotDots}cookies.html" style="color: rgba(240,240,245,0.45); text-decoration: none;">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>
            <div style="margin-top: 60px; padding-top: 30px; border-top: 1px solid rgba(255,255,255,0.05); text-align: center; color: rgba(240,240,245,0.3); font-size: 0.75rem;">
                &copy; ${currentYear} SmartCloud Suites. All tools engineered for browser-side performance.<br>
                <span style="display: block; margin-top: 8px;">Disclaimer: Financial tools are for illustrative purposes only.</span>
            </div>
        </div>
    `;
    
    // Style the span
    const span = footer.querySelector('.logo span') || footer.querySelector('span');
    if (span && span.parentElement.innerText.includes('SmartCloud')) {
        span.style.color = '#0ea5e9';
    }
});
