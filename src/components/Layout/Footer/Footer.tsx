import { footerlocalization } from '@/components/Constants/localization/localization';

export default function Footer() {
  return (
    <div className="bg-custom-100 text-xs text-center p-3">
      <p className="text-custom-400 font-semibold">{footerlocalization.text}</p>
    </div>
  );
}
