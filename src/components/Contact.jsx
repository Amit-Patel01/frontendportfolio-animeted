import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Send, Loader2, MessageCircle } from 'lucide-react'
import { FaLinkedinIn, FaYoutube, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa'
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si'
import toast from 'react-hot-toast'

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'amitpatel07029@gmail.com',
    href: 'mailto:amitpatel07029@gmail.com',
    color: 'from-cyan-500 to-blue-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    iconColor: 'text-cyan-600',
  },
  {
    icon: Phone,
    label: '+91 78742 48481',
    href: 'tel:+917874248481',
    color: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    iconColor: 'text-emerald-600',
  },
]

const SOCIALS = [
  { icon: FaLinkedinIn, name: 'LinkedIn',      url: 'https://www.linkedin.com/in/amit-patel-89736b287/', bg: 'bg-[#0077B5]', hover: 'hover:bg-[#005f8e]' },
  { icon: FaYoutube,    name: 'YouTube',       url: 'https://youtube.com/@amitpatel-uc7up',              bg: 'bg-[#FF0000]', hover: 'hover:bg-[#cc0000]' },
  { icon: FaFacebook,   name: 'Facebook',      url: 'https://www.facebook.com/people/Amit-Patel/',       bg: 'bg-[#1877F2]', hover: 'hover:bg-[#1260c4]' },
  { icon: FaInstagram,  name: 'Instagram',     url: 'https://www.instagram.com/amiitt_4084',             bg: 'bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]', hover: '' },
  { icon: SiGeeksforgeeks, name: 'GFG',        url: 'https://www.geeksforgeeks.org/user/amitpatel07/',   bg: 'bg-[#2F8D46]', hover: 'hover:bg-[#236b35]' },
  { icon: SiLeetcode,   name: 'LeetCode',      url: 'https://leetcode.com/u/AmitPatel4084/',             bg: 'bg-[#FFA116]', hover: 'hover:bg-[#e08c10]' },
]

const Contact = () => {
  const [form,    setForm]    = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      toast.success("Message sent! I'll get back to you soon. 🚀")
      setForm({ name: '', email: '', message: '' })
    } catch {
      toast.error("Couldn't send — please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section-container section-accent-cyan">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 space-y-4"
      >
        <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-glow-cyan"
        >
          Contact
        </motion.span>
        <h2 className="font-black text-4xl md:text-5xl text-slate-900 leading-tight font-outfit">
          Let&apos;s{' '}
          <span className="bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">
            Work Together
          </span>
        </h2>
        <motion.p
          className="max-w-xl mx-auto text-[15px] text-slate-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Have a project in mind or need technical support? Drop me a message and I&apos;ll respond within 24 hours.
        </motion.p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* ── Left: Info & Socials ── */}
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="space-y-6"
        >
          {/* Contact info */}
          <div className="glass-card p-7 space-y-4 card-shine">
            <div className="flex items-center gap-2 mb-2">
              <MessageCircle size={18} className="text-cyan-600" />
              <h3 className="font-bold text-lg text-slate-900 font-outfit">Get In Touch</h3>
            </div>
            {CONTACT_INFO.map(({ icon: Icon, label, href, bg, border, iconColor }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ x: 6, scale: 1.02 }}
                className={`flex items-center gap-4 p-3.5 rounded-xl ${bg} border ${border} group transition-all duration-300`}
              >
                <div className={`w-10 h-10 flex items-center justify-center rounded-xl bg-white shadow-sm shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon size={17} className={iconColor} />
                </div>
                <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors duration-200">
                  {label}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Socials */}
          <div className="glass-card p-7 card-shine">
            <h3 className="font-bold text-lg text-slate-900 mb-5 font-outfit">Find Me Online</h3>
            <div className="grid grid-cols-3 gap-3">
              {SOCIALS.map(({ icon: Icon, name, url, bg, hover }) => (
                <motion.a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.94 }}
                  className={`flex flex-col items-center gap-2 p-3.5 rounded-xl ${bg} ${hover} text-white transition-all duration-300 shadow-md`}
                >
                  <Icon size={20} />
                  <span className="text-[10px] font-semibold text-center leading-tight opacity-90">{name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Right: Contact Form ── */}
        <motion.div
          initial={{ opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="glass-card p-7 h-full card-shine">
            <h3 className="font-bold text-lg text-slate-900 mb-7 font-outfit">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              {['name', 'email', 'message'].map((field, i) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <label className="block text-xs font-bold text-slate-600 mb-2 ml-1 uppercase tracking-wider">
                    {field === 'name' ? 'Your Name' : field === 'email' ? 'Email Address' : 'Message'}
                  </label>
                  {field === 'message' ? (
                    <textarea
                      name="message"
                      placeholder="Tell me about your project or question…"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      className="input-field w-full px-4 py-3.5 rounded-xl text-sm font-medium resize-none focus:ring-2 focus:ring-cyan-400/30 focus:outline-none transition-all"
                      required
                    />
                  ) : (
                    <input
                      name={field}
                      type={field === 'email' ? 'email' : 'text'}
                      placeholder={field === 'name' ? 'Amit Patel' : 'you@example.com'}
                      value={form[field]}
                      onChange={handleChange}
                      className="input-field w-full px-4 py-3.5 rounded-xl text-sm font-medium focus:ring-2 focus:ring-cyan-400/30 focus:outline-none transition-all"
                      required
                    />
                  )}
                </motion.div>
              ))}

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.97 }}
                className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-violet-600 shadow-glow-cyan hover:shadow-[0_8px_30px_rgba(6,182,212,0.45)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
                      <Loader2 size={16} />
                    </motion.div>
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
