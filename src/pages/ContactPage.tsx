import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock, Globe } from 'lucide-react';
import Layout from '../components/Layout';
import { supabase } from '../lib/supabase';
import { useLanguage } from '../context/LanguageContext';

interface FormState {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

const initialForm: FormState = {
  name: '',
  email: '',
  company: '',
  subject: '',
  message: '',
};

export default function ContactPage() {
  const { t } = useLanguage();
  const ci = t.contact.contactInfo;

  const contactInfo = [
    {
      icon: Mail,
      label: ci.emailLabel,
      value: 'info@bbst.global',
      value: 'Trading@bbs.global',
      sub: ci.emailSub,
    },
    {
      icon: Phone,
      label: ci.phoneLabel,
      value: '+968 92882417',
      value: '+968 71119624',
      sub: ci.phoneSub,
    },
   
    {
      icon: Globe,
      label: ci.globalLabel,
      value: 'Asia · Europe · Americas',
      sub: ci.globalSub,
    },
   
  ];

  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const { error } = await supabase.from('contact_submissions').insert([
      {
        name: form.name.trim(),
        email: form.email.trim(),
        company: form.company.trim(),
        subject: form.subject,
        message: form.message.trim(),
      },
    ]);

    if (error) {
      setStatus('error');
      setErrorMsg(t.contact.errorMsg);
    } else {
      setStatus('success');
      setForm(initialForm);
    }
  };

  return (
    <Layout>
      <section
        className="relative py-20 lg:py-28"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#013220]/92 via-[#013220]/80 to-slate-900/85" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-white/10 text-white border border-white/20 mb-6">
            {t.contact.badge}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            {t.contact.heroTitle}
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {t.contact.heroSubtitle}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-5 gap-12 items-start">

          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">{t.contact.infoTitle}</h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                {t.contact.infoSubtitle}
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, sub }) => (
                <div key={label} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#013220]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#013220]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">{label}</p>
                    <p className="text-sm font-semibold text-slate-800">{value}</p>
                    <p className="text-xs text-slate-500">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our team"
                className="w-full h-48 object-cover"
              />
              <div className="bg-[#013220] px-5 py-4">
                <p className="text-white font-semibold text-sm">{ci.networkTitle}</p>
                <p className="text-white/60 text-xs mt-1">{ci.networkDesc}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-lg p-8 lg:p-10">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-5">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.contact.successTitle}</h3>
                  <p className="text-slate-500 max-w-sm">
                    {t.contact.successMsg}
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-8 px-6 py-2.5 bg-[#013220] text-white rounded-lg text-sm font-medium hover:bg-[#024d30] transition-colors"
                  >
                    {t.contact.sendAnother}
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-1">{t.contact.formTitle}</h2>
                    <p className="text-slate-500 text-sm">{t.contact.formSubtitle}</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                          {t.contact.fullName} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#013220]/30 focus:border-[#013220] transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                          {t.contact.emailAddress} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#013220]/30 focus:border-[#013220] transition"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                          {t.contact.company}
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Acme Trading Ltd."
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#013220]/30 focus:border-[#013220] transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                          {t.contact.subject} <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="subject"
                          required
                          value={form.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#013220]/30 focus:border-[#013220] transition bg-white appearance-none"
                        >
                          <option value="">{t.contact.selectSubject}</option>
                          {t.contact.subjects.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                        {t.contact.message} <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements, the products you're interested in, quantities, or any other details…"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#013220]/30 focus:border-[#013220] transition resize-none"
                      />
                    </div>

                    {status === 'error' && (
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-100">
                        <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-red-700">{errorMsg}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-[#013220] hover:bg-[#024d30] text-white font-semibold rounded-xl transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm"
                    >
                      {status === 'loading' ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          {t.contact.sending}
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          {t.contact.send}
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
