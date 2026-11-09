/**
 * PORTFOLIO JAVASCRIPT INTERACTION SCRIPT
 * Author: Reivan Adhitya Maulana - Software Engineering & Web Developer
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initScrollSpy();
  initBackToTop();
  initModalBackdrops();
});

/* ==========================================================
   1. NAVBAR SCROLL EFFECT
   ========================================================== */
function initNavbarScroll() {
  const navbar = document.getElementById('mainNavbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('py-3', 'shadow-2xl', 'bg-[#0a0a0c]/95');
      navbar.classList.remove('py-5', 'bg-[#0a0a0c]/85');
    } else {
      navbar.classList.add('py-5', 'bg-[#0a0a0c]/85');
      navbar.classList.remove('py-3', 'shadow-2xl', 'bg-[#0a0a0c]/95');
    }
  });
}

/* ==========================================================
   2. MOBILE MENU TOGGLE
   ========================================================== */
function initMobileMenu() {
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const hamburgerIcon = document.getElementById('hamburgerIcon');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!mobileBtn || !mobileMenu) return;

  function toggleMenu() {
    const isOpen = !mobileMenu.classList.contains('-translate-y-[150%]');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function openMenu() {
    mobileMenu.classList.remove('-translate-y-[150%]', 'opacity-0', 'pointer-events-none');
    mobileMenu.classList.add('translate-y-0', 'opacity-100');
    if (hamburgerIcon) {
      hamburgerIcon.classList.remove('fa-bars');
      hamburgerIcon.classList.add('fa-xmark');
    }
  }

  function closeMenu() {
    mobileMenu.classList.remove('translate-y-0', 'opacity-100');
    mobileMenu.classList.add('-translate-y-[150%]', 'opacity-0', 'pointer-events-none');
    if (hamburgerIcon) {
      hamburgerIcon.classList.remove('fa-xmark');
      hamburgerIcon.classList.add('fa-bars');
    }
  }

  mobileBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileBtn.contains(e.target)) {
      closeMenu();
    }
  });
}

/* ==========================================================
   3. ACTIVE NAV LINK ON SCROLL (SCROLLSPY)
   ========================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (sections.length === 0 || navLinks.length === 0) return;

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

/* ==========================================================
   4. BACK TO TOP BUTTON
   ========================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
      backToTopBtn.classList.add('opacity-100');
    } else {
      backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
      backToTopBtn.classList.remove('opacity-100');
    }
  });
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

/* ==========================================================
   5. MODAL SYSTEM (PROJECTS & CV)
   ========================================================== */
const projectData = {
  kantin: {
    category: "Proyek Sekolah / RPL",
    title: "Kantin Digital SMKN 20 Jakarta",
    subtitle: "Aplikasi Web Sistem Pemesanan Makanan & Manajemen Kantin",
    tech: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript", "PHP", "XAMPP"],
    description: `
      <p>Proyek <strong>Kantin Digital</strong> dikembangkan untuk mendigitalisasi proses transaksi antara pembeli, penjaga stand, dan administrator kantin sekolah. Platform ini memfasilitasi pemesanan makanan secara online, manajemen menu per stand, serta pengelolaan transaksi dan laporan keuangan secara terstruktur.</p>

      <div class="mt-4 p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
        <h6 class="text-white font-bold text-xs uppercase tracking-wide">Arsitektur & Hak Akses (Multi-Role):</h6>
        <ul class="list-disc list-inside space-y-1 text-gray-300 text-xs sm:text-sm">
          <li><strong>Role Admin / Pengelola:</strong> Akses penuh untuk manajemen data stand, verifikasi akun, dan pemantauan keseluruhan sistem kantin.</li>
          <li><strong>Role Penjaga Stand (Tenant):</strong> Mengelola menu makanan, memperbarui ketersediaan stok produk, dan memproses pesanan masuk dari pembeli secara real-time.</li>
          <li><strong>Role Pembeli (Siswa/Guru):</strong> Menjelajahi berbagai pilihan menu dari berbagai stand, mengelola keranjang belanja, melakukan pemesanan, dan melacak status pesanan.</li>
        </ul>
      </div>

      <div class="mt-3 space-y-1 text-xs text-gray-400">
        <p><i class="fa-solid fa-check text-red-500 mr-2"></i>Menggunakan framework Laravel dengan arsitektur MVC yang aman dan terstruktur.</p>
        <p><i class="fa-solid fa-check text-red-500 mr-2"></i>Antarmuka didesain modern, bersih, dan responsif menggunakan Tailwind CSS.</p>
      </div>
    `
  },
  kalkulator: {
    category: "Web Application",
    title: "Kalkulator Pintar",
    subtitle: "Aplikasi Kalkulator Interaktif Berbasis Flutter Web",
    tech: ["Flutter", "Dart", "Web Tech", "Responsive Design", "State Management"],
    description: `
      <p>Proyek <strong>Kalkulator Pintar</strong> adalah aplikasi utilitas perhitungan yang dibangun menggunakan Flutter Web, dirancang agar dapat diakses secara langsung dan responsif melalui peramban web dengan performa yang cepat dan antarmuka intuitif.</p>

      <div class="mt-4 p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
        <h6 class="text-white font-bold text-xs uppercase tracking-wide">Fitur & Kemampuan Utama:</h6>
        <ul class="list-disc list-inside space-y-1 text-gray-300 text-xs sm:text-sm">
          <li><strong>Aksesibilitas Instan:</strong> Dapat diakses langsung via browser web tanpa perlu instalasi aplikasi tambahan.</li>
          <li><strong>Logika Perhitungan Akurat:</strong> Manajemen state dan logika perhitungan matematis yang terstruktur dan presisi menggunakan bahasa Dart.</li>
          <li><strong>UI Responsif & Modern:</strong> Antarmuka pengguna yang adaptif di berbagai ukuran layar, dari desktop hingga perangkat mobile.</li>
        </ul>
      </div>

      <div class="mt-3 space-y-1 text-xs text-gray-400">
        <p><i class="fa-solid fa-check text-red-500 mr-2"></i>Menggunakan framework Flutter Web untuk performa rendering yang optimal di browser.</p>
        <p><i class="fa-solid fa-check text-red-500 mr-2"></i>Didesain dengan prinsip UI modern yang bersih, intuitif, dan nyaman digunakan.</p>
      </div>
    `
  },
  language: {
    category: "Multiplatform App (Android & Windows)",
    title: "Aplikasi Language Learning",
    subtitle: "Aplikasi Interaktif Lintas Platform untuk Pembelajaran Bahasa Asing",
    tech: ["Cross-Platform Framework", "JavaScript", "SQLite", "Android Build", "Windows App", "UI/UX Audio"],
    description: `
      <p><strong>Aplikasi Language Learning</strong> dirancang untuk menghadirkan pengalaman belajar bahasa asing yang fleksibel, interaktif, dan terstruktur bagi pengguna di platform mobile (Android) maupun komputer desktop (Windows).</p>

      <div class="mt-4 p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
        <h6 class="text-white font-bold text-xs uppercase tracking-wide">Fitur & Modul Utama:</h6>
        <ul class="list-disc list-inside space-y-1 text-gray-300 text-xs sm:text-sm">
          <li><strong>Modul Flashcard Interaktif:</strong> Membantu penghafalan kosakata baru disertai contoh kalimat dan fonetik pengucapan audio.</li>
          <li><strong>Kuis Evaluasi Bertingkat:</strong> Soal pilihan ganda dan mencocokkan kata dengan skor langsung serta pembahasan kesalahan.</li>
          <li><strong>Pelacak Kemajuan Belajar (Progress Tracker):</strong> Menyimpan pencapaian harian (streak) dan tingkat kemahiran pengguna secara offline menggunakan penyimpanan database lokal yang cepat.</li>
          <li><strong>Konsistensi Lintas Sistem Operasi:</strong> Dibangun agar tata letak antarmuka beradaptasi otomatis antara orientasi potret layar sentuh Android dan orientasi lanskap mouse/keyboard Windows.</li>
        </ul>
      </div>

      <div class="mt-3 space-y-1 text-xs text-gray-400">
        <p><i class="fa-solid fa-check text-red-500 mr-2"></i>Dapat dijalankan secara offline tanpa menghabiskan kuota data internet pengguna.</p>
        <p><i class="fa-solid fa-check text-red-500 mr-2"></i>Desain bertema gelap elegan yang nyaman untuk mata saat belajar dalam durasi lama.</p>
      </div>
    `
  }
};

function openProjectModal(key) {
  const modal = document.getElementById('projectModal');
  const project = projectData[key];
  if (!modal || !project) return;

  document.getElementById('modalBadge').textContent = project.category;
  document.getElementById('modalTitle').textContent = project.title;
  document.getElementById('modalSubtitle').textContent = project.subtitle;
  document.getElementById('modalContent').innerHTML = project.description;

  const techContainer = document.getElementById('modalTechTags');
  techContainer.innerHTML = '';
  project.tech.forEach(tag => {
    const span = document.createElement('span');
    span.className = 'px-2.5 py-1 text-xs rounded-md bg-zinc-800 text-red-400 border border-zinc-700 font-medium';
    span.textContent = tag;
    techContainer.appendChild(span);
  });

  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  if (!modal) return;
  modal.classList.remove('opacity-100');
  modal.classList.add('opacity-0', 'pointer-events-none');
  document.body.style.overflow = '';
}

function openCvModal() {
  const modal = document.getElementById('cvModal');
  if (!modal) return;
  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100');
  document.body.style.overflow = 'hidden';
}

function closeCvModal() {
  const modal = document.getElementById('cvModal');
  if (!modal) return;
  modal.classList.remove('opacity-100');
  modal.classList.add('opacity-0', 'pointer-events-none');
  document.body.style.overflow = '';
}

function initModalBackdrops() {
  const modals = [document.getElementById('projectModal'), document.getElementById('cvModal')];
  
  modals.forEach(modal => {
    if (!modal) return;
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('opacity-100');
        modal.classList.add('opacity-0', 'pointer-events-none');
        document.body.style.overflow = '';
      }
    });
  });

  // ESC key to close any active modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeCvModal();
      hideToast();
    }
  });
}

/**
 * Trigger downloadable CV formatted document
 */
function triggerCvFileDownload() {
  const cvText = `===============================================================
CURRICULUM VITAE - REIVAN ADHITYA MAULANA
Software Engineering & Web Developer
===============================================================

KONTAK:
- Nama Lengkap : Reivan Adhitya Maulana
- Alamat       : Jalan Ampera II no 38 Jakarta, Indonesia
- WhatsApp     : +62 889-0577-8253
- Email        : revanadhityamaulana@gmail.com
- GitHub       : https://github.com/reivanadhitya

RINGKASAN PROFIL:
"Saya ingin menjadi seorang programmer yang percaya diri, antusias, dan kreatif. Saya ingin memperoleh lebih banyak pengalaman di bidang media digital serta menciptakan situs web dan aplikasi saya sendiri."

RIWAYAT PENDIDIKAN:
1. SMKN 20 Jakarta (2024 - 2027)
   - Jurusan: Rekayasa Perangkat Lunak (RPL)
   - Fokus: Web Development, Pemrograman Aplikasi, Database Relasional
2. SMPN 56 Jakarta (2021 - 2024)
3. SDN Ragunan 07 Pagi (2015 - 2021)

PENGALAMAN KERJA & ORGANISASI:
1. Web Design & Web Developer (Magang) - PT PSG
   - Mendesain tata letak antarmuka web, mendukung pemeliharaan sistem web, dan optimasi performa digital.
2. Admin Media Sosial - Organisasi & PT PSG
   - Manajemen konten digital, interaksi komunitas, dan branding publikasi online.

PROYEK UNGGULAN:
1. Web Kantin Digital - Kantin Digital SMKN 20 Jakarta (Proyek Sekolah RPL)
   - Sistem pemesanan makanan dan manajemen stand kantin sekolah berbasis web (Laravel, MySQL, Tailwind CSS, JS).
2. Aplikasi Language Learning (Cross-Platform)
   - Aplikasi pembelajaran kosakata bahasa asing interaktif untuk platform Android dan sistem operasi Windows.

KEAHLIAN TEKNIS:
- Languages & Tech: HTML5, CSS3, JavaScript, Tailwind CSS, PHP, MySQL, Git, Cross-Platform Development.

© 2026 Reivan Adhitya Maulana. Portfolio LSP RPL.
`;

  const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'CV_Reivan_Adhitya_Maulana.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast("Download Dimulai!", "File resume CV Reivan Adhitya Maulana (.txt) berhasil diunduh. Anda juga dapat menggunakan opsi 'Cetak / Simpan PDF' untuk versi visual.");
}

/* ==========================================================
   6. CONTACT FORM HANDLING & TOAST FEEDBACK
   ========================================================== */
function handleFormSubmit(e) {
  if (e && e.preventDefault) e.preventDefault();

  const nameInput = document.getElementById('senderName');
  const emailInput = document.getElementById('senderEmail');
  const subjectInput = document.getElementById('senderSubject');
  const messageInput = document.getElementById('senderMessage');

  const btn = document.getElementById('btnSubmitForm');
  const btnIcon = document.getElementById('btnIcon');
  const btnText = document.getElementById('btnText');

  if (!nameInput || !emailInput || !messageInput || !btn) return;

  const senderName = nameInput.value.trim();
  const senderEmail = emailInput.value.trim();
  const senderSubject = subjectInput ? subjectInput.value.trim() : 'Pesan Portofolio';
  const senderMessage = messageInput.value.trim();

  if (!senderName || !senderEmail || !senderMessage) {
    showToast("Data Belum Lengkap", "Harap isi Nama, Email, dan Pesan Anda sebelum mengirim.", true);
    return;
  }

  // Set Loading state
  btn.disabled = true;
  btn.classList.add('opacity-75', 'cursor-not-allowed');
  btnIcon.className = "fa-solid fa-circle-notch fa-spin";
  btnText.textContent = "Mengirim Pesan...";

  // Simulate network request dispatch
  setTimeout(() => {
    // Reset Button
    btn.disabled = false;
    btn.classList.remove('opacity-75', 'cursor-not-allowed');
    btnIcon.className = "fa-solid fa-paper-plane";
    btnText.textContent = "Kirim Pesan Sekarang";

    // Show Success Toast
    showToast(
      `Pesan Terkirim, ${senderName}!`,
      `Terima kasih telah menghubungi. Pesan Anda ("${senderSubject || 'Pesan'}") telah dicatat dan Reivan akan segera membalas ke ${senderEmail}.`
    );

    // Reset Form fields
    document.getElementById('contactForm').reset();
  }, 900);
}

let toastTimer = null;

function showToast(title, message, isError = false) {
  const toast = document.getElementById('toastNotification');
  const toastTitle = document.getElementById('toastTitle');
  const toastMessage = document.getElementById('toastMessage');

  if (!toast || !toastTitle || !toastMessage) {
    alert(`${title}\n\n${message}`);
    return;
  }

  toastTitle.textContent = title;
  toastMessage.textContent = message;

  if (isError) {
    toast.classList.remove('border-l-emerald-500');
    toast.classList.add('border-l-red-500');
  } else {
    toast.classList.remove('border-l-red-500');
    toast.classList.add('border-l-emerald-500');
  }

  // Slide In
  toast.classList.remove('translate-x-[150%]', 'opacity-0', 'pointer-events-none');
  toast.classList.add('translate-x-0', 'opacity-100');

  if (toastTimer) clearTimeout(toastTimer);

  // Auto Hide after 4.5 seconds
  toastTimer = setTimeout(() => {
    hideToast();
  }, 4500);
}

function hideToast() {
  const toast = document.getElementById('toastNotification');
  if (!toast) return;
  toast.classList.remove('translate-x-0', 'opacity-100');
  toast.classList.add('translate-x-[150%]', 'opacity-0', 'pointer-events-none');
}

