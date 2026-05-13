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
    /* ── Desktop: icon-above-label layout ── */
    '  @media (min-width: 1200px) {',
    '    .navbar-nav .nav-link {',
    '      display: flex !important;',
    '      flex-direction: column !important;',
    '      align-items: center !important;',
    '      justify-content: center !important;',
    '      font-weight: 700 !important;',
    '      padding: 10px 15px !important;',
    '      line-height: 1.2 !important;',
    '      font-size: 15px !important;',
    '      gap: 5px;',
    '      color: #ffffff !important;',
    '    }',
    '    .navbar-nav .nav-link i {',
    '      font-size: 22px;',
    '      color: #ffe6e6 !important;',
    '    }',
    '    .dropdown-toggle::after {',
    '      margin-left: 0 !important;',
    '      margin-top: 5px;',
    '    }',
    '  }',

    /* ── Mobile: horizontal icon+label, accordion dropdowns ── */
    '  @media (max-width: 1199px) {',
    '    .navbar-nav .nav-link {',
    '      display: flex !important;',
    '      flex-direction: row !important;',
    '      align-items: center !important;',
    '      justify-content: flex-start !important;',
    '      font-weight: 600 !important;',
    '      padding: 13px 18px !important;',
    '      font-size: 16px !important;',
    '      gap: 12px !important;',
    '      color: #ffffff !important;',
    '      border-bottom: 1px solid rgba(255,255,255,0.12) !important;',
    '    }',
    '    .navbar-nav .nav-link i {',
    '      font-size: 18px !important;',
    '      width: 22px;',
    '      text-align: center;',
    '      color: #ffe6e6 !important;',
    '      flex-shrink: 0;',
    '    }',
    /* Push the Bootstrap caret to the far right on mobile */
    '    .navbar-nav .dropdown-toggle::after {',
    '      margin-left: auto !important;',
    '      margin-top: 0 !important;',
    '      transition: transform 0.25s ease;',
    '      flex-shrink: 0;',
    '    }',
    '    .navbar-nav .dropdown-toggle[aria-expanded="true"]::after {',
    '      transform: rotate(180deg);',
    '    }',
    /* KEY FIX: make dropdowns accordion (static) so overflow:auto doesn't clip them */
    '    .navbar-collapse {',
    '      overflow: visible !important;',
    '    }',
    '    .navbar-collapse .dropdown-menu {',
    '      position: static !important;',
    '      float: none !important;',
    '      background: rgba(0,0,0,0.25) !important;',
    '      border: none !important;',
    '      border-radius: 12px !important;',
    '      box-shadow: none !important;',
    '      padding: 5px 0 !important;',
    '      margin: 0 8px 8px !important;',
    '      display: none;',
    '    }',
    '    .navbar-collapse .dropdown-menu.show {',
    '      display: block !important;',
    '    }',
    '    .navbar-collapse .dropdown-menu .dropdown-item {',
    '      color: #fff !important;',
    '      padding: 14px 20px !important;',
    '      font-size: 15px !important;',
    '      font-weight: 600 !important;',
    '      text-align: center !important;',
    '      border-bottom: 1px solid rgba(255,255,255,0.1) !important;',
    '      background: transparent !important;',
    '      letter-spacing: 0.3px;',
    '      transition: background 0.2s, letter-spacing 0.2s !important;',
    '    }',
    '    .navbar-collapse .dropdown-menu .dropdown-item:hover,',
    '    .navbar-collapse .dropdown-menu .dropdown-item:focus {',
    '      background: rgba(255,255,255,0.18) !important;',
    '      color: #fff !important;',
    '      letter-spacing: 0.6px !important;',
    '    }',
    '    .navbar-collapse .dropdown-menu .dropdown-item:last-child {',
    '      border-bottom: none !important;',
    '    }',
    '    .navbar-collapse .dropdown-menu .dropdown-item i {',
    '      margin-right: 8px;',
    '      opacity: 0.85;',
    '    }',
    '  }',

    /* ── Shared hover/active styles (all screen sizes) ── */
    '  .navbar-nav .nav-link:hover,',
    '  .navbar-nav .nav-link:hover i {',
    '    color: #ffffff !important;',
    '    opacity: 0.85;',
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
    '             href="javascript:void(0)" id="programs-menu" role="button"',
    '             data-bs-toggle="dropdown" data-bs-display="static"',
    '             aria-expanded="false" aria-haspopup="true"',
    (isProgramsActive ? '             aria-current="page"' : ''),
    '          >',
    '            <i class="fa fa-graduation-cap" aria-hidden="true"></i>Programs',
    '          </a>',
    '          <ul class="dropdown-menu" aria-labelledby="programs-menu">',
    '            <li><a class="dropdown-item" href="daycare.html"><i class="fa fa-baby"></i> Daycare Department</a></li>',
    '            <li><a class="dropdown-item" href="preschool.html"><i class="fa fa-graduation-cap"></i> Preschool Department</a></li>',
    '            <li><a class="dropdown-item" href="therapy.html"><i class="fa fa-heart"></i> Therapy Centre</a></li>',
    '          </ul>',
    '        </li>',

    '        <li class="nav-item dropdown">',
    '          <a class="nav-link dropdown-toggle' + (isBranchesActive ? ' active' : '') + '"',
    '             href="javascript:void(0)" id="branches-menu" role="button"',
    '             data-bs-toggle="dropdown" data-bs-display="static"',
    '             aria-expanded="false" aria-haspopup="true"',
    (isBranchesActive ? '             aria-current="page"' : ''),
    '          >',
    '            <i class="fa fa-map-marker-alt" aria-hidden="true"></i>Branches',
    '          </a>',
    '          <ul class="dropdown-menu" aria-labelledby="branches-menu">',
    '            <li><a class="dropdown-item" href="wapda-town.html"><i class="fa fa-map-marker-alt"></i> Wapda Town</a></li>',
    '            <li><a class="dropdown-item" href="defence.html"><i class="fa fa-map-marker-alt"></i> Defence</a></li>',
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

  function wireDropdowns() {
    var toggles = document.querySelectorAll('#nav-alphabet .dropdown-toggle');
    toggles.forEach(function (toggle) {
      // Remove Bootstrap's own handler by stripping the attribute
      toggle.removeAttribute('data-bs-toggle');

      toggle.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        var parentLi = this.closest('.nav-item.dropdown');
        var menu     = parentLi ? parentLi.querySelector('.dropdown-menu') : null;
        if (!menu) return;

        var isOpen = menu.classList.contains('show');

        // Close all other open menus first
        document.querySelectorAll('#nav-alphabet .dropdown-menu.show').forEach(function (m) {
          m.classList.remove('show');
          var t = m.previousElementSibling;
          if (t) t.setAttribute('aria-expanded', 'false');
        });

        // Toggle this one
        if (!isOpen) {
          menu.classList.add('show');
          this.setAttribute('aria-expanded', 'true');
        }
      });
    });

    // Click outside closes all
    document.addEventListener('click', function (e) {
      if (!e.target.closest('#nav-alphabet')) {
        document.querySelectorAll('#nav-alphabet .dropdown-menu.show').forEach(function (m) {
          m.classList.remove('show');
          var t = m.previousElementSibling;
          if (t) t.setAttribute('aria-expanded', 'false');
        });
      }
    });
  }

  function inject() {
    var el = document.getElementById('navbar-placeholder');
    if (el) {
      el.outerHTML = html;
      wireDropdowns();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
}());
