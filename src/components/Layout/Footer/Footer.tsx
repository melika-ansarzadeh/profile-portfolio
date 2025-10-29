import { Footerlocalization } from '@/components/Constants/localization/localization';

export default function Footer() {
  return (
    <div className="bg-custom-100 text-xs text-center p-3 sm:text-sm  md:text-base">
      <p className="text-custom-400 font-semibold">{Footerlocalization.text}</p>
    </div>
  );
}
