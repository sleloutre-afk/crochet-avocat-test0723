'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NAV_LINKS = [
  { label: 'À propos', href: '/#apropos' },
  { label: 'Domaines', href: '/#domaines' },
  { label: 'Honoraires', href: '/#honoraires' },
  { label: 'Ressources', href: '/ressources' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50"
      style={{
        transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
        background: scrolled ? 'rgba(10,10,14,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(138,21,53,0.20)' : '1px solid transparent',
      }}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between" style={{ height: '70px' }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <Image src="/logo-crochet.png" alt="Charlène Crochet Avocate" width={180} height={60}
            style={{
              objectFit: 'contain',
              height: '52px',
              width: 'auto',
              filter: 'drop-shadow(0 0 3px rgba(138,21,53,0.20))',
            }} />
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(link => (
            <Link key={link.href} href={link.href}
              className="hover-grenat text-xs uppercase tracking-widest transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '0.12em', textDecoration: 'none' }}>
              {link.label}
            </Link>
          ))}
          <a href="tel:+33699046862"
            className="text-xs px-4 py-2 transition-all duration-200 hover:opacity-90"
            style={{ background: '#8a1535', color: '#f4f1ed', letterSpacing: '0.08em' }}>
            06 99 04 68 62
          </a>
        </nav>

        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <div style={{ width: '22px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <span style={{ display: 'block', height: '1px', background: menuOpen ? 'transparent' : 'rgba(255,255,255,0.7)' }} />
            <span style={{ display: 'block', height: '1px', background: 'rgba(255,255,255,0.7)' }} />
            <span style={{ display: 'block', height: '1px', background: menuOpen ? 'transparent' : 'rgba(255,255,255,0.7)' }} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-6 pt-2" style={{ background: 'rgba(10,10,14,0.98)' }}>
          {NAV_LINKS.map(link => (
            <div key={link.href} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <Link href={link.href} onClick={() => setMenuOpen(false)}
                className="block py-3 text-xs uppercase tracking-widest hover-grenat"
                style={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '0.12em', textDecoration: 'none' }}>
                {link.label}
              </Link>
            </div>
          ))}
          <a href="tel:+33699046862" className="block mt-4 text-center py-3 text-xs"
            style={{ background: '#8a1535', color: '#f4f1ed', letterSpacing: '0.08em' }}>
            06 99 04 68 62
          </a>
        </div>
      )}
    </header>
  )
}
