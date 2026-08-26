import {
  siGithub,
  siGooglescholar,
  siOrcid,
  siResearchgate,
  type SimpleIcon,
} from 'simple-icons'
import type { ContactLink } from '@/lib/data'

type ContactLinkIconProps = {
  icon: ContactLink['icon']
}

const icons: Record<ContactLink['icon'], SimpleIcon> = {
  github: siGithub,
  'google-scholar': siGooglescholar,
  orcid: siOrcid,
  researchgate: siResearchgate,
}

export function ContactLinkIcon({ icon }: ContactLinkIconProps) {
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
