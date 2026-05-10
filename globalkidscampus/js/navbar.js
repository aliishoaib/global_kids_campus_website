/**
 * Global Kids Campus – Shared Navigation
 * Single source of truth for the navbar across all pages.
 * Automatically highlights the active section based on the current page.
 */
(function () {
  'use strict';

  var page = window.location.pathname.split('/').pop() || 'index.html';
  var isHome = page === '' || page === 'index.html';
  var programsPages = ['daycare.html', 'preschool.html', 'therapy.html'];
  var branchesPages = ['defence.html', 'wapda-town.html'];

  var isProgramsActive = programsPages.indexOf(page) !== -1;
  var isBranchesActive = branchesPages.indexOf(page) !== -1;
  var isGalleryActive  = page === 'our-gallery.html';
  var isAboutActive    = page === 'about.html';

  /* On the home page use fragment hrefs so Bootstrap scrollspy works;
     on other pages use full paths so navigation goes to the right page. */
  var homeHref    = isHome ? '#layerslider' : 'index.html';
  var aboutHref   = 'about.html';
  var galleryHref = isHome ? '#gallery'     : 'our-gallery.html';
  var contactHref = isHome ? '#contact'     : 'index.html#contact';

  var html = [
    '<style>',
    '  .navbar-nav .nav-link {',
    '    display: flex !important;',
    '    flex-direction: column !important;',
    '    align-items: center !important;',
    '    justify-content: center !important;',
    '    font-weight: 700 !important;',
    '    padding: 10px 15px !important;',
    '    line-height: 1.2 !important;',
    '    font-size: 15px !important;',
    '    gap: 5px;',
    '    color: #ffffff !important;',
    '  }',
    '  .navbar-nav .nav-link i {',
    '    font-size: 22px;',
    '    margin-bottom: 0 !important;',
    '    color: #ffe6e6 !important;',
    '  }',
    '  .navbar-nav .nav-link:hover,',
    '  .navbar-nav .nav-link:hover i {',
    '    color: #ffffff !important;',
    '    opacity: 0.8;',
    '  }',
    '  .dropdown-toggle::after {',
    '    margin-left: 0 !important;',
    '    margin-top: 5px;',
    '  }',
    '  .dropdown-menu .dropdown-item:hover, .dropdown-menu .dropdown-item:focus {',
    '    background-color: #f11a49 !important;',
    '    color: #ffffff !important;',
    '  }',
    '</style>',

    '<nav class="navbar navbar-expand-xl" aria-label="Main navigation">',
    '  <div class="container">',

    '    <a class="navbar-brand-small page-scroll my-auto d-xl-none"',
    '       href="index.html" aria-label="Global Kids Campus home">',
    '      <img src="img/gkc-logo.png" alt="Global Kids Campus" width="80" height="auto" loading="lazy">',
    '    </a>',

    '    <div class="justify-content-lg-end">',
    '      <button class="navbar-toggler" type="button"',
    '              data-bs-toggle="collapse" data-bs-target="#nav-alphabet"',
    '              aria-controls="nav-alphabet" aria-expanded="false"',
    '              aria-label="Toggle navigation">',
    '        <i class="fa fa-bars" aria-hidden="true"></i>',
    '      </button>',
    '    </div>',

    '    <div class="collapse navbar-collapse" id="nav-alphabet">',
    '      <ul class="navbar-nav mx-auto">',

    '        <li class="nav-item">',
    '          <a class="nav-link' + (isHome ? ' active' : '') + '"',
    '             href="' + homeHref + '"' + (isHome ? ' aria-current="page"' : '') + '>',
    '            <i class="fa fa-home" aria-hidden="true"></i>Home',
    '          </a>',
    '        </li>',

    '        <li class="nav-item">',
    '          <a class="nav-link' + (isAboutActive ? ' active' : '') + '" href="' + aboutHref + '"' + (isAboutActive ? ' aria-current="page"' : '') + '>',
    '            <i class="fa fa-info-circle" aria-hidden="true"></i>About us',
    '          </a>',
    '        </li>',

    '        <li class="nav-item">',
    '          <a class="nav-link' + (isGalleryActive ? ' active' : '') + '" href="' + galleryHref + '"' + (isGalleryActive ? ' aria-current="page"' : '') + '>',
    '            <i class="fa fa-images" aria-hidden="true"></i>Gallery',
    '          </a>',
    '        </li>',

    '        <!-- Desktop centre logo -->',
    '        <li class="nav-item d-none d-xl-block navbar-brand-centered">',
    '          <a href="index.html" aria-label="Global Kids Campus home">',
    '            <img src="img/gkc-logo.png" alt="Global Kids Campus">',
    '          </a>',
    '        </li>',
    '        <!-- Spacer keeps flex layout balanced -->',
    '        <li class="nav-item d-none d-xl-block" style="width:360px;" aria-hidden="true"></li>',

    '        <li class="nav-item dropdown">',
    '          <a class="nav-link dropdown-toggle' + (isProgramsActive ? ' active' : '') + '"',
    '             href="#" id="programs-menu" role="button"',
    '             data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true"',
    (isProgramsActive ? '             aria-current="page"' : ''),
    '          >',
    '            <i class="fa fa-graduation-cap" aria-hidden="true"></i>Programs',
    '          </a>',
    '          <ul class="dropdown-menu" aria-labelledby="programs-menu">',
    '            <li><a class="dropdown-item" href="daycare.html">Daycare Department</a></li>',
    '            <li><a class="dropdown-item" href="preschool.html">Preschool Department</a></li>',
    '            <li><a class="dropdown-item" href="therapy.html">Therapy Centre</a></li>',
    '          </ul>',
    '        </li>',

    '        <li class="nav-item dropdown">',
    '          <a class="nav-link dropdown-toggle' + (isBranchesActive ? ' active' : '') + '"',
    '             href="#" id="branches-menu" role="button"',
    '             data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true"',
    (isBranchesActive ? '             aria-current="page"' : ''),
    '          >',
    '            <i class="fa fa-map-marker-alt" aria-hidden="true"></i>Branches',
    '          </a>',
    '          <ul class="dropdown-menu" aria-labelledby="branches-menu">',
    '            <li><a class="dropdown-item" href="wapda-town.html">Wapda Town</a></li>',
    '            <li><a class="dropdown-item" href="defence.html">Defence</a></li>',
    '          </ul>',
    '        </li>',

    '        <li class="nav-item">',
    '          <a class="nav-link" href="' + contactHref + '">',
    '            <i class="fa fa-address-book" aria-hidden="true"></i>Contact us',
    '          </a>',
    '        </li>',

    '      </ul>',
    '    </div>',
    '  </div>',
    '</nav>'
  ].join('\n');

  function inject() {
    var el = document.getElementById('navbar-placeholder');
    if (el) {
      el.outerHTML = html;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
}());
