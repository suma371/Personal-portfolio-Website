/**
 * ==========================================
 *  PORTFOLIO SCRIPT — script.js
 *  Handles all interactivity & animations
 * ==========================================
 */

document.addEventListener("DOMContentLoaded", () => {

    // ═══════════════════════════════
    //  1. LOADER
    // ═══════════════════════════════
    const loader = document.getElementById("loader");
    window.addEventListener("load", () => {
        setTimeout(() => loader.classList.add("hidden"), 600);
    });

    // ═══════════════════════════════
    //  2. CUSTOM CURSOR
    // ═══════════════════════════════
    const cursor = document.getElementById("cursor");
    const cursorFollower = document.getElementById("cursorFollower");

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = mouseX + "px";
        cursor.style.top = mouseY + "px";
    });

    function animateCursor() {
        followerX += (mouseX - followerX) * 0.25;
        followerY += (mouseY - followerY) * 0.25;
        cursorFollower.style.left = followerX + "px";
        cursorFollower.style.top = followerY + "px";
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // ═══════════════════════════════
    //  3. THEME TOGGLE
    // ═══════════════════════════════
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");
    const saved = localStorage.getItem("portfolio-theme") || "dark";

    document.documentElement.setAttribute("data-theme", saved);
    themeIcon.className = saved === "dark" ? "bx bx-moon" : "bx bx-sun";

    themeToggle.addEventListener("click", () => {
        const isDark = document.documentElement.getAttribute("data-theme") === "dark";
        const newTheme = isDark ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("portfolio-theme", newTheme);
        themeIcon.className = newTheme === "dark" ? "bx bx-moon" : "bx bx-sun";
    });

    // ═══════════════════════════════
    //  4. NAVBAR — scroll & mobile
    // ═══════════════════════════════
    const navbar = document.getElementById("navbar");
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    window.addEventListener("scroll", () => {
        navbar.classList.toggle("scrolled", window.scrollY > 40);
    });

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("open");
        navLinks.classList.toggle("open");
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("open");
            navLinks.classList.remove("open");
        });
    });

    // ═══════════════════════════════
    //  5. ACTIVE NAV LINK on scroll
    // ═══════════════════════════════
    const sections = document.querySelectorAll("section[id]");

    function updateActiveNav() {
        const scrollY = window.scrollY + 120;
        sections.forEach((section) => {
            const sTop = section.offsetTop;
            const sH = section.offsetHeight;
            const id = section.getAttribute("id");
            const link = document.querySelector(`.nav-link[data-nav="${id}"]`);
            if (link) {
                link.classList.toggle("active", scrollY >= sTop && scrollY < sTop + sH);
            }
        });
    }

    window.addEventListener("scroll", updateActiveNav);
    updateActiveNav();

    // ═══════════════════════════════
    //  6. TYPEWRITER EFFECT
    // ═══════════════════════════════
    const typeEl = document.getElementById("typewriter");
    let phraseIdx = 0, charIdx = 0, isDeleting = false;

    function type() {
        const current = typewriterPhrases[phraseIdx];
        if (isDeleting) {
            charIdx--;
        } else {
            charIdx++;
        }

        typeEl.textContent = current.substring(0, charIdx);

        let delay = isDeleting ? 60 : 100;

        if (!isDeleting && charIdx === current.length) {
            delay = 1800;
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            phraseIdx = (phraseIdx + 1) % typewriterPhrases.length;
            delay = 400;
        }

        setTimeout(type, delay);
    }

    type();

    // ═══════════════════════════════
    //  7. COUNTER ANIMATION
    // ═══════════════════════════════
    function animateCounter(el) {
        const target = parseInt(el.getAttribute("data-count"), 10);
        let current = 0;
        const step = Math.ceil(target / 40);
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            el.textContent = current;
        }, 40);
    }

    const counters = document.querySelectorAll(".stat-number");

    // Trigger counter once hero comes into view
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                counters.forEach(animateCounter);
                counterObserver.disconnect();
            }
        });
    }, { threshold: 0.5 });

    const heroSection = document.getElementById("home");
    if (heroSection) counterObserver.observe(heroSection);

    // ═══════════════════════════════
    //  8. AOS — Scroll Animations
    // ═══════════════════════════════
    const aosElements = document.querySelectorAll("[data-aos]");

    const aosObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("aos-animate");
                // Keep observing for potential re-animations
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px 50px 0px" });

    aosElements.forEach((el) => aosObserver.observe(el));

    // ═══════════════════════════════
    //  9. SKILLS — Render & Tabs
    // ═══════════════════════════════
    function renderSkills(category) {
        const wrapper = document.querySelector(`#${category} .skills-grid`);
        if (!wrapper) return;

        wrapper.innerHTML = skillsData[category]
            .map(
                (skill) => `
          <div class="skill-card">
            <i class="skill-icon bx ${skill.icon}" style="color:${skill.color}"></i>
            <p class="skill-name">${skill.name}</p>
            <p class="skill-level">${skill.level}</p>
            <div class="skill-bar">
              <div class="skill-bar-fill" data-width="${levelWidths[skill.level] || "60%"}"></div>
            </div>
          </div>`
            )
            .join("");
    }

    // Render all tabs at once
    ["frontend", "backend", "tools"].forEach(renderSkills);

    // Animate bars when skills section is visible
    function animateBars(container) {
        container.querySelectorAll(".skill-bar-fill").forEach((bar) => {
            bar.style.width = bar.getAttribute("data-width");
        });
    }

    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabPanels = document.querySelectorAll(".tab-panel");

    tabBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const target = btn.getAttribute("data-tab");
            tabBtns.forEach((b) => b.classList.remove("active"));
            tabPanels.forEach((p) => p.classList.remove("active"));
            btn.classList.add("active");
            const panel = document.getElementById(target);
            if (panel) {
                panel.classList.add("active");
                // Delay so display:block takes effect
                setTimeout(() => animateBars(panel), 50);
            }
        });
    });

    // Animate active tab when skills section scrolls into view
    const skillsSection = document.getElementById("skills");
    const skillsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            const activePanel = document.querySelector(".tab-panel.active");
            if (activePanel) setTimeout(() => animateBars(activePanel), 100);
            skillsObserver.disconnect();
        }
    }, { threshold: 0.3 });

    if (skillsSection) skillsObserver.observe(skillsSection);

    // ═══════════════════════════════
    //  10. PROJECTS — Render & Filter
    // ═══════════════════════════════
    const projectsGrid = document.getElementById("projectsGrid");

    function renderProjects(filter = "all") {
        const filtered = filter === "all"
            ? projectsData
            : projectsData.filter((p) => p.category === filter);

        projectsGrid.innerHTML = filtered.map((p) => `
      <div class="project-card" data-aos="fade-up">
        <div class="project-image">
          <img src="${p.image}" alt="${p.title}" onerror="this.style.background='linear-gradient(135deg,#6366f1,#8b5cf6)';this.style.opacity='0.8'" />
          <div class="project-overlay">
            <a href="${p.liveUrl}" target="_blank" rel="noopener" class="overlay-btn" title="Live Demo">
              <i class="bx bx-link-external"></i>
            </a>
            <a href="${p.codeUrl}" target="_blank" rel="noopener" class="overlay-btn" title="Source Code">
              <i class="bx bxl-github"></i>
            </a>
          </div>
        </div>
        <div class="project-body">
          <span class="project-category">${p.category}</span>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.desc}</p>
          <div class="project-tags">
            ${p.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}
          </div>
        </div>
      </div>
    `).join("");

        // Re-observe new cards for AOS
        projectsGrid.querySelectorAll("[data-aos]").forEach((el) => {
            el.classList.remove("aos-animate");
            aosObserver.observe(el);
        });
    }

    renderProjects();

    // Filter buttons
    document.querySelectorAll(".filter-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            renderProjects(btn.getAttribute("data-filter"));
        });
    });

    // ═══════════════════════════════
    //  11. CONTACT FORM
    // ═══════════════════════════════
    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");
    const submitBtn = document.getElementById("submitBtn");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span>Sending…</span> <i class="bx bx-loader-alt bx-spin"></i>`;

            // Simulate sending (replace with real EmailJS / Formspree call)
            setTimeout(() => {
                formStatus.className = "form-status success";
                formStatus.textContent = "✅ Message sent! I'll get back to you soon.";
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = `<span>Send Message</span> <i class="bx bx-send"></i>`;
                setTimeout(() => (formStatus.textContent = ""), 5000);
            }, 1800);
        });
    }

    // ═══════════════════════════════
    //  12. BACK TO TOP
    // ═══════════════════════════════
    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        backToTop.classList.toggle("visible", window.scrollY > 400);
    });

    // ═══════════════════════════════
    //  13. FOOTER YEAR
    // ═══════════════════════════════
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // ═══════════════════════════════
    //  14. PROFILE IMAGE FALLBACK
    // ═══════════════════════════════
    const profileImg = document.getElementById("profileImg");
    if (profileImg) {
        profileImg.addEventListener("error", () => {
            profileImg.style.display = "none";
            const placeholder = document.createElement("div");
            placeholder.style.cssText = `
        width: 100%; height: 100%; border-radius: 50%;
        background: var(--gradient);
        display: flex; align-items: center; justify-content: center;
        font-size: 5rem; color: rgba(255,255,255,0.7);
      `;
            placeholder.innerHTML = `<i class="bx bx-user"></i>`;
            profileImg.parentNode.insertBefore(placeholder, profileImg.nextSibling);
        });
    }

    // ═══════════════════════════════
    //  15. MARKSHEET MODAL
    // ═══════════════════════════════
    const msOverlay = document.getElementById("marksheetOverlay");
    const msImg = document.getElementById("marksheetImg");
    const msTitle = document.getElementById("marksheetTitle");
    const msBtnClose = document.getElementById("msClose");
    const msBtnZoomIn = document.getElementById("msZoomIn");
    const msBtnZoomOut = document.getElementById("msZoomOut");

    let msScale = 1;

    window.openMarksheet = function (src, title) {
        msImg.src = src;
        msTitle.textContent = title;
        msScale = 1;
        msImg.style.transform = "scale(1)";
        msOverlay.classList.add("open");
        document.body.style.overflow = "hidden";
    };

    function closeMarksheet() {
        msOverlay.classList.remove("open");
        document.body.style.overflow = "";
        setTimeout(() => { msImg.src = ""; }, 300);
    }

    if (msBtnClose) msBtnClose.addEventListener("click", closeMarksheet);
    if (msBtnZoomIn) msBtnZoomIn.addEventListener("click", () => { msScale = Math.min(msScale + 0.25, 3); msImg.style.transform = `scale(${msScale})`; });
    if (msBtnZoomOut) msBtnZoomOut.addEventListener("click", () => { msScale = Math.max(msScale - 0.25, 0.5); msImg.style.transform = `scale(${msScale})`; });

    // Click backdrop to close
    if (msOverlay) {
        msOverlay.addEventListener("click", (e) => {
            if (e.target === msOverlay) closeMarksheet();
        });
    }

    // ESC key to close
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && msOverlay && msOverlay.classList.contains("open")) closeMarksheet();
    });

});
