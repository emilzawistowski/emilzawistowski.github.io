import {
  siGithub,
  siGooglescholar,
  siOrcid,
  siOsf,
  siResearchgate,
  type SimpleIcon,
} from 'simple-icons'
import type { ContactLink } from '@/lib/data'

type ContactLinkIconProps = {
  icon: ContactLink['icon']
}

const icons: Record<Exclude<ContactLink['icon'], 'linkedin'>, SimpleIcon> = {
  github: siGithub,
  'google-scholar': siGooglescholar,
  orcid: siOrcid,
  osf: siOsf,
  researchgate: siResearchgate,
}

export function ContactLinkIcon({ icon }: ContactLinkIconProps) {
  if (icon === 'linkedin')
    return (
      <span
        aria-hidden="true"
        className="inline-flex size-3.5 shrink-0 items-center justify-center border border-current font-sans text-[10px] font-bold leading-none"
      >
        in
      </span>
    )
  const simpleIcon = icons[icon]

  return (
    <svg
      aria-hidden="true"
      className="size-3.5 shrink-0 fill-current"
      role="img"
      viewBox="0 0 24 24"
    >
      <path d={simpleIcon.path} />
    </svg>
  )
}
