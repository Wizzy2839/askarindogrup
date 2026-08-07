import Alpine from 'alpinejs'

Alpine.data('counter', (target, duration = 2000) => ({
  current: 0,
  target: target,

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && this.current === 0) {
          this.animateCount()
        }
      })
    }, { threshold: 0.5 })

    observer.observe(this.$el)
  },

  animateCount() {
    const increment = this.target / (duration / 16)
    const timer = setInterval(() => {
      this.current += increment
      if (this.current >= this.target) {
        this.current = this.target
        clearInterval(timer)
      }
    }, 16)
  }
}))

Alpine.data('contactForm', () => ({
  formData: {
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  },

  submitForm() {
    const { name, company, email, phone, message } = this.formData

    const messageTemplate = `Halo Tim Askarindo Group,

Saya ingin berkonsultasi mengenai kebutuhan teknologi. Berikut data diri saya:

*Data Kontak*
- Nama: ${name}
- Instansi/Perusahaan: ${company || '-'}
- Email: ${email}

*Kebutuhan/Pesan:*
${message}

Mohon informasi lebih lanjut. Terima kasih.`;

    const waMessage = encodeURIComponent(messageTemplate);

    window.open(`https://wa.me/6285854542007?text=${waMessage}`, '_blank')

    this.formData = {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: ''
    }
  }
}))

Alpine.data('faqAccordion', () => ({
  openItem: null,

  toggle(index) {
    this.openItem = this.openItem === index ? null : index
  },

  isOpen(index) {
    return this.openItem === index
  }
}))

Alpine.data('navScroll', () => ({
  scrolled: false,

  init() {
    window.addEventListener('scroll', () => {
      this.scrolled = window.scrollY > 50
    }, { passive: true })
  }
}))

Alpine.data('mobileMenu', () => ({
  open: false,

  init() {
    window.addEventListener('toggle-mobile-menu', () => {
      this.open = !this.open
    })
  },

  close() {
    this.open = false
  }
}))

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})

Alpine.data('heroSlider', () => ({
  current: 0,
  images: [
    '/images/slider/WhatsApp Image 2026-03-18 at 21.29.59.webp',
    '/images/slider/Gemini_Generated_Image_r9amtgr9amtgr9am.webp',
    '/images/slider/Gemini_Generated_Image_n49kg6n49kg6n49k.webp',
    '/images/slider/784dd277-f2f0-4112-8739-c16767875997 (1).webp'
  ],
  init() {
    setInterval(() => {
      this.current = (this.current + 1) % this.images.length
    }, 5000)
  }
}))

Alpine.data('portfolioLightbox', () => ({
  open: false,
  currentSrc: '',
  images: [],
  index: 0,

  init() {
    document.querySelectorAll('.masonry-item img').forEach(img => {
      this.images.push(img.src)
      img.addEventListener('click', () => {
        this.index = this.images.indexOf(img.src)
        this.currentSrc = img.src
        this.open = true
        document.body.style.overflow = 'hidden'
      })
    })
  },

  close() {
    this.open = false
    document.body.style.overflow = ''
  },

  next() {
    this.index = (this.index + 1) % this.images.length
    this.currentSrc = this.images[this.index]
  },

  prev() {
    this.index = (this.index - 1 + this.images.length) % this.images.length
    this.currentSrc = this.images[this.index]
  }
}))

window.Alpine = Alpine
Alpine.start()
