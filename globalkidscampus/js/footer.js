/**
 * Global Kids Campus – Shared Footer
 * Single source of truth for the footer across all pages.
 */
(function () {
  'use strict';

  var page   = window.location.pathname.split('/').pop() || 'index.html';
  var isHome = page === '' || page === 'index.html';
  var logoHref = isHome ? '#page-top' : 'index.html';
  var topHref  = isHome ? '#page-top' : '#';
  var year     = new Date().getFullYear();

  var html = [
    '<footer>',
    '  <div class="container">',
    '    <div class="row">',

    '      <!-- Newsletter -->',
    '      <div class="col-lg-3 text-center res-margin my-auto">',
    '        <p class="text-light fw-bold">Sign our Newsletter</p>',
    '        <div id="mc_embed_signup">',
    '          <form action="//yourlist.us12.list-manage.com/subscribe/post?u=04e646927a196552aaee78a7b&id=111"',
    '                method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"',
    '                class="validate" target="_blank" rel="noopener noreferrer" novalidate>',
    '            <div id="mc_embed_signup_scroll">',
    '              <div class="mc-field-group">',
    '                <input type="email" value="" name="EMAIL" placeholder="Email address"',
    '                       class="form-control required email" id="mce-EMAIL">',
    '              </div>',
    '              <div id="mce-responses" class="clear foot">',
    '                <div class="response mt-2" id="mce-error-response"></div>',
    '                <div class="response alert alert-success mt-2" id="mce-success-response"></div>',
    '              </div>',
    '              <div class="optionalParent"><div class="clear foot">',
    '                <input type="submit" class="btn btn-primary" value="Subscribe"',
    '                       name="subscribe" id="mc-embedded-subscribe">',
    '              </div></div>',
    '            </div>',
    '          </form>',
    '        </div>',
    '      </div>',

    '      <!-- Logo + Social -->',
    '      <div class="col-lg-6 res-margin my-auto text-center">',
    '        <a href="' + logoHref + '" aria-label="Global Kids Campus home">',
    '          <img src="img/gkc-logo.png" alt="Global Kids Campus" class="d-block mx-auto">',
    '        </a>',
    '        <div class="social-media mt-3">',
    '          <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>',
    '          <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>',
    '          <a href="#" aria-label="Twitter"><i class="fa-brands fa-twitter"></i></a>',
    '        </div>',
    '        <p class="text-light mt-3" style="font-size:0.78rem;opacity:0.55;">&copy; ' + year + ' Global Kids Campus. All rights reserved.</p>',
    '      </div>',

    '      <!-- Quick Links -->',
    '      <div class="col-lg-3 my-auto text-center">',
    '        <p class="text-light fw-bold">Quick Links</p>',
    '        <ul class="list-unstyled footer-quick-links">',
    '          <li><a href="index.html"><i class="fa fa-home me-1"></i> Home</a></li>',
    '          <li><a href="about.html"><i class="fa fa-info-circle me-1"></i> About Us</a></li>',
    '          <li><a href="daycare.html"><i class="fa fa-child me-1"></i> Daycare</a></li>',
    '          <li><a href="preschool.html"><i class="fa fa-graduation-cap me-1"></i> Preschool</a></li>',
    '          <li><a href="therapy.html"><i class="fa fa-heart me-1"></i> Therapy</a></li>',
    '          <li><a href="our-gallery.html"><i class="fa fa-images me-1"></i> Gallery</a></li>',
    '          <li><a href="defence.html"><i class="fa fa-map-marker me-1"></i> Defence Branch</a></li>',
    '          <li><a href="wapda-town.html"><i class="fa fa-map-marker me-1"></i> Wapda Town Branch</a></li>',
    '          <li><a href="calendar-page.html"><i class="fa fa-calendar me-1"></i> Calendar</a></li>',
    '        </ul>',
    '      </div>',

    '    </div>',
    '  </div>',
    '  <hr>',
    '  <div class="page-scroll d-none d-lg-block">',
    '    <a href="' + topHref + '" class="back-to-top" aria-label="Back to top"><i class="fa fa-angle-up"></i></a>',
    '  </div>',
    '</footer>'
  ].join('\n');

  function inject() {
    var el = document.getElementById('footer-placeholder');
    if (el) el.outerHTML = html;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
}());
