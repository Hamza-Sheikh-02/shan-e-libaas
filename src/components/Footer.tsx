const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {/* Main Info Section */}
          <div>
            <h2 className="text-2xl font-bold">Shane Libaas</h2>
            <p className="text-sm mt-4">
              We have clothes that suit your style and which you&apos;re proud
              to wear. From women to men.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook text-lg"></i>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
                aria-label="GitHub"
              >
                <i className="fab fa-github text-lg"></i>
              </a>
            </div>
          </div>

          {/* Sections for Mobile */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-black">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Career
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-black">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Delivery Details
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Other Sections (Visible on Medium+ Screens) */}
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold mb-4">FAQ</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-black">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Manage Deliveries
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Orders
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Payments
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-black">
                  Free eBooks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Development Tutorial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  How to - Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  YouTube Playlist
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-center text-gray-600">
            Shane Libaas © 2000-2023, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
