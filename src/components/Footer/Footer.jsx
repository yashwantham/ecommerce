import "./Footer.css"

export function Footer() {
    return (
        <>
            <div className="footer-container">
                <div className="navigations-footer">
                    <div>
                        <a href="https://www.linkedin.com/in/yashwanth-a-m-6ab38817a/" target="_blank" rel="noreferrer"  className="icon-footer">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/yashwantham" target="_blank" rel="noreferrer"  className="icon-footer">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </div>
                    <div >
                        <a href="https://twitter.com/AmYashwanth" target="_blank" rel="noreferrer"  className="icon-footer">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                    </div>
                </div>
                <div className="footer-text">
                    <p className="cr"><small>© 2023 | TopShop</small></p>
                </div>
            </div>

        </>
    )
}