/* ==========================================================================
   EliteOps Global (EOG) - Static JavaScript Animation & Interaction Engine
   Activated FormSubmit In-Page AJAX Engine (No Redirection to External Pages)
   Target Email: info@eliteoperationglobal.com
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. LOADING SCREEN TRANSITION ---
  const loadingScreen = document.querySelector('.loading-screen');
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.classList.add('hidden');
    }, 700);
  }

  // --- 2. ULTRA-MODERN INTERACTIVE SAAS CURSOR ---
  const cursorOuter = document.querySelector('.custom-cursor');
  const cursorDot = document.querySelector('.custom-cursor-dot');

  if (cursorOuter && cursorDot) {
    let mouseX = -100, mouseY = -100;
    let outerX = -100, outerY = -100;
    let isVisible = false;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        cursorOuter.style.opacity = '1';
        cursorDot.style.opacity = '1';
        outerX = mouseX;
        outerY = mouseY;
      }

      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    document.addEventListener('mouseleave', () => {
      isVisible = false;
      cursorOuter.style.opacity = '0';
      cursorDot.style.opacity = '0';
    });

    // Smooth Lerp Trailing for Outer Ring
    const animateCursor = () => {
      if (isVisible) {
        outerX += (mouseX - outerX) * 0.18;
        outerY += (mouseY - outerY) * 0.18;
        cursorOuter.style.left = `${outerX}px`;
        cursorOuter.style.top = `${outerY}px`;
      }
      requestAnimationFrame(animateCursor);
    };
    requestAnimationFrame(animateCursor);

    // Interactive Hover Detectors for Buttons, Links, Cards & Inputs
    const interactiveSelectors = 'a, button, .btn, .glass-card, .portfolio-card, input, select, textarea, .theme-toggle, .social-icon-btn, .accordion-header';
    
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactiveSelectors)) {
        cursorOuter.classList.add('hovered');
        cursorDot.classList.add('hovered');
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactiveSelectors)) {
        cursorOuter.classList.remove('hovered');
        cursorDot.classList.remove('hovered');
      }
    });

    // Mousedown / Mouseup Tactile Pulse
    window.addEventListener('mousedown', () => {
      cursorOuter.classList.add('active');
    });

    window.addEventListener('mouseup', () => {
      cursorOuter.classList.remove('active');
    });
  }

  // --- 3. DARK MODE / LIGHT MODE ENGINE (DEFAULT: LIGHT MODE) ---
  const themeToggleBtns = document.querySelectorAll('.theme-toggle');

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const updatePortfolioImages = () => {
    const isDark = document.documentElement.classList.contains('dark');
    document.querySelectorAll('.portfolio-theme-img').forEach(img => {
      const darkSrc = img.getAttribute('data-dark-img');
      const lightSrc = img.getAttribute('data-light-img');
      if (isDark && darkSrc) {
        img.src = darkSrc;
      } else if (!isDark && lightSrc) {
        img.src = lightSrc;
      }
    });
  };

  const updateIcons = () => {
    const isDark = document.documentElement.classList.contains('dark');
    themeToggleBtns.forEach(btn => {
      btn.innerHTML = isDark 
        ? '<i class="fa-solid fa-sun" style="color: #fbbf24;"></i>' 
        : '<i class="fa-solid fa-moon" style="color: #2563eb;"></i>';
    });
    updatePortfolioImages();
  };
  updateIcons();

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    updateIcons();
  };

  themeToggleBtns.forEach(btn => btn.addEventListener('click', toggleTheme));

  // --- 4. HEADER STICKY SCROLL EFFECT ---
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // --- 5. MOBILE MENU DRAWER ---
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
      const isOpen = mobileDrawer.classList.contains('open');
      mobileToggle.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });
  }

  document.querySelectorAll('.mobile-drawer a').forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer?.classList.remove('open');
      if (mobileToggle) mobileToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });

  // --- 6. SCROLL REVEAL ANIMATIONS ---
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
        scrollObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('[data-aos], .glass-card, .stat-card').forEach(el => {
    if (!el.hasAttribute('data-aos')) {
      el.setAttribute('data-aos', 'fade-up');
    }
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    scrollObserver.observe(el);
  });

  const styleEl = document.createElement('style');
  styleEl.textContent = `
    .aos-animate {
      opacity: 1 !important;
      transform: translateY(0) scale(1) !important;
    }
  `;
  document.head.appendChild(styleEl);

  // --- 7. FAQ ACCORDION ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isOpen) {
          item.classList.add('active');
        }
      });
    }
  });

  // --- 8. PORTFOLIO CATEGORY FILTER ---
  const tabBtns = document.querySelectorAll('.tab-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');
      portfolioCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.style.display = 'flex';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- 9. TESTIMONIAL SLIDER ---
  const testimonials = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.querySelector('.testimonial-prev');
  const nextBtn = document.querySelector('.testimonial-next');
  let currentSlide = 0;

  const showSlide = (index) => {
    if (testimonials.length === 0) return;
    testimonials.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });
  };
  showSlide(currentSlide);

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % testimonials.length;
      showSlide(currentSlide);
    });
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
      showSlide(currentSlide);
    });
  }

  // --- 10. CAREER MODAL ---
  const applyBtns = document.querySelectorAll('.btn-apply');
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalPositionLabel = document.querySelector('.modal-position-title');
  const modalPositionInput = document.querySelector('#modal-position-input');
  const closeModalBtn = document.querySelector('.modal-close');

  applyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const position = btn.getAttribute('data-position') || 'Open Position';
      if (modalPositionLabel) modalPositionLabel.textContent = position;
      if (modalPositionInput) modalPositionInput.value = position;
      if (modalOverlay) modalOverlay.classList.add('open');
    });
  });

  if (closeModalBtn && modalOverlay) {
    closeModalBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('open');
    });
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) modalOverlay.classList.remove('open');
    });
  }

  // --- 11. PRODUCTION-READY FORMSUBMIT AJAX ENGINE & DIRECT FALLBACK ---
  const sendFormInPageAJAX = async (formElement, statusElement) => {
    const formData = new FormData(formElement);
    const submitBtn = formElement.querySelector('button[type="submit"]');
    const originalBtnHTML = submitBtn ? submitBtn.innerHTML : 'Submit';

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting...';
    }

    if (statusElement) {
      statusElement.style.display = 'block';
      statusElement.style.background = 'rgba(37, 99, 235, 0.1)';
      statusElement.style.color = '#2563eb';
      statusElement.style.border = '1px solid rgba(37, 99, 235, 0.2)';
      statusElement.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending your message to EliteOps Global...';
    }

    // Determine target AJAX endpoint
    const actionUrl = formElement.getAttribute('action') || 'https://formsubmit.co/info@eliteoperationglobal.com';
    const ajaxEndpoint = actionUrl.includes('/ajax/') 
      ? actionUrl 
      : actionUrl.replace('formsubmit.co/', 'formsubmit.co/ajax/');

    try {
      const response = await fetch(ajaxEndpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result && (result.success === 'true' || result.success === true)) {
        // Genuine Success confirmed by FormSubmit API
        if (statusElement) {
          statusElement.style.background = 'rgba(16, 185, 129, 0.15)';
          statusElement.style.color = '#10b981';
          statusElement.style.border = '1px solid rgba(16, 185, 129, 0.3)';
          statusElement.innerHTML = '<i class="fa-solid fa-circle-check"></i> Thank you! Your message has been sent to EliteOps Global. We will contact you shortly.';
        }
        formElement.reset();
        if (modalOverlay && formElement.id === 'career-form') {
          setTimeout(() => modalOverlay.classList.remove('open'), 2500);
        }
      } else {
        // FormSubmit API returned error status or activation required
        const errorMsg = (result && result.message) ? result.message : `HTTP status ${response.status}`;
        console.error('FormSubmit Submission Failed:', errorMsg, result);

        if (statusElement) {
          statusElement.style.background = 'rgba(239, 68, 68, 0.15)';
          statusElement.style.color = '#ef4444';
          statusElement.style.border = '1px solid rgba(239, 68, 68, 0.3)';
          statusElement.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Submission error: ${errorMsg}. Submitting directly...`;
        }

        // Native fallback submit (no fake success, forces direct POST submit to FormSubmit)
        setTimeout(() => {
          formElement.submit();
        }, 1200);
      }
    } catch (err) {
      console.error('Network / CORS error during FormSubmit fetch:', err);

      if (statusElement) {
        statusElement.style.background = 'rgba(239, 68, 68, 0.15)';
        statusElement.style.color = '#ef4444';
        statusElement.style.border = '1px solid rgba(239, 68, 68, 0.3)';
        statusElement.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Network connection issue. Dispatching via direct form submission...';
      }

      // Native fallback submit
      setTimeout(() => {
        formElement.submit();
      }, 1200);
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;
      }
    }
  };

  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const statusEl = contactForm.querySelector('.form-msg');
      sendFormInPageAJAX(contactForm, statusEl);
    });
  }

  const careerForm = document.querySelector('#career-form');
  if (careerForm) {
    careerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const statusEl = careerForm.querySelector('.form-msg');
      sendFormInPageAJAX(careerForm, statusEl);
    });
  }

  // --- 12. PRICING BILLING TOGGLE (MONTHLY VS ANNUAL) ---
  const pricingCheckbox = document.querySelector('#pricing-billing-toggle');
  const priceElements = document.querySelectorAll('.price-amount');

  if (pricingCheckbox && priceElements.length > 0) {
    pricingCheckbox.addEventListener('change', () => {
      const isAnnual = pricingCheckbox.checked;
      document.querySelectorAll('.pricing-toggle-label').forEach((lbl, idx) => {
        if ((idx === 0 && !isAnnual) || (idx === 1 && isAnnual)) {
          lbl.classList.add('active');
        } else {
          lbl.classList.remove('active');
        }
      });

      priceElements.forEach(el => {
        const monthlyVal = el.getAttribute('data-monthly');
        const annualVal = el.getAttribute('data-annual');
        if (isAnnual && annualVal) {
          el.innerHTML = `${annualVal} <span style="font-size: 0.8rem; font-weight: 400; color: var(--text-muted);">/ mo (billed annually)</span>`;
        } else if (monthlyVal) {
          el.innerHTML = `${monthlyVal} <span style="font-size: 0.8rem; font-weight: 400; color: var(--text-muted);">/ mo</span>`;
        }
      });
    });
  }

  // --- 13. ESCAPE KEY & GLOBAL MODAL DISMISSAL ---
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.open').forEach(modal => {
        modal.classList.remove('open');
      });
      document.body.classList.remove('modal-open');
    }
  });

  const newsletterForm = document.querySelector('#newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const statusEl = newsletterForm.querySelector('.form-msg');
      sendFormInPageAJAX(newsletterForm, statusEl);
    });
  }

  // --- 14. LUXURY HUD PHASE TABS SWITCHER ---
  const hudTabs = document.querySelectorAll('.hud-phase-tab');
  const hudPhaseBlocks = document.querySelectorAll('.hud-phase-block');

  hudTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetPhase = tab.getAttribute('data-phase');
      hudTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      hudPhaseBlocks.forEach(block => {
        if (block.getAttribute('data-phase-content') === targetPhase) {
          block.style.display = 'grid';
        } else {
          block.style.display = 'none';
        }
      });
    });
  });
});



