import { X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AboutModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AboutModal({ open, onClose }: AboutModalProps) {
  const { t } = useLanguage();
  const am = t.aboutModal;

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-800">{am.title}</h2>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
            <p>{am.p1}</p>
            <p>{am.p2}</p>
            <p>{am.p3}</p>
            <p className="font-medium text-slate-800">{am.p4}</p>
          </div>
          <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-4 gap-4">
            {[
              { label: am.yearsInBusiness, value: '30+' },
              { label: am.countries, value: '4' },
              { label: am.sectors, value: '5' },
              { label: am.transactions, value: '1000s' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-xl font-bold text-black-600">{stat.value}</div>
                <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
