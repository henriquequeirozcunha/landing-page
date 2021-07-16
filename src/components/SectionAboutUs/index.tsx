import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import * as S from './styles'
import { SectionAboutAuthorsProps } from 'types/api'

const SectionAboutUs = ({ title, authors }: SectionAboutAuthorsProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {authors &&
        authors.length &&
        authors.map((profile) => (
          <ProfileCard
            key={profile.name}
            name={profile.name}
            role={profile.role}
            photo={profile.photo}
            socialLinks={profile.socialLinks}
            description={profile.description}
          />
        ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs
