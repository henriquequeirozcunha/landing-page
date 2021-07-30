type TechIcon = {
  title: string
  icon: {
    url: string
    alternativeText: string
  }
}

type Concept = {
  title: string
}

type Module = {
  title: string
  subtitle: string
  description: string
}

type SocialLink = {
  title: string
  url: string
}

type Image = {
  alternativeText: string
  url: string
}

export type Review = {
  id: number
  name: string
  text: string
  photo: {
    alternativeText: string
    url: string
  }
}

export type Author = {
  description: string
  photo: Image
  name: string
  role: string
  socialLinks: SocialLink[]
}
export type LogoProps = Image

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: Image
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: Image
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Concept[]
}

export type SectionModulesProps = {
  title: string
  modules: Module[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type SectionAboutAuthorsProps = {
  title: string
  authors: Author[]
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type SectionFaqProps = {
  title: string
  questions: [
    {
      question: string
      answer: string
    }
  ]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutAuthors: SectionAboutAuthorsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
