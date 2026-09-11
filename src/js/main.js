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

  const waIconHTML = `
    <a href="https://wa.me/6285854542007" target="_blank" rel="noopener noreferrer" 
       class="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group"
       aria-label="Chat WhatsApp CS">
      <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    </a>
  `
  document.body.insertAdjacentHTML('beforeend', waIconHTML)
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
